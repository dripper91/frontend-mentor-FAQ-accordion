const plus = document.querySelectorAll(".plus-img")
const minus = document.querySelectorAll(".minus-img")
const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        plus[i].classList.toggle("hidden")
        minus[i].classList.toggle("hidden")
        answers[i].classList.toggle("hidden")
    })
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        plus[i].classList.toggle("hidden")
        minus[i].classList.toggle("hidden")
        answers[i].classList.toggle("hidden")
    })
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        plus[i].classList.toggle("hidden")
        minus[i].classList.toggle("hidden")
        answers[i].classList.toggle("hidden")
    })
}