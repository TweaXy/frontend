import React from 'react';
import LoadingPage from './LoadingPage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('LoadingPage component', () => {
    it('renders without crashing', () => {
        render(<LoadingPage />);
    });

    it('renders CircularProgress', () => {
        const { getByTestId } = render(<LoadingPage />);
        const circularProgress = getByTestId('circular-progress');
        expect(circularProgress).toBeInTheDocument();
    });

    it('has the correct CSS class', () => {
        const { getByTestId } = render(<LoadingPage />);
        const loadingPageElement = getByTestId('loading-page');
        expect(loadingPageElement).toHaveAttribute('class', 'loading-page');
    });
});