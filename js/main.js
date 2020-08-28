var frontend = document.getElementById('frontend');
var backend = document.getElementById('backend');
var fullstack = document.getElementById('fullstack');
var all = document.getElementById('all');



var photo = document.getElementById('photosnap');
var manage = document.getElementById('manage');
var account = document.getElementById('account');
var home = document.getElementById('home');
var loop = document.getElementById('loop');


all.addEventListener('click', () => {
    photo.classList.add('d-flex')
    manage.classList.add('d-flex')
    account.classList.add('d-flex')
    home.classList.add('d-flex')
    loop.classList.add('d-flex')
})


frontend.addEventListener('click', () => {


    photo.classList.add('d-flex')
    manage.classList.add('d-flex')
    account.classList.add('d-flex')
    home.classList.add('d-flex')
    loop.classList.add('d-flex')


    if (photo.getAttribute('data-role') == 'frontend') {} else {
        photo.style.display = 'none';
        photo.classList.remove('d-flex')
    }
    if (manage.getAttribute('data-role') === 'frontend') {

    } else {
        manage.style.display = 'none';
        manage.classList.remove('d-flex')

    }
    if (account.getAttribute('data-role') === 'frontend') {

    } else {
        account.style.display = 'none'
        account.classList.remove('d-flex')
    }

    if (home.getAttribute('data-role') === 'frontend') {

    } else {
        home.style.display = 'none'
        home.classList.remove('d-flex')
    }

    if (loop.getAttribute('data-role') === 'frontend') {

    } else {
        loop.style.display = 'none'
        loop.classList.remove('d-flex')
    }
})


backend.addEventListener('click', () => {



    photo.classList.add('d-flex')
    manage.classList.add('d-flex')
    account.classList.add('d-flex')
    home.classList.add('d-flex')
    loop.classList.add('d-flex')



    if (photo.getAttribute('data-role') === 'backend') {

    } else {
        photo.style.display = 'none';
        photo.classList.remove('d-flex')
    }
    if (manage.getAttribute('data-role') === 'backend') {

    } else {
        manage.style.display = 'none';
        manage.classList.remove('d-flex')

    }
    if (account.getAttribute('data-role') === 'backend') {

    } else {
        account.style.display = 'none'
        account.classList.remove('d-flex')
    }

    if (home.getAttribute('data-role') === 'backend') {

    } else {
        home.style.display = 'none'
        home.classList.remove('d-flex')
    }

    if (loop.getAttribute('data-role') === 'backend') {

    } else {
        loop.style.display = 'none'
        loop.classList.remove('d-flex')
    }
})



fullstack.addEventListener('click', () => {
    photo.classList.add('d-flex')
    manage.classList.add('d-flex')
    account.classList.add('d-flex')
    home.classList.add('d-flex')
    loop.classList.add('d-flex')



    if (photo.getAttribute('data-role') === 'fullstack') {

    } else {
        photo.style.display = 'none';
        photo.classList.remove('d-flex')
    }
    if (manage.getAttribute('data-role') === 'fullstack') {

    } else {
        manage.style.display = 'none';
        manage.classList.remove('d-flex')

    }
    if (account.getAttribute('data-role') === 'fullstack') {

    } else {
        account.style.display = 'none'
        account.classList.remove('d-flex')
    }

    if (home.getAttribute('data-role') === 'fullstack') {

    } else {
        home.style.display = 'none'
        home.classList.remove('d-flex')
    }

    if (loop.getAttribute('data-role') === 'fullstack') {

    } else {
        loop.style.display = 'none'
        loop.classList.remove('d-flex')
    }
})