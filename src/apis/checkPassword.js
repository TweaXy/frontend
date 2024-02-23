const checkPassword = async (password, token) => {
    const url = 'https://tweaxybackend.mywire.org/api/v1/users/checkPassword';

    console.log('checking user password...');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                password: password,
            }),
        });

        console.log(response);
        
        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        return true;
    } catch (error) {
        console.log('Error checking user password', error.message);
        throw error;
    }
};

export default checkPassword;
