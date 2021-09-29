import React from 'react'
import './home.css'
import logo from '../assets/png/logo.png'
import {IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo}></img>
                <div>Emax</div>
            </div>
            <SearchBar/>
            <div className="menu">
            <div>
            <IconButton>
                <MoreVertIcon fontSize="medium"/>
            </IconButton>
            </div>
            </div>
        </div>
    )
}


function SearchBar() {
    return (
        <div className="searchbar">
            <input placeholder={"Search Here"}></input>
            <div className="search-icon">
            <div>
            <IconButton>
                <SearchIcon fontSize="medium" class/>
            </IconButton>
            </div>
            </div>
            
        </div>
    )
}



export default Navbar
