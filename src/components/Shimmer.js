import React from 'react'

const Shimmer = () => {
    return (
      <div className="shimmer-wrapper">
        {Array(10).fill(0).map((_, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;