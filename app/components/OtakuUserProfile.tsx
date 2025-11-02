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
                <div className={'text-center'}>
                    <Image src={data.options.icon_deka.png} alt="Next.js logo" width={100} height={100} unoptimized/>
                    <p>{data.name}</p>
                </div>
            )}
        </div>
    )
}
