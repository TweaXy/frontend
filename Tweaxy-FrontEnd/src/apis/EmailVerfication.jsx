import { sendEmailVerificationSchema } from "../validations/authSchema";
const validEmail = ({ usermail, setValidEmail }) => {
  console.log(usermail);
  sendEmailVerificationSchema
    .validate({
      body: { email: usermail },
    })
    .then(() => {
      setValidEmail(true);
    })
    .catch((error) => {
      setValidEmail(false);
    });
};
export default validEmail;
