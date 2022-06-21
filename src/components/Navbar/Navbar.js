import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import './navbar.css';
import dog from '../../images/dog.png';

const Navbar = () => (
  <div className="navbar">
    <img className="imgdog" src={dog} alt="Dog" />
    <h2>Dog Breeds</h2>
    <div>
      <IoSettingsOutline />
    </div>
  </div>
);

export default Navbar;
