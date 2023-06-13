

(function(){
    function buildQuiz(){
      const output = [];
  
    
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Who is the father of electricity?",
        answers: {
          a: "brent lutner",
          b: "Sheryl Sandberg",
          c: "michael faraday"
        },
        correctAnswer: "c"
      },
      {
        question: "Which one of these is a metal?",
        answers: {
          a: "argon",
          b: "neon",
          c: "magnesium"
        },
        correctAnswer: "c"
      },
      {
        question: "Which of these is a non-metal?",
        answers: {
          a: "lithium",
          b: "sodium",
          c: "magnesium",
          d: "argon"
        },
        correctAnswer: "d"
      },
      {
      question: "Which one of these is an acid?",
        answers: {
          a: "sodiumchloride",
          b: "lithiumsulphide",
          c: "hydrogenchloride"
        },
        correctAnswer: "c"
      },
      {
        question: "Which of these is a base?",
        answers: {
          a: "hydrogensulphate",
          b: "sodiumsulphate",
          c: "magnesiumchloride",
          d: "sodiumhydroxide"
        },
        correctAnswer: "d"
      }
    ]
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();

