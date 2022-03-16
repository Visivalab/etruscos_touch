import {config} from '../config.js';
import {db} from '../db.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'css/style.css';
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    h1{
      position: absolute;
      width: 852px;
      height: 330px;
      left: 545px;
      top: 165px;
      text-align: center;
    }
    h1.hide{
      transition: 1s;
      opacity: 0;
    }
    /*.divinity__list{
      position: absolute;

      width: 1395px;
      height: 579px;
      left: 268px;
      top: 367px;

      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
          "a b c d e f g"
          "h i j k l m n";

      transition: 1s;
    }

    divinity-portrait{ transition: 1s }
    .divinity__list divinity-portrait:nth-child(1){ grid-area: b }
    .divinity__list divinity-portrait:nth-child(2){ grid-area: d }
    .divinity__list divinity-portrait:nth-child(3){ grid-area: f }
    .divinity__list divinity-portrait:nth-child(4){ grid-area: h }
    .divinity__list divinity-portrait:nth-child(5){ grid-area: j }
    .divinity__list divinity-portrait:nth-child(6){ grid-area: l }
    .divinity__list divinity-portrait:nth-child(7){ grid-area: n }

    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(1){ grid-area: h }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(2){ grid-area: i }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(3){ grid-area: j }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(4){ grid-area: k }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(5){ grid-area: l }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(6){ grid-area: m }
    .divinity__list.divinity__list--bottom divinity-portrait:nth-child(7){ grid-area: n }
    */
    .divinity__list{
        position: absolute;
        width: 1561px;
        height: unset;
        left: 194px;
        top: 737px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    
</style>
<div>
    <full-video></full-video>
    <h1></h1>
    <div class="divinity__list">
        <divinity-portrait img="/images/fufluns-portrait.png" name="Fufluns"></divinity-portrait>
        <divinity-portrait img="/images/laran-portrait.png" name="Laran"></divinity-portrait>
        <divinity-portrait img="/images/menerva-portrait.png" name="Menerva"></divinity-portrait>
        <divinity-portrait img="/images/tinia-portrait.png" name="Tinia"></divinity-portrait>
        <divinity-portrait img="/images/turan-portrait.png" name="Turan"></divinity-portrait>
        <divinity-portrait img="/images/turms-portrait.png" name="Turms"></divinity-portrait>
        <divinity-portrait img="/images/uni-portrait.png" name="Uni"></divinity-portrait>
    </div>
</div>
`;

export class pageDivinity extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    let intro = this.shadowRoot.querySelector('h1')
    intro.textContent = db['intro'][config.lang]
    
    const portraits = this.shadowRoot.querySelectorAll('divinity-portrait')
    for(let portrait of portraits) portrait.addEventListener('click', () => {
      
      // Si aún hay el texto de intro, se esconde (la primera vez que se selecciona una divinidad vaya)
      intro?.classList.add('hide')

      // Si las divinidades estan en mosaico, se ponen en fila abajo
      let divinityList = this.shadowRoot.querySelector('.divinity__list')
      divinityList.classList.add('divinity__list--bottom')

      // Si ya está cargada una divinidad, la esconde (y la elimina)
      let divinity = this.shadowRoot.querySelector('divinity-header')
      if(divinity){
        divinity.style.transition = '500ms'
        divinity.style.opacity = '0'
        setTimeout( () => {
          divinity.remove()
        }, 500) 
      }

      // Crea la nueva divinidad pulsada
      setTimeout( () => {
        this.createDivinity(portrait.getAttribute('name').toLowerCase())
      }, 500)
    })
    
  }

  createDivinity(divinity){
    let newDivinity = document.createElement('divinity-header')
    newDivinity.setAttribute('divinity', divinity)
    this.shadowRoot.appendChild(newDivinity)
  }

}

customElements.define('page-divinity', pageDivinity)