import './ConversationsButton.css';
import { Mail, MailOutline } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Badge } from '@mui/material';
import getUnseenConversationsCount from '../../apis/getUnseenConversationsCount';

const ConversationsButton = ({ active, token }) => {
    const [unseenConversationsCount, setUnseenConversationsCount] = useState(0);
    const navigate = useNavigate();

    const handleConversationsButtonClick = () => {
        navigate('/conversations');
    };

    useEffect(() => {
        const getCurUnseenNotificationCount = async () => {
            try {
                const curUnseenConversationsCount =
                    await getUnseenConversationsCount(token);
                setUnseenConversationsCount(curUnseenConversationsCount);
            } catch (error) {
                console.error(error.message);
                setUnseenConversationsCount(0);
            }
        };

        if (active === true) {
            setUnseenConversationsCount(0);
        } else {
            getCurUnseenNotificationCount();
        }
    }, [token, active]);

    return (
        <div
            className={`conversations-container ${
                active === true && 'active-conversations-container'
            }`}
            onClick={handleConversationsButtonClick}
        >
            {unseenConversationsCount === 0 && (
                <div className="conversations-icon-wrapper">
                    <MailOutline />
                </div>
            )}
            {unseenConversationsCount !== 0 && (
                <div className="conversations-icon-wrapper">
                    <Badge
                        color="primary"
                        badgeContent={unseenConversationsCount}
                        max={9}
                    >
                        <Mail />
                    </Badge>
                </div>
            )}
            <h2>Messages</h2>
        </div>
    );
};

export default ConversationsButton;
