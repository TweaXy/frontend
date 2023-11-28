const urlFollowers = 'http://16.171.65.142:3000/api/v1/users/followers/';

const getUserFollowers = async (username) => {
    const fullUrl = `${urlFollowers}${username}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const responseBody = await response.text();
        console.log('get user followers response: ', responseBody);

        if (response.ok) {
            const responseData = JSON.parse(responseBody);

            if (responseData.status === 'success') {
                const followers = responseData.data.followers;
                console.log(`@${username} has followers: `, followers);
                return followers;
            } else {
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

export default getUserFollowers;
