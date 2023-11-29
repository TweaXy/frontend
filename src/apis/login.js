const login = async (userUUID, userPassword) => {
    const url = 'http://16.171.65.142:3000/api/v1/auth/login';

    console.log('signing in...');

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ UUID: userUUID, password: userPassword }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const responseData = await response.json();
        document.cookie = `token=${responseData.data.token}; Path=/; HttpOnly`;
        return responseData.data.user;
    } catch (err) {
        console.error('Error in Signing in: ', err.message);
        throw err;
    }
};

export default login;
