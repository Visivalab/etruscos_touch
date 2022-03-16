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

    h1{
        cursor: pointer;
    }

</style>
<div>
    <h1 class="bold" data-lang="fr">Le Panthéon Étrusque</h1>
    <h1 class="regular" data-lang="en">The Etruscan Pantheon</h1>
    <h1 class="medium" data-lang="es">El Panteón Etrusco</h1>
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