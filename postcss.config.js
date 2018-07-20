module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-media-minmax'),
    require('postcss-nested'),
    require('postcss-strip-inline-comments'),
    require('postcss-preset-env')
  ]
};