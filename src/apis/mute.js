const mute = async (username, token) => {
    const url = `http://tweaxybackend.mywire.org/api/v1/users/mute/${username}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const responseBody = await response.json();
            throw new Error(responseBody.message);
        }

        return true;
    } catch (error) {
        console.error('Error muting a user: ', error.message);
        throw new Error(error.message);
    }
};

export default mute;
