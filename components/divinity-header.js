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
    img{
        position: absolute;
        width: 391px;
        height: 701px;
        left: 1164px;
        top: 96px;

        transition: 1s ease;
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
    :host([details]) img{
        left: 50%;
        transform: translate(-50%);
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

        opacity: 0;
        transition: 1s;
        background: rgba(221, 207, 173, 0.51);
    }
    :host([details]) .detailsBox{
        opacity: 1;
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
<div class="detailsBox"></div>
</div>
<img src="images/fufluns.png" />
`;

export class divinityHeader extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.divinity = this.getAttribute('divinity')   
  }

  connectedCallback() {
    this.name = this.shadowRoot.querySelector('.name')
    this.description = this.shadowRoot.querySelector('.description')

    
    this.buildDivinity(this.divinity)
    
    setTimeout( () => this.transition(), 500 )
  }

  // Hace la transición a la segunda fase del layout
  transition(){
    this.setAttribute('details', '')

    //setTimeout( () => this.description.style.opacity = 0, 400)
  }

  // Rellena el contenido con la info de la bbdd
  buildDivinity(divinity){
      this.name.textContent = db[divinity].etrusque_name
      this.description.textContent = db[divinity].description[config.lang]
  }

}

customElements.define('divinity-header', divinityHeader)