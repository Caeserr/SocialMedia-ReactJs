import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"
import './home.css'

export default function home() {
    return (

        <>
        <Topbar />
        <div className="homeContainer">
            
            <Sidebar />
            <Feed />
            <RightBar />
        
        </div>
        </>
    )
}
