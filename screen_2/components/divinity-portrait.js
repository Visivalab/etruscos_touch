import {db} from '../db.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'style.css';

    :host{
      position: relative;
    }
    :host([visibleTransitions]) p, :host([visibleTransitions]) img{
      transition: 1s;
    }
    :host([noName]) p{
      opacity: 0;
    }
    :host([bigImg]) img{
      width: 150px;
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
      /*background-color: var(--primary-color);*/
      background-color: #FFFFFF;
    }
    .divinity__portrait:hover .divinity__portrait--selected{
      transform: scale(1.7);
      opacity: 0.3;
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
      color: white;
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

    this.name = this.getAttribute('name')
  }
   
  connectedCallback() {
    let nameSpace = this.shadowRoot.querySelector('p')
    let imageSpace = this.shadowRoot.querySelector('img')
    nameSpace.textContent = this.name
    imageSpace.setAttribute('src', db[this.name.toLowerCase()].portrait_img)
  }

}

customElements.define('divinity-portrait', divinityPortrait)