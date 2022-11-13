import "./heroimgstyle.css";
import logo from '../assests/home.jpg'
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src ={logo} alt = "IntroImg" />
        </div>
        <div className="content">
            <p>Fresher</p>
            <h1>React Developer</h1>
            <div>
                <Link  to="/project" className="btn">Projects</Link>
                <Link to = "/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg