import OtakuUserProfile from "../components/OtakuUserProfile";
import Image from "next/image";

export default function MaiLandingPage()
{
    return(
        <div id="main" className="w-5/6 h-screen mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Image src="assets/maiscore.png" width={894} height={324} unoptimized/>
                <div className={'grid grid-cols-2 gap-5 w-full'}>
                    <OtakuUserProfile/>
                    
                </div>
            </div>        
        </div>
    )
}