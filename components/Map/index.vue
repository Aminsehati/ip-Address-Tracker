<template>
  <div id="map-wrap" style="height: 100vh">
    <no-ssr>
      <l-map :zoom="22" :center="[latlong.lat , latlong.long]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-marker :lat-lng="[latlong.lat , latlong.long]">
          <l-icon>
            <img :src="locationIcon">
          </l-icon>
        </l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>
<script>
export default {
  props: {
    locationDetail: {
      type: Object,
      default: () => {}
    },
    latlong: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      locationIcon: require('~/assets/img/icon/icon-location.svg')
    }
  }
}
</script>
