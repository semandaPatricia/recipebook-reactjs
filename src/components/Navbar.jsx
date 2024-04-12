import React, { useState } from "react";
import { Link } from "react-router-dom";
//import "../styles/navbar.module.css";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';

const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        repeat: 10
      }
    }
  }
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', delay: 0.5 }
    },
  };



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
          <li className=" text-slate-700 hover:underline my-4 py-4   hover:text-amber-500">
            Home
          </li>
        </Link>
        <Link  spy={true} smooth={true} to="/about">
          <li className=" text-slate-700 hover:underline my-4 py-4  hover:text-amber-500">
            About
          </li>
        </Link>
        <Link spy={true} smooth={true}  to="/contact">
          <li className=" text-slate-700 hover:underline my-4 py-4  hover:text-amber-500">
            Contact
          </li>
        </Link>
      </ul>
  </div>
</>
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center   h-10vh z-50 px-15 py-1 ">
        <motion.div 
         animate={{ top: -10 }}
         transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className=" flex items-center flex-1"
        >
        <Link exact to="/" className="nav-logo">
          <h1 className="font-bold text-xl sm:text-xl flex flex-wrap">
            <span className="text-slate-700">BUN KITCHEN</span>
          </h1>
        </Link>
        </motion.div>
        
<div className=" lg:flex md:flex lg:flex-1 items-center justify-end font-normal">
    <motion.div 
    className="flex-10 "
    variants={containerVariants}
    initial="hidden"
      animate="visible"
      transition={{ type: 'spring', delay: 0.5 }}
    >
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
    </motion.div>
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
          <motion.button
           variants={buttonVariants}
           whileHover="hover"
          
          >
            <FaSearch className="text-slate-600" />
          </motion.button>
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



