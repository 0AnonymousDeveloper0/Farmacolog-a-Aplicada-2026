const soonCard = document.getElementById("soon-card");
const fnafOverlay = document.getElementById("fnaf-overlay");
const fnafVideo = document.getElementById("fnaf-video");

let fnafPlaying = false;
let fullscreenLockTimer = null;

function blockNavigation(event) {
    if (!fnafPlaying) {
        return;
    }

    event.preventDefault();
    event.returnValue = "";
}

function startFnafVideo() {
    fnafPlaying = true;
    fnafOverlay.classList.remove("hidden");
    fnafOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    window.addEventListener("beforeunload", blockNavigation);

    fnafVideo.controls = false;
    fnafVideo.currentTime = 0;
    fnafVideo.play().catch(() => {});

    if (fnafOverlay.requestFullscreen) {
        fnafOverlay.requestFullscreen().catch(() => {});
    }

    fullscreenLockTimer = setInterval(keepFullscreenLocked, 350);
}

function keepFullscreenLocked() {
    if (!fnafPlaying || document.fullscreenElement) {
        return;
    }

    setTimeout(() => {
        if (fnafPlaying && fnafOverlay.requestFullscreen) {
            fnafOverlay.requestFullscreen().catch(() => {});
        }
    }, 120);
}

function finishFnafVideo() {
    fnafPlaying = false;
    fnafVideo.pause();
    fnafVideo.currentTime = 0;
    fnafOverlay.classList.add("hidden");
    fnafOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    window.removeEventListener("beforeunload", blockNavigation);
    clearInterval(fullscreenLockTimer);
    fullscreenLockTimer = null;

    if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
    }
}

soonCard.addEventListener("click", startFnafVideo);
fnafVideo.addEventListener("ended", finishFnafVideo);
fnafVideo.addEventListener("pause", () => {
    if (fnafPlaying) {
        fnafVideo.play().catch(() => {});
    }
});
fnafVideo.addEventListener("contextmenu", (event) => event.preventDefault());
fnafOverlay.addEventListener("click", () => {
    if (fnafPlaying) {
        keepFullscreenLocked();
        fnafVideo.play().catch(() => {});
    }
});
document.addEventListener("fullscreenchange", keepFullscreenLocked);

document.addEventListener("keydown", (event) => {
    if (fnafPlaying && (event.key === "Escape" || event.key === "Backspace" || event.key === "F11")) {
        event.preventDefault();
        event.stopPropagation();
    }
}, true);
