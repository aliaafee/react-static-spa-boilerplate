const path = require("path");
const root = path.join(__dirname, "..");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    alert: path.join(root, "components", "ui", "alert.tsx"),
    index: {
      import: path.join(root, "src", "index.jsx"),
      dependOn: ["alert"],
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(root, "src", "diets"),
          to: path.join(root, "dist", "diets"),
        },
      ],
    }),
  ],
};
