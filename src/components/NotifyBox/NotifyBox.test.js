import React from 'react';
import { render } from '@testing-library/react';
import NotifyBox from './NotifyBox';
import '@testing-library/jest-dom';
describe('NotifyBox', () => {
    it('renders with the correct text', () => {
        const text = 'This is a notification message';
        const { getByText } = render(<NotifyBox text={text} />);
        const textElement = getByText(text);
        expect(textElement).toBeInTheDocument();
    });

    it('renders with the correct class names', () => {
        const text = 'This is another notification message';
        const { getByText, container } = render(<NotifyBox text={text} />);
        const textElement = getByText(text);
        const notifyBoxMsg = container.querySelector('.notify-box-msg');
        const msgContainer = container.querySelector('.msg-container');
        expect(textElement).toBeInTheDocument();
        expect(notifyBoxMsg).toBeInTheDocument();
        expect(msgContainer).toBeInTheDocument();
    });
});
