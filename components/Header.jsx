import React from 'react'
import { Link } from 'react-router-dom'
import lImage from '../images/line.png'
import 'remixicon/fonts/remixicon.css'
import rLogo from '../images/rlogo.png'
import homePageImg from '../images/homeImage3.jpg'

const Header = () => {
    return (

        <>
            <div className='flex'>


                <div className='w-[12vw]'>

                    <div>
                        <div className='h-[30vh] bg-gray-900 place-content-center'>

                            <Link to='/' className=''>
                                <img src={rLogo} alt="" className=' w-full' />
                            </Link>

                        </div>


                        <div className='h-[70vh] bg-gray-900 flex flex-col space-y-2 pt-2'>

                            <div>
                                <img className='h-1 w-48 mt-1' src={lImage} alt="" />
                            </div>

                            <Link to='/' className=''>
                                <div className='flex space-x-2 text-lg pl-8 font-[robboto] text-gray-300'>
                                    <i className="ri-home-office-line"></i>
                                    <Link to='/' className=''>HOME</Link>
                                </div>
                            </Link>

                            <div>
                                <img className='h-1 w-48 mt-1' src={lImage} alt="" />
                            </div>

                            <Link to='/about' className=''>
                                <div className='flex space-x-2 text-lg pl-8 font-[robboto] text-gray-300'>
                                    <i className="ri-account-circle-fill"></i>
                                    <Link to='/about'>ABOUT</Link>
                                </div>
                            </Link>

                            <div>
                                <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                            </div>

                            <Link to='/resume' className=''>
                                <div className='flex space-x-2 text-lg pl-8 font-[robboto] text-gray-300'>
                                    <i className="ri-mail-star-fill"></i>
                                    <Link to='/resume'>RESUME</Link>
                                </div>
                            </Link>

                            <div>
                                <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                            </div>

                            <Link to='/contact' className=''>
                                <div className='flex space-x-2 text-lg   pl-8 font-[robboto] text-gray-300'>
                                    <i className="ri-mail-ai-line"></i>
                                    <Link to='/contact'>CONTACT</Link>
                                </div>
                            </Link>

                            <div>
                                <img className='h-1 w-48 mt-0' src={lImage} alt="" />
                            </div>

                            <div className='absolute items-end flex w-full bottom-8 px-4 space-x-3'>
                                <i className="ri-linkedin-box-line text-gray-300"></i>
                                <i className="ri-twitter-fill text-gray-300"></i>
                                <i className="ri-messenger-fill text-gray-300"></i>
                                <i className="ri-facebook-box-line text-gray-300"></i>
                                <i className="ri-github-fill text-gray-300"></i>
                            </div>

                            <div className='absolute items-end  pb-3 pl-8 bottom-0'>

                                <Link to='/' className=''>
                                    <p className=' font-[robboto] text-gray-300 text-lg'>RIZWAN ALI</p>
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='w-[88vw] bg-cyan-500'>
                    <img className='h-screen w-full' src={homePageImg} alt="" />


                </div>

            </div>
        </>
    )
}

export default Header