module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,js}'],
    testPathIgnorePatterns: [
        'src/interfaces/*',
    ],
    coveragePathIgnorePatterns: [
        'src/interfaces/*'
    ],
};
