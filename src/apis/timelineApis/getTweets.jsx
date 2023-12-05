

// const apiGetTweet =async (token) => {
//     console.log("this is a token" + token);
//     try {
//       const response = await fetch(getTweetURL, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//       });
      
//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.status != "success") {
//         // take action 
//         console.log("cant get Tweets");
//         return null;
//       } else {
//         console.log("SUCCESS Tweets are here");
//         return responseData.data.items;
//       }
//     } catch (error) {
//       // Handle errors during the fetch
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   };
const getTweetURL =`http://16.171.65.142:3000/api/v1/home?limit=16&offset=0`;
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
                  console.log("this inside the api and the tweets are " + tweets);
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












  