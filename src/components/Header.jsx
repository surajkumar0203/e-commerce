import React from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext,useEffect } from 'react';
import {Appstate} from '../App'


const Header = () => {
  const useAppState = useContext(Appstate);

  useEffect(() =>{
    const f1 = ()=>{
      // get number of item in cart
      const numberCartItem=JSON.parse(localStorage.getItem('products'))
      if (numberCartItem){
        useAppState.setAddCart(numberCartItem.length)

      }
    }
    f1();
  },[])

  return (
    <>
      <header className='flex flex-col min-w-56 md:sticky md:-top-1 sm:sticky sm:-top-1'>
      {/* sign up and sign in button */}
        <section className='bg-dark-teal text-teal-100'>
          <div className='flex md:justify-between md:flex-row flex-wrap p-5 justify-center flex-col items-center '>
            <div className='text-sm tracking-wide md:p-0 p-5 '>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta?</p>
            </div>

            <div className='flex justify-between gap-x-5 gap-y-5 '>
              <NavLink to="#" className="text-teal-100 hover:text-teal-400 transition-all duration-400 ">SIGN IN</NavLink>
              <NavLink to="#" className="text-teal-100 hover:text-teal-400 transition-all duration-400">SIGN UP</NavLink>
            </div>
          </div>
        </section>
      {/* logo and nav bar */}
        <section className='p-5 flex md:justify-between md:flex-row flex-col bg-white'>
          <div >
            <span className='border-2 border-dark-teal font-mono  p-2 font-bold'><span className='mx-1 p-1 bg-dark-teal text-teal-100'>e-shop</span><span>Store</span></span>
          </div>
          <nav className='md:my-0 my-2'>
              <ul className='flex gap-x-5 gap-y-5 items-center text-xl justify-between flex-wrap'>
                <li>
                  <NavLink to="/" style={({ isActive }) => ({
                            fontWeight:  isActive ? "bold" : ""
                        })} className="group transition duration-300">
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dark-teal"></span>
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/about" style={({ isActive }) => ({
                            fontWeight:  isActive ? "bold" : ""
                        })} className="group transition duration-300">
                  About
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dark-teal'></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/product" style={({ isActive }) => ({
                            fontWeight:  isActive ? "bold" : ""
                        })} className="group transition duration-300">
                  Product
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dark-teal'></span>
                  </NavLink>

                </li>
                
                <li>
                  <NavLink to="/contact" style={({ isActive }) => ({
                            fontWeight:  isActive ? "bold" : ""
                        })} className="group transition duration-300">
                  Contact
                  <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-dark-teal'></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addtocart" className="flex  bg-dark-teal text-teal-100 justify-center px-5 py-1 text-sm rounded-md">
                      <ShoppingCartIcon/>
                      <p className='pl-2 text-lg'>{useAppState.addCart}</p>
                  </NavLink>
                </li>
              </ul>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header