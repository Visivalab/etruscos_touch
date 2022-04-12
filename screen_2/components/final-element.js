import {db} from '../db.js'
import {config} from '../config.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'style.css';

    h1, p{
        color: white
    }
    .finalElement{
        width: 1500px;
        margin: auto;
        position: relative;
        height: 80%;
    }
    img{
        top: 50%;
        position: absolute;
        transform: translate(-50%,-50%);
        left: 25%;
        z-index: 1;
        max-height: 700px;
        max-width: 700px;
        width: auto;
        transition: 1000ms;
    }
    img.highlight.hide{
        opacity: 0;
    }
    .texts{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 45%;
        transform: translateY(-50%);
    }
    .name{
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 50px;
        color: white;
    }
    .detailsBox{
        padding: 40px 55px;
        background: var(--primary-color-transp);
        box-sizing: border-box;
        margin-top: 30px;
    }
    .detailsBox p{
        font-family: 'SourceSansPro';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        margin: 20px 0;
        z-index: 1;
        color: white;
    }
</style>

<div class="finalElement">
    <img src="" />
    <img class="highlight" src="" />
    <div class="texts">
        <h1 class="name">Title</h1>
        <div class="detailsBox">
            <p>Description</p>
        </div>
    </div>
</div>
`;

export class finalElement extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    this.name = this.shadowRoot.querySelector('h1')
    this.image = this.shadowRoot.querySelector('img')
    this.description = this.shadowRoot.querySelector('.detailsBox')
    
    this.image.setAttribute('src', db[this.getAttribute('id')].img)
    this.name.innerHTML = db[this.getAttribute('id')].name
    this.description.innerHTML = db[this.getAttribute('id')].description[config.lang]

    setTimeout( () => this.showNextHighlight(1), 2000)
    for(let i=2; i<=db[this.getAttribute('id')].highlights+1; i++){
        setTimeout( () => {
            i === db[this.getAttribute('id')].highlights+1 ? this.backToInitialImage() : this.showNextHighlight(i)
        }, i * config.timings.highlightDuration)
    }
  }

  showNextHighlight(index){
      let hightlight = this.shadowRoot.querySelector('.highlight')
      let nextHighlight = db[this.getAttribute('id')].img.slice(0,-4)
      hightlight.classList.add('hide')
      setTimeout( () => {
        hightlight.setAttribute('src', nextHighlight+'-'+index+'.png')
        hightlight.classList.remove('hide')
      },1000)
  }
  backToInitialImage(){
    let hightlight = this.shadowRoot.querySelector('.highlight')
    hightlight.classList.add('hide')
  }

}

customElements.define('final-element', finalElement)