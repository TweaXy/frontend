const MessageURL = `https://tweaxybackend.mywire.org/api/v1`;
const addMessage = async (
    Conversationid,
    data,
    token
) => {
    const urlWithQueryParam = `${MessageURL}/conversations/${encodeURIComponent(
        Conversationid
    )}`
    try {
        const response = await fetch(urlWithQueryParam, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ text: data ,
                media:null
            }),
        });
        const responseBody = await response.text();
        if (response.ok) {
            const responseData = await JSON.parse(responseBody);
            if (responseData.status === 'success') {
                const Messages = responseData.data;
                console.log('Ok ' + Messages);
                return Messages;
            } else {
                console.log('Error From Getting this message');
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error From Adding this message: ', err);
        throw err;
    }
};
export default addMessage   ;
