import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedin,FaFacebook,FaInstagram} from 'react-icons/fa';
import {FiTwitter } from 'react-icons/fi';
import img from '../assets/yasitha.jpg';


const Banner = () => {
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
        <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white '>
            <h1 className='text-[52px] font-semibold mb-8 leading-normal'>Welcome To <span className='text-fuchsia-500'> My Website</span></h1>
            <p> I'm a Computer Science student, Eastern University of Sri Lanka. Also a programmer and a blogger.
                Interested in de-centralized application development. I have studied Computer Science, Cryptography, 
                Computer Architecture ,game development and Web app development. Also an open-source enthusiast.
            </p>
            <div className='flex mt-8 gap-2'>
                <div className='flex items-center justify-center'>
                    <div className='flex space-x-2'>
                        <a href="https://github.com/yasithasanjula" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <AiFillGithub className='text-[28px]'/>
                        </a>

                        <a href="https://www.linkedin.com/in/yasitha-sanjula-herath-9a03b7250/" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <FaLinkedin className='text-[28px]'/>
                        </a>

                        <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <FiTwitter  className='text-[28px]'/>
                        </a>

                        <a href="https://www.instagram.com/yasithasanjulaherath/" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <FaInstagram  className='text-[28px]'/>
                        </a>

                        <a href="https://web.facebook.com/yasithasanjula.herath.1" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                        <FaFacebook  className='text-[28px]'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <img src={img} width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" />
    </div>
  )
}

export default Banner