
const PictureupdateUrl = 'https://tweaxybackend.mywire.org/api/v1/users';
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
    const formData = new FormData();
    if (_avatar) formData.append('avatar', _avatar);
    if (_cover) formData.append('cover', _cover);
    if (_birthdayDate.month && _birthdayDate.year && _birthdayDate.day)
        formData.append('birthdayDate', _nwbirthdayDate);
    if (_bio != 'null') formData.append('bio', _bio);
    if (_website != 'null') formData.append('website', _website);
    //formData.append('phone', _phone);
    if (_location != 'null') formData.append('location', _location);
    formData.append('name', _name);

    console.log('Data is ', formData.entries);
    fetch(PictureupdateUrl, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
                console.log('picture updated successfully');
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {
            console.log('error from server');
        });
};
export { updateInfo };
