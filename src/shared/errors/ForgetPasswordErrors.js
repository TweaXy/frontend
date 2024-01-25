const ForgetPasswordErrors = {
    UNREGISTERED_EMAIL: "Sorry, we couldn't find your account.",
    WRONG_VERIFICATION_CODE: 'The code is wrong or expired please try again',
    UNMATCHING_PASSWORD_AND_CONFIRMATION_PASSWORD:
        'The two entered passwords do not match!',
    PASSWORD_LENGTH_ERROR:
        'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special',
    PASSWORD_SMALL_LETTER_ERROR:
        'password must contain at least 1 lower case letter',
    PASSWORD_CAPITAL_LETTER_ERROR:
        'password must contain at least 1 upper case letter',
    PASSWORD_NUMBER_ERROR: 'password must contain at least 1 number',
    PASSWORD_SPECIAL_CHARACTER_ERROR:
        'password must contain at least 1 special character',
};

export default ForgetPasswordErrors;
