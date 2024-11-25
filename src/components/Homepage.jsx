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
    const leftAdRef = useRef(null);


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

    // Dynamically load and refresh vignette scripts every 30 seconds
    useEffect(() => {
        const scripts = [
            { domain: "vemtoutcheeg.com", zone: 8558938 },
            { domain: "vemtoutcheeg.com", zone: 8558968 },
            { domain: "vemtoutcheeg.com", zone: 8558999 },
        ];

        const loadScripts = () => {
            scripts.forEach(({ domain, zone }) => {
                const script = document.createElement("script");
                script.innerHTML = `
                    (function(d,z,s){
                        s.src='https://'+d+'/400/'+z;
                        try {
                            (document.body||document.documentElement).appendChild(s)
                        } catch(e) {}
                    })('${domain}',${zone},document.createElement('script'))
                `;
                document.body.appendChild(script);
            });
        };

        const refreshAds = () => {
            // Remove existing ad scripts
            const appendedScripts = document.querySelectorAll("script[src*='vemtoutcheeg.com']");
            appendedScripts.forEach((script) => script.remove());

            // Load new ad scripts
            loadScripts();
        };

        // Initial load
        loadScripts();

        // Set interval to refresh ads every 30 seconds
        const interval = setInterval(refreshAds, 30000);

        return () => {
            // Cleanup: remove scripts and clear the interval
            clearInterval(interval);
            const appendedScripts = document.querySelectorAll("script[src*='vemtoutcheeg.com']");
            appendedScripts.forEach((script) => script.remove());
        };
    }, []);

    useEffect(() => {
            // Add the first script dynamically
            const script1 = document.createElement("script");
            script1.src = "//ads.themoneytizer.com/s/gen.js?type=48";
            script1.async = true;
            leftAdRef.current.appendChild(script1);

            // Add the second script dynamically
            const script2 = document.createElement("script");
            script2.src = "//ads.themoneytizer.com/s/requestform.js?siteId=129715&formatId=48";
            script2.async = true;
            leftAdRef.current.appendChild(script2);
        
    }, []);


    return (
        <div className="h-full w-full md:p-1 bg-primary flex flex-col items-center space-y-3 overflow-hidden">
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
            <div className="flex flex-row justify-between md:space-x-10">
            <div ref={leftAdRef}  className="hidden md:block max-h-96"></div>
                <div className="w-fit">
                    {selectedList === "Dragon Ball" ? <DragonBallList /> : <DragonBallZList />}
                </div>
            </div>
            <div className="hidden md:block max-h-96"></div>
        </div>
    )
}