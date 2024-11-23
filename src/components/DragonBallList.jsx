import { Card } from "./Card";
import episodes from "../assets/DragonBallEpisodes.json";
import { useEffect, useState } from "react";

export const DragonBallList = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        let delay = 0;
        episodes.forEach((_, index) => {
            setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
            }, delay);
            delay += 200;
        });
    }, []);

    return (
        <div className="h-fit w-fit p-4 bg-fourth shadow-lg md:rounded-xl grid grid-cols-2 gap-4">
            {episodes.map((episode, index) => (
                <div
                    key={episode.id}
                    className={`transition-opacity duration-500 ${
                        visibleCards.includes(index) ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Card
                        id={episode.id}
                        title={episode.title}
                        description={episode.summary}
                        image={episode.image}
                    />
                </div>
            ))}
        </div>
    );
};
