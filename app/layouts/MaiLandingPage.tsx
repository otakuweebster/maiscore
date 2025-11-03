'use client'
import OtakuUserProfile from "../components/OtakuUserProfile";
import { getOtakuScoreLatest, getOtakuData, getOtakuAllScore } from "../helpers/MaiAPI";
import RatingCard from "../components/RatingCard";
import Image from "next/image";
import { useEffect, useState } from 'react';
import OtakuPlays from "../components/OtakuPlays";

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
                <Image src="assets/maiscore.png" width={447} height={162} unoptimized/>
                { showLoading && (
                    <Image src="https://media.tenor.com/HvJ48-NOlfIAAAAj/teto-tetoris.gif" width={200} height={200} unoptimized/>
                )}
                {showData && (
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
                    
                )}
                
            </div>        
        </div>
    )
}