//hamburguer menu

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


         

});


//question buttons

const btnAnswer1 = document.getElementById("question1");
const btnAnswer2 = document.getElementById("question2");
const btnAnswer3 = document.getElementById("question3");

btnAnswer1.addEventListener('click' , () => {
       document.querySelector('.answer1').classList.toggle('show');
})
btnAnswer2.addEventListener('click' , () => {
       document.querySelector('.answer2').classList.toggle('show');
})
btnAnswer3.addEventListener('click' , () => {
       document.querySelector('.answer3').classList.toggle('show');
})