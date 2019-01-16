<template>
  <div class="dimmed-screen" v-if="showDimmed">
    <v-card class="notification-container">
      <div v-if="geoEnabled" class="loader__parent">
        <div class="loader">Loading...</div>
        <h1>{{geoEnabledText}}</h1>
      </div>
      <div v-else>
        <h1 v-if="dataUnobtained">{{unobtainedDataText}}</h1>
        <h1 v-else>{{geoDisabledText}}</h1>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['geoEnabled', 'dataUnobtained', 'showDimmed'],
  data () {
    return {
      geoDisabledText: 'Please enable geolocation!',
      geoEnabledText: 'Please wait...',
      unobtainedDataText: 'You exceeded maximum request per day, please try tomorrow.'
    }
  }
}
</script>

<style lang="scss" scoped>
.dimmed-screen {
  background-color: #0000008f;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: absolute;
  height: 100vh;
  z-index: 10;
}

.notification-container {
  background-color: #fff;
  position: absolute;
  width: 300px;
  z-index: 11;
}

.notification-container h1 {
  text-align: center;
  font-family: 'Roboto', sans-serif; 
  padding: 10px;
  color: #444444;
}

.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #3772df;
  background: -moz-linear-gradient(left, #3772df 10%, rgba(255, 255, 255, 0.356) 42%);
  background: -webkit-linear-gradient(left, #3772df 10%, rgba(255, 255, 255, 0.356) 42%);
  background: -o-linear-gradient(left, #3772df 10%, rgba(255, 255, 255, 0.356) 42%);
  background: -ms-linear-gradient(left, #3772df 10%, rgba(255, 255, 255, 0.356) 42%);
  background: linear-gradient(to right, #3772df 10%, rgba(255, 255, 255, 0.356) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

.loader:before {
  width: 50%;
  height: 50%;
  background: #3772df;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.loader:after {
  background: #fff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
