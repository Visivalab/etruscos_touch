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
        transition: 1s;
        opacity: 1;
    }
    .finalElement.hide{
        opacity: 0;
    }
    .finalElement.hide .texts{
        left: 55%;
    }


    .texts{
        position: absolute;
        left: 50%;
        width: 45%;
        transition: 1000ms ease-out;
    }
    
    .name{
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        height: 300px;
        font-size: 50px;
        line-height: 50px;
        color: white;
        display: flex;
        align-items: end;
    }
    .detailsBox{
        position: absolute;
        top: 300px;
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

    /* Images managment */
    .zoomed_image{
        position: absolute;
        top: 120px;
        left: 0px;
    }
    .base_image, .zoomed_container{
        position: absolute;
        height: 700px;
        left: 25%;
        top: 50%;
    }
    .zoomed_container{
        opacity: 0;
        --clip-position: 0 0;
        --clip-speed: 2s;
        clip-path: circle(80px at var(--clip-position));
        background-color: var(--primary-color);
        left: 50%;
        transition: opacity 1s, clip-path var(--clip-speed), transform var(--clip-speed);
    }
    .zoomed_container img{
        clip-path: circle(79px at var(--clip-position));
        transition: clip-path var(--clip-speed);
        height: 100%;
    }


</style>

<div class="finalElement hide">
    
    <div class="zoomed_image">
        <img class="base_image" />
        <div class="zoomed_container">
            <img class="lens_image" />
        </div>
    </div>

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
        this.name = this.shadowRoot.querySelector('.name')
        this.description = this.shadowRoot.querySelector('.detailsBox')

        this.image = this.shadowRoot.querySelector('.base_image')
        this.lensImage = this.shadowRoot.querySelector('.lens_image')
        this.zoom = this.shadowRoot.querySelector('.zoomed_container')


        this.image.setAttribute('src', db[this.getAttribute('id')].img)
        this.lensImage.setAttribute('src', db[this.getAttribute('id')].img)

        this.name.innerHTML = db[this.getAttribute('id')].name[config.lang]
        this.description.innerHTML = db[this.getAttribute('id')].description[config.lang]

        setTimeout(() => {
            this.shadowRoot.querySelector('.finalElement').classList.remove('hide'),
            this.init_lens()
        }, 50)
    }

    // Gestiona el movimiento de la lupa
    init_lens(){
        const zoom_details = db[this.getAttribute('id')].zoom_details

        this.zoom.style.transform = `translate(${zoom_details[0].box_position[0]}px, ${zoom_details[0].box_position[1]}px) scale(1.2)`
        this.zoom.style.setProperty('--clip-position', `${zoom_details[0].lens_position[0]}px ${zoom_details[0].lens_position[1]}px`)
        setTimeout( () => {
            this.moveLens(1, zoom_details)
        }, 3000)
    }

    moveLens(lens_iteration, zoom_details){
        this.zoom.style.opacity = 1
        setTimeout( () => {
            /* Esconde la lupa cuando ya no hay mas posiciones 
            if(!zoom_details[lens_iteration]){
                this.zoom.style.opacity = 0
                return
            }*/
            
            this.zoom.style.transform = `translate(${zoom_details[lens_iteration].box_position[0]}px, ${zoom_details[lens_iteration].box_position[1]}px) scale(1.2)`
            this.zoom.style.setProperty('--clip-position', `${zoom_details[lens_iteration].lens_position[0]}px ${zoom_details[lens_iteration].lens_position[1]}px`)
            this.moveLens(lens_iteration+1, zoom_details)
            
        }, config.timings.lensPause)
    }

}

customElements.define('final-element', finalElement)