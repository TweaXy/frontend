const UpdatePasswordErrors = {
    WRONG_PASSWORD: 'wrong password!',
    NEW_PASSWORD_MATCHED_OLD_PASSWORD:
        'new password must be different from old password',
    UNMATCHING_PASSWORD_AND_CONFIRMATION_PASSWORD: 'Passwords do not match',
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

export default UpdatePasswordErrors;
