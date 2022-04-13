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
      width: 540px;
      transform: translateY(20px);
    }
    .subcategory{
      display: flex;
      align-items: center;
    }
    div.boxed{
      background-color: var(--primary-color-transp);
      padding-left: 200px;
      padding-right: 25px;
      margin-left: -200px;
      z-index: -1;
      align-items: center;
      height: 192px;
      display: flex;
    }
    div.miniBox{
      background-color: var(--primary-color-transp);
      padding: 10px 0;
      padding-left: 110px;
      padding-right: 25px;
      margin-left: -110px;
      z-index: -1;
      align-items: center;
      min-height: 100px;
      display: flex;
    }
    div.boxSide{
      background-color: var(--primary-color-transp);
      padding-left: 130px;
      padding-right: 25px;
      margin-left: -130px;
      z-index: -1;
      align-items: center;
      height: 142px;
      margin-top: 97px;
      display: flex;
    }
    img{
      width: 200px;
    }
    p{
      transition: 1s transform;
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 27px;
      text-align: left;
      color: white;
      transform: translateY(10px);
    }
    div.miniBox p{
      font-size: 22px;
      line-height: 26px;
    }
</style>

<div class="subcategory">
    <img src="images/portrait.png" />
    <div class="text miniBox"></div>
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
      this.shadowRoot.querySelector('p').style.transform = 'translateY(-0)'
    }, this.getAttribute('timeout'))

    let nameSpace = this.shadowRoot.querySelector('.text')
    let imageSpace = this.shadowRoot.querySelector('img')
    nameSpace.innerHTML = db[this.id].name[config.lang]
    imageSpace.setAttribute('src', db[this.id].portrait_img)
  }

}

customElements.define('sub-category', subCategory)