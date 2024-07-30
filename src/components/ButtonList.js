import React, { useRef, useState, useEffect } from 'react';
import Buttons from './Buttons';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
const ButtonList = () => {

  const buttons = ['All', 'Tamil Cinema', 'Telugu Cinema', 'Music', 'News', 'Live', 'Mixes', 'Sunil', 'Android', 'Apple', 'Couples', 'Debate', 'MotorVlogs', 'API', 'Data Structures', 'Cameras', 'Live Television', 'Cricket', 'Recently Uploaded', 'Watched', 'New to You'];

  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollWidth > container.clientWidth + container.scrollLeft);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-gray-400 bg-gray-300 p-2 rounded-full z-10"
          onClick={scrollLeft}
        >
         <FaAngleLeft />
        </button>
      )}
      <div
        ref={containerRef}
        className="flex gap-3 whitespace-nowrap overflow-x-auto hide-scrollbar scroll-smooth"
      >
        {buttons.map((button, index) => (
          <Buttons key={index} name={button} />
        ))}
      </div>
      {showRightArrow && (
        <button
          className="absolute hover:bg-gray-400 right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-10"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
