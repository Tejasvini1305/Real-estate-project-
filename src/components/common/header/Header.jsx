import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Header = ({ favorites }) => {
  const [navList, setNavList] = useState(false);

  const handleMyList = () => {
    alert(
      "Saved Properties\n\n1. Red Carpet Real Estate\n2. Fairmount Properties"
    );
  };

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
            <h4 className="my-list" onClick={handleMyList}>
             <span>{favorites.length}</span> My List 
            </h4>

            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;