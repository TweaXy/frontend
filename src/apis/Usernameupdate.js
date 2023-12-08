let UsernameupdateUrl = 'https://tweaxybackend.mywire.org/api/v1/users/updateUserName';

const UsernameUpdate = (_username, authToken) => {
    fetch(UsernameupdateUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            username: _username,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {});
};
export default UsernameUpdate;
