import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHammer } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    return (
      <header className="shadow-sm px-2 py-2 mb-4 d-flex justify-content-center">
        <nav className="nav col-10">
          <a className="nav-link" href="/">
          <FontAwesomeIcon icon={faHammer} className="mr-2" />
            Schedule Builder
          </a>
          <a className="nav-link" href="/calendar">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            Calendar
          </a>
          <a className="nav-link ml-auto" href="/about">
            About
          </a>
          
        </nav>
        
      </header>
    );
}
