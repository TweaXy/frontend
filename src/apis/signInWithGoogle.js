const signInWithGoogle = async () => {
  const url = "http://16.171.65.142:3000/api/v1/auth/google";
  try {
    console.log("Fetching Google sign-in URL...");
    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("response: ", response);
    if (response.ok) {
      console.log("Google sign-in URL fetched successfully.");
      const result = await response.json();
      const redirectUrl = result.url;

      if (redirectUrl) {
        console.log("Redirecting to Google sign-in URL...");
        window.location.href = redirectUrl;
      } else {
        throw new Error("Invalid redirect URL in the server response");
      }
    } else {
      throw new Error("Failed to fetch Google sign-in URL");
    }
  } catch (err) {
    console.error(`Error during Google Sign-in: ${err.message}`);
    throw new Error(`Error during Google Sign-in: ${err.message}`);
  }
};

export default signInWithGoogle;
