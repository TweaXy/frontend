const Getrepliesurl = `https://tweaxybackend.mywire.org/api/v1/interactions`;
const Getreplies = async (token,tweetid, _limit, _offset) => {
    console.log('tweet id from getreplies ', tweetid);
    console.log('token  from getreplies ', token);
    const urlWithQueryParam = `${Getrepliesurl}/${encodeURIComponent(
        tweetid
    )}/replies?limit=${_limit}?offset=${_offset}`;
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
            const responseData = JSON.parse(responseBody);
            if (responseData.status === 'success') {
                console.log("ok from getreplies")
                const replies = responseData.data;
                console.log(replies)
                return replies;
            } else {
                console.log('Error From Failing getting replies');
                throw new Error(`Error: ${responseData.status}`);
            }
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (err) {
        console.error('Error From Failing getting replies: ', err);
        throw err;
    }
};
export default Getreplies;
