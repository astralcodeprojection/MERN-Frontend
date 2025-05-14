import React from 'react'

const FriendList = ({friend}) => {
  return (
    <li>
        <img src={friend.profilePicture} alt='ProfileImage' className='w-[32px] h-[32px] rounded-full object-cover'/>
        <span>{friend.username}</span>
    </li>
  )
}

export default FriendList