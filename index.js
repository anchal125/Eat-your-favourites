let icons=document.querySelectorAll(".section-1-icons i")
let i=1
document.querySelector(".menu").addEventListener('click',()=>{
    document.querySelectorAll(".target").forEach(element => {
        element.classList.toggle("change");
    });

})




setInterval(()=>{
    i+=1
    let icon=document.querySelector(".section-1-icons i.change")
    icon.classList.remove("change")
    if (i>icons.length){
        icons[0].classList.add('change')
    }
    else{
        icon.nextElementSibling.classList.add("change")
    }

},4000)