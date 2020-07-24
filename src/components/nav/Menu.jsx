import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
               <Link to="/topten" className="nav-link">Top 10 Stories</Link>
            </li> 
            <li className="nav-item" >
               <Link to="/prompts" className="nav-link">Prompts</Link>
            </li>
            <li className="nav-item" >
               <Link to="/video" className="nav-link">Video</Link>
            </li> 
        </ul>
    )
}
