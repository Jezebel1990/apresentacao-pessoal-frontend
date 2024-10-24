import React from "react";
import { BiHomeAlt, BiUser, BiPhoneCall} from 'react-icons/bi';
import { FaLaptopCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";

import { Link } from 'react-scroll';

const Nav = () => {
 return (
 <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
    <div className="container mx-auto">
      <div className="w-full bg-white/5 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
        <Link to='home'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='cursor-pointer w-[60px] flex items-center justify-center'>
         <BiHomeAlt />
        </Link>
        <Link to='about'
         activeClass='active'
         smooth={true}
         spy={true}
         className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>   
        <BiUser />
        </Link>

        <Link to='skills'
         activeClass='active'
         smooth={true}
         spy={true} 
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaLaptopCode  />
        </Link>

        <Link to='projects'
         activeClass='active'
         smooth={true}
         spy={true} 
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaFolderOpen />
        </Link>
        
        <Link to='contact'
         activeClass='active'
         smooth={true}
         spy={true}
         className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <BiPhoneCall />
        </Link>
      </div>
    </div>
 </nav>
 );
};
export default Nav;