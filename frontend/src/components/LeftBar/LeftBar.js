import "./LeftBar.css";
import { Users } from "../../dummyData";
import LeftPeople from "../LeftPeople/LeftPeople"
export default function LeftBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <LeftPeople key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}