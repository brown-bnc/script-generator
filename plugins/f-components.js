// plugins/bl-components.js

import Vue from 'vue'
import Finput from '~/components/baseforms/Finput.vue'
import Fradiobuttongroup from '~/components/baseforms/Fradiobuttongroup.vue'
import Fcheckboxbuttongroup from '~/components/baseforms/Fcheckboxbuttongroup.vue'
import Fnumberinput from '~/components/baseforms/Fnumberinput.vue'
import Fnumberinputgroup from '~/components/baseforms/Fnumberinputgroup.vue'
import Fcollabsablecard from '~/components/baseforms/Fcollabsablecard.vue'

const components = {
  Finput,
  Fradiobuttongroup,
  Fcheckboxbuttongroup,
  Fnumberinput,
  Fnumberinputgroup,
  Fcollabsablecard,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
