import {config} from '../config.js';
import {db} from '../db.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
  :host{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  video{
    object-fit: cover;
  }
  .stop{
    position: absolute;
    width: 100px;
    height: 100px;
    right: 0;
    z-index: 1;
  }
</style>
<div class="stop"></div>
<video width="100%" height="100%" autoload>
    <source src="./videos/presentation_en.mp4" type="video/mp4">
</video> 
`;

export class video extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    this.video = this.shadowRoot.querySelector('video')
    this.source = this.shadowRoot.querySelector('source')

    this.source.setAttribute('src', db.video[config.lang])

    this.video.style.transition = config.timings.videoFadeOut + 'ms'
    this.video.play()
    this.video.onloadedmetadata = () => {

      if(config.timings.videoDuration == 0) config.timings.videoDuration = this.video.duration
      
      setTimeout( () => {
        this.hideVideo()
      }, config.timings.videoDuration*1000 - config.timings.videoFadeOut)

    }
    
    // Per testing, es pot tancar clicant a dalt a la dreta
    this.shadowRoot.querySelector('.stop').addEventListener('click', () => this.remove())
  }

  hideVideo(){
    this.video.style.opacity = 0
    setTimeout(() => this.remove(), config.timings.videoFadeOut + 50)
  }

}

customElements.define('full-video', video)