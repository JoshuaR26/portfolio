const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) =>{
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
})


function setNewImg() {
    var img = document.getElementById('home-img');
    img.src = '../images/home.png';
    img.style.opacity = '1'; // Change opacity property
}

function setOldImg() {
    var img = document.getElementById('home-img');
    img.src = '../images/home_bw.png';
    img.style.opacity = '1'; // Change opacity property
    img.style.transition = 'opacity 1s ease'; // Apply transition property
}
