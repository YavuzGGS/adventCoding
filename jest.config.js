module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).ts"],
  moduleNameMapper: {},
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
