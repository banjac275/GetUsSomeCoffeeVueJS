import config from '@/config'

export default {
  getCoffeeShops (coords) {
    return fetch(config.get_locations + coords.lat + ',' + coords.lon).then(response => response.json())
  },
  getVenuePhotos () {
    return fetch(config.photos_string).then(response => response.json())
  }
}