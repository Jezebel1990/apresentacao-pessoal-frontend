import React from 'react';

import Logo from '../assets/logo.svg';
import { FaInstagram } from "react-icons/fa";

const Header = () => {

    return (
    <header className='py-8'>
    <div className='container mx-auto'>
    <div className='flex justify-between items-center'>
    <a href='#'>
    <img src={Logo} alt='' width={64} height={64} />
    </a>
    <a href='https://www.instagram.com/notrebell'>
    <button className='btn btn-sm flex items-center justify-center gap-2'>Me Siga
    <FaInstagram />
    </button>
    </a>
    </div>
    </div>
    </header>
    );
};
export default Header;