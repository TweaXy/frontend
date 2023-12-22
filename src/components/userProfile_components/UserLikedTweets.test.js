import React from 'react';
import { render, waitFor,screen } from '@testing-library/react';
import TweetsUSerLikes from './UserLikedTweets';
import { useSelector } from 'react-redux'; 
import GetTweetsuserLikes from'../../apis/tweetApis/UserLikedTweets'
import '@testing-library/jest-dom';
jest.mock('../../apis/tweetApis/UserLikedTweets'); 
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));
  it('renders loading state initially', async () => {
    useSelector.mockReturnValueOnce(null); 

    const { getByTestId } = render(<TweetsUSerLikes userID="123" />);
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
    GetTweetsuserLikes.mockResolvedValueOnce(mockedTweetsResponse); 

    render(<TweetsUSerLikes userID="123" />);
    
    // await waitFor(() => {
    //   expect(GetTweetsuserLikes).toHaveBeenCalled();
    // });
  });