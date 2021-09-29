import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import { Camera } from "react-camera-pro";

const Silhouette = () => {
  // Bar Height (percentage)
  const [height, setHeight] = useState(15);

  // Camera States
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((height) => {
        if (height > 99.8) return 0;
        return height + 0.2;
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="silhouette-wrap">
      {image && (
        <>
          <img class="taken-photo" src={image} alt="Taken photo" />
          <div className="wrap-wrap">
            <div className="overlay-indicator">
              <div className="inner" style={{ height: height + "%" }}></div>
            </div>
            <div className="silhouette-overlay"></div>
          </div>
        </>
      )}
      {!image && (
        <>
          <Camera facingMode="environment" ref={camera} />
          <button
            class="camera-button"
            onClick={() => setImage(camera.current.takePhoto())}
          />
        </>
      )}
    </div>
  );
};

export default Silhouette;
