import React from 'react'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

import AppsIcon from '@mui/icons-material/Apps';
import "./Home.css"
import Search from '../Components/Search';
export const Home = () => {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail </Link>
          <Link to="/images">Images </Link>
          <AppsIcon />
          <Avatar style={{ border: "1px solid green" }} />
        </div>
      </div>

      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>

  )
}
