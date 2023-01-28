import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import {actionTypes} from "../StateProvider/Reducer"
import { useStateValue } from '../StateProvider/StateProvider';
import { Button } from '@mui/material';
export const Search = ({hideButtons = false}) => {
    const [input, setInput] = useState("")
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue()

    const search = searchText =>{
        searchText.preventDefault()
        dispatch({
            type: actionTypes.SET_SEARCH_TERM
        })
    }
  return (

    <form className='search'>
        <div className="search_input">
            <SearchIcon className='search_inputIcon'/>
            <input value={input} onChange={searchText => setInput(searchText.target.value)}/>
            <MicIcon />
        </div>
        {!hideButtons ?(
            <div className="search_buttons">
                <Button variant="outlined" onClick={search}>
                Google Search </Button>
                <Button variant="outlined">
                I'm Feeling Lucky </Button>

            </div>
        ):(
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
