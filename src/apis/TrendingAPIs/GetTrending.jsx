
const lnk ="http://tweaxybackend.mywire.org/api/v1/trends/?limit=5&offset=0";
const apiGetTrending = async (token) => {
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
        console.log("failed to fetch the trendings!!");
        return [];
      } else {
        console.log("trendings fetched successfully!");
        return responseData.data.items;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation in get trending api: ", error);
    }
  };
  
  export  { apiGetTrending };












  