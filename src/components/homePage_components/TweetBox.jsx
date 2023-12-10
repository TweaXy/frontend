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
export default function TweetBox({userData,getTweets}) {
    const [text, setText] = useState('');
    const [privacylay, setPrivacylay] = useState(false);
    const [tweetImages, setTweetImages] = useState([]);
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

    useEffect(() => {
        console.log(tweetImages);
    }, [tweetImages]);

    const handleImageChange = async (e) => {
        const selectedMedia = [...Array.from(e.target.files)];

        if (selectedMedia.length + tweetImages.length > 4) {
            setMediaerrorVisable(true);

            const timeoutId = setTimeout(() => {
                setMediaerrorVisable(false);
            }, 3000);

            return () => clearTimeout(timeoutId);
        } else {
            const isImage = (file) => {
                return file.type.startsWith('image/');
            };

            if (isImage(selectedMedia[0])) {
                try {
                    const convertToDataUrl = (file) => {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader();

                            reader.onload = () => {
                                resolve(reader.result);
                            };

                            reader.onerror = (error) => {
                                reject(error);
                            };

                            reader.readAsDataURL(file);
                        });
                    };

                    const imageUrls = await Promise.all(
                        selectedMedia.map((file) => convertToDataUrl(file))
                    );

                    setTweetImages((prevImages) => [
                        ...prevImages,
                        ...imageUrls,
                    ]);
                } catch (error) {
                    console.error(
                        'Error converting images to data URLs:',
                        error
                    );
                }
            }
            setTimeout(() => {
                e.target.value = '';
            }, 100);
        }
    };

    const handlePostTweet = (e) => {
        console.log("this is a handler");
        console.log(tweetImages);
        apiAddTweet(text, tweetImages,userData.token);
        setTweetImages([]);
        setText('');
        getTweets();
    };

    const handleDisplayPrivacy = (e) => {
        setPrivacylay(true);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    return (
        <div className="tweetbox" onClick={handleDisplayPrivacy}>
            <AvatarBox
                img={
                    'data:image/jpeg;base64,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'
                }
            />
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
                      <div className='span-padd' style={{height : '5px'}}></div>
                      <ImageUploader tweetImages={tweetImages} setTweetImages={setTweetImages}/>
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
                            accept="image/*"
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
                        className="tweetbox-button"
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
