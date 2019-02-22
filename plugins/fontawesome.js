import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartPlus,
  faHeart,
  faSearch,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { faBell, faCircle } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCartPlus,
  faHeart,
  faSearch,
  faBell,
  faFacebookF,
  faTwitter,
  faInstagram,
  faCircle,
  faChevronRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
