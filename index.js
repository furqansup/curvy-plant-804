
import {Navbar} from "./Navbar(Furqan)/components/Navbar.js"

let nav_div = document.getElementById("nav");
nav_div.innerHTML = Navbar()

import { Footer } from "./Navbar(Furqan)/components/Footer.js";

let foot_div =  document.getElementById("foot");
foot_div.innerHTML = Footer()

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    
    