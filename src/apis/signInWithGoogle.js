const signInWithGoogle = async (response) => {
    const url = 'http://16.171.65.142:3000/api/v1/auth/google';

    console.log('signing in with google...');
    console.log('Sign in with google token response: ', response);

    try {
        const fetchResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: response.credential }),
        });

        if (!fetchResponse.ok) {
            const errorData = await fetchResponse.json();
            throw new Error(errorData.message);
        }

        const responseData = await fetchResponse.json();
        // Assuming the token is returned in a cookie named 'token'
        document.cookie = `token=${responseData.data.token}; Path=/; HttpOnly`;

        return responseData.data.user;
    } catch (error) {
        console.error('Error Signing in with google: ', error.message);
        throw error;
    }
};

export default signInWithGoogle;
