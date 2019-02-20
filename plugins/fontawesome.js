import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartPlus,
  faHeart,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartPlus, faHeart, faSearch, faBell)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
