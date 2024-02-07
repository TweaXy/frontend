
const apiSearchForTweets = async (searchInput, token, username) => {

    console.log("input to the search for tweets api: " + searchInput);

    const lnk =`http://tweaxybackend.mywire.org/api/v1/tweets/search?keyword=${searchInput}&username=${username}&limit=10&offset=0`;

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
        console.log("failed to fetch the searched tweets!!");
        return [];
      } else {
        console.log("searched tweets fetched successfully!");
        return responseData.data.items;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation in search tweets api: ", error);
    }
  };
  
  export  { apiSearchForTweets };












  