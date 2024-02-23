const createConversation = async (username, token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/conversations`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                UUID: username,
            }),
        });

        const responseBody = await response.json();

        if (response.ok) {
            return responseBody.data;
        }

        throw new Error(response.message);
    } catch (error) {
        throw new Error(error.message);
    }
};

export default createConversation;
