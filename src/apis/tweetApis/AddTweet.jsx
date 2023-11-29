
const addTweetURL ="http://16.171.65.142:3000/api/v1/tweets/";
const apiAddTweet =async (tweetText,tweetMedia,token) => {
    console.log("this is a token" + token);
    try {
      const response = await fetch(addTweetURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({text: tweetText , media:tweetMedia }),
      });
      
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status != "success") {
        // take action 
        console.log("cant add tweet");
      } else {
        console.log("Tweet ADDED");
      }
    } catch (error) {
      // Handle errors during the fetch
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  
  export  { apiAddTweet };












  