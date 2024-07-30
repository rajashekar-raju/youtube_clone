import React from 'react';

const RecommendVideos = ({ videosData }) => {
  if (!videosData) {
    return null;
  }

  const { snippet, statistics } = videosData;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <div className='p-2 m-2 flex gap-3'>
        <div className='w-1/2'>
          <img className='rounded-lg w-full cursor-pointer' src={thumbnails.medium.url} alt="" />
        </div>
        <div className='w-1/2'>
            <li className='list-none font-bold text-base'>{title}</li>
            <li className='list-none'>{channelTitle}</li>
            <li className='list-none'>{statistics.viewCount} views</li>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideos;
