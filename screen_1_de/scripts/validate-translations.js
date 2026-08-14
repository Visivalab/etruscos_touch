import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { config } from '../config.js'
import { db } from '../db.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const supportedLanguages = [...config.supportedLanguages].sort()
const divinities = ['tinia', 'uni', 'menerva', 'laran', 'turan', 'turms', 'fufluns']
const errors = []

function checkLocalizedValues(label, values, { allowNull = false } = {}){
    if(typeof values !== 'object' || values === null || Array.isArray(values)){
        errors.push(`${label} must be a translation object`)
        return
    }

    const keys = Object.keys(values).sort()
    if(keys.join(',') !== supportedLanguages.join(',')){
        errors.push(`${label} must contain exactly: ${supportedLanguages.join(', ')}`)
    }

    for(const lang of supportedLanguages){
        const value = values[lang]
        if(allowNull && value === null) continue
        if(typeof value !== 'string' || value.trim() === ''){
            errors.push(`${label}.${lang} must be a non-empty string`)
        }
    }
}

checkLocalizedValues('db.intro', db.intro)
for(const [key, values] of Object.entries(db.layout)){
    checkLocalizedValues(`db.layout.${key}`, values)
}
checkLocalizedValues('db.video', db.video, { allowNull: true })

for(const divinityKey of divinities){
    const divinity = db[divinityKey]
    if(!divinity){
        errors.push(`db.${divinityKey} is missing`)
        continue
    }

    checkLocalizedValues(`db.${divinityKey}.greek_name`, divinity.greek_name)
    checkLocalizedValues(`db.${divinityKey}.roman_name`, divinity.roman_name)
    checkLocalizedValues(`db.${divinityKey}.description`, divinity.description)
    checkLocalizedValues(`db.${divinityKey}.long_description`, divinity.long_description)

    for(const assetKey of ['img', 'portrait_img']){
        const assetPath = resolve(projectRoot, divinity[assetKey])
        if(!existsSync(assetPath)) errors.push(`${divinityKey}.${assetKey} does not exist: ${assetPath}`)
    }
}

for(const [lang, videoPath] of Object.entries(db.video)){
    if(videoPath && !existsSync(resolve(projectRoot, videoPath))){
        errors.push(`db.video.${lang} does not exist: ${videoPath}`)
    }
}

if(errors.length){
    console.error(errors.join('\n'))
    process.exitCode = 1
}else{
    console.log(`Translation data is complete for: ${supportedLanguages.join(', ')}`)
}
