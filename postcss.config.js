// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
const plugins = {
  tailwindcss: {},
  autoprefixer: {},
}

if (global.__isStorybook) {
  delete plugins.tailwindcss
}

module.exports = {
  plugins
}
