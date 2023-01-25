const infolink = document.getElementById("info-link");
const explink = document.getElementById("exp-link");
const edulink = document.getElementById("edu-link");

const infocontent = document.getElementById("info-content");
const expcontent = document.getElementById("exp-content");
const educontent = document.getElementById("edu-content");

infolink.onclick = () => {
    if(!infolink.classList.contains("active")){
        infolink.classList.add("active");
        infocontent.classList.remove("d-none")
        if(explink.classList.contains("active")){
            explink.classList.remove("active");
            expcontent.classList.add("d-none");
        }
        if(edulink.classList.contains("active")){
            edulink.classList.remove("active");
            educontent.classList.add("d-none");
        }
    }
}

explink.onclick = () => {
    if(!explink.classList.contains("active")){
        explink.classList.add("active");
        expcontent.classList.remove("d-none")
        if(infolink.classList.contains("active")){
            infolink.classList.remove("active");
            infocontent.classList.add("d-none");
        }
        if(edulink.classList.contains("active")){
            edulink.classList.remove("active");
            educontent.classList.add("d-none");
        }
    }
}

edulink.onclick = () => {
    if(!edulink.classList.contains("active")){
        edulink.classList.add("active");
        educontent.classList.remove("d-none")
        if(explink.classList.contains("active")){
            explink.classList.remove("active");
            expcontent.classList.add("d-none");
        }
        if(infolink.classList.contains("active")){
            infolink.classList.remove("active");
            infocontent.classList.add("d-none");
        }
    }
}