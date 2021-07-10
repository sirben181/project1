const quizData=[
    {
    question:'what does https means?',
    a: 'hey there this is partrick',
    b: 'hypertext transfer protocol',
    c: 'hypertext trying passing',
    d:'hyertext transfer practise',
    correct:'b'
    } ,
    
       { question:'what is html?',
        a:'hypertext markup language',
        b:'hypertext markup land',
        c:'hyertyping markup language',
        d:'hypertext mating line',
        correct:'a'
    },
    {question:'the most popular language in 2020?',
    a:'java',
    b:'javascript',
    c:'c#',
    d:'css',
    correct:'b'
    },
    {question:'what does css means?',
a:'cascading stylshirt',
b:'car selling shop',
c:'cascading style styles',
d:'cascading style sheet',
correct:'d'},
{question:'The most popular coding lanuage in 2021?',
a:'css',
b:'java',
c:'javascript',
d:'python',
correct:'c'}
];
const questionEl=document.getElementById('question');
const atextEl = document.getElementById('atext');
const btextEl=document.getElementById('btext');
const ctextEl=document.getElementById('ctext');
const dtextEl=document.getElementById('dtext');
const etextEl=document.getElementById('etext');
let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){

    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    atextEl.innerText=currentQuizData.a;
    btextEl.innerText=currentQuizData.b;
    ctextEl.innerText=currentQuizData.c;
    dtextEl.innerText=currentQuizData.d;
    etextEl.innerText=currentQuizData.e;
;
}
 function getSelected(){
let answer=undefined;
     const answerEls=document.querySelectorAll(".answer")
     answerEls.forEach((answerEl)=> {
         if(answer.checked){
         answer=answerEl.id;
         }
     })
     return answer;
 };

 function Deselected(){
    answerEls.forEach((answerEl)=> {
        if(answer.checked=false){
            answer=answerEl.id;
        }
 })
 return answer
  };  
 
 getSelected();
 submit.addEventListener('click', ()=> {
 const answer=getSelected();
 console.log(answer)
 if(answer === quizData[currentQuiz].correct){
     score++;
 }
 {currentQuiz++;
    if(currentQuiz < quizData.length){
loadQuiz();
 }else{quiz.innerHTML=`
 <h2>you answered correctly at ${score}/${quizData.length}
 <button onclick="location.reload">Reload</button>`
}
 }
}
 )