
const apiGetTrendingTweets = async (trend, token) => {
    const lnk =`http://tweaxybackend.mywire.org/api/v1/trends/${trend}?limit=10&offset=0`;
    console.log("you are trying to get trending tweet about ", trend, "...");
    console.log("user token: " + token);
    try {
      const response = await fetch(lnk, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      
      const responseData = await response.json();
      if (responseData.status != "success") {
        console.log("failed to fetch the trending tweets!!");
        return [];
      } else {
        console.log("trending tweets are fetched successfully!");
        return responseData.data.items;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation in get trending tweets api: ", error);
    }
  };
  
  export  { apiGetTrendingTweets };












  