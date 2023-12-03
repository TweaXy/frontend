import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import captchaApi from '../../apis/captcha';
import './SignUpPage.css';
import { useRef } from 'react';

const CaptchaPage = ({ nextWindowHandler }) => {
    const p3 = 'Step 3 of 5';
    const captchaRef = useRef(null);
    const captchaApiHandler = () => {
        captchaApi(captchaRef.current.getValue());
    };

    return (
        <div className="sign-up-page-body">
            <ReCAPTCHA
                sitekey="6Le61wEpAAAAAGgZRq-B51uGQpEP3J4_YIUDCU-o"
                onChange={captchaApiHandler}
                ref={captchaRef}
            />

            <button
                className="black-wide-button"
                style={{
                    background: 'black',
                    marginTop: '170px',
                    marginBottom: '-140px',
                }}
                onClick={nextWindowHandler}
            >
                Next
            </button>
        </div>
    );
};

export default CaptchaPage;
