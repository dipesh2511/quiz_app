const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
  {
    correctAnswer: 'Mt. Everest',
    options: [
      'Mt. Kilimanjaro',
      'Mt. Everest',
      'Mt. Fuji',
      'Mt. McKinley',
    ],
    question: 'What is the highest mountain in the world?',
  },
  {
    correctAnswer: 'Pacific Ocean',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Pacific Ocean',
      'Arctic Ocean',
    ],
    question: 'Which is the largest ocean on Earth?',
  },
  {
    correctAnswer: 'Mercury',
    options: [
      'Mercury',
      'Venus',
      'Mars',
      'Earth',
    ],
    question: 'Which planet is closest to the Sun?',
  },
  {
    correctAnswer: 'Leonardo da Vinci',
    options: [
      'Leonardo da Vinci',
      'Vincent van Gogh',
      'Pablo Picasso',
      'Claude Monet',
    ],
    question: 'Who painted the Mona Lisa?',
  },
  {
    correctAnswer: 'Pacific',
    options: [
      'Atlantic',
      'Arctic',
      'Indian',
      'Pacific',
    ],
    question:
      'What is the name of the ocean that contains the Mariana Trench?',
  },
  {
    correctAnswer: 'Amazon',
    options: [
      'Nile',
      'Yangtze',
      'Amazon',
      'Mississippi',
    ],
    question: 'Which is the largest river by volume in the world?',
  },
  {
    correctAnswer: 'Shakespeare',
    options: [
      'Shakespeare',
      'Charles Dickens',
      'Mark Twain',
      'Homer',
    ],
    question: 'Who wrote the play "Romeo and Juliet"?',
  },
  {
    correctAnswer: 'Neil Armstrong',
    options: [
      'Yuri Gagarin',
      'Buzz Aldrin',
      'Neil Armstrong',
      'John Glenn',
    ],
    question:
      'Who was the first human to set foot on the Moon?',
  },
  {
    correctAnswer: 'Blue Whale',
    options: [
      'Elephant',
      'Giraffe',
      'Blue Whale',
      'Great White Shark',
    ],
    question: 'What is the largest animal in the world?',
  },
  {
    correctAnswer: 'Mount Olympus',
    options: [
      'Mount Olympus',
      'Acropolis',
      'Colosseum',
      'Pantheon',
    ],
    question: 'In Greek mythology, where do the gods live?',
  },
];








let questionEle = document.getElementById("question");
let optionELe = document.getElementById("options");
let scoreEle = document.getElementById("score");
let scoreAchieved = 0;
let currentIndex = 0;

function scoreDisplay() {
  scoreEle.textContent = `Score: ${scoreAchieved}`;
}

function shufflingArray(arr) {
  let new_options = [...arr];
  for (let i = new_options.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    [new_options[i], new_options[j]] = [new_options[j], new_options[i]];
  }
  return new_options;
}

function nextQuestion(questionObj) {
  // Destructure the question object
  let { correctAnswer, options, question } = questionObj;

  // Update question text
  questionEle.textContent = `Qno.${currentIndex + 1} ${question}`;

  // Clear previous options
  optionELe.innerHTML = "";

  // Shuffle and create new options
  let shuffledArray = shufflingArray(options);
  shuffledArray.forEach(function (option) {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn"; // Optional: Add a class for styling
    optionELe.append(btn);

    btn.addEventListener(
      "click",
      function (event) {
        if (event.target.innerText === correctAnswer) {
          scoreAchieved += 1;
        } else {
          scoreAchieved -= 0.25;
        }
        scoreDisplay();
        displaying_next();
      },
      { once: true }
    );
  });
}

function displaying_next() {
  if (currentIndex < quesJSON.length - 1) {
    currentIndex++;
    nextQuestion(quesJSON[currentIndex]);
  } else {
    alert(`Quiz Over! Your final score is: ${scoreAchieved}`);
  }
}

// Initialize the quiz
nextQuestion(quesJSON[currentIndex]);
scoreDisplay();


