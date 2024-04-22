let menu = false;

const btn = document.getElementById('toggle-menu');


btn.addEventListener('click' , (e) => {

       if(!menu){
        document.querySelector('.fa-bars').classList.add('is-active');
        document.querySelector('.mobile-nav').classList.add('is-active');
        document.querySelector('.fa-x').classList.remove('is-active');
       }else{
        document.querySelector('.fa-bars').classList.remove('is-active');
        document.querySelector('.mobile-nav').classList.remove('is-active');
        document.querySelector('.fa-x').classList.add('is-active');
       }


       menu = !menu


         

})