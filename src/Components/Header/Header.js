
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import '../Style/Header.css'

const Header = () => {
    return (
        <div className='d-flex header'>
             <CustomLink to='/home'>Home</CustomLink>
             <CustomLink to='/about' className='m-2'>About</CustomLink>
             <CustomLink to='/login'>Log-In</CustomLink>
        </div>
    );
};

export default Header;