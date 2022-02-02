// plugins/bl-components.js

import Vue from 'vue'
import FInput from '~/components/baseforms/FInput.vue'
import FRadioButtonGroup from '~/components/baseforms/FRadioButtonGroup.vue'
import FCheckBoxButtonGroup from '~/components/baseforms/FCheckBoxButtonGroup.vue'
import FNumberInput from '~/components/baseforms/FNumberInput.vue'
import FNumberInputGroup from '~/components/baseforms/FNumberInputGroup.vue'
import FCollapsableCard from '~/components/baseforms/FCollapsableCard.vue'

const components = {
  FInput,
  FRadioButtonGroup,
  FCheckBoxButtonGroup,
  FNumberInput,
  FNumberInputGroup,
  FCollapsableCard,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
