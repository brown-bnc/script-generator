// plugins/bl-components.js

import Vue from 'vue'
import Finput from '~/components/baseforms/Finput.vue'

const components = { Finput }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
