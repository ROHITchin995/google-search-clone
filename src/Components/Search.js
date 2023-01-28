import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { actionTypes } from "../StateProvider/Reducer"
import { useStateValue } from '../StateProvider/StateProvider';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
function Search({ hideButtons = false }) {
    
    const [input, setInput] = useState("")
    // eslint-disable-next-line no-empty-pattern
    const [{ }, dispatch] = useStateValue()

    const navigate = useNavigate()

    const search = sou => {
        sou.preventDefault()
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate("/search")
    }
    return (
        <form className='search'>
            <div className="search_input">
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={sou => setInput(sou.target.value)} />
                <MicIcon />
            </div>
            
            {!hideButtons ? (
                <div className="search_buttons">
                    <Button variant="outlined" onClick={search}>
                        Google Search </Button>
                    <Button variant="outlined">
                        I'm Feeling Lucky </Button>

                </div>
            ) : (
                <div className='search_buttons'>
                    <Button variant="outlined" className='search_buttonHidden'>
                        Google Search </Button>
                    <Button variant="outlined" className='search_buttonHidden'>
                        I'm Feeling Lucky </Button>
                </div>
            )}
        </form>
    )
}

export default Search;