const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    emotionAlias: false,
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "./components"
    );
    config.resolve.alias["@config"] = path.resolve(__dirname, "./config");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "./hooks");
    config.resolve.alias["@layout"] = path.resolve(__dirname, "./layout");
    config.resolve.alias["@pages"] = path.resolve(__dirname, "./pages");
    config.resolve.alias["@services"] = path.resolve(__dirname, "./services");
    config.resolve.alias["@store"] = path.resolve(__dirname, "./store");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "./styles");
    config.resolve.alias["@theme"] = path.resolve(__dirname, "./theme");
    config.resolve.alias["@type"] = path.resolve(__dirname, "./type");
    config.resolve.alias["@utils"] = path.resolve(__dirname, "./utils");

    return config;
  },
};
