<template>
  <div class="form-group">
    <input
      v-model="model"
      type="text"
      class="form-control"
      :placeholder="placeholder"
      @keypress="keypress($event)"
      @keyup.enter="$emit('onEnter')"
    >
    <slot name="btn" />
  </div>
</template>
<script>
import './style.css'
export default {
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      model: ''
    }
  },
  watch: {
    model (value) {
      this.$emit('input', value)
    }
  },
  methods: {
    keypress (e) {
      // eslint-disable-next-line no-mixed-operators
      if (e.keyCode < 48 || e.keyCode > 57) {
        if (e.keyCode === 46 || e.keyCode === 58) {
          ///
        } else {
          e.preventDefault()
        }
      }
    }
  }
}
</script>
