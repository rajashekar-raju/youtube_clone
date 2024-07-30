import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({videosData}) => {

    const {snippet,statistics}=videosData;

    const {channelTitle,title,thumbnails}=snippet;

  return (
    <div>
       <div className='p-2 m-2 w-[400px] overflow-y-auto'>
        <div>
            <img className='rounded-lg w-full cursor-pointer' src={thumbnails.medium.url} alt="" />
        </div> 
           <li className='list-none font-bold text-base'>{title}</li>
           <li className='list-none'>{channelTitle}</li>
           <li className='list-none'>{statistics.viewCount} views</li>
        </div>
    </div>
  )
}

export default VideoCard