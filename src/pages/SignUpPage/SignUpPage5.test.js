import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUpPage5 from './SignUpPage5';
describe('SignUpPage5', () => {
    // Shows an error message when the password is not acceptable
    it('should show an error message when the password is not acceptable', () => {
        // Arrange
        const canbeuser = true;
        const password = 'weakpassword';
        const passwordhandler = jest.fn();
        const nextWindowHandler = jest.fn();
        // Act
        render(
            <SignUpPage5
                canbeuser={canbeuser}
                password={password}
                passwordhandler={passwordhandler}
                nextWindowHandler={nextWindowHandler}
            />
        );
        // Assert
        expect(screen.getByText('Weak password')).toBeInTheDocument();
    });
});
