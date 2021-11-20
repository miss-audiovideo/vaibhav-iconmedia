import React, {useRef, useState} from 'react';
import video from './Video/360.mp4';


const ThreeSixty = () => {
    // function for hover play video
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [show, setShow] = useState("three-sixty-popup");
    const handleMouseOver = () => {
        setIsPlaying(false);
        videoRef.current.pause();
        setShow("popup-text");
    }
    const handleMouseOut = () => {
        setIsPlaying(true);
        videoRef.current.play();
        setShow("three-sixty-popup");
    }
    return (
        <div className="three-sixty-section">
                <video ref={videoRef} autoPlay={isPlaying} className="three-sixty-video" loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                <div className={show}>
                    <div className="three-sixty-popup-text">
                        <div className="three-sixty-popup-text-inner">
                            <h1>360°</h1>
                            <p>
                                360° is a 360° video that shows you the 360° view of the building.
                            </p>
                        </div>
                    </div>
                </div>
            <div className="three-sixty-btn">
                <div className="btn-icon" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    <div className="fa fa-plus btn-name"></div>
                </div>
            </div>
        </div>
    )
}

export default ThreeSixty;