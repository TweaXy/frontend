import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import  './FeedHeader.css'
export default function FeedHeader({feedHeader_acitve}){

    return(
        <div  className="feed-header">
        <div style={{flex:0.44}} className="feed-haeder-element">
        <span className={`${feedHeader_acitve==0 &&"--feed-header-active"}`} >For you</span>
        </div>
        <div style={{flex:0.46}} className=" feed-haeder-element">
        <span className={`${feedHeader_acitve==1 &&"--feed-header-active"}`}>Following</span>
        </div>
        <div className="icon-wrapper">
        <SettingsOutlinedIcon className='timeline-settings'/>
        </div>
        </div>
    );
}