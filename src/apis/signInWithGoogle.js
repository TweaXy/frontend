const signInWithGoogle = async (tokenResponse) => {
    const url = 'http://16.171.65.142:3000/api/v1/auth/google';

    console.log('signing in with google...');
    console.log('Sign in with google token response: ', tokenResponse);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'applicatio1n/json',
            },
            body: JSON.stringify({ code: tokenResponse.code }),
        });

        return await response.json();
    } catch (err) {
        console.error('Error Signing in with google: ', err.message);
        throw err;
    }
};

export default signInWithGoogle;
