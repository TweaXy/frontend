const PictureupdateUrl = 'https://tweaxybackend.mywire.org/api/v1/users';

const Pictureupload = (_avater, authToken) => {
    console.log('auth token is', authToken);
    const formData = new FormData();
    formData.append('avatar', _avater);
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

export default Pictureupload;
