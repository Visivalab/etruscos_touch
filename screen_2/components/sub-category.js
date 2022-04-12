import {config} from '../config.js';
import {db} from '../db.js'

const template = document.createElement('template');
template.innerHTML = `
<style>
    @import 'style.css';

    :host{
      position: relative;
      transition: 1s;
      opacity: 0;
      width: 600px;
      transform: translateY(20px);
    }
    .subcategory{
      display: flex;
      align-items: center;
    }
    img{
      width: 200px;
    }
    p{
      transition: 1s;
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: left;
      color: white;
      transform: translateY(-10px);
    }
</style>

<div class="subcategory">
    <img src="images/portrait.png" />
    <p></p>
</div>
`;

export class subCategory extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
   
  connectedCallback() {
    this.id = this.getAttribute('id')
    
    setTimeout( () => {
      this.style.opacity = 1
      this.style.transform = 'translate(0)'
      this.shadowRoot.querySelector('p').style.transform = 'translateY(-15px)'
    }, this.getAttribute('timeout'))

    let nameSpace = this.shadowRoot.querySelector('p')
    let imageSpace = this.shadowRoot.querySelector('img')
    nameSpace.textContent = db[this.id].name[config.lang]
    imageSpace.setAttribute('src', db[this.id].portrait_img)
  }

}

customElements.define('sub-category', subCategory)