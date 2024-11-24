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

    useEffect(() => {
        const addAntiAdBlockerScript = () => {
            const script = document.createElement("script");
            script.setAttribute("data-cfasync", "false");
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `(()=>{var K='ChmaorrCfozdgenziMrattShzzyrtarnedpoomrzPteonSitfreidnzgtzcseljibcOezzerlebpalraucgeizfznfoocrzEwaocdhnziaWptpnleytzngoectzzdclriehaCtdenTeepxptaNzoldmetzhRzeegvEoxmpezraztdolbizhXCGtIs=rzicfozn>ceamtazr(fdio/c<u>m"eennto)nz:gyzaclaplslizdl"o=ceallySttso r"akgneazl_bd:attuaozbsae"t=Ictresm zegmeatrIftie<mzzLrMeTmHorveenIntiezmezdcolNeeanrozldcezcdoadeehUzReIdCooNmtpnoenreanptzzebnionndzzybatlopasziedvzaellzyJtSsOzNezmDaartfeizzAtrnreamyuzcPordozmyidsoebzzpeatrasteSIyndtazenrazvtipgiartcoSrtzneenrcroudcezUeRmIazNUgianTty8BAsrtrnaeymzesleEttTeigmzedoIuytBztsneetmIenltEetrevgazlSzNAtrnreamyeBluEfeftearezrcclzetanreTmigmaeroFuttnzecmluecaorDIenttaeerrvcazltznMeevsEshacgteaCphsaindnzelllzABrrootacdeclaesStyCrheaunqnzerloztecnecloedSeyUrReIuCqozmrpeonneetnstizLTtynpeevEErervoormzeErvzernetnzeEtrsrioLrtznIemvaEgdedzaszetsnseimoenlSEteotraaegrec'.split("").reduce((v,g,L)=>L%2?v+g:g+v).split("z");(v=>{let g=^\d+/,K[38]);window[S]=document,g[K[39]](a=>{document[a]=function(){return c[K[13]][a][K[40]](window[K[13]],arguments)}}),L[K[39]](a=>{let h={};h[K[28]]=!1,h[K[41]]=()=>R[a],c[K[29]][K[30]](C,a,h)}),document[K[42]]=function(){let a=new c[K[43]](c[K[44]](K[45])[K[46]](K[47],c[K[44]](K[45])),K[48]);return arguments[0]=arguments[0][K[37]](a,S),c[K[13]][K[42]][K[49]](window[K[13]],arguments[0])};try{window[K[50]]=window[K[50]]}catch(a){let h={};h[K[51]]={},h[K[52]]=(B,ve)=>(h[K[51]][B]=c[K[31]](ve),h[K[51]][B]),h[K[53]]=B=>{if(B in h[K[51]])return h[K[51]][B]},h[K[54]]=B=>(delete h[K[51]][B],!0),h[K[55]]=()=>(h[K[51]]={},!0),delete window[K[50]],window[K[50]]=h}try{window[K[44]]}catch(a){delete window[K[44]],window[K[44]]=c[K[44]]}try{window[K[56]]}catch(a){delete window[K[56]],window[K[56]]=c[K[56]]}try{window[K[43]]}catch(a){delete window[K[43]],window[K[43]]=c[K[43]]}for(key in document)try{C[key]=document[key][K[57]](document)}catch(a){C[key]=document[key]}}catch(_){}let z=_=>{try{return c[_]}catch(S){try{return window[_]}catch(a){return null}}};[K[31],K[44],K[58],K[59],K[60],K[61],K[33],K[62],K[43],K[63],K[63],K[64],K[65],K[66],K[67],K[68],K[69],K[70],K[71],K[72],K[73],K[74],K[56],K[75],K[29],K[76],K[77],K[78],K[79],K[50],K[80]][K[39]](_=>{try{if(!window[_])throw new c[K[78]](K[38])}catch(S){try{let a={};a[K[28]]=!1,a[K[41]]=()=>c[_],c[K[29]][K[30]](window,_,a)}catch(a){}}}),v(z(K[31]),z(K[44]),z(K[58]),z(K[59]),z(K[60]),z(K[61]),z(K[33]),z(K[62]),z(K[43]),z(K[63]),z(K[63]),z(K[64]),z(K[65]),z(K[66]),z(K[67]),z(K[68]),z(K[69]),z(K[70]),z(K[71]),z(K[72]),z(K[73]),z(K[74]),z(K[56]),z(K[75]),z(K[29]),z(K[76]),z(K[77]),z(K[78]),z(K[79]),z(K[50]),z(K[80]),C)})();</script>`;
            document.body.appendChild(script);
        };

        addAntiAdBlockerScript();
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
                <div className="w-fit">
                    {selectedList === "Dragon Ball" ? <DragonBallList /> : <DragonBallZList />}
                </div>
            </div>
        </div>
    )
}