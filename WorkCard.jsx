import "./workcard.css"
import pro from "../assests/sd.jpg";

import { NavLink } from "react-router-dom";
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="logo" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view}
                        className="btn">
                        View
                        </NavLink>
                         <NavLink to="url.com"
                        className="btn">
                        Source
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard