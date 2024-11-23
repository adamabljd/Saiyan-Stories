import { DragonBallList } from "./DragonBallList"
import { DragonBallZList } from "./DragonBallZList";
import play from "../assets/icons/play.svg"
import pause from "../assets/icons/pause.svg"
import chala from "../assets/Cha La Head Cha La  lofi.mp3"
import { useEffect, useRef, useState } from "react";

export const Homepage = ({ selectedList }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState("0:00");
    const audioRef = useRef(chala);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    useEffect(() => {
        const audio = audioRef.current;

        const updateCurrentTime = () => {
            setCurrentTime(formatTime(audio.currentTime));
        };

        if (audio) {
            audio.addEventListener("timeupdate", updateCurrentTime);
            audio.loop = true;
        }

        return () => {
            if (audio) {
                audio.removeEventListener("timeupdate", updateCurrentTime);
            }
        };
    }, []);

    return (
        <div className="h-full p-1 bg-primary flex flex-col items-center space-y-3">
            <audio ref={audioRef} src={chala} preload="auto"></audio>

            <div className="flex space-x-6 justify-center items-center">
                <button className="bg-fourth hover:shadow-lg p-2 rounded-lg shadow" onClick={togglePlayPause}>
                    <img
                        src={isPlaying ? pause : play}
                        alt={isPlaying ? "Pause music" : "Play music"}
                        className="w-7 h-7" />
                </button>
                <span className="text-third font-dragonL font-bold text-lg">{currentTime}</span>
            </div>
            <div className="flex flex-row justify-between space-x-10">
                <div className="bg-black w-96 h-96"></div>
                <div className="w-fit">
                    {selectedList === "Dragon Ball" ? <DragonBallList /> : <DragonBallZList />}
                </div>
                <div className="bg-black w-96 h-96"></div>
            </div>
        </div>
    )
}