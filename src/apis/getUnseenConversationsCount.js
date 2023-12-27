const getUnseenConversationsCount = async (token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/conversations/unseen`;

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
            const data = responseBody.data;
            return data.unseenConversations;
        }

        throw new Error(`Error: ${responseBody.message}`);
    } catch (error) {
        throw new Error(error.message);
    }
};

export default getUnseenConversationsCount;
