const posthtml = require('posthtml')

module.exports = (config = {}) => {
  const { options, plugins } = Object.assign({
    options: {},
    plugins: [],
  }, config)

  return {
    name: 'posthtml',
    async transformIndexHtml(input) {
      const { html } = await posthtml(plugins || []).process(input, options || {})
      return html
    }
  }
}
