import React, {useRef, useState} from 'react';
import video from './Video/360.mp4';

const ThreeSixty = () => {
    const [btn, setBtn] = useState("btn-icon");
    const vidRef = useRef(null);

    const handlePlayVideo = () => {
        if(btn === "btn-icon"){
            setBtn("btn-icon2");
            vidRef.current.pause();
        }else{
            setBtn("btn-icon");
            vidRef.current.play();
        }
    }
    return (
        <div className="three-sixty-section">
            <video muted autoPlay loop className="three-sixty-video">
                <source src={video} type="video/mp4" />
            </video>
            <button className={btn + ` pause-btn`} onClick={handlePlayVideo}>+</button>
        </div>
    );
}

export default ThreeSixty;