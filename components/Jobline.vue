<template>
  #SBATCH {{ prefix }} {{ value }}
  <br />
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>
