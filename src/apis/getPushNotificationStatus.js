const getPushNotificationStatus = async (token, webToken) => {
    const url = `https://tweaxybackend.mywire.org/api/v1/notification/satatus`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                token: webToken,
                type: 'web',
            }),
        });

        const responseBody = await response.json();

        if (responseBody.ok) {
            return true;
        }

        return false;
    } catch (error) {
        throw new Error(error.message);
    }
};
export default getPushNotificationStatus;
