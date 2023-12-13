import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SettingsPage from './SettingsPage';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import React from 'react';

jest.mock('../../redux/actions', () => ({
    clearUser: jest.fn(),
}));

const mockStore = configureStore([]);

describe('SettingsPage component', () => {
    it('renders LoadingPage while user information is loading', async () => {
        const store = mockStore({
            user: {
                user: null,
                token: null,
            },
        });

        const { getByTestId } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <SettingsPage />
                </MemoryRouter>
            </Provider>
        );

        const loadingPage = getByTestId('loading-page');
        expect(loadingPage).toBeInTheDocument();

        await waitFor(() => expect(loadingPage).not.toBeInTheDocument());
    });

    it('renders SettingsPage when user information is available', async () => {
        const store = mockStore({
            user: {
                user: {
                    /* mock user data */
                },
                token: 'mockToken',
            },
        });

        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <SettingsPage />
                </MemoryRouter>
            </Provider>
        );

        // Wait for the page content to load
        await waitFor(() => {
            expect(getByText('Your Account')).toBeInTheDocument();
        });

        // Add more assertions based on your component content
        // For example, you can check the presence of specific elements.
    });
});
