const questions = [
    {
        question: "What is the capital of Morocco?",
        options: ["Casablanca", "Rabat", "El Jadida", "Khouribga"],
        answer: 1 
    },
    {
        question: "Who won the 2022 World Cup?",
        options: ["Morocco", "France", "Brazil", "Argentina"],
        answer: 3 
    },
    {
        question: "What is a traditional Moroccan dish?",
        options: ["Couscous", "Tagine", "Pastilla", "Harira"],
        answer: 1 
    }
];

const optionsEl = document.getElementById("options");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    optionsEl.innerHTML = "";
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.dataset.index = index;
        button.addEventListener("click", selectAnswer);
        optionsEl.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedIndex = Number(selectedBtn.dataset.index);
    const correctIndex = questions[currentQuestion].answer;
    const allButtons = optionsEl.querySelectorAll(".option-btn");

    
    allButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
        allButtons[correctIndex].classList.add("correct");
    }

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        nextBtn.style.display = "none";
    } else {
        
        questionEl.textContent = "Quiz Finished!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerHTML = `Your score: <strong>${score} / ${questions.length}</strong>`;
    }
});


showQuestion();