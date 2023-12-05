import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInButton from './SignInButton';
import '@testing-library/jest-dom';

it('should render a button with text "Sign in"', () => {
    render(<SignInButton />);
    const signInButton = screen.getByText(/Sign in/i);
    expect(signInButton).toBeInTheDocument();
});
it('should call openWindow function when the button is clicked', () => {
    const openWindowMock = jest.fn();
    render(<SignInButton openWindow={openWindowMock} />);
    const signInButton = screen.getByText(/Sign in/i);
    fireEvent.click(signInButton);
    expect(openWindowMock).toHaveBeenCalled();
});
