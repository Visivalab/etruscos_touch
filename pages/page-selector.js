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
    .text_position{
      position: absolute;
      width: 852px;
      height: 330px;
      left: 545px;
      top: 165px;
      text-align: center;
    }

    .divinities{
      position: absolute;
    }
    .divinities:after{
      transition: 0.5s;
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      background-color: red;
      opacity: 0;
    }
    .divinities:hover:after{
      opacity: 1;
    }
    .fufluns{
      background-image: url('/images/menu_fufluns.png');
      width: 149.43px;
      height: 151.38px;
      left: 475px;
      top: 510.9px;
    }
    .laran{
      background-image: url('/images/menu_laran.png');
      width: 149.16px;
      height: 234.93px;
      left: 886.88px;
      top: 425.08px;
    }
    .menerva{
      background-image: url('/images/menu_menerva.png');
      width: 149.28px;
      height: 299.23px;
      left: 1286.68px;
      top: 367px;      
    }
    .tinia{
      background-image: url('/images/menu_tinia.png');
      width: 149.35px;
      height: 194.87px;
      left: 268px;
      top: 743.03px;     
    }
    .turan{
      background-image: url('/images/menu_turan.png');
      width: 149.16px;
      height: 192.05px;
      left: 671.32px;
      top: 754.27px;
    }
    .turms{
      background-image: url('/images/menu_turms.png');
      width: 153.11px;
      height: 210.53px;
      left: 1087.63px;
      top: 733.85px;
    }
    .uni{
      background-image: url('/images/menu_uni.png');
      width: 150.56px;
      height: 194.95px;
      left: 1512.52px;
      top: 747.89px;
    }
</style>
<div>
  <full-video></full-video>
  <h1 class="text_position">Découvrez les dieux étrusques et comparez-les aux dieux grecs et romains!</h1>
  <div class="divinities fufluns"></div>
  <div class="divinities laran"></div>
  <div class="divinities menerva"></div>
  <div class="divinities tinia"></div>
  <div class="divinities turan"></div>
  <div class="divinities turms"></div>
  <div class="divinities uni"></div>
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