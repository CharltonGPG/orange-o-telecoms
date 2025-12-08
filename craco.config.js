const webpack = require("webpack");
const path = require("path");

module.exports = {
  webpack: {
    configure: (config) => {
      // Set resolve fallbacks
      config.resolve.fallback = {
        ...config.resolve.fallback,
        util: require.resolve("util"),
        url: require.resolve("url"),
        zlib: false,
        assert: false,
        buffer: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
      };

      // Set resolve aliases - ADD @routes HERE!
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "src"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@context": path.resolve(__dirname, "src/context"),
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@routes": path.resolve(__dirname, "src/routes"),
      };

      // Add file extensions for module resolution
      config.resolve.extensions = [".js", ".jsx", ".json"];

      // Add Webpack plugins
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser.js",
          Buffer: ["buffer", "Buffer"],
        })
      );

      // Disable source maps in production
      if (process.env.NODE_ENV === "production") {
        config.devtool = false;
      }

      return config;
    },
  },
  style: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
};