//handling the hamburger menu
let navBar = document.querySelector('#navLinks');
let menuBar = document.querySelector('.ham-menu');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-solid.fa-bars');
    navBar.classList.toggle('show');
}

//function barFunction() {
//    var links = document.getElementById("navLinks");
//    if (links.style.display === "block") {
//        links.style.display = "none";
//    }
//    else {
//        links.style.display = "block";
//    }
//}