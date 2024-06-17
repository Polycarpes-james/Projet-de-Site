import { Small_Carousel } from "./Carousel.js"
import { createNewElement } from "./method.js"
import { fetchJSON } from "./fetch.js"

const main_caroussel = document.querySelector(".MAIN_VIDEO")
try{
    const carousel_list = await fetchJSON('todos.json')
    for(let carousel of carousel_list){
        new Small_Carousel(main_caroussel, carousel)
    }
} catch(e){
    const alertElement = createNewElement("div", {
        class:"danger danger-attention",
        role: "alert"
    })
    alertElement.innerText = "Impossible de charger les elements"
    alertElement.style.backgroundColor = "#f1b3b3"
    alertElement.style.color = "white"
    alertElement.style.padding = "10px"
    document.body.prepend(alertElement)
    console.error(e)
}