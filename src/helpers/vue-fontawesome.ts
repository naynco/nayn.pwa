import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAlignJustify,
  faShareSquare,
  faTimes,
  faTimesCircle,
  faToggleOff,
  faSync
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(
  faAlignJustify,
  faShareSquare,
  faTimes,
  faTimesCircle,
  faToggleOff,
  faSync
)

Vue.component("font-awesome-icon", FontAwesomeIcon)
