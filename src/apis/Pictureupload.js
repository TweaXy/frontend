import { dark } from '@mui/material/styles/createPalette';
import { authToken } from './Signup';
const PictureupdateUrl = 'http://16.171.65.142:3000/api/v1/users';
const Pictureupload = (_avater) => {
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
