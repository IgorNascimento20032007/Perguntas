const quizData = [
    {
        question: "GALLADE É DE QUAL GERAÇÃO DO POKÉMON?",
        a: "1° gen",
        b: "2° gen",
        c: "3° gen",
        d: "4° gen",
        correct: "d",
    },
    {
        question: "QUANTAS MEGA-EVOLUÇÃO EXISTEM?",
        a: "35",
        b: "48",
        c: "40",
        d: "38",
        correct: "b",
    },
    {
        question: "QUEM ERA CONSIDERADO LENDÁRIO NA 1° GEN?",
        a: "Caterpie",
        b: "Arcanine",
        c: "Snorlax",
        d: "Riolu",
        correct: "b",
    },
    {
        question: "EM QUE ANO FOI LANÇADO POKÉMON RED/BLUE?",
        a: "1882",
        b: "1998",
        c: "1996",
        d: "1989",
        correct: "c",
    },
    {
        question: "QUAL É O POKÉMON N°1 NA POKÉDEX DE BLACK/WHITE?",
        a: "Tepig",
        b: "Servine",
        c: "Oshawatt",
        d: "Victini",
        correct: "d",
    },
    {
        question: "QUEM POSSUI A HABILIDADE WONDER GUARD?",
        a: "Lucario",
        b: "Garchomp",
        c: "Garbodere ",
        d: "Shedinja",
        correct: "d",
    },
    {
        question: "QUAL DESSAS MECÂNICAS ESTÁ PRESENTE NA 7° GEN?",
        a: "Terastelize",
        b: "Z-Move",
        c: "Mega-Evolução",
        d: "Dynamax/Gigantamax",
        correct: "b",
    },
    {
        question: "COMO SE CHAMA MALAMAR NA VERSÃO JAPONESA?",
        a: "Mackogneur",
        b: "Malamar",
        c: "Calamanero",
        d: "Greninja",
        correct: "c",
    },
    {
        question: "QUAL DESSES NÃO POKÉMON FOI BANIDO DO COMPETITIVO?",
        a: "Naganadel",
        b: "Dondozo",
        c: "Shedinja",
        d: "Beedrill",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Falhou com êxito</button>
            `
        }
    }
})