import {config} from '../config.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  :host([hidden]){
      display: none;
  }
  video{
    object-fit: cover;
    opacity: 0;
    transition: 500ms
  }
</style>
<video width="100%" height="100%" autoload loop>
    <source src="./assets/videos/screensaver.mp4" type="video/mp4">
</video> 
`;

export class screensaver extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.timer = null
  }
   
  connectedCallback() {
    this.video = this.shadowRoot.querySelector('video')

    /* Los navegadores no permiten autostart en un video si el usuario no ha interaccionado
    con la pagina, por esto:
    Cuando el usuario interacciona pulsando en cualquier lado, guardamos en la sesion un true y iniciamos el timer
    Si no hay este true en la sesion, no salta el salvapantallas (porque se veria un video pausado sin mas)
    Si hay el true, osea se ha interaccionado en esta sesion, empieza a contar a la que se carga la pagina (cuando se vuelve a la home desde otro lado)
    Lo unico negativo es que para que el salvapantallas empiece a funcionar hay que pulsar en algun lado para que 
    detecte que hay interacción y empiece todo.
    */
    if(sessionStorage.getItem('interacted') === 'true') this.restartTimer()

    document.addEventListener('click', () => {
        sessionStorage.setItem('interacted', 'true')
        this.restartTimer()
    })

    this.addEventListener('click', e => {
        e.stopPropagation()
        this.hideScreensaver()
        this.restartTimer()
    })
  }

  restartTimer(){
    clearTimeout(this.timer)
    this.timer = setTimeout( () => {
        this.showScreensaver()
    }, config.screensaverTimer)
  }

  hideScreensaver(){
    this.video.style.opacity = 0
    setTimeout( () => {
        this.video.currentTime = 0
        this.setAttribute('hidden','')
    },500)
  }

  showScreensaver(){
      this.removeAttribute('hidden')
      setTimeout( () => {
          this.video.style.opacity = 1
      }, 0)
      this.video.play()
  }

}

customElements.define('screen-saver', screensaver)