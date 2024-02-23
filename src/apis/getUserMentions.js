const getUserMentions = async (userId, token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/users/tweets/mentioned/${userId}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const responseBody = await response.json();

        if (response.ok) {
            return responseBody.data.items;
        }

        throw new Error(`Error: ${responseBody.message}`);
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getUserMentions;
