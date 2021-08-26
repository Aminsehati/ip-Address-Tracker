export const state = () => ({
  user: {
    ipAddress: '',
    location: '',
    timeZone: '',
    isp: '',
    lat: '',
    long: ''
  }
})
export const getters = {
  getuserInfo (state) {
    return state.user
  }
}
export const mutations = {
  setIpAddress (state, ip) {
    state.user.ipAddress = ip
  },
  setLocationIp (state, item) {
    if (item.status === 'success') {
      state.user.timeZone = item.timezone
      state.user.isp = item.isp
      state.user.location = item.as
      state.user.ipAddress = item.query
      state.user.lat = item.lat
      state.user.long = item.lon
    }
  }
}
export const actions = {
  async getLocationIp (context, ip) {
    const httpResponse = await this.$axios.$get(`http://ip-api.com/json/${ip}`)
    context.commit('setLocationIp', httpResponse)
  }
}
