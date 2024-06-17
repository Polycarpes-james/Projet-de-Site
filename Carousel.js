import { createNewElement, createDivWithClass, plurielVue, plurielConvert, wait  } from "./method.js"

export class Small_Carousel {
 
    /**
     * @param {HTMLElement} element 
     * @param {Object} carouselList 
     */
    constructor(element, carouselList){
        this.element = element
        this.carousel_list = carouselList    
        
        const video_item = createDivWithClass("Video_item")
        element.appendChild(video_item)
        const item = createDivWithClass("item")
        video_item.appendChild(item)
        // ========== EXPLANT CONTENT ===========
        const explant_content = createDivWithClass("explan_content")
        item.appendChild(explant_content)
        const explant_content_para = createNewElement("p", {"class":"explan_content_item"})
        explant_content_para.innerText = `${carouselList.title}`
        explant_content.appendChild(explant_content_para)

        // ======= IMAGE VIDEO ===============
        const image_video = createDivWithClass("image_video")
        item.appendChild(image_video)
        const image = createNewElement("img", {"src":carouselList.img,
                                                "class":"image"})
        const pause = createNewElement("p", {"class":"Pause hidden"})
        image_video.appendChild(image)
        image_video.appendChild(pause)

        // ================= INFORMATION DE VIDEO ======================
        const info_video = createDivWithClass("info_video")
        item.appendChild(info_video)
            // ========================================
        const time_publication_info = createDivWithClass("time_publication_info")
        info_video.appendChild(time_publication_info)
        // ==================
        const time_video = createNewElement("p",{"class":"time_video"})
        plurielConvert(carouselList.id, time_video, "")
        time_publication_info.appendChild(time_video)
        // =================
        const title_video = createNewElement("h1", {"class":"title_video"})
        title_video.innerText = carouselList.name
        time_publication_info.appendChild(title_video)

        // ===========================================
        const view_time_pub = createDivWithClass("view_time_pub")
        info_video.appendChild(view_time_pub)
        // ==================
        const view_para = createNewElement("p", {"class":"view_time_pub"})
        plurielConvert(carouselList.userId, view_para, "Il y a")
        view_time_pub.appendChild(view_para)
        // ===================
        const view = createNewElement("p",{"class":"view"})
        plurielVue(carouselList.vue, view, "vue")
        view_time_pub.appendChild(view)

        item.addEventListener("mousemove", ()=>{
            image.style.opacity = "0.9"
            pause.classList.remove("hidden")
        })
        item.addEventListener("mouseleave", ()=>{
            pause.classList.add("hidden")
            image.style.opacity = "1"
        })
    }   
  
}


