const urlLikers = 'https://tweaxybackend.mywire.org/api/v1/interactions/';
const lasturlLikers="/likers"
const getLikers = async ({ tweetId, token }) => {
    const fullUrl = `${urlLikers}${tweetId}${lasturlLikers}`;
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
        console.log('get tweet likers response: ', responseBody);

        if (response.ok) {
            const responseData = JSON.parse(responseBody);

            if (responseData.status === 'success') {
                const users = responseData.data.likers;
                console.log(`@${tweetId} has likes: `, users);
                return users;
            } else {
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error getting user likers: ', err);
        throw err;
    }
};

export default getLikers;