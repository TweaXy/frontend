const apiRepostTweet = async (tweetId, token) => {
    // console.log("this is a token" + token);
    const repostTweetURL =
        `https://tweaxybackend.mywire.org/api/v1/interactions/${tweetId}/retweet`;
    try {
        const response = await fetch(repostTweetURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseData = await response.json();
        console.log(responseData);
        if (!responseData) {
            // take action
            console.log('cant Repost tweet');
        } else {
            console.log('Reposted tweet');
            return responseData;
        }
    } catch (error) {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
};

export {apiRepostTweet};