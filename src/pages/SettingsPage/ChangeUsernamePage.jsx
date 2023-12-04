import './ChangeUsernamePage.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/homePage_components/Sidebar';
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const ChangeUsernamePage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            console.log('token from settings/username page: ', token);
            setIsPageLoading(false);
        } else {
            console.log('Loading Settings page...');
        }
    }, [token]);

    if (isPageLoading) {
        return (
            <div className="loading-page">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="change-username-page-container">
            <Sidebar />
            <div className="change-username-widget">
                <div className="change-username-header">
                    <div
                        className="arrow-back"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <div className="shadow">
                            <ArrowBack />
                        </div>
                    </div>
                    <span>Change your username</span>
                </div>
            </div>
        </div>
    );
};

export default ChangeUsernamePage;
