const checkUserUUID = async (userUUID) => {
  const url = "http://16.171.65.142:3000/api/v1/users/checkUUIDExists";

  console.log("fetching check user uuid for: ", userUUID);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UUID: userUUID }),
    });

    return await response.json();
  } catch (err) {
    console.error("Error in Fetching:", err.message);
    throw err;
  }
};

export default checkUserUUID;
