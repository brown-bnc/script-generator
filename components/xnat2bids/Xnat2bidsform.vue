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
            <b-field label="Version of xnat-tools">
              <b-input v-model="version"></b-input>
            </b-field>
            <b-field
              label="Output Path"
              type="is-warning"
              message="Path required"
            >
              <b-input
                v-model="output_path"
                placeholder="/gpfs/data/bnc/shared/bids-export/${USER}"
              ></b-input>
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
          <p class="card-header-title">MRI Sessions</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div
            v-for="(session, index) in sessions"
            :key="index"
            class="content"
          >
            <b-notification :closable="false">
              <b-field type="is-warning">
                <p class="control">
                  <span class="button is-static is-link">Participant ID</span>
                </p>
                <b-input v-model="session.participant_id" placeholder="135" />
              </b-field>
              <b-field type="is-warning" message="Required">
                <p class="control">
                  <span class="button is-static">XNAT ACCESSION #</span>
                </p>
                <b-input v-model="session.xnat_id" placeholder="XNAT3_E00013" />
              </b-field>
              <b-field label="Include series (empty= ALL series)">
                <b-taginput
                  v-model="session.i_series"
                  ellipsis
                  icon="label"
                  placeholder="Add a series number"
                  aria-close-label="Delete this tag"
                >
                </b-taginput>
              </b-field>
              <b-field label="Exclude series">
                <b-taginput
                  v-model="session.s_series"
                  ellipsis
                  icon="label"
                  placeholder="Add a series number"
                  aria-close-label="Delete this tag"
                >
                </b-taginput>
              </b-field>
            </b-notification>
          </div>
          <b-button type="is-link" outlined @click="addSession"
            >Add Session</b-button
          >
          <b-button
            v-if="sessions.length > 1"
            type="is-link"
            outlined
            @click="removeSession"
            >Remove Session</b-button
          >
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
          <p class="card-header-title">Other flags</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <b-field>
              <b-switch v-model="needs_bidsmap">Needs bidsmap file</b-switch>
            </b-field>
            <b-field
              v-if="needs_bidsmap"
              label="Directory containing the bidsmap file"
            >
              <b-input v-model="bidsmap_dir"></b-input>
            </b-field>
            <b-field v-if="needs_bidsmap" label="Bidsmap file">
              <b-input v-model="bidsmap_file"></b-input>
            </b-field>
            <b-field grouped label="Flags">
              <b-switch v-model="overwrite" type="is-info">Overwrite</b-switch>
              <b-switch v-model="verbose" type="is-info">Very Verbose</b-switch>
              <b-switch v-model="cleanup" type="is-info">Clean Up</b-switch>
            </b-field>
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapFields, mapMultiRowFields } from 'vuex-map-fields'

export default {
  data() {
    return {
      isOpen: 0,
    }
  },
  computed: {
    ...mapFields([
      'xnat2bids.version',
      'xnat2bids.output_path',
      'xnat2bids.needs_bidsmap',
      'xnat2bids.bidsmap_dir',
      'xnat2bids.bidsmap_file',
      'xnat2bids.i_series',
      'xnat2bids.s_series',
      'xnat2bids.overwrite',
      'xnat2bids.cleanup',
      'xnat2bids.verbose',
    ]),
    ...mapMultiRowFields(['xnat2bids.sessions']),
  },
  methods: {
    ...mapMutations({
      addSession: 'xnat2bids/addSession',
      removeSession: 'xnat2bids/popSession',
    }),
  },
}
</script>
