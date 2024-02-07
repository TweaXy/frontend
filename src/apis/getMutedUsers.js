const getMutedUsers = async (token) => {
    const url = `http://tweaxybackend.mywire.org/api/v1/users/mute/list`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseBody = await response.json();

        if (!response.ok) {
            throw new Error(responseBody.message);
        }

        return responseBody.data.mutes;
    } catch (error) {
        console.error('Error muting a user: ', error.message);
        throw new Error(error.message);
    }
};

export default getMutedUsers;
