import {config} from '../config.js';
import * as utils from '../utils.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'css/style.css';
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .divinity__list{
        position: absolute;
        width: 1561px;
        left: 194px;
        top: 737px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
</style>
<div>
    <divinity-header img="" name="" description=""></divinity-header>
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

  }

}

customElements.define('page-divinity', pageDivinity)