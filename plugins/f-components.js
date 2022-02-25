// plugins/bl-components.js

import Vue from 'vue'
import FInput from '~/components/baseforms/FInput.vue'
import FInfoToolTip from '~/components/baseforms/FInfoToolTip.vue'
import FRadioButtonGroup from '~/components/baseforms/FRadioButtonGroup.vue'
import FCheckBoxButtonGroup from '~/components/baseforms/FCheckBoxButtonGroup.vue'
import FNumberInput from '~/components/baseforms/FNumberInput.vue'
import FNumberInputGroup from '~/components/baseforms/FNumberInputGroup.vue'
import FCollapsableCard from '~/components/baseforms/FCollapsableCard.vue'
import Xnat2BidsSessions from '~/components/xnat2bids/Xnat2BidsSessions.vue'
import Xnat2BidsBidsmap from '~/components/xnat2bids/Xnat2BidsBidsmap.vue'

const components = {
  FInput,
  FInfoToolTip,
  FRadioButtonGroup,
  FCheckBoxButtonGroup,
  FNumberInput,
  FNumberInputGroup,
  FCollapsableCard,
  Xnat2BidsSessions,
  Xnat2BidsBidsmap,
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
