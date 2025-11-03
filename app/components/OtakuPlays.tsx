'use client'
import Image from "next/image";
import RatingCard from "./RatingCard";

export default function OtakuPlays(props)
{

    return (
        <div className="w-fit h-190 flex flex-col gap-2 text-center p-5 rounded-lg" style={{
            backgroundColor: "rgba(255,255,255,0.5)"
        }}>
            <div className="text-4xl justify-center " style={{
                                    color: "white",
                                    "WebkitTextStroke": `5px black`,
                                    paintOrder: "stroke fill",
                                    textShadow: `black 0 2px 5px`
            }}>Otaku's MaiMai Score List: </div>

            <div className="w-fit flex flex-col gap-5 mt-5 overflow-auto ">
                {props.scoreArray.map(score => <RatingCard scoreData={score}/>)}
            </div>
        </div>
    )
}