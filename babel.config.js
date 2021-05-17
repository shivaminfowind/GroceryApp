// module.exports = {
//   project: {
//     ios: {},
//     android: {}, // grouped into "project"
//   },
//   assets: ["./assets/fonts/"], // stays the same
// };

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "module:react-native-dotenv"
  ]
};