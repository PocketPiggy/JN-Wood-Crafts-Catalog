const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

/*

const withSass = require('@zeit/next-sass')
//const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withSass({
    webpack(config, options) {
      // custom webpack loaders if you need
      return config;
    },
  }),
  //withCSS({

  //})
);
*/
