'use client'
import OtakuUserProfile from "../components/OtakuUserProfile";
import { getOtakuScoreLatest, getOtakuData, getOtakuAllScore } from "../helpers/MaiAPI";
import RatingCard from "../components/RatingCard";
import Image from "next/image";
import { useEffect, useState } from 'react';
import OtakuPlays from "../components/OtakuPlays";
import MaiScoreIntro from "../components/MaiScoreIntro";

export default function MaiLandingPage()
{
      const [showData, setDisplay] = useState(false);
      const [showLoading, setLoading] = useState(true)

      const [dataScore, setDataScore] = useState();
      const [userData, setUserData] = useState();
      const [dataAllScore, setAllScore] = useState();

        useEffect(() => {
            getOtakuScoreLatest().then(() => {
                
                if(sessionStorage.getItem('otakuLatestScore'))
                {
                    setDataScore(JSON.parse(sessionStorage.getItem('otakuLatestScore')));
                    
                    getOtakuData().then(() => {
                        setUserData(JSON.parse(sessionStorage.getItem('otakuMaiProfile')));

                        getOtakuAllScore().then(() => {
                            setAllScore(JSON.parse(sessionStorage.getItem('otakuAllScore')));
                            
                            setDisplay(true);
                            setLoading(false);
                        
                        })
                    });
                }
            })
        }, []);



    return(
        <div id="main" className="w-5/6 h-screen mx-auto flex justify-center items-center">
            <div className="flex flex-col w-full justify-center items-center">
                { showLoading && (
                    <div className="w-screen h-screen">
                        <video playsInline autoPlay muted loop id="intro" oncontextmenu="return false;" style={{
                            objectFit: "contain",
                            zIndex: 1,
                            top: 0,
                            left: 0
                        }}>
                            <source src="assets/MaiScoreIntro.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                )}
                {showData && (
                    <div className="flex flex-col justify-center items-center">
                        <Image src="assets/maiscore.png" width={447} height={162} unoptimized/>
                        <div className={'flex flex-auto gap-10 w-full h-fit justify-center items-center'}>
                            <div className="flex flex-col gap-10">
                                <OtakuUserProfile data={userData}/>
                                    <div className="text-4xl h-fit text-center" style={{
                                        color: "white",
                                        "WebkitTextStroke": `5px black`,
                                        paintOrder: "stroke fill",
                                        textShadow: `black 0 2px 5px`
                                    }}>Latest Play: 
                                    </div>
                                <RatingCard scoreData={dataScore}/>
                            </div>
                        <OtakuPlays scoreArray={dataAllScore}/>
                    </div>
                    </div>
                
                )}
                
            </div>        
        </div>
    )
}