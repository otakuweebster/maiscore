'use client';
import { useEffect, useState } from 'react';
import { getOtakuData } from '../helpers/MaiAPI';
import Image from "next/image";

export default function OtakuUserProfile()
{
    const [showUser, setUser] = useState(false);
    const [data, setData] = useState();


    useEffect(() => {
        getOtakuData().then(() => {
            if (localStorage.getItem('otakuMaiProfile'))
            {
                setData(JSON.parse(sessionStorage.getItem('otakuMaiProfile')));
                setUser(true);
            }

        });

    }, []);

    return(
        <div>
            {showUser && (
                <div id="profile" className="w-full grid grid-cols-2 gap-2 p-10 rounded-4xl shadow-2xl/50" style={{
                    backgroundImage: `url(${data.options.frame.webp}), url(${data.options.icon_deka.webp})`,
                    backgroundSize: "cover, 50%",
                    backgroundPosition: "center, left",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "rgba(255,255,255,0.4)",
                    backgroundBlendMode: "lighten"
                }}>

                    <Image src={data.options.icon.webp} width={150} height={150} unoptimized/>
                    <div className="w-full grid grid-row-2 gap-2 text-center">
                        <div className='flex flex-col justify-center items-center rounded-4xl text-xl text-white text-shadow-lg/30' style={{
                            backgroundImage: 'url(' + data.options.nameplate.webp + ')',
                            backgroundSize: "100%",
                            backgroundPosition: "center",
                            "WebkitTextStroke": "3px black",
                            paintOrder: "stroke fill"
                        }}>
                            {data.name}
                        </div>
                        <div className='grid grid-cols-2 gap-2 h-full text-center items-end text-3xl text-white text-shadow-lg/30' style={{
                            "WebkitTextStroke": "3px black",
                            paintOrder: "stroke fill"
                        }}>
                            <p>RATING: </p>
                            <p>{data.rating}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
