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
    
    divinity-portrait{
      transition: 1s;
      position: absolute;
    }
    divinity-portrait:nth-child(1){ left: 475px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(1){ left: 219px; bottom: 55px; }
    divinity-portrait:nth-child(2){ left: 886.88px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(2){ left: 453px; bottom: 55px; }
    divinity-portrait:nth-child(3){ left: 1286.68px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(3){ left: 685px; bottom: 55px; }
    divinity-portrait:nth-child(4){ left: 268px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(4){ left: 923px; bottom: 55px; }
    divinity-portrait:nth-child(5){ left: 671.32px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(5){ left: 1164px; bottom: 55px; }
    divinity-portrait:nth-child(6){ left: 1087.63px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(6){ left: 1402px; bottom: 55px; }
    divinity-portrait:nth-child(7){ left: 1512.52px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(7){ left: 1637px; bottom: 55px; }
</style>
<div>
    <full-video></full-video>
    <h1></h1>
    <div>
      <divinity-portrait noName bigImg img="/images/fufluns-portrait.png" name="Fufluns"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/laran-portrait.png" name="Laran"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/menerva-portrait.png" name="Menerva"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/tinia-portrait.png" name="Tinia"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/turan-portrait.png" name="Turan"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/turms-portrait.png" name="Turms"></divinity-portrait>
      <divinity-portrait noName bigImg img="/images/uni-portrait.png" name="Uni"></divinity-portrait>
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
      for(let portrait of portraits){
        portrait.setAttribute('inList', '')
        portrait.setAttribute('visibleTransitions', '')
        portrait.removeAttribute('bigImg', '')
        portrait.removeAttribute('noName', '')
      }

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