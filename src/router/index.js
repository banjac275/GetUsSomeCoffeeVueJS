import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import VenueDisplay from '@/components/VenueDisplay'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/venueDisplay',
      component: VenueDisplay
    }
  ],
  mode: 'history'
})