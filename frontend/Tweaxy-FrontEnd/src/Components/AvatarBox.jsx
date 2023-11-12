import Avatar from '@mui/material/Avatar';
import './Avatar.css'
export default function AvatarBox({img}){
    return(

        <div className="avatar-container">           
        <Avatar src={img}></Avatar>
        </div>

    );
}