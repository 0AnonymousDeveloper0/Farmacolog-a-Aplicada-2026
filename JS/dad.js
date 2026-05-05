const TOTAL_ROUNDS = 8;

const MECHANISM_BANK = [
    {
        name: "Etosuximida",
        prompt: "Ordena el mecanismo anticonvulsivante de la etosuximida.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Llega a neuronas talámicas",
            "Bloquea canales de Ca2+ tipo T",
            "Disminuye corrientes de calcio",
            "Reduce descargas epileptiformes"
        ],
        distractors: ["Bloquea SERT", "Antagoniza D2", "Inhibe GABA-T", "Activa receptores nicotínicos"],
        explanation: "La etosuximida reduce la actividad de canales de calcio tipo T, lo que disminuye la excitabilidad talámica relacionada con crisis de ausencia."
    },
    {
        name: "Carbamazepina",
        prompt: "Ordena cómo la carbamazepina reduce descargas repetitivas.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Se une a canales de Na+ inactivados",
            "Prolonga el periodo refractario",
            "Reduce la entrada de sodio",
            "Disminuye disparos de alta frecuencia"
        ],
        distractors: ["Bloquea M1", "Aumenta serotonina", "Inhibe AADC periférica", "Aumenta AMPc por D1"],
        explanation: "La carbamazepina estabiliza canales de sodio en estado inactivado, por eso limita descargas neuronales repetitivas."
    },
    {
        name: "Bupropión",
        prompt: "Ordena el mecanismo principal del bupropión.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Inhibe DAT y NET",
            "Aumenta dopamina y noradrenalina sinápticas",
            "Bloquea receptores nicotínicos",
            "Mejora ánimo y reduce deseo de nicotina"
        ],
        distractors: ["Bloquea canales Ca2+ tipo T", "Convierte levodopa en dopamina", "Antagoniza receptores D2", "Aumenta apertura de Cl- por GABA_A"],
        explanation: "El bupropión aumenta catecolaminas al bloquear DAT y NET, y además reduce el refuerzo de la nicotina al antagonizar receptores nicotínicos."
    },
    {
        name: "Carbidopa",
        prompt: "Ordena cómo la carbidopa ayuda a la levodopa.",
        steps: [
            "Permanece principalmente en periferia",
            "Inhibe AADC periférica",
            "Evita conversión periférica de levodopa",
            "Aumenta levodopa que llega al SNC",
            "Reduce náuseas y vómito"
        ],
        distractors: ["Bloquea SERT", "Activa D1 directamente", "Inhibe GAT-1", "Antagoniza 5-HT2A"],
        explanation: "La carbidopa no busca producir dopamina en periferia; bloquea AADC periférica para que más levodopa llegue al cerebro."
    },
    {
        name: "Levodopa",
        prompt: "Ordena la secuencia dopaminérgica de la levodopa.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Entra a células del SNC",
            "AADC intracelular la convierte en dopamina",
            "La dopamina estimula D1 o D2",
            "Mejora rigidez y bradicinesia"
        ],
        distractors: ["Bloquea NET", "Inhibe AADC periférica", "Antagoniza M1", "Bloquea canales Na+ inactivados"],
        explanation: "La levodopa es precursor de dopamina; al convertirse en dopamina en el SNC mejora la señalización motora en ganglios basales."
    },
    {
        name: "Fenobarbital y Clonazepam",
        prompt: "Ordena el mecanismo GABAérgico compartido.",
        steps: [
            "Atraviesan la barrera hematoencefálica",
            "Se unen al receptor GABA_A",
            "Potencian la acción del GABA",
            "Aumentan entrada de Cl-",
            "Producen hiperpolarización anticonvulsivante"
        ],
        distractors: ["Bloquean DAT", "Antagonizan D2", "Inhiben AADC", "Aumentan canales Ca2+ tipo T"],
        explanation: "Ambos aumentan la inhibición GABAérgica; fenobarbital prolonga la apertura del canal y clonazepam aumenta su frecuencia."
    },
    {
        name: "Amitriptilina y Duloxetina",
        prompt: "Ordena el mecanismo serotoninérgico y noradrenérgico.",
        steps: [
            "Atraviesan la barrera hematoencefálica",
            "Bloquean SERT y NET",
            "Aumentan serotonina y noradrenalina",
            "Potencian vías inhibitorias del dolor",
            "Mejoran ánimo y dolor neuropático"
        ],
        distractors: ["Bloquean GAT-1", "Estimulan receptores D2", "Inhiben canales Ca2+ tipo T", "Activan AADC periférica"],
        explanation: "Amitriptilina y duloxetina elevan serotonina y noradrenalina sinápticas, con efecto sobre ánimo y vías descendentes del dolor."
    },
    {
        name: "Tiagabina y Vigabatrina",
        prompt: "Ordena cómo aumentan la disponibilidad de GABA.",
        steps: [
            "Atraviesan la barrera hematoencefálica",
            "Tiagabina inhibe GAT-1",
            "Vigabatrina inhibe GABA-T",
            "Aumenta la disponibilidad de GABA",
            "Disminuye excitabilidad neuronal"
        ],
        distractors: ["Bloquea D1", "Inhibe SERT", "Convierte dopamina en levodopa", "Aumenta entrada de Na+"],
        explanation: "Tiagabina evita recaptación de GABA y vigabatrina evita su degradación; ambas aumentan la inhibición neuronal."
    },
    {
        name: "Diazepam",
        prompt: "Ordena el mecanismo benzodiacepínico del diazepam.",
        steps: [
            "Atraviesa rápidamente la barrera hematoencefálica",
            "Se une al sitio benzodiacepínico de GABA_A",
            "Aumenta la frecuencia de apertura de Cl-",
            "Produce hiperpolarización neuronal",
            "Disminuye ansiedad, sedación y convulsiones"
        ],
        distractors: ["Bloquea AADC periférica", "Inhibe GABA-T", "Antagoniza 5-HT2A", "Bloquea receptores nicotínicos"],
        explanation: "El diazepam no activa GABA_A por sí solo; potencia al GABA aumentando la frecuencia de apertura del canal de cloro."
    },
    {
        name: "Biperideno",
        prompt: "Ordena el mecanismo antimuscarínico del biperideno.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Llega a ganglios basales",
            "Antagoniza receptores muscarínicos M1",
            "Reduce actividad colinérgica estriatal",
            "Mejora temblor y rigidez"
        ],
        distractors: ["Bloquea DAT", "Aumenta GABA por GAT-1", "Estimula SERT", "Bloquea canales Ca2+ tipo T"],
        explanation: "El biperideno bloquea receptores M1 centrales y ayuda a compensar el predominio colinérgico asociado al déficit dopaminérgico."
    },
    {
        name: "Fluoxetina",
        prompt: "Ordena el mecanismo ISRS de la fluoxetina.",
        steps: [
            "Atraviesa la barrera hematoencefálica",
            "Se une selectivamente a SERT",
            "Inhibe recaptación de serotonina",
            "Aumenta serotonina sináptica",
            "Potencia neurotransmisión serotoninérgica"
        ],
        distractors: ["Bloquea NET y DAT", "Inhibe AADC", "Antagoniza M1", "Aumenta apertura de Cl-"],
        explanation: "La fluoxetina bloquea SERT, eleva serotonina en la sinapsis y fortalece la neurotransmisión serotoninérgica."
    },
    {
        name: "Clorpromazina y Clozapina",
        prompt: "Ordena el mecanismo antipsicótico dopaminérgico.",
        steps: [
            "Atraviesan la barrera hematoencefálica",
            "Antagonizan receptores D2",
            "Modulan señalización acoplada a Gi",
            "Reducen hiperactividad mesolímbica",
            "Disminuyen síntomas psicóticos"
        ],
        distractors: ["Bloquean AADC periférica", "Inhiben GABA-T", "Estimulan receptores nicotínicos", "Bloquean Ca2+ tipo T"],
        explanation: "Ambos bloquean D2 y reducen hiperactividad dopaminérgica mesolímbica; clozapina además modula 5-HT2A."
    }
];

const LOW_SCORE_MESSAGES = [
    "Esto no define lo que puedes llegar a hacer, solo muestra que este intento no funcionó.",
    "Fallar aquí es información: ya sabes por dónde no era, ahora toca ajustar.",
    "Lo importante no es este número, sino lo que hagas después de verlo."
];

const MID_SCORE_MESSAGES = [
    "Estás cerca, ya tienes base; ahora toca afinar detalles.",
    "Esto no es fracaso, es progreso incompleto.",
    "Con pequeños ajustes puedes subir bastante."
];

const HIGH_SCORE_MESSAGES = [
    "Buen resultado, se nota el trabajo que hay detrás.",
    "No fue suerte, fue preparación.",
    "Ahora el reto es mantener ese nivel."
];

const introSection = document.getElementById("dad-intro");
const gameSection = document.getElementById("dad-game");
const resultsSection = document.getElementById("dad-results");
const startButton = document.getElementById("dad-start");
const checkButton = document.getElementById("dad-check");
const nextButton = document.getElementById("dad-next");
const homeButton = document.getElementById("dad-home");
const roundLabel = document.getElementById("dad-round");
const scoreLabel = document.getElementById("dad-score");
const drugName = document.getElementById("dad-drug-name");
const taskText = document.getElementById("dad-task-text");
const slotsWrap = document.getElementById("dad-slots");
const cardBank = document.getElementById("dad-card-bank");
const feedbackBox = document.getElementById("dad-feedback");
const finalScore = document.getElementById("dad-final-score");
const finalSummary = document.getElementById("dad-final-summary");
const reviewWrap = document.getElementById("dad-review");
const correctSounds = createSoundPool("../Audios/acierto.mp3", 0.78);
const errorSounds = createSoundPool("../Audios/error.mp3", 0.78);
const backgroundMusic = new Audio("../Audios/mars_ambient_01.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.28;

let selectedRounds = [];
let currentRoundIndex = 0;
let score = 0;
let reviewData = [];
let draggedCard = null;
let selectedCard = null;
let currentHintIndex = 0;

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function createSoundPool(src, volume) {
    return Array.from({ length: 6 }, () => {
        const audio = new Audio(src);
        audio.preload = "auto";
        audio.volume = volume;
        audio.load();
        return audio;
    });
}

function primeSoundPool(pool) {
    pool.forEach((audio) => {
        const originalVolume = audio.volume;
        audio.volume = 0;
        audio.play()
            .then(() => {
                audio.pause();
                audio.currentTime = 0;
                audio.volume = originalVolume;
            })
            .catch(() => {
                audio.volume = originalVolume;
            });
    });
}

function playAudio(pool) {
    const audio = pool.find((item) => item.paused || item.ended) || pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function startBackgroundMusic() {
    backgroundMusic.play().catch(() => {});
}

function pauseBackgroundMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function pickMessageByScore(currentScore) {
    if (currentScore <= 2) {
        return shuffle(LOW_SCORE_MESSAGES)[0];
    }

    if (currentScore <= 5) {
        return shuffle(MID_SCORE_MESSAGES)[0];
    }

    return shuffle(HIGH_SCORE_MESSAGES)[0];
}

function startGame() {
    primeSoundPool(correctSounds);
    primeSoundPool(errorSounds);
    startBackgroundMusic();

    selectedRounds = shuffle(MECHANISM_BANK).slice(0, TOTAL_ROUNDS);
    currentRoundIndex = 0;
    score = 0;
    reviewData = [];

    introSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    gameSection.classList.remove("hidden");

    renderRound();
}

function renderRound() {
    const current = selectedRounds[currentRoundIndex];
    const hintOptions = current.steps.map((_, index) => index).filter((index) => index !== 0 && index !== current.steps.length - 1);
    currentHintIndex = shuffle(hintOptions)[0] ?? 1;

    roundLabel.textContent = `Ronda ${currentRoundIndex + 1} de ${selectedRounds.length}`;
    scoreLabel.textContent = `Puntos: ${score}`;
    drugName.textContent = current.name;
    taskText.textContent = current.prompt;
    feedbackBox.innerHTML = "Arrastra las tarjetas hacia los espacios. La tarjeta con pista ya está fija en su posición correcta.";
    nextButton.classList.add("hidden");
    checkButton.classList.remove("hidden");
    checkButton.disabled = false;
    selectedCard = null;

    slotsWrap.innerHTML = "";
    cardBank.innerHTML = "";

    current.steps.forEach((step, index) => {
        const slot = document.createElement("div");
        slot.className = "dad-slot";
        slot.dataset.slotIndex = String(index);
        slot.innerHTML = `<span class="dad-slot-number">Paso ${index + 1}</span>`;
        addDropHandlers(slot);
        slotsWrap.appendChild(slot);

        if (index === currentHintIndex) {
            const hintCard = createCard(step, false);
            hintCard.classList.add("locked");
            slot.classList.add("locked");
            slot.appendChild(hintCard);
        }
    });

    const activeSteps = current.steps.filter((_, index) => index !== currentHintIndex);
    const cards = shuffle([...activeSteps, ...shuffle(current.distractors).slice(0, 4)]);

    cards.forEach((text) => {
        cardBank.appendChild(createCard(text, true));
    });

    addDropHandlers(cardBank);
}

function createCard(text, draggable) {
    const card = document.createElement("div");
    card.className = "dad-card";
    card.textContent = text;
    card.dataset.value = text;
    card.draggable = draggable;

    if (draggable) {
        card.addEventListener("dragstart", handleDragStart);
        card.addEventListener("dragend", handleDragEnd);
        card.addEventListener("click", (event) => {
            event.stopPropagation();
            selectCard(card);
        });
    }

    return card;
}

function addDropHandlers(element) {
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        element.classList.add("drag-over");
    });

    element.addEventListener("dragleave", () => {
        element.classList.remove("drag-over");
    });

    element.addEventListener("drop", (event) => {
        event.preventDefault();
        element.classList.remove("drag-over");

        if (draggedCard) {
            moveCardTo(element, draggedCard);
        }
    });

    element.addEventListener("click", () => {
        if (selectedCard) {
            moveCardTo(element, selectedCard);
        }
    });
}

function handleDragStart(event) {
    draggedCard = event.currentTarget;
    draggedCard.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
}

function handleDragEnd() {
    if (draggedCard) {
        draggedCard.classList.remove("dragging");
    }

    draggedCard = null;
}

function selectCard(card) {
    if (card.classList.contains("locked")) {
        return;
    }

    document.querySelectorAll(".dad-card").forEach((item) => item.classList.remove("selected"));
    selectedCard = selectedCard === card ? null : card;

    if (selectedCard) {
        selectedCard.classList.add("selected");
    }
}

function moveCardTo(target, card) {
    if (!card || card.classList.contains("locked")) {
        return;
    }

    const destination = target.closest(".dad-slot") || target.closest(".dad-card-bank");

    if (!destination || destination.classList.contains("locked")) {
        return;
    }

    const existingCard = destination.querySelector(".dad-card:not(.locked)");
    const origin = card.parentElement;

    if (destination.classList.contains("dad-slot") && existingCard && existingCard !== card) {
        origin.appendChild(existingCard);
    }

    destination.appendChild(card);
    card.classList.remove("selected", "wrong");
    selectedCard = null;
}

function validateRound() {
    const current = selectedRounds[currentRoundIndex];
    const placedValues = Array.from(slotsWrap.querySelectorAll(".dad-slot")).map((slot) => {
        const card = slot.querySelector(".dad-card");
        return card ? card.dataset.value : "";
    });

    const isComplete = placedValues.every(Boolean);
    const isCorrect = isComplete && placedValues.every((value, index) => value === current.steps[index]);

    playAudio(isCorrect ? correctSounds : errorSounds);
    checkButton.disabled = true;
    nextButton.classList.remove("hidden");

    if (isCorrect) {
        score += 1;
        scoreLabel.textContent = `Puntos: ${score}`;
        feedbackBox.innerHTML = `<strong>Correcto.</strong> ${current.explanation}`;
    } else {
        markWrongCards(current.steps);
        feedbackBox.innerHTML = `<strong>Incorrecto.</strong> El orden correcto es: <strong>${current.steps.join(" → ")}</strong>. ${current.explanation}`;
    }

    reviewData.push({
        name: current.name,
        selected: placedValues.map((value) => value || "Espacio vacío").join(" → "),
        correct: current.steps.join(" → "),
        isCorrect,
        explanation: current.explanation
    });
}

function markWrongCards(correctSteps) {
    Array.from(slotsWrap.querySelectorAll(".dad-slot")).forEach((slot, index) => {
        const card = slot.querySelector(".dad-card:not(.locked)");

        if (card && card.dataset.value !== correctSteps[index]) {
            card.classList.add("wrong");
        }
    });
}

function nextRound() {
    currentRoundIndex += 1;

    if (currentRoundIndex < selectedRounds.length) {
        renderRound();
        return;
    }

    showResults();
}

function showResults() {
    const percentage = Math.round((score / selectedRounds.length) * 100);

    gameSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    finalScore.textContent = `Obtuviste ${score} de ${selectedRounds.length} (${percentage}%)`;
    finalSummary.textContent = pickMessageByScore(score);
    reviewWrap.innerHTML = "";

    reviewData.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = `dad-review-card ${item.isCorrect ? "correct" : "incorrect"}`;
        card.innerHTML = `
            <h3>${index + 1}. ${item.name}</h3>
            <p><strong>Tu orden:</strong> ${item.selected}</p>
            <p><strong>Orden correcto:</strong> ${item.correct}</p>
            <p><strong>Revisión:</strong> ${item.explanation}</p>
        `;
        reviewWrap.appendChild(card);
    });
}

function returnToIntro() {
    pauseBackgroundMusic();
    gameSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    introSection.classList.remove("hidden");
}

startButton.addEventListener("click", startGame);
checkButton.addEventListener("click", validateRound);
nextButton.addEventListener("click", nextRound);
homeButton.addEventListener("click", returnToIntro);
