let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.add("menu")
    navbar.classList.toggle("active")
}

navbar.onclick = () => {
    navbar.classList.add("menu")
    navbar.classList.remove("active")
}


window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

document.querySelector("#search-icon").onclick = () =>{
    document.querySelector("#search-form").classList.toggle("active")
}

document.querySelector("#close").onclick = () => { 
    document.querySelector("#search-form").classList.remove("active")
}

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let = document.querySelector


