import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHammer } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
export default function Header() {
    return (
      <header className="shadow-sm px-2 py-2 mb-4 d-flex justify-content-center">
        <nav className="nav col-10">
          <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faHammer} className="mr-2" />
            Schedule Builder
          </Link>
          <Link className="nav-link" to="/calendar">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            Calendar
          </Link>
          <Link className="nav-link ml-auto" to="/about">
            About
          </Link>
          
        </nav>
        
      </header>
    );
}
