import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

let nav= document.getElementById("navbar")
nav.innerHTML=Navbar()

let foot= document.getElementById("footer")
foot.innerHTML=Footer()