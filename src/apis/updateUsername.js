const updateUsername = async (username, token) => {
    const url = 'https://tweaxybackend.mywire.org/api/v1/users/updateUserName';

    console.log('updating user username...');

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                username: username,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updateUsername;
