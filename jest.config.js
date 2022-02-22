module.exports = {
  //   collectCoverage: true,
  //   collectCoverageFrom: ["**/__test__/**/*.{js,vue}", "!**/node_modules/**"],
  testMatch: ["**/__test__/**/*.[jt]s?(x)"],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    // 用 vue-jest 处理 vue 文件
    ".*\\.(vue)$": "vue-jest",
    // 用babel-jest 处理 js 文件
    ".*\\.(js)$": "babel-jest",
  },
};
