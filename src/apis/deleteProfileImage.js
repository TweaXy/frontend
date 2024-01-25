const urlDeleteProfile =
    'https://tweaxybackend.mywire.org/api/v1/users/profilePicture';
const deleteProfileApi = (authToken) => {
    fetch(urlDeleteProfile, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
                console.log('picture deleted successfully');
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {
            console.log('there is error in deleted image');
        });
};
export default deleteProfileApi;