import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CaptchaPage from './CaptchaPage';
import '@testing-library/jest-dom';

it('should render a button with text "next"', () => {
    it('should render a button with text "next"', () => {
        render(<CaptchaPage />);
        render(<CaptchaPage />);
        const nextButton = screen.getByText(/Next/i);
        expect(nextButton).toBeInTheDocument();
    });
});
test('calls nextWindowHandler function on button click', () => {
    // Create a mock function for the nextWindowHandler prop
    const mockNextWindowHandler = jest.fn();

    // Render the component with the mock function
    render(<CaptchaPage nextWindowHandler={mockNextWindowHandler} />);

    // Get the button element
    const button = screen.getByRole('button', { name: /next/i });

    // Simulate a click event on the button element
    fireEvent.click(button);

    // Check if the mock function is called
    expect(mockNextWindowHandler).toHaveBeenCalled();
});
