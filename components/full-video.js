import {config} from '../config.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    position: absolute;
    width: 100%;
    height: 100%;
  }
 video{
   object-fit: cover;
 }
 .stop{
   position: absolute;
   width: 100px;
   height: 100px;
   right: 0;
 }
</style>
<div class="stop"></div>
<video width="100%" height="100%" controls>
    <source src="movie.mp4" type="video/mp4">
</video> 
`;

export class video extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    // TODO : Carregar el video de l'idioma correcte que ens vingui per config.lang
    
    // Es pot tancar clicant a dalt a la dreta
    this.shadowRoot.querySelector('.stop').addEventListener('click', () => this.remove())
  }

}

customElements.define('full-video', video)