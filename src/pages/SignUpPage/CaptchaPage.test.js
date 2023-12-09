import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CaptchaPage from './CaptchaPage';
import '@testing-library/jest-dom';

it('should render a button with text "next"', () => {
    render(<CaptchaPage />);
    const nextButton = screen.getByText(/Next/i);
    expect(nextButton).toBeInTheDocument();
});
