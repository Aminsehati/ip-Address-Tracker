<template>
  <div class="box shadow">
    <!--    {{ getuserInfo.ipAddress }}-->
    <div class="grid grid-cols-4 gap-x-30">
      <div class="location-item text-center">
        <h4 class="text-grey mb-10">
          Ip Address
        </h4>
        <p class="text-black font-bold text-18">
          {{ getuserInfo.ipAddress }}
        </p>
      </div>
      <div class="location-item text-center">
        <h4 class="text-grey mb-10">
          Location
        </h4>
        <p class="text-black font-bold text-18">
          {{ getuserInfo.location }}
        </p>
      </div>
      <div class="location-item text-center">
        <h4 class="text-grey mb-10">
          TimeZone
        </h4>
        <p class="text-black font-bold text-18">
          {{ getuserInfo.timeZone }}
        </p>
      </div>
      <div class="location-item text-center">
        <h4 class="text-grey mb-10">
          Isp
        </h4>
        <p class="text-black font-bold text-18">
          {{ getuserInfo.isp }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import './style.css'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getuserInfo'])
  }
}
</script>
