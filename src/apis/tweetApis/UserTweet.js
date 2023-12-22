const UserTweetsURL = `https://tweaxybackend.mywire.org/api/v1/users`;
const GetuserTweets = async (_userid, token, _limit, _offset) => {
    console.log('username from gettweets is', _userid, 'token is', token);
    const urlWithQueryParam = `${UserTweetsURL}/tweets/${encodeURIComponent(
        _userid
    )}?limit=${_limit}?offset=${_offset}`;
    try {
        const response = await fetch(urlWithQueryParam, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const responseBody = await response.text();

        if (response.ok) {
            const responseData = await JSON.parse(responseBody);
            if (responseData.status === 'success') {
                const tweets = responseData.data.items;
                console.log('Ok ' + tweets);
                return tweets;
            } else {
                console.log('Error From Failing the TweetAPI');
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error getting user followers: ', err);
        throw err;
    }
};
export default GetuserTweets;
