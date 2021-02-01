<template>
  <div>
    <DHero
      v-if="false"
      :title="title"
      :subtitle="subtitle"
      variant="is-link"
      :fullHeight="false"
    />
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title">Neuroimaging Script Generator</p>
              <p class="subtitle">Generating Scripts for Oscar and more.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <nav class="tabs is-boxed">
            <ul>
              <li
                :class="{
                  'is-active has-text-link-dark': active_nav == 'overview',
                }"
                @click="activate('overview')"
              >
                <a class="custom-size"> Overview </a>
              </li>
              <li
                :class="{
                  'is-active has-text-link-dark': active_nav == 'xnat2bids',
                }"
                @click="activate('xnat2bids')"
              >
                <a class="custom-size"> xnat2bids </a>
              </li>
              <li
                :class="{
                  'is-active has-text-link-dark':
                    active_nav == 'bids-validator',
                }"
                @click="activate('bids-validator')"
              >
                <a class="custom-size"> bids-validator </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { DHero } from '@brown-ccv/disco-vue-components'
import { mapFields } from 'vuex-map-fields'

export default {
  components: {
    DHero,
  },
  computed: {
    ...mapFields(['navigation.active_nav']),
  },
  methods: {
    activate(el) {
      this.$store.commit('updateField', {
        path: 'navigation.active_nav',
        value: el,
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-size {
  font-size: 18px;
}
</style>
