import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>

            <div className='bg-gray-900 max-w-full container text-gray-300 mx-auto flex items-center justify-between px-8 py-4'>

                <div className="flex text-2xl font-bold font-[font3]">

                    <Link to='/' className=''>
                        <h2 className='text-gray-500 font-[robboto]'>RIZWAN ALI</h2>
                    </Link>
                </div>

                <div className='flex font-[robboto] uppercase space-x-12 '>

                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/resume'>RESUME</Link>
                    <Link to='/contact'>Contact</Link>



                </div>

            </div>

        </>
    )
}

export default Navbar