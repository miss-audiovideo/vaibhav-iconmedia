import React, {useRef, useState} from 'react';
import video from './Video/360.mp4';


const ThreeSixty = () => {
    // function for hover play video
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const handleMouseOver = () => {
        setIsPlaying(false);
        videoRef.current.pause();
    }
    const handleMouseOut = () => {
        setIsPlaying(true);
        videoRef.current.play();
    }
    return (
        <div className="three-sixty-section">
                <video ref={videoRef} autoPlay={isPlaying} className="three-sixty-video" loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            <div className="three-sixty-btn">
                <div className="btn-icon" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </div>
        </div>
    )
}

export default ThreeSixty;