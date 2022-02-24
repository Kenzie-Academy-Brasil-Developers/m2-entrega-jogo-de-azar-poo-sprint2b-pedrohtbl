import {Slot} from '/src/models/Slot.js'

class SlotController {
    static iniciaJogo (li,tempo,velocidade){
        const novoSlot = new Slot (li,tempo,velocidade)
        return novoSlot
    }
}
export {SlotController}