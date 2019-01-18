//THESE ARE A MUST AND MUST NOT BE CHANGED!
const CLIENT_ID = 'P2LDTZ2GOGLQXZ1C2O1MI03NWHY52GHWU3VXUNY14AO4YWXU'
const CLIENT_SECRET = 'D5KF5OSHQSN1425KTQVILFPURTAKPH31TFEDXTHUUAF5ITB0'

const API_URL = 'https://api.foursquare.com/v2/'
const VENUES = 'venues/'
const EXPLORE = 'explore?'
//const PHOTOS = '/photos?'
//const PHOTO_GROUP = 'group=venue'
const CLIENT_ID_TAG = `client_id=${CLIENT_ID}&`
const CLIENT_SECRET_TAG = `client_secret=${CLIENT_SECRET}&`
const SORT_BY_DISTANCE = 'sortByDistance=1&'
const DEF_RADIUS = 'radius=1000&'
const DEF_LIMIT = 'limit=10&'
const VERSION_NUMBER = `v=${new Date().toJSON().slice(0, 10).split('-').join('')}&`
const SECTION = 'section=coffee&'
const LAT_LON = 'll='
const PHOTOS_TEMP = 'https://api.myjson.com/bins/7qvp8'
//const PHOTOS_LINK_FULL = PHOTOS + CLIENT_ID_TAG + CLIENT_SECRET_TAG + VERSION_NUMBER + PHOTO_GROUP



export default {
  get_locations: API_URL + VENUES + EXPLORE + CLIENT_ID_TAG + CLIENT_SECRET_TAG + VERSION_NUMBER + SORT_BY_DISTANCE + DEF_RADIUS + DEF_LIMIT + SECTION + LAT_LON,
  get_venue_url: API_URL + VENUES,
  photos_string: PHOTOS_TEMP
}