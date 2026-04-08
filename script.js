const steps = [

    {

        title: "Edad",

        copy: "¿Cuántos años tienes? Esto nos ayuda a entender mejor tu momento y a diseñar un camino ideal para ti.",

        question: "¿Cuántos años tienes?",

        options: ["18 a 22 años", "23 a 28 años", "29 a 35 años", "36 a 42 años", "43 a 50 años", "51+"]

    },

    {

        title: "¿Eres mamá?",

        copy: "Queremos adaptar este desafío a tu realidad.",

        question: "¿Eres mamá?",

        options: ["Sí, de 1 hijo", "Sí, de 2 hijos", "Sí, de 3 o más", "No, pero quiero prepararme"]

    },

    {

        title: "Principal objetivo",

        copy: "Cada mujer tiene un objetivo diferente. ¿Cuál es el tuyo?",

        question: "¿Cuál es tu principal objetivo?",

        options: ["Perder peso", "Reducir barriga", "Tonificar el cuerpo", "Recuperar mi cuerpo postparto", "Sentirme con más energía"]

    },

    {

        title: "Zona que más te incomoda",

        copy: "",

        question: "¿Qué parte de tu cuerpo te incomoda más?",

        options: ["Abdomen", "Piernas", "Brazos", "Espalda", "Todo el cuerpo"]

    },

    {

        title: "Nivel actual",

        copy: "",

        question: "¿Cómo consideras tu nivel físico actual?",

        options: ["Principiante", "Intermedio", "Avanzado", "Hace mucho que no entreno"]

    },

    {

        title: "Tiempo disponible",

        copy: "",

        question: "¿Cuánto tiempo puedes dedicar al día?",

        options: ["10–15 minutos", "20–30 minutos", "30–45 minutos", "1 hora o más"]

    },

    {

        title: "Alimentación",

        copy: "",

        question: "¿Cómo describirías tu alimentación?",

        options: ["Saludable", "Regular", "Desordenada", "Muy mala"]

    },

    {

        title: "Motivación",

        copy: "",

        question: "¿Qué tan motivada estás para cambiar?",

        options: ["Muy motivada", "Motivada", "Poco motivada", "Necesito ayuda urgente"]

    },

    {

        title: "Principal dificultad",

        copy: "",

        question: "¿Qué más te dificulta lograr tu objetivo?",

        options: ["Falta de tiempo", "Falta de disciplina", "Ansiedad", "No saber qué hacer"]

    },

    {

        title: "Sueño",

        copy: "",

        question: "¿Cómo duermes normalmente?",

        options: ["Duermo bien", "Duermo poco", "Me despierto mucho", "Estoy siempre cansada"]

    },

    {

        title: "Estrés",

        copy: "",

        question: "¿Cómo está tu nivel de estrés?",

        options: ["Bajo", "Moderado", "Alto", "Muy alto"]

    },

    {

        title: "Ejercicio actual",

        copy: "",

        question: "¿Actualmente haces ejercicio?",

        options: ["Sí, regularmente", "A veces", "Casi nunca", "Nunca"]

    },

    {

        title: "Confianza corporal",

        copy: "",

        question: "¿Cómo te sientes con tu cuerpo hoy?",

        options: ["Muy segura", "Más o menos", "Insegura", "Muy insatisfecha"]

    },

    {

        title: "Apoyo familiar",

        copy: "",

        question: "¿Tienes apoyo en casa?",

        options: ["Sí", "Más o menos", "No"]

    },

    {

        title: "Intentos anteriores",

        copy: "",

        question: "¿Ya intentaste otros métodos?",

        options: ["Sí, varios", "Sí, uno", "No", "Siempre abandono"]

    },

    {

        title: "Tipo de entrenamiento",

        copy: "",

        question: "¿Qué tipo de entrenamiento prefieres?",

        options: ["En casa", "En gimnasio", "Al aire libre", "No sé"]

    },

    {

        title: "Cambio deseado",

        copy: "",

        question: "Si todo sale bien, ¿cómo te gustaría verte en 90 días?",

        options: ["Más delgada", "Más tonificada", "Más fuerte", "Más feliz y segura"]

    },

    {

        title: "Compromiso",

        copy: "Los resultados dependen de tu compromiso.",

        question: "¿Estás lista para comprometerte contigo misma?",

        options: ["Sí, totalmente", "Sí, pero necesito guía", "Tengo dudas", "No estoy segura"]

    },

    {

        title: "CTA Final",

        copyFinal: "Según tus respuestas, hemos preparado un plan ideal para ti.<br><br>Un método práctico, adaptado a madres reales, con poco tiempo y grandes responsabilidades.",

        cta: "QUIERO MI PLAN PERSONALIZADO AHORA"

    }

];



let currentStep = 0;

const userAnswers = {};



const quizImages = [

    "assets/img1.png",

    "assets/img2.png",

    "assets/img3.png"

];



const quizCard = document.getElementById("quiz-card");

const progressBar = document.getElementById("progress-bar");

const progressText = document.getElementById("progress-text");



function renderStep(index) {

    if (index >= steps.length) return;



    const step = steps[index];

    const isFinal = index === steps.length - 1;



    // Progress update

    const progressPercent = ((index + 1) / steps.length) * 100;

    progressBar.style.width = `${progressPercent}%`;

    progressText.innerText = `Paso ${index + 1} de ${steps.length}`;



    // Fade out transition

    quizCard.classList.remove('fade-in');

    quizCard.classList.add('fade-out');



    setTimeout(() => {

        let contentHTML = '';



        if (isFinal) {

            progressText.innerText = "¡Tu plan está listo!";

            contentHTML = `

                <div class="final-screen">

                    <div class="final-icon">💖</div>

                    <h2 class="question-text">¡Análisis Completo!</h2>

                    <p class="final-copy">${step.copyFinal}</p>

                    <button class="cta-btn" onclick="handleFinalCTA()">${step.cta}</button>

                </div>

            `;

        } else {

            const currentImage = quizImages[index % quizImages.length];

            const imageHTML = `<img src="${currentImage}" class="step-media" alt="Transformación Fitness">`;

            const copyHTML = step.copy ? `<p class="copy-text">${step.copy}</p>` : '';

            const optionsHTML = step.options.map((option, i) => `

                <button class="option-btn" onclick="handleOptionSelect(${index}, '${option}')">

                    <span>${option}</span>

                </button>

            `).join('');



            contentHTML = `

                ${imageHTML}

                ${copyHTML}

                <h2 class="question-text">${step.question}</h2>

                <div class="options-container">

                    ${optionsHTML}

                </div>

            `;

        }



        quizCard.innerHTML = contentHTML;



        quizCard.classList.remove('fade-out');

        quizCard.classList.add('fade-in');

    }, 300); // Wait for fade-out to complete

}



function handleOptionSelect(stepIndex, selectedOption) {

    userAnswers[stepIndex] = selectedOption;



    // Highlight selected visually

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {

        if (btn.innerText.includes(selectedOption)) {

            btn.classList.add("selected");

        } else {

            btn.classList.remove("selected");

        }

    });



    // Proceed to next step automatically

    setTimeout(() => {

        currentStep++;

        if (currentStep < steps.length) {

            renderStep(currentStep);

        }

    }, 400); // Short delay for better UX

}



function handleFinalCTA() {

    quizCard.classList.remove('fade-in');

    quizCard.classList.add('fade-out');



    setTimeout(() => {

        progressText.innerText = "Último Paso";

        progressBar.style.width = "100%";



        const contentHTML = `

            <div class="final-screen">

                <img src="assets/before_after.png" class="step-media" alt="Antes y Después">

                <h2 class="question-text">¿Estás lista para perder peso?</h2>

                <div class="options-container">

                    <button class="cta-btn" onclick="redirectToPayment()">¡SÍ, ESTOY LISTA!</button>

                </div>

            </div>

        `;



        quizCard.innerHTML = contentHTML;



        quizCard.classList.remove('fade-out');

        quizCard.classList.add('fade-in');

    }, 300);

}



function redirectToPayment() {

    // Show a loading overlay then redirect

    const overlay = document.createElement('div');

    overlay.className = 'loading-overlay active';

    overlay.innerHTML = `

        <div class="spinner"></div>

        <p class="loading-text">Redirigiendo al pago seguro...</p>

    `;

    document.body.appendChild(overlay);



    // Simulate Processing time then redirect

    setTimeout(() => {

        console.log("Respuestas del usuario:", userAnswers);

        window.location.href = "https://pay.hotmart.com/E104748378D";

    }, 2000);

}



// Initial Render

document.addEventListener("DOMContentLoaded", () => {

    // Pre-calculate minimal delay for smooth initial load

    setTimeout(() => {

        renderStep(currentStep);

    }, 100);

});

          
