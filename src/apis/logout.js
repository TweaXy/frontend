const logout = async (token) => {
    const url = 'https://tweaxybackend.mywire.org/api/v1/auth/logout';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new response.json();
        }

        return true;
    } catch (error) {
        console.error(error.message);
    }
};

export default logout;
