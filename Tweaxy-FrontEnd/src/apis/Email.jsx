import {
  isEmailUniqueSchema,
  isUsernameUniqueSchema,
} from "../validations/userSchema";
import { Errors } from "../components/FloatingWindow";
const isUniqeEmail = (usermail, setuniqueEmail) => {
  isEmailUniqueSchema
    .validate({
      body: {
        email: usermail,
      },
    })
    .then(() => {
      setuniqueEmail(true);
    })
    .catch((error) => {
      console.log(error.message);
      setuniqueEmail(false);
      Errors["Email"] = error.message;
    });
};
const isUniqueUsername = (username, setisuniqueusername) => {
  isUsernameUniqueSchema
    .validate({
      body: {
        username: username,
      },
    })
    .then(() => {
      setisuniqueusername(true);
    })
    .catch((error) => {
      console.log(error.message);
      setisuniqueusername(false);
      Errors["Username"] = error.message;
    });
};
export { isUniqeEmail, isUniqueUsername };
