import React from 'react'
import UploadPanel from '../UploadPanel/UploadPanel'
import Post from '../Post/Post'
import { Posts } from '../../data/dummyData'

const NewsFeed = () => {
  return (
    <div style={{flex:5.5} }>
      <UploadPanel/>
      {Posts.map((post)=>(
        <Post key={post.id} post={post} />

      ))}
    </div>
  );
};

export default NewsFeed