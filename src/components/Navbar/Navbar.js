import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import './navbar.css';
import kit from '../../images/kitten.png';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <IoIosArrowBack className="arrow" onClick={() => { navigate('/'); }} />
      <img className="imgcat" src={kit} alt="Dog" />
      <h2>Cat Breeds</h2>
      <div>
        <IoSettingsOutline />
      </div>
    </div>
  );
};

export default Navbar;
