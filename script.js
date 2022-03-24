const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('navbar');


    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
