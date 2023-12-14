const getUnseenNotificationsCount = async (token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/notification/unseenNotification`;

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
            return data;
        }

        throw new Error(`Error: ${responseBody.message}`);
    } catch (error) {
        console.error(error);
    }
};

export default getUnseenNotificationsCount;
