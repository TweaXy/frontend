
const apiSearchForUsers = async (userNameOrName, token) => {
    console.log("token to the search for users api: "+ token);
    console.log("input to the search for users api: " + userNameOrName);

    // /users/search/match?keyword=value&limit=value&offset=value

    const lnk =`https://tweaxybackend.mywire.org/api/v1/users/search/match?keyword=${userNameOrName}&limit=10&offset=0`;

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
        console.log("failed to fetch the searched users!!");
        return [];
      } else {
        console.log("searched users fetched successfully!");
        return responseData.data.users;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation in search users api: ", error);
    }
  };
  
  export  { apiSearchForUsers };












  