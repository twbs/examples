const IN_PRODUCTION = process.env.NODE_ENV === "production";
const bootstrap = "node_modules/bootstrap"

module.exports = {
  plugins: [
    IN_PRODUCTION && require("@fullhuman/postcss-purgecss")({
      content: [
        "./src/index.html",
        "./src/**/*.js",

        // --- Uncomment the required modules to keep the requireds styles.
        
        // `${bootstrap}/js/dist/alert.js`,
        // `${bootstrap}/js/dist/base-component.js`,
        // `${bootstrap}/js/dist/button.js`,
        // `${bootstrap}/js/dist/carousel.js`,
        // `${bootstrap}/js/dist/collapse.js`,
        // `${bootstrap}/js/dist/dropdown.js`,
        // `${bootstrap}/js/dist/modal.js`,
        `${bootstrap}/js/dist/offcanvas.js`,
        `${bootstrap}/js/dist/popover.js`,
        // `${bootstrap}/js/dist/scrollspy.js`,
        // `${bootstrap}/js/sdist/tab.js`,
        // `${bootstrap}/js/dist/toast.js`,
        // `${bootstrap}/js/dist/tooltip.js`,
      ],
      defaultExtractor(content) {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          ""
        );
        return (
          contentWithoutStyleBlocks.match(
            /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
          ) || []
        );
      },
      keyframes: true,
      variables: true
    }),
  ],
};
