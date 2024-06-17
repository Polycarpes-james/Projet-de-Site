

export function createDivWithClass(className){
    const div = document.createElement("div")
    div.setAttribute("class", className)
    return div
}
export function createNewElement(tagname, contents = {}){
    const newElement = document.createElement(tagname)
    for (const [key, value] of Object.entries(contents)) {
        newElement.setAttribute(key, value)
    }
    return newElement
}
/**
 * Permet de donner le pluriel au nombre de vue 
 * @param {number} value 
 * @param {HTMLParagraphElement} element 
 * @param {string} objet 
 * @param {string} phrase 
 */
export function plurielVue(value, element, objet, phrase){
    if(value <= 1){
        element.innerText = `${value}k ${objet}`
    } 
    else{
        element.innerText = `${value}k ${objet}s`
    }
}

export function plurielConvert(value, element, phrase){
    if(value <= 1){
        element.innerText = `${phrase} ${value} min`
    } else if(value >= 60){
        const convert = value / 60
        const rest = value % 60
        if(rest === 0){
            if(convert > 1){
                element.innerText = `${phrase} ${Math.floor(convert)} heures`
            } else{
                element.innerText = `${phrase} ${Math.floor(convert)} heure`
            }
        } else{
            if(convert > 1){
                element.innerText = `${phrase} ${Math.floor(convert)} heures`   
            } else{
                element.innerText = `${phrase} ${Math.floor(convert)} heure`   
            }        
        }
    } else{
        element.innerText = `${phrase} ${value} mins`
    }
    if (value >= 1440){
        const convert = value / 1440
        const rest = value % 1440
        if(rest === 0){
            if(convert > 1){
                element.innerText = `${phrase} ${convert} jours`
            } else{
                element.innerText = `${phrase} ${convert} jour`
            }
        } else{
            if(convert > 0.9){
                element.innerText = `${phrase} ${Math.floor(convert)} jour`
            } else{
                element.innerText = `${phrase} ${Math.floor(convert)} jours`
            }
        }
    } 
}
export function wait(time){
    return new Promise((full, reject) => {
        setTimeout(()=>{
            full(time)
        }, time)
    })
}