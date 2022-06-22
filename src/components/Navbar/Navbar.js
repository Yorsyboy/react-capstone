import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import './navbar.css';
import kit from '../../images/kitten.png';

const Navbar = () => (
  <div className="navbar">
    <img className="imgcat" src={kit} alt="Dog" />
    <h2>Cat Breeds</h2>
    <div>
      <IoSettingsOutline />
    </div>
  </div>
);

export default Navbar;
