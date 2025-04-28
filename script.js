const questions = [
    { 
        question: `Which of the following best describes theterm "Arhat or Arhant" in Buddhism?`, 
        options: ["A reincarnated spiritual teacher who guides others on the Buddhist path.", "A mythical being with supernatural powers who helps people achieve enlightenment.", "People far advanced along the path of enlightenment, but who may not have reached full Buddhahood.", "A state of perfect peace and serenity achieved through meditation."],
        correct: 2,
        explanation: "Arhat: In Buddhism, an arhat (Sanskrit) or arahant (Pali) is a living person who has reached Enlightenment.Mahayana Buddhist traditions have used the term for people far advanced along the path of Enlightenment, but who may not have reached full Buddhahood. Hence option (c) is the correctanswer. An Arhat/Arhant is a highly enlightened being in Buddhism who has eliminated all craving, desire,and suffering. They have achieved Nirvana, a state of liberation from the cycle of rebirth.o While not reaching the full Buddhahood of someone like Siddhartha Gautama, Arhats are considered highly accomplished on the path to enlightenment. Difference between Bodhisattva and Arhat: A Buddha is someone who discovers the path to liberation; a bodhisattva is someone training tobecome a Buddha; an arhat is someone who is liberated by following the teachings of a Buddha."
    },
    { 
        question: "Who wrote the national anthem?", 
        options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        correct: 0,
        explanation: "Rabindranath Tagore composed 'Jana Gana Mana,' which is the national anthem of India."
    },
    { 
        question: "What is 2 + 2?", 
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "2 + 2 equals 4, which is basic arithmetic."
    },
    { 
        question: "Which planet is known as the Red Planet?", 
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1,
        explanation: "Mars is referred to as the Red Planet due to its reddish appearance caused by iron oxide on its surface."
    }
];

let currentIndex = 0;

function updateQuestion() {
    document.getElementById("question").innerText = questions[currentIndex].question;
    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
        button.innerText = questions[currentIndex].options[index];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
    document.getElementById("nextBtn").disabled = true;
    document.getElementById("solution").style.display = "none"; // Hide previous solution
    document.getElementById("solution").innerText = ""; // Clear previous solution
}

function selectOption(index) {
    const options = document.querySelectorAll(".option");
    if (index === questions[currentIndex].correct) {
        options[index].classList.add("correct");
    } else {
        options[index].classList.add("wrong");
        options[questions[currentIndex].correct].classList.add("correct"); // Highlight correct answer
    }
    options.forEach(button => button.disabled = true);
    document.getElementById("nextBtn").disabled = false;
}

function viewSolution() {
    const solutionElement = document.getElementById("solution");
    solutionElement.innerText = questions[currentIndex].explanation;
    solutionElement.style.display = "block"; // Display solution
}

function nextQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    updateQuestion();
}

updateQuestion();