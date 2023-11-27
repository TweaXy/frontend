import { dark } from '@mui/material/styles/createPalette';

let UsernameupdateUrl = 'http://16.171.65.142:3000/api/v1/users/updateUserName';
const UsernameUpdate = (_username) => {
    fetch(UsernameupdateUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: _username,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from the API:", data);
      if (data.status === "success") {
      } else {
        console.log(data.message)
      }
    })
    .catch((error) => {});
};
export default UsernameUpdate;
