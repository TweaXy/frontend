import { TextField } from '@mui/material';
import './SignUpPage.css';
import './SignUpHome.css';
import { useState, useEffect } from 'react';
import {
    sendEmailVerification,
    checkEmailVerification,
} from '../../apis/EmailVerfication';
import { Errors } from './SignUpPage';
const SignUpPage4 = ({
    verficationcode,
    setverficationcode,
    Data1,
    nextWindowHandler,
}) => {
    const [iscompleteverficationcode, setiscompleteverficationcode] =
        useState(false);
    const [isokverficationcode, setisokverficationcode] = useState(true);
    const verficationcodehandler = (ev) => {
        setverficationcode(ev.target.value);
    };
    useEffect(
        function checkverficationcode() {
            const verficationcodeok = verficationcode.length === 8;
            setiscompleteverficationcode(verficationcodeok);
        },
        [verficationcode]
    );
    const onclickHandler = () => {
        checkEmailVerification(
            Data1.usermail,
            verficationcode,
            setisokverficationcode,
            nextWindowHandler
        );
    };
    const resendHandler = () => {
        sendEmailVerification(Data1.usermail);
    };
    const p3 = 'Step 4 of 5';
    return (
        <div className="sign-up-page-body">
            <h1>We've sent you a verification code</h1>
            <p>Enter it below to verfiy {Data1.usermail}</p>
            <div className="sign-up-uuid-field" style={{ width: '438px' }}>
                <TextField
                    className="sign-up-uuid-field"
                    variant="outlined"
                    id="outlined-basic"
                    label="verification code"
                    value={verficationcode}
                    onChange={verficationcodehandler}
                    style={{ width: '438px' }}
                />
            </div>
            {!isokverficationcode && (
                <p className="error-message">{Errors['Verficationcode']}</p>
            )}
            <a
                onClick={resendHandler}
                style={{ fontFamily: 'Arial', fontWeight: 'inherit' }}
            >
                Didn't receive mail?
            </a>
            <button
                className="Hp-black-wide-button"
                disabled={!iscompleteverficationcode}
                style={{
                    background: iscompleteverficationcode ? 'black' : 'gray',
                }}
                onClick={onclickHandler}
            >
                Next
            </button>
        </div>
    );
};

export default SignUpPage4;
