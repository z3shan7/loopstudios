const navlinks = document.querySelector('.nav-menus');
const hamIcon = document.querySelector('nav .ham-img');
const closeIcon = document.querySelector('.company-logo .close-img');

hamIcon.addEventListener('click', function(){
    navlinks.classList.add('show')
})
closeIcon.addEventListener('click',function(){
    navlinks.classList.remove('show')

})