import {config} from '../config.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'css/style.css';
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
    }
</style>
<div>
  <full-video></full-video>
    <h1>Selector</h1>
</div>
`;

export class pageSelector extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
  }

}

customElements.define('page-selector', pageSelector)