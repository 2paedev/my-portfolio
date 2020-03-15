module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  coverageReporters: ["html", "text-summary"],
  coveragePathIgnorePatterns: [
    "src/main.js",
    "src/shared/constants",
    "src/shared/langs/",
    "src/assets/"
  ]
};
