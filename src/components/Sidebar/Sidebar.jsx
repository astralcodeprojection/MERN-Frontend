import React from 'react'
import { CgFeed } from "react-icons/cg";
import { IoVideocam, IoBookmarks, IoSchoolSharp } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { IoMdChatbubbles } from "react-icons/io";
import { BsQuestionSquareFill, BsCalendarEventFill } from "react-icons/bs";
import imageTest from '../../assets/profilePicture.jpg'
import FriendList from '../FriendList/FriendList';
import { Friends } from '../../data/dummyData'


const Sidebar = () => {
  return (
    <div style={{flex: 3, height: "calc(100vh - 50px)"}} className='custom-scrollbar overflow-y-auto sticky top-[50px]'>
        <div className='p-[20px] '>
            <ul className='sidebarList m-0 p-0'>
                <li >
                    <CgFeed />
                    <span>Feed</span>
                </li>
                <li>
                    <IoVideocam />
                    <span>Videos</span>
                </li>
                <li>
                    <TiGroup />
                    <span>Groups</span>
                </li>
                <li>
                    <IoMdChatbubbles />
                    <span>Chat</span>
                </li>
                <li>
                    <IoBookmarks />
                    <span>Bookmarks</span>
                </li>
                <li>
                    <BsQuestionSquareFill />
                    <span>Questions</span>
                </li>
                <li>
                    <IoSchoolSharp />
                    <span>Courses</span>
                </li>
                <li>
                    <BsCalendarEventFill />
                    <span>Events</span>
                </li>
            </ul>
            <div className="button">
                <button className='rounded-md bg-slate-200 w-[150px] p-[10px]'>See More</button>
            </div>
            <hr className='mt-[20px]'/>
            <div className='mt-[20px]'>
                <ul className='sidebarList'>
                    {Friends.map(friend=>(
                        <FriendList key={friend.id} friend={friend}/>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar