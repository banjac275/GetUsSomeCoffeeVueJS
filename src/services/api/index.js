import config from '@/config'

export default {
  getCoffeeShops (lat, long) {
    return fetch(config.get_locations + lat + ',' + long).then(response => response.json())
  },
  getVenuePhotos (id) {
    return fetch(config.get_venue_url + id + config.photos_string).then(response => response.json())
  }
}