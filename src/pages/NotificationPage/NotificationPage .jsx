import { useSelector } from 'react-redux';
import Sidebar from '../../components/homePage_components/Sidebar';
import '../HomePage/HomePage.css';
import '../../components/homePage_components/Feed.css';
import NotificationHeader from '../../components/Notifications/NotificationsHeader';
import Notificationcell1 from '../../components/Notifications/Notificationcell1';
import Notificationcell2 from '../../components/Notifications/Notificationcell2';
import Notificationcell3 from '../../components/Notifications/Notificationcell3';
import Tweet from '../../components/homePage_components/Tweet';
const NotificationPage = () => {
    const user = useSelector((state) => state.user);
    console.log('userdata from Notifications', user);
    return (
        <>
            <div className="home-page">
                <Sidebar userData={user} active={3} />
                <div className="feed">
                    <NotificationHeader />
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
                    <Notificationcell3 />
                </div>
            </div>
        </>
    );
};
export default NotificationPage;
