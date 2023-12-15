import { useSelector} from 'react-redux';
import { useState } from 'react';
import Sidebar from '../../components/homePage_components/Sidebar';
import '../HomePage/HomePage.css';
import '../../components/homePage_components/Feed.css';
import NotificationHeader from '../../components/Notifications/NotificationsHeader';
import Notificationcell1 from '../../components/Notifications/Notificationcell1';
import Notificationcell2 from '../../components/Notifications/Notificationcell2';
import Notificationcell3 from '../../components/Notifications/Notificationcell3';
import getAllNotifications from'../../apis/NotificationsApis/getAllNotifications';
import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
const NotificationPage = () => {
    const token = useSelector((state) => state.user.token);
    const user = useSelector((state) => state.user.user);
    const [Notifications,setNotifications]=useState([]);
    const [isPageLoading, setIsPageLoading] = useState(true);
    useEffect(() => {
        const fetchNotifications = async () => {
            if (user && token) {
              console.log('User data from Notifications:', user);
              console.log('Token from Notifications:', token);   
              try {
                const fetchedNotifications = await getAllNotifications(token, 10, 0);
                setNotifications(fetchedNotifications);     
                console.log('Notifications:', fetchedNotifications);
                setIsPageLoading(false);
              } catch (error) {
                console.error('Error fetching notifications:', error);
                setIsPageLoading(false);
              }
            }
          };
          fetchNotifications();
    }, [user, token]);
    if (isPageLoading) {
        return (
            <div
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </div>
        );
    }
    return (
        <>
            <div className="home-page">
                <Sidebar userData={{user,token}} active={3} />
                <div className="feed">
                    <NotificationHeader />
                    {
           Notifications.length > 0 &&
           Notifications.map((cur, index) => {
             if (cur.action === 'FOLLOW') {
               return <Notificationcell2 key={index}       fromuser={cur.fromUser}
               interaction={cur.interaction}/>; 
             } else if (cur.action === 'LIKE') {
               return (
                 <Notificationcell1
                   key={index}
              fromuser={cur.fromUser}
              interaction={cur.interaction}
                 />
               );
             } else {
            //   <Notificationcell3
            //   key={index}
            //   avatar={cur.fromUser.avatar}
            //   username={cur.fromUser.name}
            //   handle={cur.fromUser.username}
            //   uploadTime={cur.createdDate}
            //   tweetText={interaction}
            //   tweetMedia={''}
            //   replies={0}
            
            // />
             }
           })
        }         
{/*                     
                    <Notificationcell1
                        PostType="reply"
                        interactionType="liked"
                    />
                    <Notificationcell1
                        PostType="repost"
                        interactionType="liked"
                    />
                    <Notificationcell1
                        PostType="tweet"
                        interactionType="reposted"
                    />
                    <Notificationcell2 />
                    <Notificationcell3 /> */}
                </div>
            </div>
        </>
    );
};
export default NotificationPage;
