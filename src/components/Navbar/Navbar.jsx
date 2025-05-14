import React from 'react'
import Logo from '../Logo/Logo'
import { LiaSearchSolid } from "react-icons/lia";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import profilePicture from '../../assets/profilePicture.jpg'

const Navbar = () => {
  return (
    <div className='h-[50px] w=full bg-purple-600 flex items-center sticky top-0'>
        <div className='left' style={{flex: 3}}>
            <div className="logodiv cursor-pointer">
                <Logo />
            </div>
        </div>
        <div className='center' style={{flex: 5}}>
            <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
                <LiaSearchSolid className='text-lg ml-[10px]'/>
                <input type="text" className='search w-full focus:outline-none bg-none m-[10px]' />
            </div>
        </div>
        <div className='right flex items-center justify-around text-white' style={{flex: 4}}>
            <div className="tabLinks text-lg cursor-pointer flex gap-[10px] font-semibold">
                <span className="tabLink font-bold">
                    Home
                </span>
                <span className="tabLink2 font-bold">
                    Timeline
                </span>
            </div>
            <div className='tabIcons flex text-xl gap-[10px]'>
                <div className="tabIcon1 cursor-pointer relative">
                    <IoPersonCircleSharp className='text-2xl'/>
                    <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                        1
                    </span>
                </div>
                <div className="tabIcon1 cursor-pointer relative">
                    <IoChatboxSharp className='text-2xl'/>
                    <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                        1
                    </span>
                </div>
                <div className="tabIcon1 cursor-pointer relative">
                    <IoMdNotifications className='text-2xl'/>
                    <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
                        1
                    </span>
                </div>
            </div>
                <div className="profilePicture">
                    <img src={profilePicture} alt='' className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer" ></img>
                </div>
        </div>
    </div>
  )
}

export default Navbar