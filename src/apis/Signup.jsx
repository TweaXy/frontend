import { Errors } from '../pages/SignUpPage/SignUpPage';

let urlsignup = 'http://16.171.65.142:3000/api/v1/auth/signup';

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
        _birthdayDate.month +
        '-' +
        _birthdayDate.day +
        '-' +
        _birthdayDate.year;

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
