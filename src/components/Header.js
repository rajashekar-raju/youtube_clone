import React from "react";
import hamberger from "./images/hamerger_icon.svg";
import youtube_icon from "./images/youtube_logo.svg";
import search_icon from "./images/search_icon.svg";
import bell_icon from "./images/bell_icon.svg";
import my_photo from "./images/myphto(1).png";
import mic_icon from "./images/mic_icon.svg";
import { useDispatch } from "react-redux";
import { toggleMenuOpen } from "../utils/menuOpenSlice";

const Header = () => {

  const dispatch = useDispatch();

  const handleHamberClick = () => {
    dispatch(toggleMenuOpen());
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white">
      <div className="flex justify-between px-6 py-6 items-center">
        <div className="flex gap-7">
          <button className="px-2 py-2 hover:bg-gray-200 rounded-full">
          <img
            src={hamberger}
            onClick={handleHamberClick}
            className="h-7 cursor-pointer"
            alt="hamberger_icon"
          />
          </button>
          <img
            src={youtube_icon}
            className="h-7 cursor-pointer"
            alt="youtube_icon"
          />
        </div>
        <div className="flex items-center w-2/4">
          <input
            type="text"
            placeholder="search"
            className="w-[80%] px-5 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-gray-600"
          />
          <button className="bg-gray-200 py-2 px-5 rounded-r-full">
            <img src={search_icon} className="h-7" alt="search_icon" />
          </button>
          <img
            src={mic_icon}
            className="bg-gray-200 cursor-pointer px-2 ml-5 py-2 rounded-full"
            alt="mic_icon"
          />
        </div>
        <div className="flex gap-5 items-center">
          <button className="px-2 py-2 hover:bg-gray-200 rounded-full">
            <img src={bell_icon} className="h-7" alt="bell_icon" />
          </button>
          <img
            src={my_photo}
            className="h-9 rounded-full cursor-pointer"
            alt="my_photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
