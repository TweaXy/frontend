const url = `https://tweaxybackend.mywire.org/api/v1/notification/deviceTokenWeb`;
const webtoken="cPvtAxITSZRpFtotbnLIMv:APA91bE1ytY4ZyzNakhkfkbYs_zlSlSnfuQVD3AsZkHjrpnbNCC7NG87QmwxN1WuLr7GAlQzMWQRI9Nac5D_VawefHbcgekUe570YnwkicjiOwsyIIK3WrVLh3qd5UNbzef3yd0y7ix_"
const InitNotifications = (token,WebToken) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            token: webtoken,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
                console.log("ok from Notifications")
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {});
};
export default InitNotifications;
