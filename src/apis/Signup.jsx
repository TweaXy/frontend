import { Errors } from '../pages/SignUpPage/SignUpPage';

let urlsignup = 'http://16.171.65.142:3000/api/v1/auth/signup';
import { months } from '../pages/SignUpPage/SignUpPage';
const signup = async (
    _usermail,
    _name,
    _birthdayDate,
    _password,
    _emailVerificationToken,
    setcanbeuser,
    setwindowOpned
) => {
    const _nwbirthdayDate =
        months[_birthdayDate.month - 1] +
        '-' +
        _birthdayDate.day +
        '-' +
        _birthdayDate.year;
    console.log(_birthdayDate);
    try {
        const response = await fetch(urlsignup, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: _usermail,
                name: _name,
                birthdayDate: _nwbirthdayDate,
                password: _password,
                emailVerificationToken: _emailVerificationToken,
            }),
        });

        const data = await response.json();

        console.log('Response from the API:', data);

        if (response.ok) {
            setcanbeuser(true);
            return data.data;
        } else {
            Errors['Signup'] = data.message;
            setcanbeuser(false);
            console.log('SignUp Api', setcanbeuser);
            throw new Error(data.message); // or throw data; if you want to preserve the original error structure
        }
    } catch (error) {
        console.error('Error in SignUp:', error.message);
        throw error;
    }
};

export default signup;
