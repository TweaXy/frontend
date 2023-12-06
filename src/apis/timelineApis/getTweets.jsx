const getTweetURL =`http://16.171.65.142:3000/api/v1/home?limit=8&offset=0`;
  const apiGetTweet = async (token) => {
    console.log("this is a token" + token);
      try {
          const response = await fetch(getTweetURL, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${token}`,
              },
          });
  
          const responseBody = await response.text();
          console.log('get tweets response: ', responseBody);
  
          if (response.ok) {
              const responseData = JSON.parse(responseBody);
  
              if (responseData.status === 'success') {
                  const tweets = responseData.data.items;
                  return tweets;
              } else {
                  throw new Error(`Error: ${responseData.status}`);
              }
          } else {
              throw new Error(`Error: ${response.status}`);
          }
      } catch (err) {
          console.error('Error getting user followers: ', err);
          throw err;
      }
  };

  export  { apiGetTweet };












  