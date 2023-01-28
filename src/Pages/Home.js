import React from 'react'
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
export const Home = () => {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About </Link>
          <Link to="/store">Store </Link>
        </div>
      </div>
      <div className="home_headerRight">
        <Link to="/gmail">Gmail </Link>
        <Link to="/images">Images </Link>
        <PersonIcon />
      </div>
      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
        <div className="home_inputContainer">
          Search
        </div>
      </div>
    </div>

  )
}
