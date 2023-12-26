const IN_PRODUCTION = process.env.NODE_ENV === "production";
const bootstrap = "node_modules/bootstrap"

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          "./src/index.html",
          "./src/**/*.js",

          /* 
            To optimize your final build size, PurgeCSS is configured to remove all unused styles. 
            
            If you have specific Bootstrap JavaScript modules in your project that need to be included
            in the final build, uncomment the corresponding lines below to exclude the styles created
            by those specific JS modules from purging.

            Example:
            If your project includes a carousel, uncomment the line:
            // `${bootstrap}/js/dist/carousel.js`,

          */
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

          /*
            If you are unsure about which JS modules your project needs, 
            you can comment out or remove all of the above individual modules 
            and include the entire Bootstrap JavaScript file. 
            Just uncomment the line below, and you are good to go.

            Note: Excluding the entire bootstrap bundle javascript may increase 
            the final build size of the css file by a few kilobytes.
          */

          // `${bootstrap}/dist/js/bootstrap.bundle.min.js`,
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
        variables: true,
      }),
  ],
};
