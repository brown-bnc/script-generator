<template>
  <div>
    <section>
      <b-collapse
        :key="0"
        class="card"
        animation="slide"
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
            <b-field label="Version of bids-validator">
              <b-input v-model="version"></b-input>
            </b-field>
            <b-field
              label="Bids Directory"
              type="is-warning"
              message="Required"
            >
              <b-input
                v-model="bids_dir"
                placeholder="/gpfs/data/bnc/shared/bids-export/${USER}/sanes/study-sadlum/bids"
              ></b-input>
            </b-field>
          </div>
        </div>
      </b-collapse>

      <b-collapse
        :key="2"
        class="card"
        animation="slide"
        :open="isOpen == 1"
        @open="isOpen = 1"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">Flags</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field>
              <b-switch v-model="ignore_warnings" type="is-info"
                >Ignore Warnings</b-switch
              >
            </b-field>
            <b-field>
              <b-switch v-model="ignore_nifti_headers" type="is-info"
                >Ignore NIFTI Header Warnings</b-switch
              >
            </b-field>
            <b-field>
              <b-switch v-model="ignore_subject_consistency" type="is-info"
                >Ignore Subject Consistency</b-switch
              >
            </b-field>
            <b-field>
              <b-switch v-model="verbose" type="is-info">Verbose</b-switch>
            </b-field>
            <b-field>
              <b-switch v-model="json" type="is-info"
                >Output Result to JSON</b-switch
              >
            </b-field>
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      isOpen: 0,
    }
  },
  computed: {
    ...mapFields([
      'bidsvalidator.version',
      'bidsvalidator.bids_dir',
      'bidsvalidator.ignore_warnings',
      'bidsvalidator.ignore_nifti_headers',
      'bidsvalidator.ignore_subject_consistency',
      'bidsvalidator.json',
      'bidsvalidator.verbose',
    ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  background-color: rgba(89, 203, 232, 0.3);
}
.card-content-gray {
  background-color: rgba(89, 203, 232, 0.3);
}
</style>
