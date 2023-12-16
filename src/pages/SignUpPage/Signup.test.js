import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import React from 'react';
import '@testing-library/jest-dom';
import SignUpPage from './SignUpPage';
// not completed
// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
});

describe('SignUpPage Component', () => {
    it('renders SignUpPage1 initially', () => {
        const onCloseMock = jest.fn();
        render(
            <Provider store={store}>
                <Router>
                    <SignUpPage onClose={onCloseMock} />
                </Router>
            </Provider>
        );

        // Ensure that SignUpPage1 elements are rendered initially
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Day')).toBeInTheDocument();
        expect(screen.getByLabelText('Year')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
    });
});
