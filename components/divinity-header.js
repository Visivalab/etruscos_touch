import {config} from '../config.js';
import {db} from '../db.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'css/style.css';

    :host{
        display: flex;
        align-items: center;
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

        transition: 1s ease;
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

        transition: 1s;
    }
    :host([details]) .name{
        left: 270px;
        top: 423px;

        font-size: 72px;
        line-height: 97px;
    }
    :host([details]) .description{
        opacity: 0;
    }
    .nameBox{
        position: absolute;
        width: 692px;
        height: 139px;
        background: rgba(221, 207, 173, 0.51);
        opacity: 0;
        transition: 1s;
        padding: 20px;
        box-sizing: border-box;
    }
    .nameBox--greek{
        left: 244px;
        top: 239px;
    }
    .nameBox--greek p:first-child{
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: var(--primary-color);
    }
    .nameBox--greek p:last-child{
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
    .nameBox--roman p:first-child{
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: var(--primary-color);
    }
    .nameBox--roman p:last-child{
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 72px;
        line-height: 80px;

        color: var(--primary-color);
    }
    :host([details]) .nameBox{
        opacity: 1;
    }
    .detailsBox{
        position: absolute;
        width: 718px;
        height: 434px;
        left: 955px;
        top: 239px;

        display: grid;
        place-items: center;

        opacity: 0;
        transition: 1s;
        background: rgba(221, 207, 173, 0.51);
    }
    .detailsBox p{
        margin-left: 60px;
        width: 431px;

        font-family: 'Source Sans Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;

        color: white;
    }
    .detailsBox p strong{
        color: black;
    }
    :host([details]) .detailsBox{
        opacity: 1;
    }

    /* Images managment */
    .base_image, .zoomed_container{
        position: absolute;
        width: 391px;
        height: 701px;
        left: 1164px;
        top: 96px;

        transition: 1s ease;
    }
    .zoomed_container{
        --clip-position: 0 0;
        --clip-speed: 2s;
        clip-path: circle(80px at var(--clip-position));
        background-color: var(--primary-color);
        left: 50%;
        opacity: 0;
        transition: opacity 1s, clip-path var(--clip-speed);
    }
    .zoomed_container.active{
        opacity: 1;
    }
    .zoomed_container img{
        clip-path: circle(79px at var(--clip-position));
        transition: clip-path var(--clip-speed);
    }
    :host([details]) .base_image{
        left: 50%;
        transform: translate(-50%);
    }
</style>
<div>
    <p class="name">DIVINITY</p>
    <p class="description">Divinity properties</p>
</div>
<div class="nameBox nameBox--greek">
    <p>Greek</p>
    <p class="greekName">Greek name</p>
</div>
<div class="nameBox nameBox--etrusque"></div>
<div class="nameBox nameBox--roman">
    <p>Roman</p>
    <p class="romanName">Roman name</p>
</div>
<div class="detailsBox">
    <p></p>
</div>
</div>
<img class="base_image" src="images/fufluns.png" />
<div class="zoomed_container">
    <img src="images/fufluns.png" />
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
    console.log(this.divinity)

    this.name = this.shadowRoot.querySelector('.name')
    this.description = this.shadowRoot.querySelector('.description')
    this.longDescription = this.shadowRoot.querySelector('.detailsBox p')
    this.zoom = this.shadowRoot.querySelector('.zoomed_container')

    this.buildDivinity()
    
    setTimeout( () => this.transition(), 500 )
  }

  // Hace la transición a la segunda fase del layout
  transition(){
    this.setAttribute('details', '')
  }

  // Rellena el contenido con la info de la bbdd
  buildDivinity(){
      this.name.textContent = db[this.divinity].etrusque_name
      this.description.textContent = db[this.divinity].description[config.lang]
      this.longDescription.innerHTML = db[this.divinity].long_description[config.lang]
      this.init_lens()
  }

  // Gestiona el movimiento de la lupa
  init_lens(){
    const zoom_details = db[this.divinity].zoom_details

    setTimeout( () => this.zoom.classList.add('active'), 2000)

    this.zoom.style.transform = `translate(${zoom_details[0].box_position[0]}px, ${zoom_details[0].box_position[1]}px) scale(1.3)`
    this.zoom.style.setProperty('--clip-position', `${zoom_details[0].lens_position[0]}px ${zoom_details[0].lens_position[1]}px`)
    this.moveLens(1, zoom_details)
    
  }
    moveLens(lens_iteration, zoom_details){
        setTimeout( () => {
            this.zoom.style.transform = `translate(${zoom_details[lens_iteration].box_position[0]}px, ${zoom_details[lens_iteration].box_position[1]}px) scale(1.3)`
            this.zoom.style.setProperty('--clip-position', `${zoom_details[lens_iteration].lens_position[0]}px ${zoom_details[lens_iteration].lens_position[1]}px`)
            if(zoom_details[lens_iteration+1]) this.moveLens(lens_iteration+1, zoom_details)
        }, 4000)
    }

}

customElements.define('divinity-header', divinityHeader)