import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import cover from './assets/cover.jpg'
import profilePicture from './assets/profile.jpg'
import NewsFeed from '../../components/NewsFeed/NewsFeed'
import RightBar from '../../components/RightBar/RightBar'
import Sidebar from '../../components/Sidebar/Sidebar'

const Profile = () => {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div style={{flex: 9}}>
                <div>
                    <div className='h-[350px] relative'>
                        <img src={cover} alt='Cover Image' className='w-full h-[250px] object-cover'/>
                        <img src={profilePicture} alt='Profile Photo' className='w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-white'/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold text-2xl'>Holl Annd</h1>
                        <span>Hello, I am new here!</span>
                    </div>
                </div>
                <div className='flex'>
                    <NewsFeed />
                    <RightBar profile/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile