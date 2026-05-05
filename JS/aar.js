const AAR_TARGETS = [
    { id: "aadc-periferica", label: "AADC", x: 48.7, y: 12.0 },
    { id: "aadc-central", label: "AADC", x: 49.2, y: 41.8 },
    { id: "d1", label: "D1", x: 7.7, y: 58.8 },
    { id: "d2", label: "D2", x: 17.4, y: 59.0 },
    { id: "m1", label: "M1", x: 26.8, y: 58.8 },
    { id: "gabaa", label: "GABA_A", x: 38.0, y: 58.9 },
    { id: "cl-canal", label: "Cl-", x: 45.9, y: 58.9 },
    { id: "na-canales", label: "Na+", x: 53.4, y: 59.0 },
    { id: "ca-t", label: "Ca2+ T", x: 61.3, y: 59.0 },
    { id: "dat", label: "DAT", x: 72.2, y: 59.4 },
    { id: "net", label: "NET", x: 79.3, y: 59.6 },
    { id: "sert", label: "SERT", x: 87.3, y: 59.8 },
    { id: "gat1", label: "GAT-1", x: 95.3, y: 60.8 },
    { id: "gaba-t", label: "GABA-T", x: 53.7, y: 85.4 }
];

const AAR_DRUGS = [
    {
        name: "Etosuximida",
        color: "#ffd166",
        targetIds: ["ca-t"],
        explanation: "La etosuximida actúa sobre canales de Ca2+ tipo T, sobre todo en neuronas talámicas. Por eso ese blanco resume de forma directa su mecanismo anticonvulsivante.",
        images: ["../Ilustraciones/etosuximida_e.png"]
    },
    {
        name: "Carbamazepina",
        color: "#ff7b7b",
        targetIds: ["na-canales"],
        explanation: "La carbamazepina estabiliza el estado inactivado de los canales de Na+ dependientes de voltaje. Así limita la repetición rápida de potenciales de acción.",
        images: ["../Ilustraciones/carbamazepina_e.png"]
    },
    {
        name: "Bupropión",
        color: "#ffe66d",
        targetIds: ["dat", "net"],
        explanation: "El bupropión inhibe DAT y NET. Como su acción principal aumenta dopamina y noradrenalina, cualquiera de esos dos transportadores funciona aquí como blanco correcto.",
        images: ["../Ilustraciones/bupropion_e.png"]
    },
    {
        name: "Carbidopa",
        color: "#7fffd4",
        targetIds: ["aadc-periferica"],
        explanation: "La carbidopa inhibe la AADC periférica, no la central. Justamente por eso permite que más levodopa llegue intacta al sistema nervioso central.",
        images: ["../Ilustraciones/carbidopa_e.png"]
    },
    {
        name: "Levodopa",
        color: "#a78bfa",
        targetIds: ["aadc-central", "d1", "d2"],
        sequence: [["aadc-central"], ["d1", "d2"]],
        explanation: "La levodopa primero debe convertirse en dopamina por acción de AADC en el sistema nervioso central. Después de esa conversión, su efecto funcional se expresa sobre receptores dopaminérgicos como D1 y D2.",
        images: ["../Ilustraciones/levodopa_e.png"]
    },
    {
        name: "Fenobarbital y Clonazepam",
        color: "#4cc9f0",
        targetIds: ["gabaa", "cl-canal"],
        explanation: "Fenobarbital y clonazepam potencian el sistema GABA_A y favorecen la entrada de cloro. Por eso aquí se aceptan tanto el receptor GABA_A como el canal de Cl- asociado.",
        images: ["../Ilustraciones/fenobarbital_e.png", "../Ilustraciones/clonazepam_e.png"]
    },
    {
        name: "Amitriptilina y Duloxetina",
        color: "#f72585",
        targetIds: ["sert", "net"],
        explanation: "Amitriptilina y duloxetina aumentan serotonina y noradrenalina al bloquear SERT y NET. Cualquiera de esos dos transportadores refleja el mecanismo correcto.",
        images: ["../Ilustraciones/amitriptilina_e.png", "../Ilustraciones/duloxetina_e.png"]
    },
    {
        name: "Tiagabina y Vigabatrina",
        color: "#80ed99",
        targetIds: ["gat1", "gaba-t"],
        sequence: [["gat1"], ["gaba-t"]],
        explanation: "Este par aumenta GABA por dos rutas complementarias. Tiagabina bloquea GAT-1 y vigabatrina inhibe GABA-T, así que en esta ronda debes reconocer ambas fases del mecanismo.",
        images: ["../Ilustraciones/tiagabina_e.png", "../Ilustraciones/vigabatrina_e.png"]
    },
    {
        name: "Diazepam",
        color: "#ffb703",
        targetIds: ["gabaa"],
        explanation: "El diazepam se une al sitio benzodiacepínico del receptor GABA_A. Aunque el resultado final involucra la entrada de cloro, su blanco inmediato es el receptor.",
        images: ["../Ilustraciones/diazepam_e.png"]
    },
    {
        name: "Biperideno",
        color: "#9bf6ff",
        targetIds: ["m1"],
        explanation: "El biperideno antagoniza receptores muscarínicos, sobre todo M1. Ese es el blanco más representativo de su acción central sobre el estriado.",
        images: ["../Ilustraciones/biperideno_e.png"]
    },
    {
        name: "Fluoxetina",
        color: "#caffbf",
        targetIds: ["sert"],
        explanation: "La fluoxetina es un ISRS. Su diana principal es SERT, por eso el aumento de serotonina depende directamente de ese transportador.",
        images: ["../Ilustraciones/fluoxetina_e.png"]
    },
    {
        name: "Clorpromazina y Clozapina",
        color: "#ff99c8",
        targetIds: ["d2"],
        explanation: "Clorpromazina y clozapina comparten el antagonismo sobre receptores D2. En la imagen ese es el blanco más representativo para ubicarlas.",
        images: ["../Ilustraciones/clorpromazina_e.png", "../Ilustraciones/clozapina_e.png"]
    }
];

const TOTAL_ROUNDS = 10;
const POINT_SIZE = 20;
const DROP_DURATION = 24000;
const KEY_STEP = 24;

const LOW_SCORE_MESSAGES = [
    "Esto no define lo que puedes llegar a hacer, solo muestra que este intento no funcionó.",
    "Fallar aquí es información: ya sabes por dónde no era, ahora toca ajustar.",
    "No es el final, es el punto donde decides si mejoras o te rindes.",
    "Lo importante no es este número, sino lo que hagas después de verlo.",
    "Mucha gente que ahora domina algo empezó exactamente aquí."
];

const MID_SCORE_MESSAGES = [
    "Estás cerca, ya tienes base; ahora toca afinar detalles.",
    "Esto no es fracaso, es progreso incompleto.",
    "Ya hiciste lo difícil: entender parte. Ahora solo falta consolidarlo.",
    "Con pequeños ajustes puedes subir bastante.",
    "Vas en buen camino, pero no te conformes con ‘casi’."
];

const HIGH_SCORE_MESSAGES = [
    "Buen resultado, se nota el trabajo que hay detrás.",
    "Esto demuestra que tu método está funcionando.",
    "No fue suerte, fue preparación.",
    "Ahora el reto es mantener ese nivel.",
    "Disfrútalo, pero sigue empujando, aún puedes mejorar más."
];

const introSection = document.getElementById("aar-intro");
const previewSection = document.getElementById("aar-preview");
const gameSection = document.getElementById("aar-game");
const resultsSection = document.getElementById("aar-results");
const startButton = document.getElementById("aar-start");
const previewTitle = document.getElementById("aar-preview-title");
const previewToken = document.getElementById("aar-preview-token");
const previewImages = document.getElementById("aar-preview-images");
const previewName = document.getElementById("aar-preview-name");
const previewStartButton = document.getElementById("aar-preview-start");
const nextButton = document.getElementById("aar-next");
const homeButton = document.getElementById("aar-home");
const arena = document.getElementById("aar-arena");
const point = document.getElementById("aar-point");
const targetsWrap = document.getElementById("aar-targets");
const drugName = document.getElementById("aar-drug-name");
const roundLabel = document.getElementById("aar-round");
const scoreLabel = document.getElementById("aar-score");
const feedbackBox = document.getElementById("aar-feedback");
const finalScore = document.getElementById("aar-final-score");
const finalSummary = document.getElementById("aar-final-summary");
const reviewWrap = document.getElementById("aar-review");
const touchLeftButton = document.getElementById("aar-touch-left");
const touchRightButton = document.getElementById("aar-touch-right");
const touchEnterButton = document.getElementById("aar-touch-enter");
const correctSounds = createSoundPool("../Audios/acierto.mp3", 0.78);
const errorSounds = createSoundPool("../Audios/error.mp3", 0.78);
const backgroundMusic = new Audio("../Audios/AB_space_ambience_dangerzone.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.25;

let selectedRounds = [];
let currentRoundIndex = 0;
let score = 0;
let reviewData = [];
let pointX = 0;
let pointY = 0;
let animationFrameId = null;
let roundStart = null;
let dropStartY = 28;
let roundResolved = false;
let currentDrug = null;
let currentStageIndex = 0;
let waitingForStageContinue = false;
let disabledTargetIds = [];

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function pickMessageByScore(currentScore) {
    if (currentScore <= 3) {
        return shuffle(LOW_SCORE_MESSAGES)[0];
    }

    if (currentScore <= 7) {
        return shuffle(MID_SCORE_MESSAGES)[0];
    }

    return shuffle(HIGH_SCORE_MESSAGES)[0];
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

function buildTargets() {
    targetsWrap.innerHTML = "";

    AAR_TARGETS.forEach((target) => {
        const element = document.createElement("div");
        element.className = "aar-target";
        element.dataset.targetId = target.id;
        element.style.left = `${target.x}%`;
        element.style.top = `${target.y}%`;
        element.innerHTML = `
            <span class="aar-target-label">${target.label}</span>
            <span class="aar-target-status"></span>
        `;
        targetsWrap.appendChild(element);
    });
}

function resetTargetHighlights() {
    targetsWrap.querySelectorAll(".aar-target").forEach((target) => {
        target.classList.remove("correct", "wrong");
        const status = target.querySelector(".aar-target-status");

        if (status) {
            status.textContent = "";
        }
    });

    arena.querySelectorAll(".aar-void-mark").forEach((mark) => mark.remove());
}

function markTargetStatus(targetId, state, symbol) {
    const element = targetsWrap.querySelector(`[data-target-id="${targetId}"]`);

    if (!element) {
        return;
    }

    element.classList.add(state);
    const status = element.querySelector(".aar-target-status");

    if (status) {
        status.textContent = symbol;
    }
}

function markVoidFall() {
    const mark = document.createElement("div");
    mark.className = "aar-void-mark";
    mark.textContent = "✕";
    mark.style.left = `${pointX}px`;
    mark.style.top = `${pointY}px`;
    arena.appendChild(mark);
}

function setPointPosition() {
    point.style.left = `${pointX}px`;
    point.style.top = `${pointY}px`;
}

function followPointViewport() {
    const arenaRect = arena.getBoundingClientRect();
    const absolutePointY = window.scrollY + arenaRect.top + pointY;
    const desiredScroll = absolutePointY - window.innerHeight * 0.5;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, clamp(desiredScroll, 0, Math.max(maxScroll, 0)));
}

function startGame() {
    primeSoundPool(correctSounds);
    primeSoundPool(errorSounds);
    startBackgroundMusic();
    selectedRounds = shuffle(AAR_DRUGS).slice(0, TOTAL_ROUNDS);
    currentRoundIndex = 0;
    score = 0;
    reviewData = [];

    introSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    buildTargets();
    showPreview();
}

function showPreview() {
    currentDrug = selectedRounds[currentRoundIndex];
    gameSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    previewSection.classList.remove("hidden");
    previewToken.style.background = currentDrug.color;
    previewToken.style.color = currentDrug.color;
    previewTitle.textContent = currentDrug.images.length > 1 ? "Tus fármacos son:" : "Tu fármaco es:";
    previewName.textContent = currentDrug.name;
    previewImages.innerHTML = "";

    currentDrug.images.forEach((imagePath) => {
        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = currentDrug.name;
        previewImages.appendChild(image);
    });

    window.scrollTo(0, 0);
}

function startRound() {
    cancelAnimationFrame(animationFrameId);
    roundResolved = false;
    roundStart = null;
    currentStageIndex = 0;
    waitingForStageContinue = false;
    disabledTargetIds = [];
    currentDrug = selectedRounds[currentRoundIndex];
    previewSection.classList.add("hidden");
    gameSection.classList.remove("hidden");
    resetTargetHighlights();
    nextButton.classList.add("hidden");

    roundLabel.textContent = `Ronda ${currentRoundIndex + 1} de ${selectedRounds.length}`;
    scoreLabel.textContent = `Puntos: ${score}`;
    drugName.textContent = currentDrug.name;
    feedbackBox.innerHTML = "El fármaco ya está listo. Guíalo hacia el blanco correcto antes de que termine el recorrido.";

    point.style.background = currentDrug.color;
    point.style.color = currentDrug.color;
    pointX = arena.clientWidth / 2;
    pointY = 28;
    dropStartY = pointY;
    setPointPosition();
    followPointViewport();

    animationFrameId = requestAnimationFrame(runDrop);
}

function runDrop(timestamp) {
    if (roundResolved || waitingForStageContinue) {
        return;
    }

    if (!roundStart) {
        roundStart = timestamp;
    }

    const progress = Math.min((timestamp - roundStart) / DROP_DURATION, 1);
    const maxY = arena.clientHeight - POINT_SIZE / 2 - 8;
    pointY = dropStartY + progress * (maxY - dropStartY);
    setPointPosition();
    followPointViewport();

    const collidedTarget = detectCollision();

    if (collidedTarget) {
        resolveRound(collidedTarget.dataset.targetId);
        return;
    }

    if (progress >= 1) {
        resolveRound(null);
        return;
    }

    animationFrameId = requestAnimationFrame(runDrop);
}

function detectCollision() {
    const pointRect = {
        left: pointX - POINT_SIZE / 2,
        right: pointX + POINT_SIZE / 2,
        top: pointY - POINT_SIZE / 2,
        bottom: pointY + POINT_SIZE / 2
    };

    return Array.from(targetsWrap.querySelectorAll(".aar-target")).find((target) => {
        if (disabledTargetIds.includes(target.dataset.targetId)) {
            return false;
        }

        const targetRect = target.getBoundingClientRect();
        const arenaRect = arena.getBoundingClientRect();
        const localRect = {
            left: targetRect.left - arenaRect.left,
            right: targetRect.right - arenaRect.left,
            top: targetRect.top - arenaRect.top,
            bottom: targetRect.bottom - arenaRect.top
        };

        return !(
            pointRect.right < localRect.left ||
            pointRect.left > localRect.right ||
            pointRect.bottom < localRect.top ||
            pointRect.top > localRect.bottom
        );
    });
}

function resolveRound(selectedTargetId) {
    const hasSequence = Array.isArray(currentDrug.sequence);
    const currentStageTargets = hasSequence ? currentDrug.sequence[currentStageIndex] : currentDrug.targetIds;
    const selectedTarget = AAR_TARGETS.find((target) => target.id === selectedTargetId) || null;
    const isCorrect = currentStageTargets.includes(selectedTargetId);

    if (hasSequence && isCorrect && currentStageIndex < currentDrug.sequence.length - 1) {
        playAudio(correctSounds);
        markTargetStatus(selectedTargetId, "correct", "✓");
        disabledTargetIds.push(selectedTargetId);
        currentStageIndex += 1;
        waitingForStageContinue = true;
        feedbackBox.innerHTML = currentDrug.name === "Levodopa"
            ? `<strong>Bien.</strong> Esta primera fase es correcta porque la levodopa primero debe pasar por la AADC central para convertirse en dopamina. <strong>Presiona Enter para continuar.</strong>`
            : `<strong>Bien.</strong> Esta primera fase es correcta porque ${currentDrug.name.toLowerCase()} incluye ese paso como parte necesaria del mecanismo antes de completar el efecto final. <strong>Presiona Enter para continuar.</strong>`;
        return;
    }

    roundResolved = true;
    cancelAnimationFrame(animationFrameId);

    const correctTargets = hasSequence
        ? AAR_TARGETS.filter((target) => currentDrug.sequence.flat().includes(target.id))
        : AAR_TARGETS.filter((target) => currentDrug.targetIds.includes(target.id));

    playAudio(isCorrect ? correctSounds : errorSounds);

    if (isCorrect) {
        score += 1;
        scoreLabel.textContent = `Puntos: ${score}`;
    }

    correctTargets.forEach((target) => {
        markTargetStatus(target.id, "correct", "✓");
    });

    if (selectedTargetId && !isCorrect) {
        markTargetStatus(selectedTargetId, "wrong", "✕");
    }

    if (!selectedTargetId) {
        markVoidFall();
    }

    reviewData.push({
        drug: currentDrug.name,
        selected: selectedTarget ? selectedTarget.label : "No seleccionaste nada :(",
        correct: correctTargets.map((target) => target.label).join(" / "),
        isCorrect,
        explanation: currentDrug.explanation
    });

    feedbackBox.innerHTML = !selectedTargetId
        ? `<strong>No seleccionaste nada :(</strong> El blanco correcto era <strong>${correctTargets.map((target) => target.label).join(" / ")}</strong>. ${currentDrug.explanation}`
        : isCorrect
        ? `<strong>Acierto.</strong> ${currentDrug.explanation}`
        : `<strong>No fue esa opción.</strong> El blanco correcto era <strong>${correctTargets.map((target) => target.label).join(" / ")}</strong>. ${currentDrug.explanation}`;

    nextButton.textContent = currentRoundIndex === selectedRounds.length - 1 ? "Ver resultados" : "Siguiente ronda";
    nextButton.classList.remove("hidden");
}

function nextRound() {
    currentRoundIndex += 1;

    if (currentRoundIndex < selectedRounds.length) {
        showPreview();
        return;
    }

    showResults();
}

function showResults() {
    const percentage = Math.round((score / selectedRounds.length) * 100);

    gameSection.classList.add("hidden");
    previewSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");

    finalScore.textContent = `Obtuviste ${score} de ${selectedRounds.length} (${percentage}%)`;
    finalSummary.textContent = pickMessageByScore(score);

    reviewWrap.innerHTML = "";

    reviewData.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = `aar-review-card ${item.isCorrect ? "correct" : "incorrect"}`;
        card.innerHTML = `
<h3>${index + 1}. ${item.drug}</h3>
                <p><strong>Tu elección:</strong> ${item.selected}</p>
                <p><strong>Blanco correcto:</strong> ${item.correct}</p>
                <p><strong>Revisión:</strong> ${item.explanation}</p>
        `;
        reviewWrap.appendChild(card);
    });
}

function returnToIntro() {
    cancelAnimationFrame(animationFrameId);
    pauseBackgroundMusic();
    resultsSection.classList.add("hidden");
    previewSection.classList.add("hidden");
    gameSection.classList.add("hidden");
    introSection.classList.remove("hidden");
    waitingForStageContinue = false;
    window.scrollTo(0, 0);
}

function continueSequencePhase() {
    if (!waitingForStageContinue || roundResolved) {
        return;
    }

    waitingForStageContinue = false;
    roundStart = null;
    pointY = clamp(pointY + 2, 28, arena.clientHeight - POINT_SIZE / 2 - 8);
    dropStartY = pointY;
    setPointPosition();
    followPointViewport();
    feedbackBox.innerHTML = "Siguiente fase activa. Guía el fármaco hacia el siguiente blanco correcto.";
    animationFrameId = requestAnimationFrame(runDrop);
}

function movePointByTouch(direction) {
    if (gameSection.classList.contains("hidden") || roundResolved || waitingForStageContinue) {
        return;
    }

    pointX = clamp(pointX + direction * KEY_STEP, POINT_SIZE / 2, arena.clientWidth - POINT_SIZE / 2);
    setPointPosition();
}

function bindHoldButton(button, action) {
    let intervalId = null;
    const start = (event) => {
        event.preventDefault();
        action();
        intervalId = setInterval(action, 80);
    };
    const stop = () => {
        clearInterval(intervalId);
        intervalId = null;
    };

    button.addEventListener("pointerdown", start);
    button.addEventListener("pointerup", stop);
    button.addEventListener("pointerleave", stop);
    button.addEventListener("pointercancel", stop);
}

window.addEventListener("keydown", (event) => {
    if (gameSection.classList.contains("hidden")) {
        return;
    }

    if (event.key === "Enter" && waitingForStageContinue) {
        continueSequencePhase();
        return;
    }

    if (roundResolved || waitingForStageContinue) {
        return;
    }

    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        pointX = clamp(pointX - KEY_STEP, POINT_SIZE / 2, arena.clientWidth - POINT_SIZE / 2);
        setPointPosition();
    }

    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        pointX = clamp(pointX + KEY_STEP, POINT_SIZE / 2, arena.clientWidth - POINT_SIZE / 2);
        setPointPosition();
    }
});

startButton.addEventListener("click", startGame);
previewStartButton.addEventListener("click", startRound);
nextButton.addEventListener("click", nextRound);
homeButton.addEventListener("click", returnToIntro);
bindHoldButton(touchLeftButton, () => movePointByTouch(-1));
bindHoldButton(touchRightButton, () => movePointByTouch(1));
touchEnterButton.addEventListener("click", continueSequencePhase);
