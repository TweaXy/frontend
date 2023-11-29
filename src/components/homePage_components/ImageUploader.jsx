import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './ImageUploader.css'
export default function ImageUploader({tweetImages,setTweetImages}){

    // const [tweetImages, setTweetImages] = useState(images);
    const handleImageDelete = (index) => {
      const updatedImages = [...tweetImages];
      updatedImages.splice(index, 1);
      setTweetImages(updatedImages);
    };
  
    return (
      <div className='image-uploader'>
        {/* <div>
          {tweetImages.map((image, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <img src={image.dataUrl} alt={`Selected ${index}`} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
              <button onClick={() => handleImageDelete(index)}>Close</button>
            </div>
          ))}
        </div> */}
                   {tweetImages.length > 0  &&
                        <ImageList sx={{ width: 511.2, height: tweetImages.length>2 ? 287.55 : 164 }} cols={2} rowHeight={137.78} gap={10}>
                        {tweetImages.map((item,index) => (
                          <ImageListItem key={index}>
                            <img
                              srcSet={`${item}`}
                              src={`${item}`}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    }
      </div>
    );
}