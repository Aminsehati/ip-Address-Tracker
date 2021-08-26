<template>
  <div>
    <div class="relative">
      <Header />
      <Box />
    </div>
    <Map :latlong="latLongUser" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getuserInfo']),
    latLongUser () {
      const location = {
        lat: this.getuserInfo.lat,
        long: this.getuserInfo.long
      }
      return location
    }
  },
  mounted () {
    this.getIpUser()
  },
  methods: {
    async getIpUser () {
      const httpResponse = await this.$axios.post('https://api.ipify.org?format=json')
      console.log(httpResponse)
    }
  }
}
</script>
