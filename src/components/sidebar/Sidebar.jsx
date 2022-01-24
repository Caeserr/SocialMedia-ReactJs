import "./sidebar.css";
import { Group, People, PersonAdd, RssFeed } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListeItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListeItemText">Feed</span>
          </li>
          <li className="sidebarListeItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListeItemText">Group</span>
          </li>
          <li className="sidebarListeItem">
            <PersonAdd className="sidebarIcon" />
            <span className="sidebarListeItemText">Add Person</span>
          </li>
          <li className="sidebarListeItem">
            <People className="sidebarIcon" />
            <span className="sidebarListeItemText">People</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="assets/person/2.jpeg"
              alt=""
            />
            <span className="sidebarFriendName">Text</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
