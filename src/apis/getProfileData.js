const urlProfileData = 'http://16.171.65.142:3000/api/v1/users/';

const getUserDataApi = async ({ id, token }) => {
    const fullUrl = `${urlProfileData}${id}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        console.log('Response from the API:', data);

        if (response.ok) {
            const responseData = JSON.parse(data);

            if (responseData.status === 'success') {
                console.log('data Profile get successfully');
            } else {
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.log(err);
    }
};

export default getUserDataApi;
