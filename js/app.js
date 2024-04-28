const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
})

const image = document.getElementById("home-img");

function setColor() {
    image.src = '../images/home.png';
}
function setBW() {
    image.src = '../images/home_bw.png';
    
}
