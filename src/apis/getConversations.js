const urlconversatioData = 'http://tweaxybackend.mywire.org/api/v1/conversations';

const getConversationsApi = async ({ token }) => {
    const fullUrl = `${urlconversatioData}`;
    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        console.log('Response from the list conversations API:', data);
        if (response.ok) {
            if (data.status === 'success') {
                console.log('conversations get successfully');
                return data.data.items;
            } else {
                throw new Error(`Error: ${data.status}`);
            }
        } else {
            throw new Error(`Error: ${data.status}`);
        }
    } catch (err) {
        console.log(err);
    }
};

export default getConversationsApi;
