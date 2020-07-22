import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
    const [show,handleShow] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav__logo'
                src="https://cdn.vox-cdn.com/thumbor/GS5aVofpjj3xAZmMMp2hBuYGmpE=/0x133:3151x1905/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
                alt='Netflix Logo'
            />
            <img 
                className='nav__avatar'
                src="https://external-preview.redd.it/nj1LJGpHx7g_xz8VUhHWx0UgAZ2jVtyRoMDXJ7c7m2g.gif?format=png8&s=3c378f3cf1a9590dda0b3b3ddbf75647f9ec2987"
                alt='Avatar Logo'
            />
            
           
        </div>
    );
};

export default Nav;