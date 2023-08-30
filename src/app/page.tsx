import LeftSideBar from "@/components/LeftSideBar";
import TextBackground from "@/components/TextBackground";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
    return (<div className="grid grid-cols-5 min-h-screen">
        <LeftSideBar/>
        <TextBackground/>
        <RightSideBar/>
    </div>)
}