<template>
  <div>
    <div class="field">
      <label class="label">Partition</label>
      <div class="buttons">
        <button class="button is-primary is-light">CPU</button>
        <button class="button is-primary is-light">GPU</button>
      </div>
    </div>

    <div class="field">
      <label class="label">Job Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Job Name"
          value="xnat-tools"
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
export default {}
</script>
