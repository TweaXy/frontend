const apiLikeTweet = async (tweetId, token, type) => {
    const likeTweetURL = `https://tweaxybackend.mywire.org/api/v1/interactions/${tweetId}/like`;
    try {
        const response = await fetch(likeTweetURL, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status != 'success') {
            console.log('cant Like Tweet');
        } else {
            console.log('Tweet LIKED');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
export { apiLikeTweet };
