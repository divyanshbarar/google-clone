import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';
import Google from "./google.png"

function Home() {
    return (
        <div className="home" >

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    < AppsIcon />
                    <Avatar />
                </div>


            </div>
            <div className="body">
                <img src={Google} alt="" />
                <div className="home__input">
                    <Search />
                </div>
                <center><h1> This website is made by Divyansh Barar</h1></center>
            </div>
        </div>
    )
}

export default Home
