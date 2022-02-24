import { SlotController } from "./controller/SlotController.js"
import {Interface} from "./models/Interface.js"
const div = document.querySelector('div')

div.addEventListener('click',Interface.capturaClick.bind(Interface))

