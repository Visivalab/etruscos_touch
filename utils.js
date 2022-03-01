export function closeComponent(component, options){

    if(options.fade === true){
        component.style.transition = `${options.time ?? 500}ms`
        component.style.opacity = 0
        
        setTimeout(() => component.remove() , 1000)
    }else{
        component.remove()
    }
    
}

export function openComponent(component, options){

    const load = document.createElement(component)

    if(options.fade === true){
        load.style.opacity = 0
        load.style.transition = `${options.time ?? 500}ms`
        setTimeout( () => load.style.opacity = 1, 20)
    }

    document.querySelector('body').appendChild(load)
    
}