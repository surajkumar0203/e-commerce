import React from 'react'
import { NavLink } from 'react-router-dom'
import electronic_banner from '../Images/electronic_banner.png'
import { Shap } from './Shap'

const Banner = () => {
    return (
        <>
            <main className='relative min-w-56 -z-10'>
                <section className='flex md:justify-between md:flex-row bg-gradient-to-tr from-blue-500 to-white text-teal-100 flex-col-reverse'>
                    <div className='text-blue-900  md:p-10 md:w-1/2 p-5'>
                        <p className='text-blue-900 text-3xl'>Lorem ipsum dolor sit amet.</p>

                        <h1 className=' text-blue-900 font-bold tracking-normal text-4xl my-4 '>Lorem ipsum dolor sit amet consectetur.</h1>

                        <p className='my-6 text-white font-thin text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum assumenda non sit, reprehenderit adipisci amet, nulla sunt ratione quasi consectetur ea incidunt consequuntur necessitatibus architecto a quibusdam! Repudiandae explicabo, fuga distinctio deserunt praesentium similique, saepe repellendus voluptas, enim modi amet.</p>

                        <div>
                            <NavLink to="#" className='bg-black p-3 rounded-md font-sans text-sm text-white  hover:text-teal-400'>Explore Our Product</NavLink>
                        </div>
                    </div>

                    <div className='md:p-10  p-5'>
                        <figure>
                            <img src={electronic_banner} className='mix-blend-multiply w-96 h-96' />
                        </figure>
                    </div>
                </section>
                
                <div>
                    <Shap/>
                </div>
            </main>
        </>
    )
}

export default Banner;