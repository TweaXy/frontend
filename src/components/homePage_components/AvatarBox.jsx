import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import "./Avatar.css";
import { deepOrange, deepPurple } from '@mui/material/colors';
export default function AvatarBox({ img }) {
    if (!img || typeof img !== 'string' || !img) {
    console.log("not image path");
  }

  return (
    <div className="avatar-box">
      <Avatar src={img}></Avatar>
    </div>  
  );
}
