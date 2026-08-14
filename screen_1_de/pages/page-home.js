import {config} from '../config.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
    }

    img{
      position: absolute;
      left: 110px;
      top: 234px;
      opacity: 0.7;
      transform: scaleX(-1);
    }
    h1{
      background: url('./assets/icons/arrow.svg') no-repeat center right;
      padding-right: 60px;
      font-size: 64px;
      font-family: 'Roboto Condensed';
      color: var(--primary-color);
      transition: 1s;
    }
    h1:hover{
      transform: translateX(30px);
      padding-right: 70px;
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
</style>
<div>
    <img src="./assets/images/home.jpg" width="800px" />
    <div>
      <h1 data-lang="en" lang="en">The Etruscan Pantheon</h1>
      <h1 data-lang="de" lang="de">Die etruskische Götterwelt</h1>
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

    /* Show up */
    setTimeout( () => {
      this.style.opacity = 1
      this.style.transition = '1000ms'
    }, 1000)


    for(let lang of langs) lang.addEventListener('click', ev => {

        const selectedLanguage = ev.currentTarget.dataset.lang
        if(!config.supportedLanguages.includes(selectedLanguage)) return

        // Guardem el lang seleccionat
        config.lang = selectedLanguage
        document.documentElement.lang = selectedLanguage


        // Eliminem la pagina actual amb una mica de fade
        setTimeout( () => this.style.opacity = 0, 500)
        setTimeout( () => this.remove(), 1000)
        

        // Cargamos la siguiente
        let inner = document.createElement('page-divinity')
        document.querySelector('body').appendChild(inner)   
        
    })
  }

}

customElements.define('page-home', pageHome)
