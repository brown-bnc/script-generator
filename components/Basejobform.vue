<template>
  <div>
    <div class="field">
      <label class="label">Partition (Default: Batch)</label>
      <input
        id="batch-radio"
        v-model="partition"
        class="is-checkradio"
        type="radio"
        value="BATCH"
      />
      <label for="batch-radio">BATCH</label>
      <input
        id="gpu-radio"
        v-model="partition"
        class="is-checkradio"
        type="radio"
        value="GPU"
      />
      <label for="gpu-radio">GPU</label>
    </div>

    <div class="field">
      <label class="label">Job Name</label>
      <div class="control">
        <input
          class="input"
          v-model="jobname"
          type="text"
          placeholder="Name of this job"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Job Alert Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@hello.com"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
      <label class="label">Email Event (Optional)</label>
      <div class="buttons">
        <button class="button is-primary is-light">BEGIN</button>
        <button class="button is-primary is-light">END</button>
        <button class="button is-primary is-light">FAIL</button>
        <button class="button is-primary is-light">REQUE</button>
        <button class="button is-primary is-light">END</button>
      </div>
    </div>
    <div class="field">
      <label class="label">Number of nodes</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Number of nodes"
          value="xnat-tools"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Processes per node</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Processes per node"
          value="xnat-tools"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">RAM per node (default: MB)</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="RAM per node (default: MB)"
          value="xnat-tools"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jobname: {
      get() {
        return this.$store.state.jobname
      },
      set(value) {
        this.$store.dispatch('setStateProperty', {
          property: 'jobname',
          value,
        })
      },
    },
    partition: {
      get() {
        return this.$store.state.partition
      },
      set(value) {
        this.$store.dispatch('setStateProperty', {
          property: 'partition',
          value,
        })
      },
    },
  },
}
</script>
