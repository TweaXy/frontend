import Avatar from "@mui/material/Avatar";
import "./Avatar.css";
export default function AvatarBox({ img }) {
  return (
    <div className="avatar-box">
      <Avatar src={img}></Avatar>
    </div>
  );
}
