import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider/StateProvider';
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import { Search } from '../Components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const SearchPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ term }, dispatch] = useStateValue();

  //call api
  const {data} = useGoogleSearch(term)
  


  return (
    <div className='searchPage'>
      <div className="searchPage_header">
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt="" className='searchPage_logo' />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className='searchPage_options'>
            {/* left of searchPage Options */}
            <div className="searchPage_optionsLeft">
              <div className='searchPage_option'>
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            {/* right of searchPage Options */}
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && <div className="searchPage_results">

      </div>}
    </div>
  )
}
