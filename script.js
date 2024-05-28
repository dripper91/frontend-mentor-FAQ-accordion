const plus = document.querySelectorAll(".plus-img")
const minus = document.querySelectorAll(".minus-img")
const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")

function toggleHidden(i) {
    plus[i].classList.toggle("hidden")
    minus[i].classList.toggle("hidden")
    answers[i].classList.toggle("hidden")
}

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function() {
        toggleHidden(i)
    })

    minus[i].addEventListener("click", function() {
        toggleHidden(i)
    })

    questions[i].addEventListener("click", function() {
        toggleHidden(i)
    })
}