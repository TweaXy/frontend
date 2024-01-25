import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoginOrSpan from './LoginOrSpan';

test('renders login or span component', () => {
    render(<LoginOrSpan />);
    expect(screen.getByText(/Or/i)).toBeInTheDocument();
});
