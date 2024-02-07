const getBlockedUsers = async (token) => {
    const url = `http://tweaxybackend.mywire.org/api/v1/users/block/list`;

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

        return responseBody.data.blocks;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getBlockedUsers;
