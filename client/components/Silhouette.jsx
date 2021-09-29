import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";

const Silhouette = () => {

  const [height, setHeight] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
        setHeight(height => {
            if (height > 99.8) return 0
            return height+0.2
        })
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="camera-wrap">
      <div className="wrap-wrap">
        <div className="overlay-indicator">
          <div className="inner" style={{ height: height + "%" }}></div>
        </div>
        <div className="silhouette-overlay"></div>
      </div>
      <Webcam mirrored={false}/>
    </div>
  );
};

export default Silhouette;
