import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import home_icon from "./images/asset_home.svg";
import shorts_icon from "./images/asset_shorts.svg";
import subscription from "./images/subscription.svg";
import history from "./images/history.svg";
import your_videos from "./images/your_videos.svg";
import library from "./images/library.svg";
import watch_later from "./images/watch_later.svg";
import liked_videos from "./images/liked_videos.svg";
import downloads from "./images/downloads.svg";
import trending from "./images/trending.svg";
import shopping from "./images/shopping.svg";
import movies from "./images/movies.svg";
import music from "./images/music.svg";
import live from "./images/live.svg";
import gaming from "./images/gaming.svg";
import news from "./images/news.svg";
import sports from "./images/sports.svg";
import learning from "./images/learning.svg";
import fashion from "./images/fashion_beauty.svg";
import podcast from "./images/podcasts.svg";

const SideBar = () => {
  const location = useLocation();
  const isMenuOpen = useSelector((state) => state.menuOpen.isMenuOpen);

  // Conditionally render the sidebar only if not on the /watch/:videoId route
  if (location.pathname.startsWith("/watch/")) {
    return null;
  }

  return isMenuOpen ? (
    <div className="px-3 py-6 w-[15%] h-full overflow-y-auto mr-5">
      <div>
        <ul>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={home_icon} alt="" />
            <li>Home</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={shorts_icon} alt="" />
            <li>Shorts</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={subscription} alt="" />
            <li>Subscriptions</li>
          </div>
        </ul>
      </div>
      <hr className="font-bold mb-3" />
      <div>
        <ul>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={history} alt="" />
            <li>History</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={your_videos} alt="" />
            <li>Your videos</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={library} alt="" />
            <li>Library</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={watch_later} alt="" />
            <li>Watch later</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={liked_videos} alt="" />
            <li>Liked videos</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={downloads} alt="" />
            <li>Downloads</li>
          </div>
        </ul>
      </div>
      <hr className="font-bold mb-3" />
      <div>
        <h1 className="font-semibold m-3 text-xl">Explore</h1>
        <ul>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={trending} alt="" />
            <li>Trending</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={shopping} alt="" />
            <li>Shopping</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={movies} alt="" />
            <li>Movies</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={music} alt="" />
            <li>Music</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={live} alt="" />
            <li>Live</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={gaming} alt="" />
            <li>Gaming</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={news} alt="" />
            <li>News</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={sports} alt="" />
            <li>Sports</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={learning} alt="" />
            <li>Learning</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={fashion} alt="" />
            <li>Fashion</li>
          </div>
          <div className="flex gap-7 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
            <img src={podcast} alt="" />
            <li>Podcast</li>
          </div>
        </ul>
      </div>
    </div>
  ) : <div>
  <ul>
    <div className="flex flex-col items-center gap-2 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
      <img src={home_icon} alt="" />
      <li>Home</li>
    </div>
    <div className="flex flex-col items-center gap-2 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
      <img src={shorts_icon} alt="" />
      <li>Shorts</li>
    </div>
    <div className="flex flex-col items-center gap-2 mb-3 cursor-pointer hover:bg-gray-300 py-2 px-2 hover:rounded-lg">
      <img src={subscription} alt="" />
      <li>Subscriptions</li>
    </div>
  </ul>
</div>;
};

export default SideBar;
