const apiAddReply = async (mainTweetId,replyText, replyMedia, token) => {
    const addTweetURL =
        `https://tweaxybackend.mywire.org/api/v1/interactions/${mainTweetId}/replies`;
    // console.log('this is a token' + token);
    try {
        const response = await fetch(addTweetURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ text: replyText, media: replyMedia }),
        });

        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status != 'success') {
            // take action
            console.log('cant reply on tweet');
        } else {
            console.log('Replied on Tweet');
            return responseData.status;
        }
    } catch (error) {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
};

export { apiAddReply };
