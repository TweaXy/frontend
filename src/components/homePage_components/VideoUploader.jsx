import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './ImageUploader.css';

export default function VideoUploader({ tweetVideo, settweetVideo }) {
    const deleteImageHandler = (index) => {
        settweetVideo(tweetVideo.filter((img, ind) => ind != index));
    };

    const VideoHeightHandler = (index, length) => {
        if (index == 0 && length == 1) {
            return '172.88px';
        } else if ((index == 1 || index == 0) && length == 2) {
            return '287.55px';
            // } else if(index==1 && length ==3) {
            //   return "287.55px";
        } else {
            return '137.78px';
        }
    };

    
    return (
        <div className="image-uploader">
            {tweetVideo.length > 0 && (
                <ImageList
                    sx={{ width: 511.2, height: 'fitContent' }}
                    cols={1}
                    gap={10}
                >
                    {tweetVideo.map((item, index) => (
                        <ImageListItem
                            key={index}
                            className={` img-lay--${index}${tweetVideo.length}`}
                            style={{
                                height: VideoHeightHandler(
                                    index,
                                    tweetVideo.length
                                ),
                            }}
                        >
                            <div
                                className="delete-icon-container"
                                onClick={() => deleteImageHandler(index)}
                            >
                                <CloseOutlinedIcon />
                            </div>
                            <video // Use a video element instead of an image element
                                src={item} // Set the src to the video URL
                                loading="lazy"
                                style={{ height: 'inherit' }}
                                controls // Add controls attribute
                                preload="metadata" // Add preload attribute
                                playsInline // Add playsInline attribute
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </div>
    );
}
