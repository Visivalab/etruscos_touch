import {config} from '../config.js';
import * as utils from '../utils.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
    }

    img{
      position: absolute;
      left: 100px;
      top: 224px;
    }
    h1{
      background: url('./assets/icons/arrow.svg') no-repeat center right;
      padding-right: 60px;
      font-size: 64px;
      font-family: 'Roboto Condensed';
      color: var(--primary-color);
    }
    div h1:nth-child(1){
      position: absolute;
      top: 366px;
      right: 223px;
      font-weight: 700
    }
    div h1:nth-child(2){
      position: absolute;
      top: 452px;
      right: 223px;
      font-weight: 500
    }
    div h1:nth-child(3){
      position: absolute;
      top: 537px;
      right: 223px;
      font-weight: 300
    }

</style>
<div>
    <img src="./assets/images/home.png" width="911px" />
    <div>
      <h1 data-lang="fr">Le Panthéon Étrusque</h1>
      <h1 data-lang="en">The Etruscan Pantheon</h1>
      <h1 data-lang="es">El Panteón Etrusco</h1>
    </div>
</div>
`;

export class pageHome extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    const langs = this.shadowRoot.querySelectorAll('h1')
    for(let lang of langs) lang.addEventListener('click', ev => {

        // Guardem el lang seleccionat
        config.lang = ev.target.dataset.lang

        // Eliminem la pagina actual amb una mica de fade
        utils.closeComponent(this, { fade: true })
        
        // Carreguem la seguent pagina amb un fade més gordo
        utils.openComponent('page-divinity', { fade: true, time: 2000 })
        
    })
  }

}

customElements.define('page-home', pageHome)