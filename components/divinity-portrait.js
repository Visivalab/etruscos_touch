import {config} from '../config.js';
import * as utils from '../utils.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'css/style.css';

    :host{
      position: relative;
    }
    .divinity__portrait--selected{
      position: absolute;
      width: 100%;
      aspect-ratio: 1;
      background-color: red;
      bottom: 36px;
      z-index: -1;
      transition: opacity 0.2s, transform 0.6s;
      opacity: 0;
      border-radius: 100%;
      background-color: var(--primary-color);
    }
    .divinity__portrait:hover .divinity__portrait--selected{
      transform: scale(1.7);
      opacity: 0.5;
    }
    img{
      width: 114.97px;
    }
    p{
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
    }
</style>

<div class="divinity__portrait">
    <span class="divinity__portrait--selected"></span>
    <img src="images/divinity-portrait.png" />
    <p>Divinity</p>
</div>
`;

export class divinityPortrait extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.image = this.getAttribute('img')
    this.name = this.getAttribute('name')

  }
   
  connectedCallback() {
    let nameSpace = this.shadowRoot.querySelector('p')
    let imageSpace = this.shadowRoot.querySelector('img')
    nameSpace.textContent = this.name
    imageSpace.setAttribute('src', this.image)
  }

}

customElements.define('divinity-portrait', divinityPortrait)