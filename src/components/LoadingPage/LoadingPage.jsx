import './LoadingPage.css';
import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => {
    return (
        <div className="loading-page" data-testid="loading-page">
            <CircularProgress data-testid="circular-progress" />
        </div>
    );
};

export default LoadingPage;
