import { CircularProgress } from '@mui/material';
import './LoadingPage.css';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <CircularProgress />
        </div>
    );
};

export default LoadingPage;
