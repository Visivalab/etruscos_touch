import {config} from '../config.js';
import {db} from '../db.js'
import {translate} from '../utils.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'style.css';

    :host{
        display: flex;
        align-items: center;
        opacity: 0;
        transition: 1s;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    .name{
        position: absolute;
        width: 827px;
        height: 248px;
        left: 270px;
        top: 322px;

        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 184px;
        line-height: 248px;

        color: white;
    }
    .description{
        position: absolute;
        width: 615px;
        height: 57px;
        left: 290px;
        top: 540px;

        font-family: 'SourceSansPro';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;

        color: var(--primary-color);
    }
    .nameBox{
        position: absolute;
        width: 692px;
        height: 139px;
        background: rgba(221, 207, 173, 0.51);
        opacity: 0;
        padding: 20px;
        box-sizing: border-box;
    }
    .nameBox--greek{
        left: 244px;
        top: 239px;
    }
    .nameBox p:first-child{
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: var(--primary-color);
    }
    .nameBox p:last-child{
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 72px;
        line-height: 80px;

        color: var(--primary-color);
    }
    .nameBox--etrusque{
        left: 244px;
        top: 386px;
    }
    .nameBox--roman{
        left: 244px;
        top: 533px;
    }
    .detailsBox{
        position: absolute;
        width: 729px;
        height: 434px;
        left: 944px;
        top: 239px;

        display: grid;
        place-items: center;

        opacity: 0;
        background: rgba(221, 207, 173, 0.51);
    }
    .detailsBox p{
        margin-left: 60px;
        width: 431px;

        font-family: 'SourceSansPro';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;

        color: white;
    }
    .detailsBox p strong{
        color: black;
    }

    /* Images managment */
    .base_image, .zoomed_container{
        position: absolute;
        height: 700px;
        left: 1164px;
        top: 96px;
    }
    .zoomed_container{
        --clip-position: 0 0;
        --clip-speed: 2s;
        clip-path: circle(80px at var(--clip-position));
        background-color: var(--primary-color);
        left: 50%;
        opacity: 0;
        transition: opacity 1s, clip-path var(--clip-speed), transform var(--clip-speed);
    }
    .zoomed_container.active{
        opacity: 1;
    }
    .zoomed_container img{
        clip-path: circle(79px at var(--clip-position));
        transition: clip-path var(--clip-speed);
        height: 100%;
    }
</style>
<div>
    <p class="name">DIVINITY</p>
    <p class="description">Divinity properties</p>
</div>
<div class="nameBox nameBox--greek">
    <p translate="greek">Greek</p>
    <p class="greekName">Greek name</p>
</div>
<div class="nameBox nameBox--etrusque">
    <p translate="etrusque">Étrusque</p>
    <p></p>
</div>
<div class="nameBox nameBox--roman">
    <p translate="roman"></p>
    <p class="romanName">Roman name</p>
</div>
<div class="detailsBox">
    <p></p>
</div>
</div>
<img class="base_image" />
<div class="zoomed_container">
    <img class="lens_image" />
</div>
`;

export class divinityHeader extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

}

connectedCallback() {
    this.divinity = this.getAttribute('divinity')

    this.name = this.shadowRoot.querySelector('.name')
    this.greekName = this.shadowRoot.querySelector('.greekName')
    this.romanName = this.shadowRoot.querySelector('.romanName')
    this.description = this.shadowRoot.querySelector('.description')
    this.longDescription = this.shadowRoot.querySelector('.detailsBox p')
    this.zoom = this.shadowRoot.querySelector('.zoomed_container')
    this.image = this.shadowRoot.querySelector('.base_image')
    this.lensImage = this.shadowRoot.querySelector('.lens_image')

    translate(this)
    
    this.buildDivinity()

    setTimeout( () => this.style.opacity = 1, 100 )
    setTimeout( () => this.transition(), config.timings.presentation )
}

// Hace la transición a la segunda fase del layout
  transition(){
    this.setAttribute('details', '')
    
    /* Name transitions */
    this.name.style.transition = '1500ms'
    this.name.style.left = '263px'
    this.name.style.top = '423px'
    this.name.style.fontSize = '72px'
    this.name.style.lineHeight = '97px'

    /* Description transitions */
    this.description.style.transition = '1s'
    this.description.style.opacity = '0'

    /* Name boxes transitions*/
    for(let nameBox of this.shadowRoot.querySelectorAll('.nameBox')){
        nameBox.style.transition = '1s'
        nameBox.style.opacity = 1
    }

    /* Details box transition */
    let detailsBox = this.shadowRoot.querySelector('.detailsBox')
    detailsBox.style.transition = '1s'
    detailsBox.style.opacity = 1

    /* Base image movement */
    let baseImage = this.shadowRoot.querySelector('.base_image')
    baseImage.style.transition = '2s'
    baseImage.style.left = '50%'
    baseImage.style.transform = 'translate(-50%)'
  }

  // Rellena el contenido con la info de la bbdd
  buildDivinity(){
      this.name.textContent = db[this.divinity].etrusque_name
      this.greekName.textContent = db[this.divinity].greek_name
      this.romanName.textContent = db[this.divinity].roman_name
      this.description.textContent = db[this.divinity].description[config.lang]
      this.longDescription.innerHTML = db[this.divinity].long_description[config.lang]
      this.image.setAttribute('src', db[this.divinity].img)
      this.lensImage.setAttribute('src', db[this.divinity].img)
      
      this.init_lens()
  }

  // Gestiona el movimiento de la lupa
  init_lens(){
    const zoom_details = db[this.divinity].zoom_details

    setTimeout( () => this.zoom.classList.add('active'), config.timings.presentation + config.timings.lensDelay)

    this.zoom.style.transform = `translate(${zoom_details[0].box_position[0]}px, ${zoom_details[0].box_position[1]}px) scale(1.2)`
    this.zoom.style.setProperty('--clip-position', `${zoom_details[0].lens_position[0]}px ${zoom_details[0].lens_position[1]}px`)
    this.moveLens(1, zoom_details)
    
  }
    moveLens(lens_iteration, zoom_details){
        setTimeout( () => {
            /* Esconde la lupa cuando ya no hay mas posiciones */
            if(!zoom_details[lens_iteration]){
                this.zoom.style.opacity = 0
                return
            }
            
            this.zoom.style.transform = `translate(${zoom_details[lens_iteration].box_position[0]}px, ${zoom_details[lens_iteration].box_position[1]}px) scale(1.2)`
            this.zoom.style.setProperty('--clip-position', `${zoom_details[lens_iteration].lens_position[0]}px ${zoom_details[lens_iteration].lens_position[1]}px`)
            this.moveLens(lens_iteration+1, zoom_details)
            
        }, config.timings.presentation + config.timings.lensDelay + config.timings.lensPause)
    }

}

customElements.define('divinity-header', divinityHeader)