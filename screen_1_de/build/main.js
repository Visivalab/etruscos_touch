(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={lang:`en`,supportedLanguages:[`en`,`de`],timings:{presentation:6e3,lensDelay:4e3,lensPause:4e3,videoFadeOut:1e3,videoDuration:0},screensaverTimer:12e4},t={intro:{en:`DISCOVER THE ETRUSCAN PANTHEON!`,de:`Entdecken Sie die etruskische Götterwelt!`},layout:{greek:{en:`Greek`,de:`Griechisch`},roman:{en:`Roman`,de:`Römisch`},etrusque:{en:`Etruscan`,de:`Etruskisch`},home:{en:`Home`,de:`Startseite`}},video:{en:`./assets/videos/presentation_en.mp4`,de:`./assets/videos/presentation_de.mp4`},tinia:{img:`./assets/images/tinia.png`,portrait_img:`./assets/images/tinia-portrait.png`,greek_name:{en:`Zeus`,de:`Zeus`},etrusque_name:`Tinia`,roman_name:{en:`Jupiter`,de:`Jupiter`},description:{en:`The supreme god`,de:`Der oberste Gott`},long_description:{en:`The supreme god; he is often represented on a throne and holding a thunderbolt in his hand, his main attribute.`,de:`Der oberste Gott; er wird häufig auf einem Thron sitzend und mit einem Blitzbündel in der Hand – seinem wichtigsten Attribut – dargestellt.`},zoom_details:[{lens_position:[90,320],box_position:[-170,29]}]},uni:{img:`./assets/images/uni.png`,portrait_img:`./assets/images/uni-portrait.png`,greek_name:{en:`Hera`,de:`Hera`},etrusque_name:`Uni`,roman_name:{en:`Juno`,de:`Juno`},description:{en:`The most important goddess and wife of Tinia`,de:`Die bedeutendste Göttin und Frau von Tinia`},long_description:{en:`The most important goddess and wife of Tinia. She is the protectress of birth and of the fate of cities. Together with Tinia (Jupiter) and Menrva (Minerva), she forms part of the Divine Trinity, the precursor of the Capitoline Triad of the Romans.`,de:`Die bedeutendste Göttin und Frau von Tinia. Sie ist die Schutzgöttin der Geburt und des Schicksals der Städte. Gemeinsam mit Tinia (Jupiter) und Menrva (Minerva) bildet sie die göttliche Dreiheit – die Vorläuferin der sogenannten kapitolinischen Trias der Römer.`},zoom_details:[{lens_position:[280,109],box_position:[-267,22]},{lens_position:[440,310],box_position:[-267,22]}]},menerva:{img:`./assets/images/menerva.png`,portrait_img:`./assets/images/menerva-portrait.png`,greek_name:{en:`Athena`,de:`Athene`},etrusque_name:`Menrva`,roman_name:{en:`Minerva`,de:`Minerva`},description:{en:`The goddess of strategy, war, art and commerce, but also of wisdom`,de:`Die Göttin des strategischen Krieges, der Kunst und des Handels, aber auch der Weisheit`},long_description:{en:`The goddess of strategy, war, art and commerce, but also of wisdom. Daughter of Tinia, she is always depicted dressed. She is often armed, with a helmet, a spear and an aegis, her characteristic shield.`,de:`Die Göttin des strategischen Krieges, der Kunst und des Handels, aber auch der Weisheit. Tochter des Tinia; sie wird immer bekleidet dargestellt. Oft ist sie bewaffnet – mit Helm, Speer und der Ägis, ihrem charakteristischen Schutzpanzer.`},zoom_details:[{lens_position:[200,100],box_position:[-200,18]},{lens_position:[325,180],box_position:[-200,18]},{lens_position:[105,350],box_position:[-200,18]}]},laran:{img:`./assets/images/laran.png`,portrait_img:`./assets/images/laran-portrait.png`,greek_name:{en:`Ares`,de:`Ares`},etrusque_name:`Laran`,roman_name:{en:`Mars`,de:`Mars`},description:{en:`The god of war`,de:`Der Kriegsgott`},long_description:{en:`The god of war, he is represented as armed and in the act of hurling a spear. Sometimes he is depicted as a beardless youth, at others as a bearded adult.`,de:`Der Kriegsgott; er wird bewaffnet und speerschleudernd dargestellt. Manchmal ist er bartlos und jung, manchmal ein bärtiger Mann.`},zoom_details:[{lens_position:[110,140],box_position:[-187,43]}]},turan:{img:`./assets/images/turan.png`,portrait_img:`./assets/images/turan-portrait.png`,greek_name:{en:`Aphrodite`,de:`Aphrodite`},etrusque_name:`Turan`,roman_name:{en:`Venus`,de:`Venus`},description:{en:`The goddess of love and beauty`,de:`Die Göttin der Liebe und der Schönheit`},long_description:{en:`The goddess of love and beauty. In Etruscan, her name means ‘lady’. In the Archaic period, she is often represented as a winged deity.`,de:`Die Göttin der Liebe und der Schönheit. Im Etruskischen bedeutet ihr Name „Herrin“. In der archaischen Zeit wird sie häufig als geflügelte Göttin dargestellt.`},zoom_details:[{lens_position:[110,210],box_position:[-240,16]},{lens_position:[380,210],box_position:[-240,16]}]},turms:{img:`./assets/images/turms.png`,portrait_img:`./assets/images/turms-portrait.png`,greek_name:{en:`Hermes`,de:`Hermes`},etrusque_name:`Turms`,roman_name:{en:`Mercury`,de:`Merkur`},description:{en:`The messenger of the gods`,de:`Der Götterbote`},long_description:{en:`The messenger of the gods whose attributes are the wide-brimmed hat (petasos), the caduceus (a staff with two entwined serpents) and winged sandals.`,de:`Der Götterbote, man erkennt ihn an einem breiten Hut (Petasos), einem Stab mit zwei verschlungenen Schlangen (Kerykeion) und geflügelten Sandalen.`},zoom_details:[{lens_position:[130,90],box_position:[-168,-21]},{lens_position:[220,280],box_position:[-168,-21]},{lens_position:[175,600],box_position:[-168,-21]}]},fufluns:{img:`./assets/images/fufluns.png`,portrait_img:`./assets/images/fufluns-portrait.png`,greek_name:{en:`Dionysus`,de:`Dionysos`},etrusque_name:`Fufluns`,roman_name:{en:`Bacchus`,de:`Bacchus`},description:{en:`The god of wine and protector of viticulture`,de:`Der Gott des Weins und des Weinanbaus`},long_description:{en:`The god of wine and protector of viticulture, he is often represented as a naked youth adorned with vine leaves and holding a kantharos in his hand, the cup most commonly used to drink wine.`,de:`Der Gott des Weins und des Weinanbaus. Er wird häufig als nackter junger Mann dargestellt. Oft ist er mit Weinblättern geschmückt und hält in seiner Hand ein Weintrinkgefäß (Kantharos).`},zoom_details:[{lens_position:[80,250],box_position:[-182,42]},{lens_position:[200,100],box_position:[-182,42]}]}};function n(t,n=e.lang){return t[n]}function r(e){let r=e.shadowRoot.querySelectorAll(`[translate]`);for(let e of r){let r=e.getAttribute(`translate`);e.textContent=n(t.layout[r])}}var i=document.createElement(`template`);i.innerHTML=`
<style>
    :host{
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: 1s;
    }
    h1{
      font-size: 30px;
      font-family: 'Roboto Condensed';
      font-weight: 500;
      color: var(--primary-color);
      line-height: 38px;

      position: absolute;
      width: 1200px;
      height: 400px;
      left: 360px;
      top: 70px;
      text-align: center;
      transition: 1s;
      margin: 0;
    }
    h1.hide{
      opacity: 0;
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
    
    divinity-portrait{
      transition: 1s;
      position: absolute;
      transform: none;

      
    }
    divinity-portrait.hide{
      opacity: 0;
      transform: translateY(10px)
    }
    /* Fufluns */
    divinity-portrait:nth-child(1){ left: 475px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(1){ left: 219px; bottom: 55px; }
    /* Laran */
    divinity-portrait:nth-child(2){ left: 886.88px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(2){ left: 453px; bottom: 55px; }
    /* Menerva */
    divinity-portrait:nth-child(3){ left: 1286.68px; bottom: 420px; }
    divinity-portrait[inList]:nth-child(3){ left: 685px; bottom: 55px; }
    /* Tinia */
    divinity-portrait:nth-child(4){ left: 268px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(4){ left: 923px; bottom: 55px; }
    /* Turan */
    divinity-portrait:nth-child(5){ left: 671.32px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(5){ left: 1164px; bottom: 55px; }
    /* Turms */
    divinity-portrait:nth-child(6){ left: 1087.63px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(6){ left: 1402px; bottom: 55px; }
    /* Uni */
    divinity-portrait:nth-child(7){ left: 1512.52px; bottom: 137px; }
    divinity-portrait[inList]:nth-child(7){ left: 1637px; bottom: 55px; }
</style>
<div>
    <full-video></full-video>
    <h1 class="hide"></h1>
    <div class="backHome hide">
      <p translate="home">Home</p>
      <img src="./assets/icons/home.svg" width="33px" />
    </div>
    <div>
      <divinity-portrait class="hide" bigImg name="Tinia"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Menerva"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Uni"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Laran"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Turan"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Turms"></divinity-portrait>
      <divinity-portrait class="hide" bigImg name="Fufluns"></divinity-portrait>
    </div>
</div>
`;var a=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(i.content.cloneNode(!0)),this.layoutAppeared=!1,this.intro=null,this.backHome=null,this.portraits=null}connectedCallback(){r(this),this.intro=this.shadowRoot.querySelector(`h1`),this.backHome=this.shadowRoot.querySelector(`.backHome`),this.portraits=this.shadowRoot.querySelectorAll(`divinity-portrait`),setTimeout(()=>this.style.opacity=1,500),this.shadowRoot.querySelector(`full-video`).addEventListener(`stop`,e=>{this.layoutAppeared===!1&&this.showLayout()}),this.backHome.addEventListener(`click`,()=>{this.style.opacity=0,setTimeout(()=>this.remove(),1e3);let e=document.createElement(`page-home`);document.querySelector(`body`).appendChild(e)}),this.intro.textContent=n(t.intro);for(let e of this.portraits)e.addEventListener(`click`,()=>{this.intro?.classList.add(`hide`);for(let e of this.portraits)e.setAttribute(`inList`,``),e.setAttribute(`visibleTransitions`,``),e.removeAttribute(`bigImg`,``),e.removeAttribute(`noName`,``);let t=this.shadowRoot.querySelectorAll(`divinity-header`);if(t)for(let e of t)e.setAttribute(`fadingOut`,``),setTimeout(()=>{e.remove()},1e3);this.createDivinity(e.getAttribute(`name`).toLowerCase())});setTimeout(()=>{setTimeout(()=>{this.layoutAppeared===!1&&this.showLayout()},e.timings.videoDuration*1e3+500)},100)}showLayout(){this.layoutAppeared=!0,this.intro.classList.remove(`hide`),this.backHome.classList.remove(`hide`),setTimeout(()=>{for(let e=0;e<this.portraits.length;e++)setTimeout(()=>this.portraits[e].classList.remove(`hide`),e*200)},500)}createDivinity(e){let t=document.createElement(`divinity-header`);t.setAttribute(`divinity`,e),this.shadowRoot.appendChild(t)}};customElements.define(`page-divinity`,a);var o=document.createElement(`template`);o.innerHTML=`
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
`;var s=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){let t=this.shadowRoot.querySelectorAll(`h1`);setTimeout(()=>{this.style.opacity=1,this.style.transition=`1000ms`},1e3);for(let n of t)n.addEventListener(`click`,t=>{let n=t.currentTarget.dataset.lang;if(!e.supportedLanguages.includes(n))return;e.lang=n,document.documentElement.lang=n,setTimeout(()=>this.style.opacity=0,500),setTimeout(()=>this.remove(),1e3);let r=document.createElement(`page-divinity`);document.querySelector(`body`).appendChild(r)})}};customElements.define(`page-home`,s);var c=document.createElement(`template`);c.innerHTML=`
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
`;var l=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(c.content.cloneNode(!0))}connectedCallback(){this.video=this.shadowRoot.querySelector(`video`),this.source=this.shadowRoot.querySelector(`source`);let r=n(t.video);if(!r){setTimeout(()=>{this.dispatchEvent(new CustomEvent(`stop`,{bubbles:!0,composed:!0})),this.remove()},0);return}this.source.setAttribute(`src`,r),this.video.style.transition=e.timings.videoFadeOut+`ms`,this.video.play(),this.video.onloadedmetadata=()=>{e.timings.videoDuration==0&&(e.timings.videoDuration=this.video.duration),setTimeout(()=>{this.hideVideo()},e.timings.videoDuration*1e3-e.timings.videoFadeOut)},this.shadowRoot.querySelector(`.stop`).addEventListener(`click`,()=>{this.dispatchEvent(new CustomEvent(`stop`,{bubbles:!0,composed:!0})),this.hideVideo()})}hideVideo(){this.video.style.opacity=0,setTimeout(()=>this.remove(),e.timings.videoFadeOut+50)}};customElements.define(`full-video`,l);var u=document.createElement(`template`);u.innerHTML=`
<style>
    @import 'style.css';

    :host{
      position: relative;
    }
    :host([visibleTransitions]) p, :host([visibleTransitions]) img{
      transition: 1s;
    }
    :host([noName]) p{
      opacity: 0;
    }
    :host([bigImg]) img{
      width: 150px;
    }
    .divinity__portrait--selected{
      position: absolute;
      width: 100%;
      aspect-ratio: 1;
      background-color: red;
      bottom: 36px;
      z-index: -1;
      transition: opacity 0.2s, transform 0.6s;
      opacity: 0;
      border-radius: 100%;
      /*background-color: var(--primary-color);*/
      background-color: #FFFFFF;
    }
    .divinity__portrait:hover .divinity__portrait--selected{
      transform: scale(1.7);
      opacity: 0.3;
    }
    img{
      width: 114.97px;
    }
    p{
      font-family: 'Cinzel';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: white;
    }
</style>

<div class="divinity__portrait">
    <span class="divinity__portrait--selected"></span>
    <img src="images/divinity-portrait.png" />
    <p>Divinity</p>
</div>
`;var d=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(u.content.cloneNode(!0)),this.name=this.getAttribute(`name`)}connectedCallback(){let e=this.shadowRoot.querySelector(`p`),n=this.shadowRoot.querySelector(`img`),r=t[this.name.toLowerCase()];e.textContent=r.etrusque_name,n.setAttribute(`src`,r.portrait_img)}};customElements.define(`divinity-portrait`,d);var f=document.createElement(`template`);f.innerHTML=`
<style>
    @import 'style.css';

    :host{
        display: flex;
        align-items: center;
        transition: 1s;
    }
    :host([fadingOut]){
        transition: transform 1200ms ease, opacity 800ms 100ms;
        transform: translateX(-200px);
        opacity: 0;
    }
    :host([fadingOut]) .base_image, :host([fadingOut]) .zoomed_container{
        margin-left: -200px;
        transition: 1200ms ease;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    .name{
        position: absolute;
        width: 827px;
        height: 248px;
        left: 270px;
        top: 322px;

        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 184px;
        line-height: 248px;

        color: white;
        opacity: 0;
    }
    .description{
        position: absolute;
        width: 615px;
        height: 57px;
        left: 290px;
        top: 540px;

        font-family: 'SourceSansPro';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;

        color: var(--primary-color);
        opacity: 0;
    }
    .nameBox{
        position: absolute;
        width: 0;
        height: 139px;
        background: var(--primary-color-transp);
        opacity: 0;
        padding: 20px;
        box-sizing: border-box;
    }
    .nameBox--greek{
        left: 244px;
        top: 239px;
    }
    .nameBox p:first-child{
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-transform: uppercase;

        color: var(--primary-color);
    }
    .nameBox p:last-child{
        font-family: 'Cinzel';
        font-style: normal;
        font-weight: 400;
        font-size: 72px;
        line-height: 80px;

        color: var(--primary-color);
    }
    .nameBox--etrusque{
        left: 244px;
        top: 386px;
    }
    .nameBox--roman{
        left: 244px;
        top: 533px;
    }
    .detailsBox{
        position: absolute;
        width: 729px;
        height: 434px;
        left: 944px;
        top: 239px;

        display: grid;
        place-items: center;

        opacity: 0;
        background: var(--primary-color-transp);
    }
    .detailsBox p{
        margin-left: 60px;
        width: 431px;

        font-family: 'SourceSansPro';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        z-index: 1;
        color: white;
    }
    .detailsBox p strong{
        color: black;
    }

    /* Images managment */
    .base_image{
        opacity: 0;
    }
    .base_image, .zoomed_container{
        position: absolute;
        height: 700px;
        left: 1164px;
        top: 96px;
    }
    .zoomed_container{
        --clip-position: 0 0;
        --clip-speed: 2s;
        clip-path: circle(80px at var(--clip-position));
        background-color: var(--primary-color);
        left: 50%;
        opacity: 0;
        transition: opacity 1s, clip-path var(--clip-speed), transform var(--clip-speed);
    }
    .zoomed_container.active{
        opacity: 1;
    }
    .zoomed_container img{
        clip-path: circle(79px at var(--clip-position));
        transition: clip-path var(--clip-speed);
        height: 100%;
    }
</style>
<div>
    <p class="name">DIVINITY</p>
    <p class="description">Divinity properties</p>
</div>
<div class="nameBox nameBox--greek">
    <p translate="greek">Greek</p>
    <p class="greekName">Greek name</p>
</div>
<div class="nameBox nameBox--etrusque">
    <p translate="etrusque">Étrusque</p>
    <p></p>
</div>
<div class="nameBox nameBox--roman">
    <p translate="roman"></p>
    <p class="romanName">Roman name</p>
</div>
<div class="detailsBox">
    <p></p>
</div>
</div>
<img class="base_image" />
<div class="zoomed_container">
    <img class="lens_image" />
</div>
`;var p=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(f.content.cloneNode(!0))}connectedCallback(){this.divinity=this.getAttribute(`divinity`),this.name=this.shadowRoot.querySelector(`.name`),this.greekName=this.shadowRoot.querySelector(`.greekName`),this.romanName=this.shadowRoot.querySelector(`.romanName`),this.description=this.shadowRoot.querySelector(`.description`),this.longDescription=this.shadowRoot.querySelector(`.detailsBox p`),this.zoom=this.shadowRoot.querySelector(`.zoomed_container`),this.image=this.shadowRoot.querySelector(`.base_image`),this.lensImage=this.shadowRoot.querySelector(`.lens_image`),this.nameBoxes=this.shadowRoot.querySelectorAll(`.nameBox`),this.baseImage=this.shadowRoot.querySelector(`.base_image`),this.detailsBox=this.shadowRoot.querySelector(`.detailsBox`),r(this),this.buildDivinity(),setTimeout(()=>this.showUp(),800),setTimeout(()=>this.transition(),e.timings.presentation)}showUp(){this.baseImage.style.transform=`scale(0.95)`,this.name.style.transform=`scale(0.95)`,setTimeout(()=>{this.name.style.transform=`scale(1)`,this.name.style.transition=`2s`,this.name.style.opacity=1},300),setTimeout(()=>{this.baseImage.style.transform=`scale(1)`,this.baseImage.style.transition=`4s`,this.baseImage.style.opacity=1},300),setTimeout(()=>{this.description.style.transition=`2s`,this.description.style.opacity=1},1500)}transition(){this.setAttribute(`details`,``),this.name.style.transition=`1500ms`,this.name.style.left=`263px`,this.name.style.top=`423px`,this.name.style.fontSize=`72px`,this.name.style.lineHeight=`97px`,this.description.style.transition=`1s`,this.description.style.opacity=`0`,this.nameBoxes[1].style.transition=`2s`,this.nameBoxes[1].style.width=`692px`,this.nameBoxes[1].style.opacity=1,this.nameBoxes[0].style.width=`692px`,this.nameBoxes[2].style.width=`692px`,setTimeout(()=>{this.nameBoxes[0].style.transition=`2s`,this.nameBoxes[0].style.opacity=1,this.nameBoxes[2].style.transition=`2s`,this.nameBoxes[2].style.opacity=1},1200),setTimeout(()=>{this.detailsBox.style.transition=`1s`,this.detailsBox.style.opacity=1},1500),this.baseImage.style.transition=`2s`,this.baseImage.style.left=`50%`,this.baseImage.style.transform=`translate(-50%)`}buildDivinity(){this.name.textContent=t[this.divinity].etrusque_name,this.greekName.textContent=n(t[this.divinity].greek_name),this.romanName.textContent=n(t[this.divinity].roman_name),this.description.textContent=n(t[this.divinity].description),this.longDescription.textContent=n(t[this.divinity].long_description),this.image.setAttribute(`src`,t[this.divinity].img),this.lensImage.setAttribute(`src`,t[this.divinity].img),this.init_lens()}init_lens(){let n=t[this.divinity].zoom_details;setTimeout(()=>this.zoom.classList.add(`active`),e.timings.presentation+e.timings.lensDelay),this.zoom.style.transform=`translate(${n[0].box_position[0]}px, ${n[0].box_position[1]}px) scale(1.2)`,this.zoom.style.setProperty(`--clip-position`,`${n[0].lens_position[0]}px ${n[0].lens_position[1]}px`),setTimeout(()=>{this.moveLens(1,n)},e.timings.presentation+e.timings.lensDelay)}moveLens(t,n){setTimeout(()=>{if(!n[t]){this.zoom.style.opacity=0;return}this.zoom.style.transform=`translate(${n[t].box_position[0]}px, ${n[t].box_position[1]}px) scale(1.2)`,this.zoom.style.setProperty(`--clip-position`,`${n[t].lens_position[0]}px ${n[t].lens_position[1]}px`),this.moveLens(t+1,n)},e.timings.lensPause)}};customElements.define(`divinity-header`,p);var m=document.createElement(`template`);m.innerHTML=`
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
<video width="100%" height="100%" autoload loop muted>
    <source src="./assets/videos/screensaver.mp4" type="video/mp4">
</video> 
`;var h=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`}),this.shadowRoot.appendChild(m.content.cloneNode(!0)),this.timer=null}connectedCallback(){this.video=this.shadowRoot.querySelector(`video`),this.restartTimer(),document.addEventListener(`click`,()=>{this.restartTimer()}),this.addEventListener(`click`,e=>{e.stopPropagation(),this.hideScreensaver(),this.restartTimer()})}restartTimer(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.showScreensaver()},e.screensaverTimer)}hideScreensaver(){this.video.style.opacity=0,setTimeout(()=>{this.video.currentTime=0,this.setAttribute(`hidden`,``)},500)}showScreensaver(){this.removeAttribute(`hidden`),setTimeout(()=>{this.video.style.opacity=1},0),this.video.play()}};customElements.define(`screen-saver`,h);