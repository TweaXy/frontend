const getUnseenNotificationsCount = async (token) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/notification/unseenNotification`;

    console.log('get notifications count token: ', token);

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
            return data.count;
        }

        throw new Error(`Error: ${responseBody.message}`);
    } catch (error) {
        throw new Error(`Error: ${responseBody.message}`);
    }
};

export default getUnseenNotificationsCount;
