import "./online.css"

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
                        <div className="rightbarProfilImgContainer">
                            <img className="rightbarProfilImg" src={user.profilePicture} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">{user.username}</span>
                    </li>
    )
}
