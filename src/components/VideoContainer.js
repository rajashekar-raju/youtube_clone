import React, { useEffect, useState } from 'react';
import { YOUTUBE_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import RecommendVideos from './RecommendVideos';

const VideoContainer = ({ isRecommendTrue }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_URL);
      const jsonData = await data.json();
      setVideos(jsonData.items);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {videos.length > 0 ? (
        <div className='flex flex-wrap'>
          {videos.map((video) => (
            <div key={video.id}>
              {isRecommendTrue ? (
                <Link to={`/watch/${video.id}`}>
                  <RecommendVideos videosData={video} />
                </Link>
              ) : (
                <Link to={`/watch/${video.id}`}>
                  <VideoCard videosData={video} />
                </Link>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoContainer;
