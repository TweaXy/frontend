import { render, screen } from '@testing-library/react';
import LoadingPage from './LoadingPage';
import React from 'react';
import '@testing-library/jest-dom';
describe('LoadingPage', () => {
    it('renders CircularProgress component', () => {
        render(<LoadingPage />);
        const circularProgress = screen.getByRole('progressbar');
        expect(circularProgress).toBeInTheDocument();
    });
});
