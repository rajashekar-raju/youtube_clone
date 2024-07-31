import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { YOUTUBE_MOVIE_DETAIL_API } from "../utils/constants";
import { toggleMenuOpen } from "../utils/menuOpenSlice";
import { useDispatch } from "react-redux";
import VideoDetails from "./VideoDetails";
import VideoContainer from "./VideoContainer"; // Import VideoContainer to use for recommended videos
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState(null);

  const {videoId} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleMenuOpen());
    videoDetailsFunction();
  }, [videoId]);

  const videoDetailsFunction = async () => {
    const video_data = await fetch(
      YOUTUBE_MOVIE_DETAIL_API.replace("[VIDEO_ID]", videoId)
    );
    const json = await video_data.json();
    setVideoDetails(json);
  };

  return (
    <div className="flex">
      <div>
        <iframe
          width="950"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?si=TJz2KX_QkH8L3LdS`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-xl ml-10"
        ></iframe>
        <div>{videoDetails?.items?.length > 0 && <VideoDetails details={videoDetails} />}</div>
        <CommentsContainer videoId={videoId}/>
      </div>
      <div>
        <VideoContainer isRecommendTrue={true} /> {/* Use VideoContainer for recommended videos */}
      </div>
    </div>
  );
};

export default WatchPage;
