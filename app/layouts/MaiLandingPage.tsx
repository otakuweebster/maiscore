'use client'
import OtakuUserProfile from "../components/OtakuUserProfile";
import { getOtakuScoreLatest, getOtakuData } from "../helpers/MaiAPI";
import RatingCard from "../components/RatingCard";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function MaiLandingPage()
{
      const [showData, setDisplay] = useState(false);
      const [showLoading, setLoading] = useState(true)
      const [dataScore, setDataScore] = useState();
      const [userData, setUserData] = useState();

        useEffect(() => {
            getOtakuScoreLatest().then(() => {
                
                if(sessionStorage.getItem('otakuLatestScore'))
                {
                    setDataScore(JSON.parse(sessionStorage.getItem('otakuLatestScore')));
                    
                    getOtakuData().then(() => {
                        setLoading(false);
                        setUserData(JSON.parse(sessionStorage.getItem('otakuMaiProfile')));
                        setDisplay(true);
                    });

                }
            })
    
        }, []);



    return(
        <div id="main" className="w-5/6 h-screen mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Image src="assets/maiscore.png" width={894} height={324} unoptimized/>
                { showLoading && (
                    <Image src="https://media.tenor.com/HvJ48-NOlfIAAAAj/teto-tetoris.gif" width={200} height={200} unoptimized/>
                )}
                {showData && (
                    <div className={'grid grid-cols-2 gap-5 w-full'}>
                        <div className="flex flex-col gap-10">
                            <OtakuUserProfile data={userData}/>
                                <div className="text-4xl h-fit" style={{
                                    color: "white",
                                    "WebkitTextStroke": `5px black`,
                                    paintOrder: "stroke fill",
                                    textShadow: `black 0 2px 5px`
                                }}>Latest Play: 
                                </div>
                            <RatingCard scoreData={dataScore}/>
                        </div>
                    </div>
                    
                )}
                
            </div>        
        </div>
    )
}