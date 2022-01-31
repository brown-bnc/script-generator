<template>
  <div>
    <vue-form-json-schema
      v-model="sbatchSchema[sbatchIndex]"
      :schema="schema"
      :ui-schema="uiSchema"
    ></vue-form-json-schema>
    {{ sbatchSchema[sbatchIndex] }}
    <!-- <section>
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
          <p class="card-header-title">General: Jobname, Queue and Condo</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field label="Job name">
              <b-input v-model="sbatch[sbatchIndex].jobname"></b-input>
            </b-field>
            <b-field label="Partition">
              <b-radio-button
                v-model="sbatch[sbatchIndex].partition"
                native-value="BATCH"
                type="is-link"
              >
                <span>BATCH</span>
              </b-radio-button>
              <b-radio-button
                v-model="sbatch[sbatchIndex].partition"
                native-value="GPU"
              >
                <span>GPU</span>
              </b-radio-button>
            </b-field>
          </div>
        </div>
      </b-collapse>
      <b-collapse
        :key="1"
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
          <p class="card-header-title">Resources: Nodes, cores and memory</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field
              grouped
              group-multiline
              label="Wall-time for your job (HH:MM:SS)"
            >
              <b-numberinput
                v-model="sbatch[sbatchIndex].hours"
                :min="0"
                :max="100"
              ></b-numberinput>
              <b-numberinput
                v-model="sbatch[sbatchIndex].minutes"
                :min="0"
                :max="60"
              ></b-numberinput>
              <b-numberinput
                v-model="sbatch[sbatchIndex].seconds"
                :min="0"
                :max="60"
              ></b-numberinput>
            </b-field>
            <b-field label="Number of nodes">
              <b-numberinput
                v-model="sbatch[sbatchIndex].nnodes"
                :min="1"
                :max="10"
              ></b-numberinput>
            </b-field>
            <b-field label="Number of cores per node">
              <b-numberinput
                v-model="sbatch[sbatchIndex].ncpus"
                :min="1"
                :max="100"
              ></b-numberinput>
            </b-field>
            <b-field label="RAM per node (GB)">
              <b-numberinput
                v-model="sbatch[sbatchIndex].memory"
                :min="0"
                :max="1000"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </b-collapse>
      <b-collapse
        :key="2"
        class="card"
        animation="slide"
        :open="isOpen == 2"
        @open="isOpen = 2"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">Logs and Notifications</p>

          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class="content">
            <b-field label="Output Log">
              <b-input v-model="sbatch[sbatchIndex].output"></b-input>
            </b-field>
            <b-field label="Email Event">
              <b-checkbox-button
                v-model="sbatch[sbatchIndex].emailevents"
                native-value="BEGIN"
                type="is-link"
                :disabled="allEmailEvents == 1"
              >
                BEGIN
              </b-checkbox-button>
              <b-checkbox-button
                v-model="sbatch[sbatchIndex].emailevents"
                native-value="END"
                :disabled="allEmailEvents == 1"
              >
                END
              </b-checkbox-button>
              <b-checkbox-button
                v-model="sbatch[sbatchIndex].emailevents"
                type="is-link"
                native-value="REQUE"
                :disabled="allEmailEvents == 1"
              >
                REQUE
              </b-checkbox-button>
              <b-checkbox-button
                v-model="sbatch[sbatchIndex].emailevents"
                native-value="FAIL"
                :disabled="allEmailEvents == 1"
              >
                FAIL
              </b-checkbox-button>
              <b-checkbox-button v-model="allEmailEvents" native-value="1">
                ALL
              </b-checkbox-button>
            </b-field>
            <b-field>
              <b-input
                v-model="sbatch[sbatchIndex].email"
                placeholder="Email"
                type="email"
                icon="email"
              >
              </b-input>
            </b-field>
          </div>
        </div>
      </b-collapse>
    </section> -->
  </div>
</template>

<script>
import { mapMultiRowFields, mapFields } from 'vuex-map-fields'
import VueFormJsonSchema from 'vue-form-json-schema/dist/vue-form-json-schema.esm.js'
import baseJobUISchema from '~/data/basejob_ui_schema.json'
import baseJobSchema from '~/data/basejob_schema.json'

export default {
  props: {
    sbatchIndex: {
      type: Number,
      required: true,
      validator: (value) => [0, 10].includes(value),
    },
  },
  components: {
    'vue-form-json-schema': VueFormJsonSchema,
  },
  data() {
    return {
      allEmailEvents: 0,
      isOpen: 0,
      state: {},
      schema: baseJobSchema,
    }
  },
  computed: {
    ...mapMultiRowFields(['sbatch']),
    ...mapFields({ sbatchSchema: 'sbatchXnat2Bids' }),
    uiSchema() {
      return baseJobUISchema
    },
  },
  watch: {
    allEmailEvents() {
      if (this.allEmailEvents) {
        this.$store.commit('updateField', {
          path: 'sbatch[sbatchIndex].emailevents',
          value: ['ALL'],
        })
      } else {
        this.$store.commit('updateField', {
          path: 'sbatch[sbatchIndex].emailevents',
          value: [],
        })
      }
    },
  },
  methods: {
    searchIconClick() {
      alert('You wanna make a search?')
    },
    clearIconClick() {
      this.email = ''
    },
    onChange(value) {
      this.model = value
    },
    onChangeState(value) {
      this.state = value
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  background-color: rgba(89, 203, 232, 0.3);
}
</style>
