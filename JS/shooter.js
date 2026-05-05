const ALL_TARGETS = ["AADC", "D1", "D2", "M1", "GABA_A", "Cl-", "Na+", "Ca2+ tipo T", "DAT", "NET", "SERT", "GAT-1", "GABA-T", "D2 + 5-HT2A"];
const BASE_FIRE_RATE = 300;
const FAST_FIRE_RATE = 80;
const POWERUP_DURATION = 10000;

const ENEMY_TIERS = [
    { tier: 1, hp: 1 },
    { tier: 2, hp: 2 },
    { tier: 3, hp: 3 },
    { tier: 4, hp: 4 },
    { tier: 5, hp: 5 }
];

const POWERUPS = [
    { type: "heart", image: "../Ilustraciones/corazon.png", weight: 50, title: "Vida" },
    { type: "fast", image: "../Ilustraciones/mas.png", weight: 20, title: "Ráfaga" },
    { type: "mirror", image: "../Ilustraciones/espejo.png", weight: 30, title: "Espejo" }
];

const SHOOTER_BANK = [
    { name: "Etosuximida", color: "#ffd166", targets: ["Ca2+ tipo T"], images: ["../Ilustraciones/etosuximida_e.png"], explanation: "La etosuximida corresponde a canales de Ca2+ tipo T." },
    { name: "Carbamazepina", color: "#ff7b7b", targets: ["Na+"], images: ["../Ilustraciones/carbamazepina_e.png"], explanation: "La carbamazepina corresponde a canales de Na+." },
    { name: "Bupropión", color: "#4dd4ff", targets: ["DAT", "NET"], images: ["../Ilustraciones/bupropion_e.png"], explanation: "El bupropión corresponde a DAT y NET." },
    { name: "Carbidopa", color: "#f6a04d", targets: ["AADC"], images: ["../Ilustraciones/carbidopa_e.png"], explanation: "La carbidopa corresponde a AADC periférica." },
    { name: "Levodopa", color: "#8df58a", targets: ["AADC", "D1", "D2"], images: ["../Ilustraciones/levodopa_e.png"], explanation: "La levodopa se relaciona con AADC y con receptores D1 o D2." },
    { name: "Fenobarbital y Clonazepam", color: "#b69cff", targets: ["GABA_A", "Cl-"], images: ["../Ilustraciones/fenobarbital_e.png", "../Ilustraciones/clonazepam_e.png"], explanation: "Fenobarbital y clonazepam se relacionan con GABA_A y entrada de Cl-." },
    { name: "Amitriptilina y Duloxetina", color: "#ff9fd1", targets: ["SERT", "NET"], images: ["../Ilustraciones/amitriptilina_e.png", "../Ilustraciones/duloxetina_e.png"], explanation: "Amitriptilina y duloxetina corresponden a SERT y NET." },
    { name: "Tiagabina y Vigabatrina", color: "#7ce7c8", targets: ["GAT-1", "GABA-T"], images: ["../Ilustraciones/tiagabina_e.png", "../Ilustraciones/vigabatrina_e.png"], explanation: "Tiagabina corresponde a GAT-1 y vigabatrina a GABA-T." },
    { name: "Diazepam", color: "#f8d66d", targets: ["GABA_A", "Cl-"], images: ["../Ilustraciones/diazepam_e.png"], explanation: "Diazepam potencia GABA_A y el canal de Cl-." },
    { name: "Biperideno", color: "#d5d5ff", targets: ["M1"], images: ["../Ilustraciones/biperideno_e.png"], explanation: "Biperideno corresponde a receptores muscarínicos M1." },
    { name: "Fluoxetina", color: "#ff8f70", targets: ["SERT"], images: ["../Ilustraciones/fluoxetina_e.png"], explanation: "Fluoxetina corresponde a SERT." },
    { name: "Clorpromazina y Clozapina", color: "#c7f464", targets: ["D2", "D2 + 5-HT2A"], images: ["../Ilustraciones/clorpromazina_e.png", "../Ilustraciones/clozapina_e.png"], explanation: "Clorpromazina y clozapina corresponden a D2; clozapina también se asocia a 5-HT2A." }
];

const introSection = document.getElementById("shooter-intro");
const previewSection = document.getElementById("shooter-preview");
const gameSection = document.getElementById("shooter-game");
const resultsSection = document.getElementById("shooter-results");
const startButton = document.getElementById("shooter-start");
const previewStartButton = document.getElementById("shooter-preview-start");
const homeButton = document.getElementById("shooter-home");
const previewName = document.getElementById("shooter-preview-name");
const previewToken = document.getElementById("shooter-preview-token");
const previewImages = document.getElementById("shooter-preview-images");
const previewTargets = document.getElementById("shooter-preview-targets");
const drugName = document.getElementById("shooter-drug");
const scoreLabel = document.getElementById("shooter-score");
const speedLabel = document.getElementById("shooter-speed");
const objectiveText = document.getElementById("shooter-objective");
const arena = document.getElementById("shooter-arena");
const objectsLayer = document.getElementById("shooter-objects");
const player = document.getElementById("shooter-player");
const playerLeft = document.getElementById("shooter-player-left");
const playerRight = document.getElementById("shooter-player-right");
const feedbackBox = document.getElementById("shooter-feedback");
const finalScore = document.getElementById("shooter-final-score");
const finalSummary = document.getElementById("shooter-final-summary");
const reviewWrap = document.getElementById("shooter-review");
const touchLeftButton = document.getElementById("shooter-touch-left");
const touchRightButton = document.getElementById("shooter-touch-right");
const touchFireButton = document.getElementById("shooter-touch-fire");
const correctSounds = createSoundPool("../Audios/acierto.mp3", 0.8);
const errorSounds = createSoundPool("../Audios/error.mp3", 0.78);
const shotSounds = createSoundPool("../Audios/disparo.mpeg", 0.62);
const backgroundMusic = new Audio("../Audios/su.mpeg");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.22;

let currentDrug = null;
let score = 0;
let lives = 0;
let gameActive = false;
let playerX = 0;
let bullets = [];
let enemies = [];
let powerups = [];
let keys = {};
let lastFrame = 0;
let lastShot = 0;
let lastSpawn = 0;
let lastPowerupSpawn = 0;
let animationId = null;
let reviewReason = "";
let fastFireUntil = 0;
let mirrorUntil = 0;

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function createSoundPool(src, volume) {
    return Array.from({ length: 10 }, () => {
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

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function showPreview() {
    currentDrug = shuffle(SHOOTER_BANK)[0];
    previewName.textContent = currentDrug.name;
    previewToken.style.background = currentDrug.color;
    previewToken.style.color = currentDrug.color;
    previewTargets.textContent = `Blancos correctos: ${currentDrug.targets.join(" / ")}`;
    previewImages.innerHTML = "";

    currentDrug.images.forEach((src) => {
        const image = document.createElement("img");
        image.src = src;
        image.alt = currentDrug.name;
        previewImages.appendChild(image);
    });

    introSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    gameSection.classList.add("hidden");
    previewSection.classList.remove("hidden");
    window.scrollTo(0, 0);
}

function startGame() {
    primeSoundPool(correctSounds);
    primeSoundPool(errorSounds);
    primeSoundPool(shotSounds);
    backgroundMusic.play().catch(() => {});

    score = 0;
    lives = 0;
    bullets = [];
    enemies = [];
    powerups = [];
    keys = {};
    lastFrame = 0;
    lastShot = 0;
    lastSpawn = 0;
    lastPowerupSpawn = 0;
    reviewReason = "";
    fastFireUntil = 0;
    mirrorUntil = 0;
    gameActive = true;
    objectsLayer.innerHTML = "";
    previewSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    gameSection.classList.remove("hidden");

    playerX = arena.clientWidth / 2;
    updatePlayer();
    updateHud();
    drugName.textContent = currentDrug.name;
    objectiveText.textContent = `Destruye únicamente: ${currentDrug.targets.join(" / ")}. Mantén Space para disparar.`;
    feedbackBox.innerHTML = "Mantén Space para disparar. Los potenciadores caen de vez en cuando: corazón, + y espejo.";

    animationId = requestAnimationFrame(gameLoop);
}

function updateHud() {
    const speed = getSpeedMultiplier();
    const fastLeft = Math.max(0, Math.ceil((fastFireUntil - performance.now()) / 1000));
    const mirrorLeft = Math.max(0, Math.ceil((mirrorUntil - performance.now()) / 1000));
    playerLeft.classList.toggle("hidden", !mirrorLeft);
    playerRight.classList.toggle("hidden", !mirrorLeft);
    scoreLabel.textContent = `Puntos: ${score} | Vidas: ${lives}`;
    speedLabel.textContent = `Velocidad: ${speed.toFixed(1)}x${fastLeft ? ` | + ${fastLeft}s` : ""}${mirrorLeft ? ` | Espejo ${mirrorLeft}s` : ""}`;
}

function updatePlayer() {
    player.style.left = `${playerX}px`;
    playerLeft.style.left = `${clamp(playerX - 54, 42, arena.clientWidth - 42)}px`;
    playerRight.style.left = `${clamp(playerX + 54, 42, arena.clientWidth - 42)}px`;
}

function getSpeedMultiplier() {
    return 0.68 + score * 0.025;
}

function getSpawnInterval() {
    return Math.max(780, 1550 - score * 18);
}

function getFireRate(timestamp) {
    return timestamp < fastFireUntil ? FAST_FIRE_RATE : BASE_FIRE_RATE;
}

function shoot(timestamp) {
    if (!(keys[" "] || keys.Spacebar || keys.Space)) {
        return;
    }

    if (timestamp - lastShot < getFireRate(timestamp)) {
        return;
    }

    lastShot = timestamp;
    playAudio(shotSounds);
    if (timestamp < mirrorUntil) {
        createBullet(playerX, 0);
        createBullet(clamp(playerX - 54, 20, arena.clientWidth - 20), -210);
        createBullet(clamp(playerX + 54, 20, arena.clientWidth - 20), 210);
        return;
    }

    createBullet(playerX, 0);
}

function createBullet(x, vx) {
    const bullet = document.createElement("div");
    bullet.className = "shooter-bullet";
    bullet.style.background = currentDrug.color;
    bullet.style.color = currentDrug.color;
    objectsLayer.appendChild(bullet);
    bullets.push({
        element: bullet,
        x,
        y: arena.clientHeight - 112,
        vx,
        speed: 650
    });
}

function spawnEnemy(timestamp) {
    if (timestamp - lastSpawn < getSpawnInterval()) {
        return;
    }

    lastSpawn = timestamp;
    const isCorrect = Math.random() < 0.8656;
    const target = isCorrect
        ? shuffle(currentDrug.targets)[0]
        : shuffle(ALL_TARGETS.filter((item) => !currentDrug.targets.includes(item)))[0];
    const tier = shuffle(ENEMY_TIERS)[0];
    const enemy = document.createElement("div");
    enemy.className = `shooter-enemy tier-${tier.tier}${isCorrect ? "" : " distractor"}`;
    enemy.innerHTML = `${target}<small>${tier.hp} impacto${tier.hp > 1 ? "s" : ""}</small>`;
    objectsLayer.appendChild(enemy);
    enemies.push({
        element: enemy,
        label: target,
        isCorrect,
        hp: tier.hp,
        x: 72 + Math.random() * (arena.clientWidth - 144),
        y: -42,
        width: 112,
        height: 50,
        speed: (34 + Math.random() * 18) * getSpeedMultiplier()
    });
}

function choosePowerup() {
    const roll = Math.random() * 100;
    let total = 0;
    for (const item of POWERUPS) {
        total += item.weight;
        if (roll <= total) {
            return item;
        }
    }
    return POWERUPS[0];
}

function spawnPowerup(timestamp) {
    if (timestamp - lastPowerupSpawn < 6500 + Math.random() * 2600) {
        return;
    }

    lastPowerupSpawn = timestamp;
    if (Math.random() > 0.38) {
        return;
    }

    const data = choosePowerup();
    const element = document.createElement("div");
    element.className = `shooter-powerup ${data.type}`;
    element.innerHTML = `<img src="${data.image}" alt="${data.title}"><small>${data.title}</small>`;
    objectsLayer.appendChild(element);
    powerups.push({
        element,
        type: data.type,
        x: 54 + Math.random() * (arena.clientWidth - 108),
        y: -36,
        width: 52,
        height: 52,
        speed: 62
    });
}

function updateGame(delta, timestamp) {
    const moveSpeed = 430;
    if (keys.ArrowLeft || keys.a) {
        playerX -= moveSpeed * delta;
    }
    if (keys.ArrowRight || keys.d) {
        playerX += moveSpeed * delta;
    }

    playerX = clamp(playerX, 42, arena.clientWidth - 42);
    updatePlayer();
    shoot(timestamp);
    spawnEnemy(timestamp);
    spawnPowerup(timestamp);

    bullets.forEach((bullet) => {
        bullet.x += bullet.vx * delta;
        bullet.y -= bullet.speed * delta;
        bullet.element.style.left = `${bullet.x}px`;
        bullet.element.style.top = `${bullet.y}px`;
    });

    enemies.forEach((enemy) => {
        enemy.y += enemy.speed * delta;
        enemy.element.style.left = `${enemy.x}px`;
        enemy.element.style.top = `${enemy.y}px`;
    });

    powerups.forEach((powerup) => {
        powerup.y += powerup.speed * delta;
        powerup.element.style.left = `${powerup.x}px`;
        powerup.element.style.top = `${powerup.y}px`;
    });

    handleCollisions(timestamp);
    cleanupObjects();
    updateHud();
}

function handleCollisions(timestamp) {
    for (const powerup of [...powerups]) {
        if (isPlayerColliding(powerup)) {
            applyPowerup(powerup, timestamp);
            removePowerup(powerup);
        }
    }

    for (const bullet of [...bullets]) {
        for (const enemy of [...enemies]) {
            if (!isRectColliding(bullet, enemy)) {
                continue;
            }

            removeBullet(bullet);
            if (!enemy.isCorrect) {
                removeEnemy(enemy);
                consumeLifeOrEnd(`Le disparaste a <strong>${enemy.label}</strong>, que no pertenece al mecanismo de ${currentDrug.name}.`);
                return;
            }

            enemy.hp -= 1;
            enemy.innerHTML = `${enemy.label}<small>${enemy.hp} impacto${enemy.hp !== 1 ? "s" : ""}</small>`;
            enemy.element.innerHTML = `${enemy.label}<small>${enemy.hp} impacto${enemy.hp !== 1 ? "s" : ""}</small>`;

            if (enemy.hp <= 0) {
                score += 1;
                playAudio(correctSounds);
                removeEnemy(enemy);
            }
            break;
        }
    }
}

function isRectColliding(bullet, item) {
    return (
        bullet.x > item.x - item.width / 2 &&
        bullet.x < item.x + item.width / 2 &&
        bullet.y > item.y - item.height / 2 &&
        bullet.y < item.y + item.height / 2
    );
}

function isPlayerColliding(item) {
    return (
        playerX + 34 > item.x - item.width / 2 &&
        playerX - 34 < item.x + item.width / 2 &&
        arena.clientHeight - 18 > item.y - item.height / 2 &&
        arena.clientHeight - 104 < item.y + item.height / 2
    );
}

function applyPowerup(powerup, timestamp) {
    playAudio(correctSounds);
    if (powerup.type === "heart") {
        lives += 1;
        feedbackBox.innerHTML = "<strong>Corazón.</strong> Ganaste una vida extra.";
        return;
    }
    if (powerup.type === "fast") {
        fastFireUntil = Math.max(fastFireUntil, timestamp) + POWERUP_DURATION;
        feedbackBox.innerHTML = "<strong>Ráfaga.</strong> Disparas cada 0.08 segundos durante 10 segundos.";
        return;
    }
    mirrorUntil = Math.max(mirrorUntil, timestamp) + POWERUP_DURATION;
    feedbackBox.innerHTML = "<strong>Espejo.</strong> El frasco se duplica durante 10 segundos.";
}

function cleanupObjects() {
    bullets.filter((bullet) => bullet.y < -20 || bullet.x < -20 || bullet.x > arena.clientWidth + 20).forEach(removeBullet);
    powerups.filter((powerup) => powerup.y > arena.clientHeight + 40).forEach(removePowerup);
    enemies.filter((enemy) => enemy.y > arena.clientHeight + 36).forEach((enemy) => {
        removeEnemy(enemy);
        if (enemy.isCorrect && gameActive) {
            consumeLifeOrEnd(`Se escapó <strong>${enemy.label}</strong>, un blanco correcto de ${currentDrug.name}.`);
        }
    });
}

function consumeLifeOrEnd(message) {
    if (lives > 0) {
        lives -= 1;
        playAudio(errorSounds);
        feedbackBox.innerHTML = `<strong>Vida usada.</strong> ${message} Te queda${lives === 1 ? "" : "n"} ${lives} vida${lives === 1 ? "" : "s"}.`;
        return;
    }
    endGame(message);
}

function removeBullet(bullet) {
    bullets = bullets.filter((item) => item !== bullet);
    bullet.element.remove();
}

function removeEnemy(enemy) {
    enemies = enemies.filter((item) => item !== enemy);
    enemy.element.remove();
}

function removePowerup(powerup) {
    powerups = powerups.filter((item) => item !== powerup);
    powerup.element.remove();
}

function gameLoop(timestamp) {
    if (!gameActive) return;
    if (!lastFrame) lastFrame = timestamp;
    const delta = Math.min((timestamp - lastFrame) / 1000, 0.04);
    lastFrame = timestamp;
    updateGame(delta, timestamp);
    animationId = requestAnimationFrame(gameLoop);
}

function endGame(message) {
    gameActive = false;
    cancelAnimationFrame(animationId);
    playAudio(errorSounds);
    reviewReason = message;
    feedbackBox.innerHTML = `<strong>Fin de la partida.</strong> ${message}`;
    setTimeout(showResults, 900);
}

function pickSummary() {
    if (score <= 5) return "Fallar aquí es información: ya sabes por dónde no era, ahora toca ajustar.";
    if (score <= 14) return "Estás cerca, ya tienes base; ahora toca afinar detalles.";
    return "Buen resultado, se nota el trabajo que hay detrás.";
}

function showResults() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    finalScore.textContent = `Obtuviste ${score} punto${score === 1 ? "" : "s"}`;
    finalSummary.textContent = pickSummary();
    reviewWrap.innerHTML = "";

    const card = document.createElement("article");
    card.className = "shooter-review-card";
    card.innerHTML = `
        <h3>${currentDrug.name}</h3>
        <p><strong>Blancos correctos:</strong> ${currentDrug.targets.join(" / ")}</p>
        <p><strong>Resultado:</strong> ${reviewReason}</p>
        <p><strong>Revisión:</strong> ${currentDrug.explanation}</p>
    `;
    reviewWrap.appendChild(card);
}

function returnHome() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameActive = false;
    cancelAnimationFrame(animationId);
    objectsLayer.innerHTML = "";
    bullets = [];
    enemies = [];
    powerups = [];
    resultsSection.classList.add("hidden");
    gameSection.classList.add("hidden");
    previewSection.classList.add("hidden");
    introSection.classList.remove("hidden");
}

startButton.addEventListener("click", showPreview);
previewStartButton.addEventListener("click", startGame);
homeButton.addEventListener("click", returnHome);

function bindTouchKey(button, key) {
    const press = (event) => {
        event.preventDefault();
        keys[key] = true;
    };
    const release = () => {
        keys[key] = false;
    };

    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointerleave", release);
    button.addEventListener("pointercancel", release);
}

bindTouchKey(touchLeftButton, "ArrowLeft");
bindTouchKey(touchRightButton, "ArrowRight");
bindTouchKey(touchFireButton, " ");

window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    keys[event.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
    keys[event.key.toLowerCase()] = false;
});
