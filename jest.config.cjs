module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};
