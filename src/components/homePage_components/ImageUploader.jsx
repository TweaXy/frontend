import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './ImageUploader.css'
import styled from '@emotion/styled';
export default function ImageUploader({tweetUrl,tweetImages,setTweetImages,setImageUrl}){

 
    const deleteImageHandler=(index) =>{
      setTweetImages(tweetImages.filter((img,ind) => ind != index ));
      setImageUrl(tweetUrl.filter((img,ind)=> ind!=index));
      console.log("handle delete");
    }

    const imageHeightHandler = (index,length) =>{
      console.log(tweetImages);
      if(index== 0 && length == 1){
        return "172.88px";
      }else if ((index == 1 || index==0) && length==2  ){
        return "287.55px";  
      // } else if(index==1 && length ==3) {
      //   return "287.55px";
      }else {
        return "137.78px";
      }
    }
    return (
      <div className='image-uploader'>
                   {tweetImages.length > 0  &&
                        <ImageList sx={{ width: 511.2, height: 'fitContent' }} cols={2}  gap={10}>
                        {tweetImages.map((item,index) => (
                          <ImageListItem key={index} className={` img-lay--${index}${tweetImages.length}` } style={{height : imageHeightHandler(index,tweetImages.length) }}>
                            <div className="delete-icon-container" onClick={() =>deleteImageHandler(index) } >
                              <CloseOutlinedIcon/>
                            </div>
                            <img
                              srcSet={`${item}`}
                              src={`${item}`}
                              loading="lazy"
                              style={{height: "inherit"}}
                              
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    }
      </div>
    );
}