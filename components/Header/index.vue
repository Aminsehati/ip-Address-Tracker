<template>
  <header class="header">
    <div class="container mx-auto">
      <h2 class="text-center mb-20">
        Ip Address Tracker
      </h2>
      <TextFeild
        v-model.lazy="ipAddress"
        class="w-2/4 mx-auto"
        placeholder="please Enter ip Address"
        @onEnter="getLocationIp(getuserInfo.ipAddress)"
      >
        <button slot="btn" class="btn-text-feild" @click="getLocationIp(getuserInfo.ipAddress)">
          <img :src="iconArrowButton">
        </button>
      </TextFeild>
    </div>
  </header>
</template>
<script>
import './style.css'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      iconArrowButton: require('~/assets/img/icon/icon-arrow.svg')
    }
  },
  computed: {
    ...mapGetters(['getuserInfo']),
    ipAddress: {
      get () {
        return this.$store.state.user.ipAddress
      },
      set (value) {
        this.$store.commit('setIpAddress', value)
      }
    }
  },
  methods: {
    ...mapActions(['getLocationIp'])
  }
}
</script>
