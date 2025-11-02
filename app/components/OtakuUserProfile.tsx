'use client';
import { useEffect, useState } from 'react';
import { getOtakuData } from '../helpers/MaiAPI';

export default function OtakuUserProfile()
{
    const [showUser, setUser] = useState(false);
    const [data, setData] = useState();
    let userData = {
        name: 'VALUE'
    };

    useEffect(() => {
        getOtakuData().then(() => {
            if (localStorage.getItem('otakuMaiProfile'))
            {
                setData(JSON.parse(localStorage.getItem('otakuMaiProfile')));
                console.log("FIRE!")
                setUser(true);
            }

        });

    }, []);

    return(
        <div>
            {showUser && (
                <div>It's {data.name}</div>   
            )}
        </div>
    )
}
