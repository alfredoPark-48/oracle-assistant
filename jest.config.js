module.exports = {
    rootDir: "./",
    moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
    testMatch: ["<rootDir>/__tests__/**/*.spec.ts"],
    setupFiles: [],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "./coverage",
    modulePaths: ["<rootDir>/src"],
    coveragePathIgnorePatterns: ["/node_modules/"],
};
