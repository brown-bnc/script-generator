<template>
  <div class="card-content">
    <div v-for="(session, index) in value" :key="index" class="content">
      <b-notification :closable="false">
        <b-field type="is-warning">
          <p class="control">
            <span class="button is-static is-link">Participant ID</span>
          </p>
          <b-input
            :value="session.participant_id"
            placeholder="135"
            @input="updateParticipantID(index, $event)"
          />
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
    <b-button type="is-link" outlined @click="addSession">Add Session</b-button>
    <b-button
      v-if="value.length > 1"
      type="is-link"
      outlined
      @click="removeSession"
      >Remove Session</b-button
    >
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      addSession: 'xnat2bids/addSession',
      removeSession: 'xnat2bids/popSession',
    }),
    updateParticipantID(index, val) {
      this.value[index].participant_id = val
      this.$emit('f-sessions', this.value)
    },
  },
}
</script>
