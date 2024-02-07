const urlLikers = 'http://tweaxybackend.mywire.org/api/v1/interactions/';
const lasturlretweeters="/retweeters"

const getRetweeters = async ({ tweetId, token }) => {
    const fullUrl = `${urlLikers}${tweetId}${lasturlretweeters}`;
    console.log("token is ",token);
    console.log("id is ",tweetId);
    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseBody = await response.text();
        console.log('get tweet retweeters response: ', responseBody);

        if (response.ok) {
            const responseData = JSON.parse(responseBody);

            if (responseData.status === 'success') {
                const users = responseData.data.retweeters;
                console.log(`@${tweetId} has retweets: `, users);
                return users;
            } else {
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error getting user retweets: ', err);
        throw err;
    }
};

export default getRetweeters;