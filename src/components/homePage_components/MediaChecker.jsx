import './MediaChecker.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
export default function MediaChecker({ media }) {
   
    const imageHeightHandler = (index,length) =>{
        if(index== 0 && length == 1){
          return "324px";
        }else if ((index == 1 || index==0) && length==2  ){
          return "287.55px";  
        // } else if(index==1 && length ==3) {
        //   return "287.55px";
        }else {
          return "137.78px";
        }
      }
   
    return (
        <div className="media-checker">
                   {media.length > 0  &&
                        <ImageList sx={{ width: 511.2, height: 'fitContent' }} cols={2}  gap={10}>
                        {media.map((item,index) => (
                          <ImageListItem key={index} className={` img-lay--${index}${media.length}` } style={{height : imageHeightHandler(index,media.length) }}>
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
