<template>
  <div>
    <!-- <section>
      <b-collapse
        class="card"
        animation="slide"
        :key="0"
        :open="isOpen == 0"
        @open="isOpen = 0"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">General: Version and paths</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field label="Version of xnat-tools">
              <b-input v-model="version"></b-input>
            </b-field>
            <b-field label="Output Path">
              <b-input v-model="output_path"></b-input>
            </b-field>
          </div>
        </div>
      </b-collapse>

      <b-collapse
        class="card"
        animation="slide"
        :key="1"
        :open="isOpen == 1"
        @open="isOpen = 1"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">XNAT2BIDS Inputs</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field label="Include series">
              <b-input v-model="i_series"></b-input>
            </b-field>
            <b-field label="Skip series">
              <b-input v-model="s_series"></b-input>
            </b-field>
            <b-field>
              <b-switch v-model="needs_bidsmap">Needs bidsmap file</b-switch>
            </b-field>
            <b-field>
              <b-input v-if="needs_bidsmap" v-model="bidsmap_file"></b-input>
            </b-field>
            <b-field grouped label="Flags">
              <b-switch v-model="overwrite" type="is-info">Overwrite</b-switch>
              <b-switch v-model="very_verbose" type="is-info"
                >Very Verbose</b-switch
              >
              <b-switch v-model="cleanup" type="is-info">Clean Up</b-switch>
            </b-field>
          </div>
        </div>
      </b-collapse>
    </section> -->
  </div>
</template>

<script>
// import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      allEmailEvents: 0,
      isOpen: 0,
    }
  },
  watch: {
    allEmailEvents() {
      if (this.allEmailEvents) {
        this.$store.commit('updateField', {
          path: 'emailevents',
          value: ['ALL'],
        })
      } else {
        this.$store.commit('updateField', {
          path: 'emailevents',
          value: [],
        })
      }
    },
  },
  //   computed: {
  //     ...mapFields([
  //       'jobname',
  //       'partition',
  //       'nnodes',
  //       'ncpus',
  //       'memory',
  //       'time.hours',
  //       'time.minutes',
  //       'time.seconds',
  //       'output',
  //       'email',
  //       'emailevents',
  //     ]),
  //   },
  //   methods: {
  //     searchIconClick() {
  //       alert('You wanna make a search?')
  //     },
  //     clearIconClick() {
  //       this.email = ''
  //     },
  //   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  background-color: rgba(89, 203, 232, 0.3);
}
</style>
