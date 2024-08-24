$(function () {
    //Variables

    let nav = document.getElementById('nav');
    let menu = document.getElementById('enlaces');
    let abrir = document.getElementById('open');
    let botones = document.getElementsByClassName('btn-header');
    let cerrado = true;
    let skills = $('#skills').offset().top;
    let servicios = $('#services').offset().top;
    let experiencia = $('#experience').offset().top;
    let proyectos = $('#projects').offset().top;
    let contactos = $('footer').offset().top;


    function menus() {
        let desplaz_actual = window.pageYOffset;
        if (desplaz_actual <= 452) {
            nav.classList.remove('nav2');
            nav.className = ('nav1');
            nav.style.transition = '1s';
            menu.style.top = '80px';
        } else {
            nav.classList.remove('nav1');
            nav.className = ('nav2');
            nav.style.transition = '1s';
            menu.style.top = '100px';
        }
    }
    function loaded() {
        this.console.log('lissssto');
        // $('#onload').fadeOut();
        // $('body').removeClass('hidden');
        menus();
    }

    function apertura() {
        if (cerrado) {
            menu.style.width = '70vw';
            cerrado = false;
        } else {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }


    window.addEventListener('scroll', function () {
     
        menus();
    });

    window.addEventListener('click', function (e) {

        if (cerrado == false) {

            let span = document.querySelector('span');
            if (e.target != span && e.target != abrir) {
                menu.style.width = '0%';
                menu.style.overflow = 'hidden';
                cerrado = true;
            }

        }
    });

    //control de menu responsive
    abrir.addEventListener('click', function () {
        apertura();
    });
    //Mecanismo de Enlaces
    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        console.log('enlace fincuiona')
    });

    $('#enlace-skills').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: skills
        }, 600);
    });

    $('#enlace-experiencia').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: experiencia
        }, 600);
    });
    $('#enlace-servicios').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 600);
    });
     $('#enlace-proyectos').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyectos
        }, 600);
    });
    $('#enlace-contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactos
        }, 600);
    });

})