let urlDeleteBanner = 'http://16.171.65.142:3000/api/v1/users/profileBanner';

const deleteBannerApi = (authToken) => {
    fetch(urlDeleteBanner, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
                console.log('banner deleted successfully');
            } else {
                console.log(data.message);
            }
        })
        .catch((error) => {
            console.log('there is error in deleted image');
        });
};
export default deleteBannerApi;