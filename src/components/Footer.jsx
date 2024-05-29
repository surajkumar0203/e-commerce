import React from 'react'
import card from '../Images/cards.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark-teal text-teal-100'>
                <div className='mt-44 pt-10 pb-5 px-5'>
                    <div className='flex flex-col '>
                        <span className='border-2 border-white font-mono p-2 w-36 font-bold'><span className='mx-1 p-1 my-5 bg-white text-dark-teal'>e-shop</span><span>Store</span></span>
                        <p className='my-5 font-thin'>
                            Welcome to Thapa EcomStore, your ultimate destination for cutting-edge gadgets!
                        </p>
                        <img src={card} alt={card} className='w-48 my-5' />
                    </div>
                    <div className='flex gap-x-96 gap-y-4 flex-wrap  font-thin'>
                        <div className='flex flex-col '>
                            <h4 className='mb-5 font-medium'>SHOPPING</h4>
                            <NavLink to="#" className='mb-5'>Computer Store</NavLink>
                            <NavLink to="#" className='mb-5'>Laptop Store</NavLink>
                            <NavLink to="#" className='mb-5'>Accessories</NavLink>
                            <NavLink to="#" className='mb-5'>Sales & Discount</NavLink>
                        </div>

                        <div className='flex flex-col'>
                            <h4 className='mb-5 font-medium'>EXPERIENCE</h4>
                            <NavLink to="#" className='mb-5'>Contact us</NavLink>
                            <NavLink to="#" className='mb-5'>Payment Method</NavLink>
                            <NavLink to="#" className='mb-5'>Delivery</NavLink>
                            <NavLink to="#" className='mb-5'>Return and Exchange</NavLink>
                        </div>
                    </div>

                    <div className='font-thin'>
                        <h4 className='font-medium'>NEWSLETTER</h4>
                        <p className='mb-1'>
                            Be the first to know about new
                        </p>
                        <p className='mt-1'>
                            arrivals, sales & promos!
                        </p>
                    </div>
                </div>
                
                <div className='border-t-2 border-gray-500'>
                    <div className='py-2 text-center text-xl font-thin text-gray-500'>
                        <p>Design and Code by Suraj Kumar</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;