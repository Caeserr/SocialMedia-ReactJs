import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Sabri Arrar </b> and <b>5 others friends</b></span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user ={u}/>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}
