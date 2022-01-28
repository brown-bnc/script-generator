// plugins/bl-components.js

import Vue from 'vue'
import Finput from '~/components/baseforms/Finput.vue'
import Fradiobuttongroup from '~/components/baseforms/Fradiobuttongroup.vue'

const components = { Finput, Fradiobuttongroup }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
