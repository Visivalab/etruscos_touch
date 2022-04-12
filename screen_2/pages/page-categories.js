import {config} from '../config.js';
import {db} from '../db.js'
import {translate} from '../utils.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 1s;
    }
    .intro{
      font-size: 64px;
      font-family: 'Roboto Condensed';
      color: var(--primary-color);
      line-height: 60px;

      position: absolute;
      width: 852px;
      height: 330px;
      left: 545px;
      top: 130px;
      text-align: center;
      transition: 1s;
      margin: 0;
    }
    .intro.hide{
      opacity: 0;
    }

    .subcategory__info{
      position: absolute;
      top: 100px;
      left: 150px;
      width: 40%;
      transition: 1s;
    }
    .subcategory__info.hide{
      opacity: 0;
    }
    .subcategory__info__title{
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 64px;
      color: white;
    }
    .subcategory__info__text{
      font-family: 'SourceSansPro';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      margin: 20px 0;
      z-index: 1;
      color: white;

      padding: 40px 55px;
      background: var(--primary-color-transp);
      box-sizing: border-box;
      margin-top: 30px;
    }
    .backHome{
      position: absolute;
      left: 1747px;
      top: 434px;
      display: flex;
      align-items: center;
      transition: 1s;
    }
    .backHome.hide{
      opacity: 0;
    }
    .backHome p{
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: right;
      color: var(--primary-color);
    }
    .backHome img{
      margin-left: 15px;
    }
    .maincategories, .subcategories{
      transition: 1s;
      display: flex;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      width: 1500px;
      justify-content: center;
      align-items: flex-start;
      gap: 200px;
    }
    .subcategories{
      flex-direction: column;
      top: 40%;
      gap: 10px;
      width: 600px;
      left: unset;
      right: 0;
    }

    /* Una main category es seleccionada y se van todas pal fondo */
    .maincategories.bottom{
      top: 90%;
      gap: 20px;
    }
    
    main-category{
      transition: 1s;
      transform: none;
    }
    main-category.hide{
      opacity: 0;
      transform: translateY(10px)
    }

</style>
<div>
    <h1 class="intro hide"></h1>
    <div class="backHome hide">
      <p translate="home">Home</p>
      <img src="./assets/icons/home.svg" width="33px" />
    </div>
    <div>
      <div class="subcategory__info hide"></div>
      <div class="maincategories">
        <main-category class="hide" bigImg id="journey_of_deceased"></main-category>
        <main-category class="hide" bigImg id="mythologies"></main-category>
        <main-category class="hide" bigImg id="infernal_deities"></main-category>
      </div>
      <div class="subcategories"></div>
    </div>
</div>
`;

export class pageCategories extends HTMLElement {
  
  constructor() {
    super()
    this.attachShadow({ mode:'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.intro = null
    this.backHome = null
    this.mainCategories = null

    this.category = null
    this.categoryTitle = null
    this.categoryText = null
  }
   
  connectedCallback() {
    translate(this)

    this.intro = this.shadowRoot.querySelector('.intro')
    this.backHome = this.shadowRoot.querySelector('.backHome')
    this.mainCategories = this.shadowRoot.querySelectorAll('main-category')
    
    this.categoryTitle = this.shadowRoot.querySelectorAll('.subcategory__info__title')
    this.categoryText = this.shadowRoot.querySelectorAll('.subcategory__info__text')

    /* Show up */
    setTimeout(() => this.showBaseLayout(), 1000)
    
    /* Home button events */
    this.prepareHomeButton()

    /* Main categories functionalities */
    for(let mainCategory of this.mainCategories) mainCategory.addEventListener('click', ev => {
      this.category = ev.target.getAttribute('id')
      for(let mainCategory of this.mainCategories) mainCategory.removeAttribute('selected')
      ev.target.setAttribute('selected','')
      this.hideIntroText()
      this.relayoutMainCategories()
      this.removeAllSubcategories()
      this.removeAllFinalElements()
      this.loadSubCategories()
    })

  }



  
  loadSubCategories(){
    let subcategoriesToShow = db[this.category].subcategories
    // Muestra las subcategorias que toquen
    this.showCategoryInfo()
    let timeout = 0
    for(let subcategory of subcategoriesToShow){
      timeout += 100
      let subcategory_el = document.createElement('sub-category')
      subcategory_el.setAttribute(subcategory, '')
      subcategory_el.setAttribute('id', subcategory)
      subcategory_el.setAttribute('timeout', timeout)
      subcategory_el.addEventListener('click', () => {
        this.removeAllSubcategories()
        this.removeAllFinalElements()
        this.showFinalElement(subcategory)
      })
      this.shadowRoot.querySelector('.subcategories').appendChild(subcategory_el)
    }
  }

  relayoutMainCategories(){
    // Pone las maincategories en fila abajo
    this.shadowRoot.querySelector('.maincategories').classList.add('bottom')
    for(let mainCategory of this.mainCategories){
      mainCategory.removeAttribute('bigImg', '')
    }
  }

  hideIntroText(){
    // Si aún hay el texto de intro, se esconde
    this.intro?.classList.add('hide')
  }

  showCategoryInfo(){

    let subcategory_title = document.createElement('h1')
    subcategory_title.className = 'subcategory__info__title'
    subcategory_title.textContent = db[this.category].name
    
    let subcategory_text = document.createElement('p')
    subcategory_text.className = 'subcategory__info__text'
    subcategory_text.innerHTML =  db[this.category].description[config.lang]

    setTimeout( () => {
      let subcategory_info = this.shadowRoot.querySelector('.subcategory__info')
      
      subcategory_info.appendChild(subcategory_title)
      subcategory_info.appendChild(subcategory_text)
      
      subcategory_info.classList.remove('hide')
      
    }, 400)

  }

  removeAllFinalElements(){
    // Esconde todos los finalElements que existan
    let actualFinalElements = this.shadowRoot.querySelectorAll('final-element')
    for(let element of actualFinalElements) element.remove()
  }

  removeAllSubcategories(){
    // Esconde el texto de la subcategoria
    let subcategory_info = this.shadowRoot.querySelector('.subcategory__info')
    subcategory_info.classList.add('hide')

    let subcategory_title = this.shadowRoot.querySelectorAll('.subcategory__info h1')
    for(let subcategory of subcategory_title) subcategory.remove()
    let subcategory_text = this.shadowRoot.querySelectorAll('.subcategory__info p')
    for(let subcategory of subcategory_text) subcategory.remove()
    
    // Esconde todas las subcategorias que existan
    let actualSubcategories = this.shadowRoot.querySelectorAll('sub-category')
    for(let subcategory of actualSubcategories) subcategory.remove()
  }

  showBaseLayout(){
    this.style.opacity = 1
    this.intro.textContent = db['intro'][config.lang]
    this.intro.classList.remove('hide')
    this.backHome.classList.remove('hide')
    /* Los portraits aparecen cascada de opacidad */
    setTimeout(() => {
      for(let i=0; i<this.mainCategories.length; i++){
        setTimeout( () => this.mainCategories[i].classList.remove('hide'), i*200)
      }
    },500)
  }
  
  prepareHomeButton(){
    this.backHome.addEventListener('click', () => {
      // Eliminamos la pagina actual (con fade)
      this.style.opacity = 0
      setTimeout( () => this.remove(), 1000)
      // Cargamos la home (que ya tiene fade incorporado)
      let inner = document.createElement('page-home')
      document.querySelector('body').appendChild(inner)
    })
  }

  showFinalElement(subcategory){
    let finalElement = document.createElement('final-element')
    finalElement.setAttribute('id', subcategory)
    this.shadowRoot.appendChild(finalElement)
  }

}

customElements.define('page-categories', pageCategories)