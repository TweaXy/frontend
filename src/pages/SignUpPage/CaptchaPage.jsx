import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './SignUpPage.css';

const CaptchaPage = ({ nextWindowHandler }) => {
    const p3 = 'Step 3 of 5';
    return (
        <div className="sign-up-page-body">
            <ReCAPTCHA sitekey="6Le61wEpAAAAAGgZRq-B51uGQpEP3J4_YIUDCU-o" />

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
