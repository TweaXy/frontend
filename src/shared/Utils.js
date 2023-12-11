import CryptoJS from 'crypto-js';
export const hashText = (text) => {
    let words = CryptoJS.enc.Utf8.parse(text);
    let hash = CryptoJS.SHA256(words);
    return hash.toString(CryptoJS.enc.Hex).substring(0, 10);
};
