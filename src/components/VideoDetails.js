import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LuArrowDownToLine } from "react-icons/lu";

const VideoDetails = ({ details }) => {
  const data = details;
  const { title, description, channelTitle, thumbnails } =
    details?.items[0]?.snippet;
  const { viewCount, likeCount, commentCount } = details?.items[0]?.statistics;

  return (
    <div className="ml-9">
      <h1 className="font-bold text-xl py-4">{title}</h1>
      <div className="flex gap-32 items-center">
        <div className="flex items-center gap-3">
          <div className="col-span-4 flex py-2">
            <img
              className="rounded-full w-12 h-12 mr-4"
              src={thumbnails.default.url}
              alt="channel logo"
            />
            <div>
              <div className="font-bold">{channelTitle}</div>
              <div className="text-sm">
                308 <span className="hidden md:inline">Subscribers</span>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <button className="bg-black text-white rounded-full py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center bg-[#f0f0f0] px-4 py-2 outline-none rounded-full gap-2">
            <span>
              <BiLike />
            </span>
            <span>{viewCount}</span>
            <span className="w-4 h-full border border-r-blue-800 bg-red-600"></span>
            <span>
              <BiDislike />
            </span>
          </button>
          <button className="flex items-center bg-[#f0f0f0] px-4 py-2 outline-none rounded-full gap-2">
            <PiShareFatLight /> Share
          </button>
          <button className="flex items-center bg-[#f0f0f0] px-4 py-2 outline-none rounded-full gap-2">
            <LuArrowDownToLine />
            Download
          </button>
          <button className="flex items-center justify-center bg-[#f0f0f0] px-3 py-2 outline-none rounded-full" >...</button>
        </div>
      </div>
      <div className="max-w-[960px]">
        <p className="font-semibold">{viewCount} views</p>
        {description}
      </div>
    </div>
  );
};

export default VideoDetails;
