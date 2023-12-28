import { useState, useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AvatarBox from './AvatarBox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import './TweetBox.css';
import { apiAddTweet } from '../../apis/tweetApis/AddTweet';
import MediaErrorMsg from './MediaErrorMsg';
import ImageUploader from './ImageUploader';
import HomePageSelectors from '../../shared/selectors/HomePage';
import VideoUploader from './VideoUploader';
export default function TweetBox({ userData }) {
    const [text, setText] = useState('');
    const [privacylay, setPrivacylay] = useState(false);
    const [tweetImages, setTweetImages] = useState([]);
    const [videoSrc, setVideoSrc] = useState([]);
    const [isMediaerrorVisable, setMediaerrorVisable] = useState(false);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);
    useEffect(() => {
        // Set initial height when the component mounts
        const textarea = document.querySelector('.tweetbox-input > textarea ');
        textarea.style.height = '50px';
    }, []); //
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleResize = (e) => {
        // updateRows(e.target);
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const handleAddImage = (e) => {
        console.log('new img');
        fileInputRef.current.click();
    };
    const [imageURL,setImageUrl] =useState([]);

    const handleImageChange = async (e) => {

        
        const selectedMedia = [...Array.from(e.target.files)];
        if (selectedMedia.length + imageURL.length > 4) {
            setMediaerrorVisable(true);
            const timeoutId = setTimeout(() => {
                setMediaerrorVisable(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        }
        const newImageURLs = selectedMedia.map((file) => URL.createObjectURL(file));
        console.log(newImageURLs);
        setImageUrl((prevURLs) => [...prevURLs, ...newImageURLs]);
        const formData = new FormData();
        selectedMedia.map((file) => formData.append('file', file));
        setTweetImages((prevImages) => [...prevImages, formData]);
        console.log(formData);
    };

    const handlePostTweet = async (e) => {
        if (text.length == 0 && tweetImages.length == 0) {
            return;
        }
        console.log('this is a handler');
        console.log(tweetImages);
        setTweetImages([]);
        setImageUrl([]);
        setText('');
        await apiAddTweet(text, tweetImages, userData.token);
    };

    const handleDisplayPrivacy = (e) => {
        setPrivacylay(true);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    return (
        <div className="tweetbox" onClick={handleDisplayPrivacy}>
            <AvatarBox img={userData.user.avatar} />
            {/* <Avatar src="myphoto.jpg"/> */}
            <form action="" className="tweetbox-form">
                <div className="tweetbox-input">
                    <TextareaAutosize
                        data-test={HomePageSelectors.TWEETBOX_FIELD}
                        placeholder="What is hapenning?!"
                        value={text}
                        onChange={handleChange}
                        onInput={handleResize}
                        ref={textareaRef}
                    />
                </div>
                <div className="media-container">
                    <div className="span-padd" style={{ height: '5px' }}></div>
                    <ImageUploader
                        tweetImages={imageURL.map((image)=>image)}
                        setTweetImages={setTweetImages}
                        setImageUrl={setImageUrl}
                        tweetUrl={imageURL}
                    />
                    {/* {tweetImages.length > 0 && (<img src={tweetImages[0]} />)} */}
                </div>
                {privacylay && (
                    <div className="privacy-lay">
                        <div className="container-privacy">
                            <PublicIcon />
                            <h3>Everyone can reply</h3>
                        </div>
                    </div>
                )}
                <div className="tweetbox-post">
                    <div className="post-attach">
                        <input
                            type="file"
                            accept="image/*, video/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            multiple
                        />

                        <div className="attach-icon" onClick={handleAddImage}>
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
                    <Button
                        data-test={HomePageSelectors.TWEETBOX_POST_BUTTON}
                        className={`tweetbox-button ${
                            text.length == 0 && tweetImages.length == 0
                                ? 'tweetbox-btn-disactive'
                                : ''
                        }`}
                        onClick={handlePostTweet}
                    >
                        Post
                    </Button>
                </div>
            </form>
            {isMediaerrorVisable && <MediaErrorMsg />}
        </div>
    );
}
