const PAIRS_PER_GAME = 12;

const PAIR_BANK = [
    { name: "Etosuximida", image: "../Ilustraciones/etosuximida_e.png" },
    { name: "Carbamazepina", image: "../Ilustraciones/carbamazepina_e.png" },
    { name: "Bupropión", image: "../Ilustraciones/bupropion_e.png" },
    { name: "Carbidopa", image: "../Ilustraciones/carbidopa_e.png" },
    { name: "Levodopa", image: "../Ilustraciones/levodopa_e.png" },
    { name: "Fenobarbital", image: "../Ilustraciones/fenobarbital_e.png" },
    { name: "Clonazepam", image: "../Ilustraciones/clonazepam_e.png" },
    { name: "Amitriptilina", image: "../Ilustraciones/amitriptilina_e.png" },
    { name: "Duloxetina", image: "../Ilustraciones/duloxetina_e.png" },
    { name: "Tiagabina", image: "../Ilustraciones/tiagabina_e.png" },
    { name: "Vigabatrina", image: "../Ilustraciones/vigabatrina_e.png" },
    { name: "Diazepam", image: "../Ilustraciones/diazepam_e.png" },
    { name: "Biperideno", image: "../Ilustraciones/biperideno_e.png" },
    { name: "Fluoxetina", image: "../Ilustraciones/fluoxetina_e.png" },
    { name: "Clorpromazina", image: "../Ilustraciones/clorpromazina_e.png" },
    { name: "Clozapina", image: "../Ilustraciones/clozapina_e.png" }
];

const introSection = document.getElementById("memory-intro");
const gameSection = document.getElementById("memory-game");
const resultsSection = document.getElementById("memory-results");
const startButton = document.getElementById("memory-start");
const homeButton = document.getElementById("memory-home");
const board = document.getElementById("memory-board");
const pairsLabel = document.getElementById("memory-pairs");
const movesLabel = document.getElementById("memory-moves");
const feedbackBox = document.getElementById("memory-feedback");
const finalScore = document.getElementById("memory-final-score");
const finalSummary = document.getElementById("memory-final-summary");
const reviewWrap = document.getElementById("memory-review");
const correctSounds = createSoundPool("../Audios/acierto.mp3", 0.82);
const errorSounds = createSoundPool("../Audios/error.mp3", 0.74);
const backgroundMusic = new Audio("../Audios/pou.mpeg");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.22;

let currentPairs = [];
let flipped = [];
let matchedPairs = 0;
let moves = 0;
let lockBoard = false;

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
        const volume = audio.volume;
        audio.volume = 0;
        audio.play().then(() => {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = volume;
        }).catch(() => {
            audio.volume = volume;
        });
    });
}

function playAudio(pool) {
    const audio = pool.find((item) => item.paused || item.ended) || pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function startGame() {
    primeSoundPool(correctSounds);
    primeSoundPool(errorSounds);
    backgroundMusic.play().catch(() => {});
    currentPairs = shuffle(PAIR_BANK).slice(0, PAIRS_PER_GAME);
    matchedPairs = 0;
    moves = 0;
    flipped = [];
    lockBoard = false;
    introSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    gameSection.classList.remove("hidden");
    renderBoard();
    updateLabels();
}

function renderBoard() {
    const cards = currentPairs.flatMap((pair, pairId) => [
        { pairId, kind: "name", text: pair.name },
        { pairId, kind: "image", text: pair.name, image: pair.image }
    ]);

    board.innerHTML = "";
    shuffle(cards).forEach((data) => {
        const button = document.createElement("button");
        button.className = "memory-card";
        button.type = "button";
        button.dataset.pairId = String(data.pairId);
        button.dataset.kind = data.kind;
        button.dataset.text = data.text;
        button.dataset.image = data.image || "";
        button.textContent = "?";
        button.addEventListener("click", () => flipCard(button));
        board.appendChild(button);
    });
    feedbackBox.textContent = "Voltea un nombre y una estructura para formar una pareja.";
}

function updateLabels() {
    pairsLabel.textContent = `Parejas: ${matchedPairs} de ${currentPairs.length || PAIRS_PER_GAME}`;
    movesLabel.textContent = `Intentos: ${moves}`;
}

function revealCard(card) {
    card.classList.add("flipped");
    card.innerHTML = card.dataset.kind === "image"
        ? `<img src="${card.dataset.image}" alt="${card.dataset.text}">`
        : `<span>${card.dataset.text}</span>`;
}

function hideCard(card) {
    card.classList.remove("flipped");
    card.textContent = "?";
}

function flipCard(card) {
    if (lockBoard || card.classList.contains("flipped") || card.classList.contains("matched")) {
        return;
    }

    revealCard(card);
    flipped.push(card);

    if (flipped.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    moves += 1;
    updateLabels();
    const [first, second] = flipped;
    const isMatch = first.dataset.pairId === second.dataset.pairId && first.dataset.kind !== second.dataset.kind;

    playAudio(isMatch ? correctSounds : errorSounds);

    if (isMatch) {
        first.classList.add("matched");
        second.classList.add("matched");
        first.disabled = true;
        second.disabled = true;
        matchedPairs += 1;
        updateLabels();
        feedbackBox.innerHTML = `<strong>Acierto.</strong> ${first.dataset.text} coincide con su estructura.`;
        flipped = [];

        if (matchedPairs === currentPairs.length) {
            setTimeout(showResults, 700);
        }
        return;
    }

    lockBoard = true;
    feedbackBox.innerHTML = "<strong>No coinciden.</strong> Compara nombre y estructura, y vuelve a intentarlo.";
    setTimeout(() => {
        hideCard(first);
        hideCard(second);
        flipped = [];
        lockBoard = false;
    }, 950);
}

function showResults() {
    gameSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    finalScore.textContent = `Completaste ${currentPairs.length} parejas en ${moves} intentos`;
    finalSummary.textContent = moves <= 16
        ? "Buen resultado, se nota el trabajo que hay detrás."
        : moves <= 28
        ? "Estás cerca, ya tienes base; ahora toca afinar detalles."
        : "Fallar aquí es información: ya sabes por dónde no era, ahora toca ajustar.";
    reviewWrap.innerHTML = "";
    currentPairs.forEach((pair) => {
        const card = document.createElement("article");
        card.className = "memory-review-card";
        card.innerHTML = `
            <img src="${pair.image}" alt="${pair.name}">
            <strong>${pair.name}</strong>
        `;
        reviewWrap.appendChild(card);
    });
}

function returnHome() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    resultsSection.classList.add("hidden");
    gameSection.classList.add("hidden");
    introSection.classList.remove("hidden");
}

startButton.addEventListener("click", startGame);
homeButton.addEventListener("click", returnHome);
