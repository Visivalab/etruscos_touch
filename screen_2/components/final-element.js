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
        font-size: 20px;
        line-height: 28px;
        margin: 20px 0;
        z-index: 1;
        color: white;
    }
</style>

<div class="finalElement">
    <img src="" />
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
  }

}

customElements.define('final-element', finalElement)