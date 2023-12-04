import { TextField } from '@mui/material';
import './SignUpPage.css';
import './SignUpHome.css';
import SignUpSelectors from '../../shared/selectors/SignUp';

const create = 'Create your account';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const SignUpPage3 = ({ Data1, Data2, EditInformation, nextWindowHandler }) => {
    const dateval = months[Data2.month] + ' ' + Data2.day + ',' + Data2.year;
    return (
        <div className="sign-up-page-body">
            <h1>{create}</h1>
            <div className="sign-up-uuid-field">
                <TextField
                    className="sign-up-uuid-field"
                    variant="outlined"
                    id="outlined-basic"
                    name="username"
                    label="Name"
                    data-test={SignUpSelectors.CONFIRM_NAME_FIELD}
                    value={Data1.username}
                    onClick={EditInformation}
                />
            </div>
            <div className="sign-up-uuid-field">
                <TextField
                    className="sign-up-uuid-field"
                    variant="outlined"
                    id="outlined-basic"
                    name="usermail"
                    label="Email"
                    data-test={SignUpSelectors.CONFIRM_EMAIL_FIELD}
                    value={Data1.usermail}
                    onClick={EditInformation}
                />
            </div>
            <div className="sign-up-uuid-field">
                <TextField
                    className="sign-up-uuid-field"
                    variant="outlined"
                    id="outlined-basic"
                    label="Date"
                    data-test={SignUpSelectors.CONFIRM_BIRTH_DATE_FIELD}
                    value={dateval}
                    onClick={EditInformation}
                />
            </div>
            <button
                className="Hp-black-wide-button"
                onClick={nextWindowHandler}
                data-test={SignUpSelectors.NEXT_BUTTON}
            >
                Next
            </button>
        </div>
    );
};

export default SignUpPage3;
