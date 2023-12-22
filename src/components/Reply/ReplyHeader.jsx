import '../../components/homePage_components/Feed.css';
import './ReplyHeader.css';
import { ArrowBack } from '@mui/icons-material';

const ReplyHeader = ({previouspage}) => {
    // remaining the obacity
    const PreviousHandler = () => {
        console.log('Manga');
    };
    return (
        <div className={'reply-header'} style={{ borderBottom: 'none' }}>
            <div style={{ flex: 1 }} className="reply-header-element ">
                <div className="--replyheader-container ">
                    <div className="Back_Arrow" onClick={previouspage}>
                        <ArrowBack sx={{
                            width:'28px',
                            height:'28px'
                        }} />
                    </div>
                    <div className="span-containter">
                        {' '}
                        <span>Post</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReplyHeader;
