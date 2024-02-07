const changePassword = async (curPassword, newPassword, conPassword, token) => {
    const url = 'http://tweaxybackend.mywire.org/api/v1/users/password';

    console.log('changing user password...');

    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                oldPassword: curPassword,
                newPassword: newPassword,
                confirmPassword: conPassword,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        return true;
    } catch (error) {
        console.log('Error changing user password', error.message);
        throw error;
    }
};

export default changePassword;
