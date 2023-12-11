// let urlupdateInfo = 'https://tweaxybackend.mywire.org/api/v1/users';

// const updateInfo = (
//     _name,
//     _birthdayDate,
//     _bio,
//     _phone,
//     _website,
//     _avatar,
//     _cover,
//     _location,
//     authToken
// ) => {
//     const _nwbirthdayDate =
//         _birthdayDate.month +
//         '-' +
//         _birthdayDate.day +
//         '-' +
//         _birthdayDate.year;
//     console.log('auth token is', authToken);
//     const formData = new FormData();
//     formData.append('avatar', _avatar);
//     // formData.append('birthdayDate', _nwbirthdayDate);
//     // formData.append('bio', _bio);
//     // formData.append('website', _website);
//     // formData.append('cover', _cover);
//     // formData.append('phone', _phone);
//     // formData.append('location', _location);
//     console.log(formData);
//     fetch(urlupdateInfo, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${authToken}`,
//         },
//         body: formData,
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Response from the API:', data);
//             if (data.status === 'success') {
//                 console.log('data saved successfully');
//             } else {
//                 console.log(data.message);
//             }
//         })
//         .catch((error) => console.log(error));
// };

// export { updateInfo };

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
  //  if(_avatar) formData.append('avatar', _avatar);
    if(_cover) formData.append('cover', _cover);
    if (_birthdayDate.month && _birthdayDate.year && _birthdayDate.day)
        formData.append('birthdayDate', _nwbirthdayDate);
    formData.append('bio', _bio);
    formData.append('website', _website);
    //formData.append('phone', _phone);
    formData.append('location', _location);
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
