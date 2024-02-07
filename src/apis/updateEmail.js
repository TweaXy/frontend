const updateEmail = async (email, verificationToken, token) => {
    const url = 'http://tweaxybackend.mywire.org/api/v1/users/email';

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                token: verificationToken,
                email: email,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default updateEmail;
