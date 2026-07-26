module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './index.html'],
  css: ['./src/**/*.css'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  safelist: {
    standard: ['html', 'body', 'img', 'svg', 'router-link', 'router-view'],
    deep: [/^active$/, /^open$/, /^scrolled$/, /^highlight$/]
  }
}
