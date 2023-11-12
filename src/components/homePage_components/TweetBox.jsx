import { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import AvatarBox from "./AvatarBox";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import PublicIcon from "@mui/icons-material/Public";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import "./TweetBox.css";

export default function TweetBox() {
  const [text, setText] = useState("");

  useEffect(() => {
    // Set initial height when the component mounts
    const textarea = document.querySelector(".tweetbox-input > textarea ");
    textarea.style.height = "50px";
  }, []); //
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleResize = (e) => {
    // updateRows(e.target);
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <div className="tweetbox">
      <AvatarBox img={"/p1.jpg"} />
      {/* <Avatar src="myphoto.jpg"/> */}
      <form action="" className="tweetbox-form">
        <div className="tweetbox-input">
          <TextareaAutosize
            placeholder="What is hapenning?!"
            value={text}
            onChange={handleChange}
            onInput={handleResize}
          />
        </div>
        <div className="privacy-lay">
          <div className="container-privacy">
            <PublicIcon />
            <h3>Everyone can reply</h3>
          </div>
        </div>
        <div className="tweetbox-post">
          <div className="post-attach">
            <div className="attach-icon">
              <BrokenImageOutlinedIcon />
            </div>
            <div className="attach-icon">
              <GifBoxOutlinedIcon />
            </div>
            <div className="attach-icon">
              <ChecklistRtlOutlinedIcon />
            </div>
            <div className="attach-icon">
              <SentimentSatisfiedOutlinedIcon />
            </div>
            <div className="attach-icon">
              <PendingActionsOutlinedIcon />
            </div>
            <div className="attach-icon">
              <FmdGoodOutlinedIcon />
            </div>
          </div>
          <Button className="tweetbox-button">Post</Button>
        </div>
      </form>
    </div>
  );
}
