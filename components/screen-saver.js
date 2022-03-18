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
  video{
    object-fit: cover;
    opacity: 0;
    transition: 1s
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

    document.addEventListener('click', () => {
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
        this.style.display = 'none'
    },1000)
  }

  showScreensaver(){
    this.style.display = 'block'
      setTimeout( () => {
          this.video.style.opacity = 1
      }, 0)
      this.video.play()
  }

}

customElements.define('screen-saver', screensaver)