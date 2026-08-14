import { config } from "./config.js"
import { db } from "./db.js"

export function getLocalizedValue(values, lang = config.lang){
    return values[lang]
}

export function translate(component){
    const translateStrings = component.shadowRoot.querySelectorAll('[translate]')
    for(let string of translateStrings){
        let baseString = string.getAttribute('translate')
        string.textContent = getLocalizedValue(db.layout[baseString])
    }
}
