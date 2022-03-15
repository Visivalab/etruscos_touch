import {config} from '../config.js';
import * as utils from '../utils.js';

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

        color: var(--primary-color)
    }
    img{
        position: absolute;
        width: 391px;
        height: 701px;
        left: 1164px;
        top: 96px;

        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
</style>
<div>
    <p class="name">DIVINITY</p>
    <p class="description">Divinity properties</p>
</div>
<img src="images/fufluns.png" />
`;

export class divinityHeader extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {

  }

}

customElements.define('divinity-header', divinityHeader)