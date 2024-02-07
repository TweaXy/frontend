const url = `http://tweaxybackend.mywire.org/api/v1/notification/deviceTokenWeb`;

const disableNotifications = (token, WebToken) => {
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            token: WebToken,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
                console.log('ok from Notifications');
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {
            throw new Error(error.message);
        });
};

export default disableNotifications;
