import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { Users } from "../../data/dummyData";


const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }

const user = Users.find((user) => user.id === post.userId);

  return (
    <div className='w-full rounded-md shadow-lg mt-[30px] mb-[30px] p-[10px]'>
        <div className='p-[10px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={user.profilePicture}  alt='Profile Picture' className='w-[32px] h-[32px] rounded-full object-cover'/>
                    <span className='font-bold ml-[10px] mr-[10px]'>Test Person</span>
                    <span className='text-sm'>{post.date}</span>
                </div>
                <div>
                    <MdOutlineMoreVert className='text-xl cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className='mt-[20px] mb-[20px]'>
            <span>{post?.desc}</span>
            <img src={post.photo} alt='Post Picture' className='mt-[20px] w-full object-contain' style={{maxHeight: "500px" }}/>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[5px]'>
                <img src="/assets/thumbsUp.png" alt='thumbsUp' className='w-[24px] h-[24px]' onClick={handleLike}/>
                <img src="/assets/heart.png" alt='heart' className='w-[24px] h-[24px]' onClick={handleLike}/>
                <span className='text-sm'>{like} Likes</span>

            </div>
            <div>
                <span className='cursor-pointer border-b-[1px] border-slate-300 text-sm'>{post.comment} Comments</span>
            </div>
        </div>
    </div>
  )
}

export default Post