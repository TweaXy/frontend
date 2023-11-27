import { Errors } from '../pages/SignUpPage/SignUpPage';
let urlsignup = 'http://16.171.65.142:3000/api/v1/auth/signup';
let UN = '';
const signup = (
    _usermail,
    _username,
    _name,
    _birthdayDate,
    _password,
    _emailVerificationToken,
    setcanbeuser,
    canbeuser,
    setwindowOpned,
    windowOpened
) => {
    const _nwbirthdayDate =
        _birthdayDate.month +
        '-' +
        _birthdayDate.day +
        '-' +
        _birthdayDate.year;
    fetch(urlsignup, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: _usermail,
            username: _username,
            name: _name,
            birthdayDate: _nwbirthdayDate,
            password: _password,
            emailVerificationToken: _emailVerificationToken,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Response from the API:', data);
            if (data.status === 'success') {
                UN = data.data.user.username;
                console.log('UN is', UN);
                setcanbeuser(true);
                setwindowOpned(windowOpened + 1);
            } else {
                Errors['Signup'] = data.message;
                setcanbeuser(false);
                console.log("SignUp Api",canbeuser)
            }
        })
        .catch((error) => {});
};

export { signup, UN };
