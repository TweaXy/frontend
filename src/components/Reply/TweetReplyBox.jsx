import { useState, useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import AvatarBox from '../homePage_components/AvatarBox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import PublicIcon from '@mui/icons-material/Public';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import '../homePage_components/ReplyBox.css';
import MediaErrorMsg from '../homePage_components/MediaErrorMsg'
import ImageUploader from '../homePage_components/ImageUploader';
import HomePageSelectors from '../../shared/selectors/HomePage';
import { apiAddReply } from '../../apis/tweetApis/AddReply';
export default function TweetReplyBox({tweetId,token}) {
    const [ok,setok]=useState(true);
    const [text, setText] = useState('');
    const [Images, setTweetImages] = useState([]);
    const [isMediaerrorVisable, setMediaerrorVisable] = useState(false);
    const fileInputRef = useRef(null);
    const textareaRef = useRef(null);
    useEffect(() => {
        // Set initial height when the component mounts
        const textarea = document.querySelector('.reply-box-input >  textarea ');
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
    const handleImageChange = async (e) => {
        const selectedMedia = [...Array.from(e.target.files)];

        if (selectedMedia.length + Images.length > 4) {
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
    const replyTweetHandler =async (e) => {
        setTweetImages([]);
        setText('');
        apiAddReply(tweetId, text, Images, token)
    };
if(ok)
{
    return(
        <div className="reply-box" onClick={()=>setok(false)}>
        <AvatarBox
            img={
''            }
        />
        {/* <Avatar src="myphoto.jpg"/> */}
        <form action="" className="reply-box-form">
            <div className="reply-box-input">
                <TextareaAutosize
                    placeholder="Post your reply"
                    value={text}
                    onChange={handleChange}
                    onInput={handleResize}
                    ref={textareaRef}
                />
                            <Button
                    className="reply2-box-button"
                    onClick={replyTweetHandler}
                    disabled={true}
                >
                    Reply
                </Button>
            </div>

            </form>
        {isMediaerrorVisable && <MediaErrorMsg />}
    </div>
    )
}
    return (
        <div className="reply-box" >
        <AvatarBox
            img={
''            }
        />
        {/* <Avatar src="myphoto.jpg"/> */}
        <form action="" className="reply-box-form">
        <div className="Tweetreply-text-container">
                        <span className="reply-text">Replying to </span>
                        <span
                            className="username-text"
                            // onClick={routingHandlerProfile1}
                        >
                            @Manga
                        </span>
                    </div>
            <div className="reply-box-input">
                <TextareaAutosize
                    placeholder="Post your reply"
                    value={text}
                    onChange={handleChange}
                    onInput={handleResize}
                    ref={textareaRef}
                />
            </div>
            <div className="media-container">
                  <div className='span-padd' style={{height : '5px'}}></div>
                  <ImageUploader tweetImages={Images} setTweetImages={setTweetImages}/>
                </div>
            <div className="reply-box-post">
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
              {text.length===0&&  <Button
                    className="reply2-box-button"
                    onClick={replyTweetHandler}
                    disabled={true}
                >
                    Reply
                </Button>}
                
                 {text.length>0&&  <Button
                    className="reply-box-button"
                    onClick={replyTweetHandler}
                >
                    Reply
                </Button>}
            </div>
        </form>
        {isMediaerrorVisable && <MediaErrorMsg />}
    </div>
    );
}
