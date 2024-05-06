//question buttons

const btnAnswer1 = document.getElementById("question1");
const btnAnswer2 = document.getElementById("question2");
const btnAnswer3 = document.getElementById("question3");
const btnAnswer4 = document.getElementById("question4");


let answers = false;

btnAnswer1.addEventListener('click' , () => {

     if(!answers){
       document.querySelector('.fa-plus').classList.add('show')
       document.querySelector('.answer1').classList.add('show')
       document.querySelector('.fa-minus').classList.remove('show')
     }else{
        document.querySelector('.fa-plus').classList.remove('show')
       document.querySelector('.answer1').classList.remove('show')
       document.querySelector('.fa-minus').classList.add('show')
     }
     answers = !answers
})


btnAnswer2.addEventListener('click' , () => {
    if(!answers){
        document.querySelector('.card2-plus').classList.add('show')
        document.querySelector('.answer2').classList.add('show')
        document.querySelector('.card2-minus').classList.remove('show')
      }else{
         document.querySelector('.card2-plus').classList.remove('show')
        document.querySelector('.answer2').classList.remove('show')
        document.querySelector('.card2-minus').classList.add('show')
      }
      answers = !answers
})
btnAnswer3.addEventListener('click' , () => {
    if(!answers){
        document.querySelector('.card3-plus').classList.add('show')
        document.querySelector('.answer3').classList.add('show')
        document.querySelector('.card3-minus').classList.remove('show')
      }else{
         document.querySelector('.card3-plus').classList.remove('show')
        document.querySelector('.answer3').classList.remove('show')
        document.querySelector('.card3-minus').classList.add('show')
      }
      answers = !answers
})

btnAnswer4.addEventListener('click' , () => {
    if(!answers){
        document.querySelector('.card4-plus').classList.add('show')
        document.querySelector('.answer4').classList.add('show')
        document.querySelector('.card4-minus').classList.remove('show')
      }else{
         document.querySelector('.card4-plus').classList.remove('show')
        document.querySelector('.answer4').classList.remove('show')
        document.querySelector('.card4-minus').classList.add('show')
      }
      answers = !answers
})