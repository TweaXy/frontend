import { useEffect, useState } from 'react';
import './ChangePasswordPage.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/homePage_components/Sidebar';
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const ChangePasswordPage = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    const token = useSelector((state) => state.user.token);

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            console.log('token from settings/password page: ', token);
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
        <div className="change-password-page-container">
            <Sidebar />
            <div className="change-password-widget">
                <div className="change-password-header">
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
                    <span>Change your password</span>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;
