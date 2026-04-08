import React from 'react';
import navImg from '../../assets/images/logo.png'
import MyNavLink from './MyNavLink';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const navItems=[
        {
            to:"/",
            text:"Home"
        },
        {
            to:"/apps",
            text:"Apps"
        },
        {
            to:"/install-apps",
            text:"Installation"
        }

    ]
    return (
            <nav className='shadow'>
        <div className='container mx-auto flex justify-between items-center my-2 p-4'>
                <div className='flex gap-1 items-center'>
                    <img src={navImg} alt="" className='w-10' />
                    <p className='text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2]  bg-clip-text text-transparent'>Hero.IO</p>
                </div>
                <ul className='flex gap-4 justify-between'>
                    {
                        navItems.map((item,index)=><MyNavLink key={index} to={item.to} >
                            {item.text}
                        </MyNavLink>)
                    }
                </ul>
                <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'><FaGithub />Contribute</button>
        </div>
            </nav>
    );
};

export default Navbar;