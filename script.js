const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('show');
    });
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('show');
    });
}
