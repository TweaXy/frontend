import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpButton from './SignUpButton';
import '@testing-library/jest-dom';
it('should render a button with text "Create account"', () => {
    render(<SignUpButton />);
    const button = screen.getByText('Create account');
    expect(button).toBeInTheDocument();
});

it('should call openWindow function when the button is clicked', () => {
    const openWindow = jest.fn();
    render(<SignUpButton openWindow={openWindow} />);
    const button = screen.getByText('Create account');
    fireEvent.click(button);
    expect(openWindow).toHaveBeenCalled();
});
it('should not render the SignUpPage component when isWindowOpen is false', () => {
    render(<SignUpButton isWindowOpen={false} />);
    const signUpPage = screen.queryByTestId('sign-up-page');
    expect(signUpPage).toBeNull();
});