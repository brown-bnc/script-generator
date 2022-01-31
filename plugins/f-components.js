// plugins/bl-components.js

import Vue from 'vue'
import Finput from '~/components/baseforms/Finput.vue'
import Fradiobuttongroup from '~/components/baseforms/Fradiobuttongroup.vue'
import Fnumberinput from '~/components/baseforms/Fnumberinput.vue'

const components = { Finput, Fradiobuttongroup, Fnumberinput }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
