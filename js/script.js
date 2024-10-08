document.querySelector('.burger').onclick = function mobileBurger() {
    document.querySelector('.main-nav').classList.toggle('mobile-menu');
    document.querySelector('.log-in').classList.toggle('mobile-log-in');
}

document.querySelector('.log-in-btn').onclick = function modal () {
    document.querySelector('.modal-window').style.display = 'grid';
    window.onclick = function(event) {
        if (event.target == document.querySelector('.modal-window')) {
            document.querySelector('.modal-window').style.display = "none";
        }
      }
}

// let dots = document.getElementsByClassName('dishes-dots');
// let a = 0;

// for (a; a < dots.length; a++) {
//     console.log(dots[a]);
//     dots[a].onclick = function () {
//         dots[a].style.display = 'none';
//     }
// }




