const posthtml = require('posthtml')

module.exports = (options = {}) => {
  return {
    name: 'posthtml',
    async transformIndexHtml(input) {
      const { html } = await posthtml(options.plugins || [])
        .process(input, options || {})
      return html
    }
  }
}
