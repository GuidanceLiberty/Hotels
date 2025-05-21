import { RiCloseLine, RiMenu3Line, RiStarFill } from '@remixicon/react'
import { useState } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='wrapper'>
      <div className="continer nav-div">
        <div className="">
          <h2 className='font-bold'>NEW-GUIDANCE</h2>
          <p className='flex justify-between size-12 text-accent mx-6'>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
            <RiStarFill/>
          </p>
        </div>

        <div className="menu-items">
                <Link to='home' smooth={true} duration={900} className="menu-item">Home</Link>
                <Link to='about' smooth={true} duration={1005} className="menu-item">About</Link>
                <Link to='services' smooth={true} duration={1002} className="menu-item">Our Services</Link>
                <Link to="blog" smooth={true} duration={1007} className="menu-item">Blog</Link>
                <Link to="testimonials" smooth={true} duration={1008} className="menu-item">Testimonies</Link>
             <Link to="contact"  smooth={true} duration={1009} className="menu-item">Contact</Link>
        </div>

        <div className="block sm:hidden cursor-pointer">
              {
                openMenu
                ? <RiCloseLine className='text-red-400' style={{marginRight: '10px'}} onClick={() => setOpenMenu(false)} />
                : <RiMenu3Line style={{marginRight: '10px'}} onClick={() => setOpenMenu(true)} />
              }
        </div>
      </div>


      {
          openMenu &&
          (<div className="mobile-menu">
            <Link to='home' smooth={true} duration={900} className="menu-item">Home</Link>
            <Link to='' smooth={true} duration={900} className="menu-item">About</Link>
            <Link to='services' smooth={true} duration={900} className="menu-item">Our Services</Link>
            <Link to='blog' smooth={true} duration={900} className="menu-item">Blog</Link>
            <Link to='testimonials' smooth={true} duration={900} className="menu-item">Testimonies</Link>
            <Link to='contact' smooth={true} duration={900} className="menu-item">Contact</Link>
        </div>)
        }
      
    </div>
  )
}

export default Navbar


