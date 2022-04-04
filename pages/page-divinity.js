import {config} from '../config.js';
import {db} from '../db.js'
import {translate} from '../utils.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 1s;
    }
    h1{
      font-size: 64px;
      font-family: 'Roboto Condensed';
      color: var(--primary-color);

      position: absolute;
      width: 852px;
      height: 330px;
      left: 545px;
      top: 130px;
      text-align: center;
      transition: 1s;
      margin: 0;
    }
    h1.hide{
      opacity: 0;
    }
    .backHome{
      position: absolute;
      left: 1747px;
      top: 434px;
      display: flex;
      align-items: center;
      transition: 1s;
    }
    .backHome.hide{
      opacity: 0;
    }
    .backHome p{
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: right;
      color: #DDCFAD;
    }
    .backHome img{
      margin-left: 15px;
    }
    
    divinity-portrait{
      transition: 1s;
      position: absolute;
      transform: none;
    }
    divinity-portrait.hide{
      opacity: 0;
      transform: translateY(10px)
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
    <h1 class="hide"></h1>
    <div class="backHome hide">
      <p translate="home">Home</p>
      <img src="./assets/icons/home.svg" width="33px" />
    </div>
    <div>
      <divinity-portrait class="hide" bigImg name="Fufluns"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Laran"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Menerva"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Tinia"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Turan"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Turms"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Uni"></divinity-portrait>
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
    translate(this)

    let intro = this.shadowRoot.querySelector('h1')
    let backHome = this.shadowRoot.querySelector('.backHome')
    const portraits = this.shadowRoot.querySelectorAll('divinity-portrait')
    
    /* Show up */
    setTimeout( () => this.style.opacity = 1, 500)

    /* Preparar eventos y contenido */
    
    backHome.addEventListener('click', () => {
      
      // Eliminem la pagina actual amb una mica de fade
      this.style.opacity = 0
      setTimeout( () => this.remove(), 1000)

      // Cargamos la siguiente
      let inner = document.createElement('page-home')
      document.querySelector('body').appendChild(inner)

    })

    intro.textContent = db['intro'][config.lang]
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
      // Cubrimos el posible caso de que haya varios divinity-header (los usuarios libres consiguen cualquier cosa)
      let divinityHeaders = this.shadowRoot.querySelectorAll('divinity-header')
      if(divinityHeaders){
        for(let divinityHeader of divinityHeaders){
          divinityHeader.setAttribute('fadingOut', '')
          setTimeout( () => {
            divinityHeader.remove()
          }, 1000)
        }
      }

      // Crea la nueva divinidad pulsada
      this.createDivinity(portrait.getAttribute('name').toLowerCase())
    })
    
    /* Mostrar las cosas cuando termina el video (hay que esperar un momento para que la duración del video se actualize) */
    setTimeout(() => {
      setTimeout(() => {
        intro.classList.remove('hide')
        backHome.classList.remove('hide')
        /* Los portraits aparecen cascada de opacidad */
        setTimeout(() => {
          for(let i=0; i<portraits.length; i++){
            setTimeout( () => portraits[i].classList.remove('hide'), i*200)
          }
        },500)

      }, config.timings.videoDuration*1000 + 500)
    }, 100)

    
  }

  createDivinity(divinity){
    let newDivinity = document.createElement('divinity-header')
    newDivinity.setAttribute('divinity', divinity)
    this.shadowRoot.appendChild(newDivinity)
  }

}

customElements.define('page-divinity', pageDivinity)