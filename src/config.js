//THESE ARE A MUST AND MUST NOT BE CHANGED!
const CLIENT_ID = 'P2LDTZ2GOGLQXZ1C2O1MI03NWHY52GHWU3VXUNY14AO4YWXU'
const CLIENT_SECRET = 'D5KF5OSHQSN1425KTQVILFPURTAKPH31TFEDXTHUUAF5ITB0'

const API_URL = 'https://api.foursquare.com/v2/'
const VENUES = 'venues/'
const SEARCH = 'search?'
const PHOTOS = '/photos?'
const PHOTO_GROUP = 'group=venue'
const CLIENT_ID_TAG = `client_id=${CLIENT_ID}&`
const CLIENT_SECRET_TAG = `client_secret=${CLIENT_SECRET}&`
const BROWSE = 'intent=browse&'
const DEF_RADIUS = 'radius=1000&'
const DEF_LIMIT = 'limit=10&'
const VERSION_NUMBER = `v=${new Date().toJSON().slice(0, 10).split('-').join('')}&`
const CATEGORY_ID_COFFEE_SHOP = 'categoryId=4bf58dd8d48988d1e0931735&'
const LAT_LON = 'll='



export default {
  get_locations: API_URL + VENUES + SEARCH + CLIENT_ID_TAG + CLIENT_SECRET_TAG + VERSION_NUMBER + BROWSE + DEF_RADIUS + DEF_LIMIT + CATEGORY_ID_COFFEE_SHOP + LAT_LON,
  get_venue_url: API_URL + VENUES,
  photos_string: PHOTOS + CLIENT_ID_TAG + CLIENT_SECRET_TAG + VERSION_NUMBER + PHOTO_GROUP
}