const urlFollowing = 'http://16.171.65.142:3000/api/v1/users/following/';

const getUserFollowing = async (username) => {
    const fullUrl = `${urlFollowing}${username}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseBody = await response.text();
        console.log('get user following response: ', responseBody);

        if (response.ok) {
            const responseData = JSON.parse(responseBody);

            if (responseData.status === 'success') {
                const followings = responseData.data.followings;
                console.log(`@${username} is following: `, followings);
                return followings;
            } else {
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error getting user following: ', err);
        throw err;
    }
};

export default getUserFollowing;
