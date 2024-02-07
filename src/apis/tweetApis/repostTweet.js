/**
 * Description
 * @date 2023-12-28
 * @param {any} tweetId
 * @param {any} token
 * @returns {any}
 */
const apiRepost = async (tweetId, token) => {
    const repostTweetURL =
        `http://tweaxybackend.mywire.org/api/v1/interactions/${tweetId}/retweet`;
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

const apiDeleteRepost = async (tweetId, token) => {
   
    const repostTweetURL =
        `http://tweaxybackend.mywire.org/api/v1/interactions/retweet/${tweetId}`;
    try {
        const response = await fetch(repostTweetURL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseData = await response.json();
        console.log(responseData);
        if (!responseData) {
            // take action
            console.log('cant delete Repost tweet');
        } else {
            console.log('Reposted Deleted');
            return responseData;
        }
    } catch (error) {
        // Handle errors during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
};

export {apiRepost,apiDeleteRepost};