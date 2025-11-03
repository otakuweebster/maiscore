'use client'
import Image from "next/image";

export default function RatingCard({scoreData})
{
    console.log("here's what I have for bruh: " + scoreData)
    let color = "purple";
    let scoreValue = scoreData.difficulty_level.value;
    let lowRank = ['D', 'C', 'B', 'BBB', 'BBB'];
    
    // //COLOR CHANGE
    switch (scoreValue)
    {
        case "basic":
            color = "121,231,83";
            break;
        case "advanced":
            color = "255,210,44";
            break;
        case "expert":
            color = "254,100,100";
            break;
        case "master":
            color = "222,121,251";
            break;
        default: color = "white";
    }

    return(
      <div className="h-fit w-full flex flex-col gap-2 p-3">
            <div className="grid grid-cols-2 gap-1 justify-between h-fit">
                <div className="text-4xl h-fit" style={{
                    color: "white",
                    "WebkitTextStroke": `5px rgba(${color},1)`,
                    paintOrder: "stroke fill",
                    textShadow: `rgba(${color},1) 0 2px 5px`
                }}>{scoreData.difficulty_level.label}</div>
                <div className="text-xl rounded-4xl flex flex-col justify-center items-center" style={{
                    textAlign: "end",
                    backgroundColor: 'white'
                }}>{new Date(scoreData.play_date_unix* 1000).toLocaleString()}</div>
            </div>

            <div className={'w-full flex flex-cols gap-1 rounded-4xl shadow-xl/30'} style={{
                backgroundImage: `url(https://maitea.app/storage/track_covers/${scoreData.song.id}_mmt_${scoreData.song.code}.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: `rgba(${color},1)`,
                backgroundBlendMode: "darken"
                
            }}>
                <div className={'w-full h-fit flex flex-col gap-1 p-5'}>
                    <div className="flex flex-col justify-center items-center mb-2 rounded-4xl text-white" style={{
                        backgroundColor: `rgba(${color},1)`,
                        backgroundImage: "linear-gradient(rgb(0 0 0/25%) 0 0)"
                    }}>{scoreData.song.name.en}</div>
                    <div className={'flex flex-row h-fit'}>
                        <Image src={`https://maitea.app/storage/track_covers/${scoreData.song.id}_mmt_${scoreData.song.code}.webp`} width={200} height={200} unoptimized className="rounded-4xl"/>
                        <div className="flex flex-col w-full px-2">
                            <div className="flex flex-col justify-center items-center mb-2 rounded-4xl w-full text-2xl text-white" style={{
                                backgroundColor: `rgba(${color},1)`,
                                backgroundImage: "linear-gradient(rgb(0 0 0/25%) 0 0)"
                            }}>ACHEIVEMENT</div>
                            <div className="flex flex-row justify-center items-center h-full gap-2 p-1">
                                <div className="flex flex-col">
                                     <div className="text-6xl text-white text-shadow-lg/30" style={{
                                        "WebkitTextStroke": "5px black",
                                        paintOrder: "stroke fill"
                                    }}>{scoreData.achievement_formatted}%</div>
                                    <div className="text-xl text-white text-start text-shadow-lg/30" style={{
                                        "WebkitTextStroke": "5px black",
                                        paintOrder: "stroke fill"
                                    }}>{scoreData.score_formatted}</div>
                                </div>
                                <div className="flex flex-col h-full justify-center items-center">
                                    {
                                        lowRank.indexOf(scoreData.rank) >= 0 ? (<div className="text-4xl text-white text-start text-shadow-lg/30 ml-5" style={{
                                        "WebkitTextStroke": "5px black",
                                        paintOrder: "stroke fill"
                                    }}>{scoreData.rank}</div>) : (<Image src={`https://maitea.app/storage/ranks/rank_${scoreData.rank}.webp`} width={75} height={75} unoptimized/>)

                                    }

                                    
                                    {
                                        scoreData.full_combo_label != null &&
                                        <Image src="https://maitea.app/storage/medals/full_combo.webp" width={75} height={75} unoptimized/>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            
        </div>
    )





}