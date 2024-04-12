import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../styles/navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
};
  const content = <>
  <div className=" lg:hidden block absolute top-14 w-full left-0 right-0 bg-slate-900 transition">
  <ul className="text-center text-xl p-18">
        <Link spy={true} smooth={true}    to="/">
          <li className=" text-slate-700 hover:underline my-4 py-4 ">
            Home
          </li>
        </Link>
        <Link  spy={true} smooth={true} to="/about">
          <li className=" text-slate-700 hover:underline my-4 py-4 ">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true}  to="/contact">
          <li className=" text-slate-700 hover:underline my-4 py-4 ">
            Contact
          </li>
        </Link>
      </ul>
  </div>
</>
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center   h-10vh z-50 px-15 py-1 ">
        <div className=" flex items-center flex-1">
        <Link exact to="/" className="nav-logo">
          <h1 className="font-bold text-xl sm:text-xl flex flex-wrap">
            <span className="text-slate-700">Bun Kitchen</span>
          </h1>
        </Link>
        </div>
        
<div className=" lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
    <div className="flex-10">
    <ul className=" lg:flex md:flex lg:flex-1  gap-3 mr-15 text-[18px] hidden sm:inline ">
          <Link  spy={true} smooth={true} to="/">
            <li className=" text-slate-700 hover:underline my-4 py-4 ">
              Home
            </li>
          </Link>
          <Link  spy={true} smooth={true} to="/about">
            <li className=" text-slate-700 hover:underline my-4 py-4 ">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true}  to="/contact">
            <li className=" text-slate-700 hover:underline my-4 py-4   hover:text-amber-300">
              Contact
            </li>
          </Link>
        </ul>
    </div>
    <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-2 rounded-lg flex items-center mr-1 ml-2 "
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
</div>
      

       

     

        <div>
            { click && content}
        
        <button className=" block sm:hidden transition" onClick={handleClick} >
        {click ? (
            <span className="icon">
              <FaTimes />{" "}
            </span>
          ) : (
            <span className="icon">
              <FaBars />
            </span>
          )}
        </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;



