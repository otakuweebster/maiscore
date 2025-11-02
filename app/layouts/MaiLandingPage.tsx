import OtakuUserProfile from "../components/OtakuUserProfile";
import Image from "next/image";

export default function MaiLandingPage()
{
    return(
        <div id="main" className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Image src="assets/maiscore.png" alt="Next.js logo" width={894} height={324} unoptimized/>
                <OtakuUserProfile/>
            </div>        
        </div>
    )
}