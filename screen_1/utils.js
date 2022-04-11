import { config } from "./config.js"
import { db } from "./db.js"

export function translate(component){
    const translateStrings = component.shadowRoot.querySelectorAll('[translate]')
    for(let string of translateStrings){
        let baseString = string.getAttribute('translate')
        string.textContent = db.layout[baseString][config.lang]
    }
}