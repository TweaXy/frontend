const ValidationErrors = {
    EMPTY_EMAIL_ERROR: 'Email is required',
    INVALID_EMAIL_ERROR: 'Email is invalid',
    EMPTY_PASSWORD_ERROR: 'Password is required',
    PASSWORD_LENGTH_ERROR: 'Password must be at least 8 characters',
    PASSWORD_SMALL_LETTER_ERROR:
        'Password should contain at least one small letter',
    PASSWORD_CAPITAL_LETTER_ERROR:
        'Password should contain at least one capital letter',
    PASSWORD_NUMBER_ERROR: 'Password should contain a number',
    PASSWORD_SPECIAL_CHARACTER_ERROR:
        'Password should contain at least one special character',
    EMPTY_NAME_ERROR: 'Name is required',
    EMPTY_CODE_ERROR: 'Code is required',
    CODE_LENGTH_ERROR: 'Code must be exactly 8 characters',
    EMPTY_USERNAME_ERROR: 'Username is required',
    USERNAME_LENGTH_ERROR: 'Username must be at least 4 characters',
};

export default ValidationErrors;
