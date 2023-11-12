import { Errors } from "../pages/SignUpPage/SignUpPage";

let emailVerficationUrl =
  "http://16.171.65.142:3000/api/v1/auth/sendEmailVerification";
let checkEmailVerificationUrl =
  "http://16.171.65.142:3000/api/v1/auth/checkEmailVerification";
const sendEmailVerification = (usermail) => {
  fetch(emailVerficationUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: usermail }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from the API:", data);
      if (data.status === "success") {}
      else{
        // to continue -resend him another token 
      }
    })
    .catch((error) => {
      //manga
    });
};
const checkEmailVerification = (
  usermail,
  token,
  setisokverficationcode,
  nextWindowHandler
) => {
  let urlWithPathParams = `${checkEmailVerificationUrl}/${encodeURIComponent(
    usermail
  )}/${encodeURIComponent(token)}`;
  fetch(urlWithPathParams)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response from the API:", data);
      if (data.status === "success") {
        setisokverficationcode(true);
        nextWindowHandler();
      } else {
        Errors["Verficationcode"] = data.message;
        setisokverficationcode(false);
        console.log(Errors["Verficationcode"])
      }
    })
    .catch((error) => {});
};
export { sendEmailVerification, checkEmailVerification };
