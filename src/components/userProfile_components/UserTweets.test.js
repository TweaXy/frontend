import React from 'react';
import { render, waitFor,screen } from '@testing-library/react';
import UserTweets from './UserTweets';
import { useSelector } from 'react-redux'; 
import GetuserTweets from '../../apis/tweetApis/UserTweet'; 
import '@testing-library/jest-dom';
jest.mock('../../apis/tweetApis/UserTweet'); 
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));
  it('renders loading state initially', async () => {
    useSelector.mockReturnValueOnce(null); 

    const { getByTestId } = render(<UserTweets userID="123" />);
    const loadingElement = getByTestId('loading-element');

    expect(loadingElement).toBeInTheDocument();

    await waitFor(() => {
      expect(useSelector).toHaveBeenCalled();
    });
  });

  it('renders tweets when loaded', async () => {
    const mockedToken = "45645646489789789";
    const mockedTweetsResponse = [
      // mocked tweets data
    ];

    useSelector.mockReturnValueOnce({ token: mockedToken  }); 
    GetuserTweets.mockResolvedValueOnce(mockedTweetsResponse); 

    render(<UserTweets userID="123" />);
    
    await waitFor(() => {
      expect(GetuserTweets).toHaveBeenCalled();
    });
  });