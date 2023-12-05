const updateUsername = async (username, token) => {
    const url = 'http://16.171.65.142:3000/api/v1/users/updateUserName';

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
        console.log('Error changing user password', error.message);
        throw error;
    }
};

export default updateUsername;
