/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-undef */
import 'clipboard' // For the copy to clipboard plugin
import Prism from 'prismjs'
import Vue from 'vue'

// Include language support: (optional)
import 'prismjs/components/prism-bash'
// import 'prismjs/components/prism-javascript'
// import 'prismjs/components/prism-ruby'

// Include the toolbar plugin: (optional)
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

// Include the autolinker plugin: (optional)
// import 'prismjs/plugins/autolinker/prism-autolinker'
// import 'prismjs/plugins/autolinker/prism-autolinker.css'

// Include the line numbers plugin: (optional)
// import 'prismjs/plugins/line-numbers/prism-line-numbers'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// Include the line highlight plugin: (optional)
// import 'prismjs/plugins/line-highlight/prism-line-highlight'
// import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

// Include some other plugins: (optional)
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'
// import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

// Include a theme:
import 'prism-themes/themes/prism-material-oceanic.css'

// Bulma and prism both use .number and .tag in CSS polluting eachother.
// See https://github.com/loopmode/bulma-prism
import 'prismjs/plugins/custom-class/prism-custom-class'
Prism.plugins.customClass.map({ number: 'prism-number', tag: 'prism-tag' })

Vue.component('prism', {
  props: {
    lang: {
      type: String,
      default: 'js',
    },
  },
  mounted() {
    Prism.highlightAll()
  },
  computed: {
    noMarginStyle() {
      return {
        margin: 0,
      }
    },
  },
  template:
    '<div class="prism"><pre class="language-bash" :style="noMarginStyle"><code><slot></slot></code></pre></div>',
})
