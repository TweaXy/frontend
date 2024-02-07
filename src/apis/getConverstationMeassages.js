const MessageURL = `http://tweaxybackend.mywire.org/api/v1`;
const getConversationMessages = async (
    Conversationid,
    token,
    _limit,
    _offset
) => {
    const urlWithQueryParam = `${MessageURL}/conversations/${encodeURIComponent(
        Conversationid
    )}?limit=${_limit}?offset=${_offset}`;
    try {
        const response = await fetch(urlWithQueryParam, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const responseBody = await response.text();
        if (response.ok) {
            const responseData = await JSON.parse(responseBody);
            if (responseData.status === 'success') {
                const Messages = responseData.data.items;
                console.log('Ok ' + Messages);
                return Messages;
            } else {
                console.log('Error From Getting this conversation message');
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error From Getting this conversation message: ', err);
        throw err;
    }
};
export default getConversationMessages;
