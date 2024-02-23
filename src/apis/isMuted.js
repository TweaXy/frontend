const isUserMuted = async (userID, token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/users/mute/check/${userID}`;

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

        return responseBody.data.muted;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default isUserMuted;
