let urlupdateInfo = 'http://16.171.65.142:3000/api/v1/users';

const updateInfo = (
    _name,
    _birthdayDate,
    _bio,
    _phone,
    _website,
    _avatar,
    _cover,
    _location,
    authToken
) => {
    const _nwbirthdayDate =
        _birthdayDate.month +
        '-' +
        _birthdayDate.day +
        '-' +
        _birthdayDate.year;
        console.log('auth token is', authToken);
    fetch(urlupdateInfo, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            name: _name,
            birthdayDate: _nwbirthdayDate,
            bio: _bio,
            phone: _phone,
            website: _website,
            avatar: _avatar,
            cover: _cover,
            location: _location,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
                console.log('data saved successfully');
            } else {
                console.log(data.message);
            }
                        
        })
        .catch((error) => console.log(error));
};

export { updateInfo };
