import React, {useState} from "react";
import music from "./Video/backdrop.mp3";

const Audio = () => {
    // const [audio, setAudio] = useState(new Audio(music));
    // const [playing, setPlaying] = useState(false);
    const [btn, setBtn] = useState("fa-pause");

    const togglePlay = () => {
        if (btn === "fa-pause") {
            setBtn("fa-play");
            // audio.play();
            // setPlaying(true);
        } else {
            setBtn("fa-pause");
            // audio.pause();
            // setPlaying(false);
        }
    }


    return (
        <>
            <div className="float" type="button" onClick={togglePlay}>
                <i className={btn + ` fa my-float`}></i>
                <audio src={music} autoPlay={true} loop={true}/>
            </div>
        </>
    );
};

export default Audio;