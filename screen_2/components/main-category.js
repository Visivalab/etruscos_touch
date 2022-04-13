import {config} from '../config.js';
import {db} from '../db.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'style.css';

    :host{
      position: relative;
      transition: 1s;
    }
    /* Cuando está grande, aun nada seleccionado */
    :host([bigImg]) img, :host([bigImg]) .divinity__portrait--selected{
      transition: 1s;
      width: 360px;
    }
    :host([bigImg]) p{
      font-size: 35px;
      line-height: 35px;
      margin-top: -15px;
    }

    .divinity__portrait:hover span{
      transform: scale(1.1);
      opacity: 0.3;
    }

    /* Dejar marcado el seleccionado para saber donde estás */
    :host([selected]) .divinity__portrait--selected{
      transition: 1s;
      transform: scale(1.2);
      opacity: 0.3;
    }

    .divinity__portrait{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
    }
    .divinity__portrait--selected{
      position: absolute;
      width: 115px;
      aspect-ratio: 1;
      z-index: -1;
      transition: opacity 0.2s, transform 0.6s;
      opacity: 0;
      border-radius: 100%;
      background-color: #FFFFFF;
    }
    img{
      width: 115px;
      transition: 1s;
    }
    p{
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: white;
      transition: 1s;
      margin-top: -5px;
    }
</style>

<div class="divinity__portrait">
    <span class="divinity__portrait--selected"></span>
    <img src="images/portrait.png" />
    <p>Divinity</p>
</div>
`;

export class mainCategory extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.id = this.getAttribute('id')
  }
   
  connectedCallback() {
    let nameSpace = this.shadowRoot.querySelector('p')
    let imageSpace = this.shadowRoot.querySelector('img')
    nameSpace.textContent = db[this.id].name[config.lang]
    imageSpace.setAttribute('src', db[this.id].portrait_img)
  }

}

customElements.define('main-category', mainCategory)