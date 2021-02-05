import React from "react";
import "../../styles/Header.css";
import DriveLogo from "../../media/google-drive-icon.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";

const Index = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={DriveLogo} alt='drive-logo' />
        <span>Drive</span>
      </div>
      <div className='header__searchContainer'>
        <div className='header__searchBar'>
          <SearchIcon />
          <input type='text' placeholder='Search in Drive' />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className='header__icons'>
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src='' alt='user-profile' />
      </div>
    </div>
  );
};

export default Index;
