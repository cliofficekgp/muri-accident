// ===== SPEED DATA from Loco Pilot data recorder =====
// Only the MURI yard portion: 01:36:13 (START) to 01:39:49 (STOP)
const SPEED_DATA = [
    // time, speed(kmph), distance(m), remark
    { t: "01:36:13", s: 0, d: 1, r: "START" },
    { t: "01:36:14", s: 1, d: 0 }, { t: "01:36:15", s: 1, d: 0 }, { t: "01:36:16", s: 1, d: 1 }, { t: "01:36:17", s: 2, d: 0 },
    { t: "01:36:18", s: 3, d: 1 }, { t: "01:36:19", s: 3, d: 1 }, { t: "01:36:20", s: 4, d: 1 }, { t: "01:36:21", s: 5, d: 1 },
    { t: "01:36:22", s: 6, d: 2 }, { t: "01:36:23", s: 6, d: 1 }, { t: "01:36:24", s: 7, d: 2 }, { t: "01:36:25", s: 8, d: 3 },
    { t: "01:36:26", s: 8, d: 2 }, { t: "01:36:27", s: 9, d: 2 }, { t: "01:36:28", s: 10, d: 3 }, { t: "01:36:29", s: 11, d: 3 },
    { t: "01:36:30", s: 11, d: 3 }, { t: "01:36:31", s: 12, d: 4 }, { t: "01:36:32", s: 13, d: 3 }, { t: "01:36:33", s: 14, d: 4 },
    { t: "01:36:34", s: 14, d: 4 }, { t: "01:36:35", s: 15, d: 4 }, { t: "01:36:36", s: 16, d: 4 }, { t: "01:36:37", s: 16, d: 5 },
    { t: "01:36:38", s: 16, d: 4 }, { t: "01:36:39", s: 17, d: 5 }, { t: "01:36:40", s: 17, d: 5 }, { t: "01:36:41", s: 17, d: 4 },
    { t: "01:36:42", s: 17, d: 5 }, { t: "01:36:43", s: 17, d: 5 }, { t: "01:36:44", s: 16, d: 4 }, { t: "01:36:45", s: 16, d: 5 },
    { t: "01:36:46", s: 16, d: 4 }, { t: "01:36:47", s: 16, d: 5 }, { t: "01:36:48", s: 16, d: 4 }, { t: "01:36:49", s: 15, d: 4 },
    { t: "01:36:50", s: 16, d: 5 }, { t: "01:36:51", s: 16, d: 4 },
    // Coasting begins
    { t: "01:36:52", s: 15, d: 4 }, { t: "01:36:53", s: 15, d: 5 }, { t: "01:36:54", s: 15, d: 4 }, { t: "01:36:55", s: 15, d: 4 },
    { t: "01:36:56", s: 15, d: 4 }, { t: "01:36:57", s: 15, d: 5 }, { t: "01:36:58", s: 15, d: 4 }, { t: "01:36:59", s: 15, d: 4 },
    { t: "01:37:00", s: 15, d: 4 }, { t: "01:37:01", s: 15, d: 4 }, { t: "01:37:02", s: 15, d: 4 }, { t: "01:37:03", s: 15, d: 4 },
    { t: "01:37:04", s: 15, d: 4 }, { t: "01:37:05", s: 14, d: 4 }, { t: "01:37:06", s: 14, d: 4 }, { t: "01:37:07", s: 14, d: 4 },
    { t: "01:37:08", s: 14, d: 4 }, { t: "01:37:09", s: 14, d: 4 }, { t: "01:37:10", s: 14, d: 4 }, { t: "01:37:11", s: 14, d: 4 },
    { t: "01:37:12", s: 14, d: 4 }, { t: "01:37:13", s: 14, d: 4 }, { t: "01:37:14", s: 14, d: 4 }, { t: "01:37:15", s: 14, d: 4 },
    { t: "01:37:16", s: 14, d: 4 }, { t: "01:37:17", s: 14, d: 4 }, { t: "01:37:18", s: 14, d: 4 }, { t: "01:37:19", s: 14, d: 4 },
    { t: "01:37:20", s: 14, d: 3 }, { t: "01:37:21", s: 14, d: 4 }, { t: "01:37:22", s: 14, d: 4 }, { t: "01:37:23", s: 14, d: 4 },
    { t: "01:37:24", s: 14, d: 4 }, { t: "01:37:25", s: 14, d: 3 }, { t: "01:37:26", s: 14, d: 4 }, { t: "01:37:27", s: 13, d: 4 },
    { t: "01:37:28", s: 13, d: 4 }, { t: "01:37:29", s: 13, d: 3 }, { t: "01:37:30", s: 13, d: 4 }, { t: "01:37:31", s: 13, d: 4 },
    { t: "01:37:32", s: 13, d: 3 }, { t: "01:37:33", s: 13, d: 4 }, { t: "01:37:34", s: 13, d: 4 }, { t: "01:37:35", s: 13, d: 3 },
    { t: "01:37:36", s: 13, d: 4 }, { t: "01:37:37", s: 13, d: 3 }, { t: "01:37:38", s: 13, d: 4 }, { t: "01:37:39", s: 13, d: 4 },
    { t: "01:37:40", s: 13, d: 3 }, { t: "01:37:41", s: 13, d: 3 }, { t: "01:37:42", s: 13, d: 4 }, { t: "01:37:43", s: 12, d: 3 },
    { t: "01:37:44", s: 12, d: 4 }, { t: "01:37:45", s: 12, d: 3 }, { t: "01:37:46", s: 12, d: 4 }, { t: "01:37:47", s: 12, d: 3 },
    { t: "01:37:48", s: 12, d: 3 }, { t: "01:37:49", s: 12, d: 4 }, { t: "01:37:50", s: 12, d: 3 }, { t: "01:37:51", s: 12, d: 3 },
    { t: "01:37:52", s: 12, d: 4 }, { t: "01:37:53", s: 12, d: 3 }, { t: "01:37:54", s: 12, d: 3 }, { t: "01:37:55", s: 12, d: 3 },
    { t: "01:37:56", s: 12, d: 4 }, { t: "01:37:57", s: 11, d: 3 }, { t: "01:37:58", s: 11, d: 3 }, { t: "01:37:59", s: 11, d: 3 },
    { t: "01:38:00", s: 11, d: 3 }, { t: "01:38:01", s: 11, d: 4 }, { t: "01:38:02", s: 11, d: 3 }, { t: "01:38:03", s: 11, d: 3 },
    { t: "01:38:04", s: 11, d: 3 }, { t: "01:38:05", s: 11, d: 3 }, { t: "01:38:06", s: 11, d: 3 }, { t: "01:38:07", s: 11, d: 3 },
    { t: "01:38:08", s: 11, d: 3 }, { t: "01:38:09", s: 11, d: 4 }, { t: "01:38:10", s: 11, d: 2 }, { t: "01:38:11", s: 11, d: 4 },
    { t: "01:38:12", s: 11, d: 2 }, { t: "01:38:13", s: 11, d: 3 }, { t: "01:38:14", s: 11, d: 3 }, { t: "01:38:15", s: 10, d: 3 },
    { t: "01:38:16", s: 10, d: 3 }, { t: "01:38:17", s: 10, d: 3 }, { t: "01:38:18", s: 10, d: 3 }, { t: "01:38:19", s: 10, d: 3 },
    { t: "01:38:20", s: 10, d: 3 }, { t: "01:38:21", s: 10, d: 2 }, { t: "01:38:22", s: 10, d: 3 }, { t: "01:38:23", s: 10, d: 3 },
    { t: "01:38:24", s: 10, d: 3 }, { t: "01:38:25", s: 10, d: 3 }, { t: "01:38:26", s: 10, d: 2 }, { t: "01:38:27", s: 10, d: 3 },
    // TE resumes
    { t: "01:38:28", s: 11, d: 3 }, { t: "01:38:29", s: 11, d: 3 }, { t: "01:38:30", s: 11, d: 3 }, { t: "01:38:31", s: 12, d: 4 },
    { t: "01:38:32", s: 12, d: 3 }, { t: "01:38:33", s: 13, d: 4 }, { t: "01:38:34", s: 13, d: 3 }, { t: "01:38:35", s: 14, d: 4 },
    { t: "01:38:36", s: 14, d: 4 }, { t: "01:38:37", s: 15, d: 4 }, { t: "01:38:38", s: 15, d: 4 }, { t: "01:38:39", s: 16, d: 5 },
    { t: "01:38:40", s: 16, d: 4 }, { t: "01:38:41", s: 16, d: 5 }, { t: "01:38:42", s: 17, d: 4 }, { t: "01:38:43", s: 17, d: 5 },
    { t: "01:38:44", s: 18, d: 5 }, { t: "01:38:45", s: 18, d: 5 }, { t: "01:38:46", s: 19, d: 5 }, { t: "01:38:47", s: 19, d: 5 },
    { t: "01:38:48", s: 20, d: 6 }, { t: "01:38:49", s: 20, d: 5 }, { t: "01:38:50", s: 21, d: 6 }, { t: "01:38:51", s: 21, d: 6 },
    { t: "01:38:52", s: 22, d: 6 }, { t: "01:38:53", s: 22, d: 6 },
    { t: "01:38:54", s: 22, d: 6, r: "Loco crossing derailment point" },
    { t: "01:38:55", s: 22, d: 6 }, { t: "01:38:56", s: 22, d: 7 }, { t: "01:38:57", s: 22, d: 6 }, { t: "01:38:58", s: 22, d: 6 },
    // Braking
    { t: "01:38:59", s: 21, d: 6 }, { t: "01:39:00", s: 20, d: 5 }, { t: "01:39:01", s: 19, d: 5 }, { t: "01:39:02", s: 18, d: 5 },
    { t: "01:39:03", s: 16, d: 5 },
    // TE again
    { t: "01:39:04", s: 15, d: 4 }, { t: "01:39:05", s: 14, d: 4 }, { t: "01:39:06", s: 14, d: 4 }, { t: "01:39:07", s: 14, d: 4 },
    { t: "01:39:08", s: 13, d: 4 }, { t: "01:39:09", s: 12, d: 3 }, { t: "01:39:10", s: 12, d: 3 }, { t: "01:39:11", s: 13, d: 4 },
    { t: "01:39:12", s: 12, d: 3, r: "DERAILMENT - Coach 3" },
    { t: "01:39:13", s: 11, d: 3 }, { t: "01:39:14", s: 11, d: 3 }, { t: "01:39:15", s: 11, d: 3 }, { t: "01:39:16", s: 11, d: 4 },
    { t: "01:39:17", s: 11, d: 3 }, { t: "01:39:18", s: 10, d: 3 }, { t: "01:39:19", s: 10, d: 3 }, { t: "01:39:20", s: 10, d: 2 },
    { t: "01:39:21", s: 10, d: 3 }, { t: "01:39:22", s: 9, d: 3 }, { t: "01:39:23", s: 9, d: 3 }, { t: "01:39:24", s: 9, d: 2 },
    { t: "01:39:25", s: 9, d: 3 }, { t: "01:39:26", s: 9, d: 2 }, { t: "01:39:27", s: 8, d: 2 }, { t: "01:39:28", s: 8, d: 3 },
    { t: "01:39:29", s: 8, d: 2 }, { t: "01:39:30", s: 8, d: 2 }, { t: "01:39:31", s: 8, d: 2 }, { t: "01:39:32", s: 7, d: 2 },
    { t: "01:39:33", s: 7, d: 2 }, { t: "01:39:34", s: 7, d: 2 }, { t: "01:39:35", s: 7, d: 2 }, { t: "01:39:36", s: 7, d: 2 },
    { t: "01:39:37", s: 6, d: 2 }, { t: "01:39:38", s: 6, d: 2 }, { t: "01:39:39", s: 6, d: 1 }, { t: "01:39:40", s: 6, d: 2 },
    { t: "01:39:41", s: 6, d: 2 }, { t: "01:39:42", s: 7, d: 2 }, { t: "01:39:43", s: 7, d: 2 }, { t: "01:39:44", s: 8, d: 2 },
    { t: "01:39:45", s: 7, d: 2 }, { t: "01:39:46", s: 7, d: 2 }, { t: "01:39:47", s: 6, d: 1 }, { t: "01:39:48", s: 5, d: 2 },
    { t: "01:39:49", s: 0, d: 0, r: "STOP" }
];

// ===== KEY EVENTS =====
const KEY_EVENTS = [
    { index: 0, label: "🟢 Train START from MURI", type: "start" },
    { index: 22, label: "Speed: 15 kmph | Throttle: TE", type: "info" },
    { index: 39, label: "⚡ Coasting begins — speed will drop", type: "coast" },
    { index: 135, label: "⚡ TE applied again — accelerating", type: "te" },
    { index: 161, label: "⚠️ LOCO crossing derailment point at 22 kmph", type: "warning" },
    { index: 166, label: "🔻 Braking: 22 → 15 kmph", type: "brake" },
    { index: 179, label: "🔴 DERAILMENT! Coach-3 rear trolley derailed at 12 kmph!", type: "danger" },
    { index: 216, label: "🛑 Train STOPPED — Total distance: 746m", type: "stop" }
];

// ===== THROTTLE PHASES =====
function getThrottle(idx) {
    if (idx <= 38) return "TE";        // 01:36:13 to 01:36:51
    if (idx <= 134) return "Coasting"; // 01:36:52 to 01:38:27
    if (idx <= 165) return "TE";       // 01:38:28 to 01:38:58
    if (idx <= 170) return "Braking";  // 01:38:59 to 01:39:03
    return "TE";                       // 01:39:04 to 01:39:49
}

function getStatus(idx) {
    if (idx === 0) return "STARTING";
    if (idx < 39) return "ACCELERATING";
    if (idx < 135) return "COASTING";
    if (idx < 161) return "ACCELERATING";
    if (idx <= 165) return "⚠️ LOCO AT DERAIL PT";
    if (idx <= 170) return "BRAKING";
    if (idx < 179) return "DECELERATING";
    if (idx === 179) return "🔴 DERAILMENT!";
    if (idx < 216) return "DRAGGING - STOPPING";
    return "🛑 STOPPED";
}

// ===== SLIDE NAVIGATION =====
const slides = document.querySelectorAll('.slide');
const navDots = document.getElementById('nav-dots');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
let currentSlide = 0;
let animationStarted = false;  // Declare early for goToSlide access

// Create nav dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    navDots.appendChild(dot);
});

function goToSlide(n) {
    if (n < 0 || n >= slides.length) return;
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    setTimeout(() => slides[currentSlide === n ? currentSlide : (currentSlide)].classList.remove('prev'), 600);

    const oldSlide = currentSlide;
    currentSlide = n;
    slides[currentSlide].classList.add('active');

    // Update dots
    navDots.querySelectorAll('.nav-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlide);
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Trigger slide-specific actions
    if (currentSlide === 3) drawMainGraph();
    if (currentSlide === 2 && !animationStarted) initAnimation();

    // Remove prev class from old slide after transition
    setTimeout(() => {
        if (oldSlide !== currentSlide) slides[oldSlide].classList.remove('prev');
    }, 700);
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});

// (SVG handles track rendering — no sleepers needed)

function getTrackPixelPos(d) {
    let x, y;
    if (d <= 478) {
        x = 40 + d * 1.5;
        y = 62;
    } else if (d <= 517) {
        let t = (d - 478) / 39;
        let smoothT = t * t * (3 - 2 * t);
        x = 40 + 478 * 1.5 + t * 39 * 1.5;
        y = 62 + smoothT * 40;
    } else if (d <= 554) {
        x = 40 + d * 1.5;
        y = 102;
    } else {
        let t = d - 554;
        let yOffset = 0, xOffset = 0;
        if (t < 50) {
            yOffset = 0.006 * t * t;
            xOffset = t * 1.5;
        } else {
            yOffset = 0.006 * 50 * 50 + 0.6 * (t - 50);
            xOffset = 50 * 1.5 + (t - 50) * 1.5 * 0.85;
        }
        x = 40 + 554 * 1.5 + xOffset;
        y = 102 + yOffset;
    }
    return { x, y };
}

function getTrackPosition(distance) {
    const p = getTrackPixelPos(distance);
    return {
        x: (p.x / 1200) * 100,
        y: (p.y / 380) * 100
    };
}

function drawTrack() {
    // Track paths are now pre-computed and embedded statically in the HTML SVG.
    // This function only handles dynamic marker positioning.

    // Dynamically position markers to match exactly 554m (PT 78 / Derailment point)
    const pt78Pos = getTrackPosition(554);
    const pt78Label = document.querySelector('.pt78-label');
    if (pt78Label) {
        pt78Label.style.left = pt78Pos.x + '%';
        pt78Label.style.top = pt78Pos.y + '%';
        pt78Label.style.transform = 'translate(-30px, -30px)';
    }
    const derailMarker = document.querySelector('.derailment-marker');
    if (derailMarker) {
        derailMarker.style.left = pt78Pos.x + '%';
        derailMarker.style.top = pt78Pos.y + '%';
    }
}

function createDistanceMarkers() {
    const container = document.getElementById('distance-markers');
    const marks = [0, 100, 200, 300, 400, 500, 600, 746];
    marks.forEach(m => {
        const marker = document.createElement('div');
        marker.className = 'dist-marker';
        const pos = getTrackPosition(m);
        marker.style.left = pos.x + '%';
        marker.style.top = pos.y + 10 + '%';
        marker.innerHTML = `<span>${m}m</span>`;
        container.appendChild(marker);
    });
}

// ===== ANIMATION ENGINE =====
let animFrameId = null;
let isPlaying = false;
let animIndex = 0;
let animSpeed = 1;
let lastTime = 0;
let accumulator = 0;
let totalDistanceCovered = 0;
let derailed = false;
let locoFlashed = false;
let stopped = false;

const hudTime = document.getElementById('hud-time');
const hudSpeed = document.getElementById('hud-speed');
const hudDistance = document.getElementById('hud-distance');
const hudThrottle = document.getElementById('hud-throttle');
const hudStatus = document.getElementById('hud-status');
const trainAssembly = document.getElementById('train-assembly');
const eventPopup = document.getElementById('event-popup');
const popupContent = document.getElementById('popup-content');
const progressFill = document.getElementById('progress-fill');
const yardContainer = document.getElementById('yard-container');
const coach3 = document.getElementById('coach-3');
const coupler4 = document.getElementById('coupler-4');

const btnPlay = document.getElementById('btn-play');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');

// Speed buttons
document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        animSpeed = parseInt(btn.dataset.speed);
    });
});

btnPlay.addEventListener('click', () => {
    if (stopped) resetAnimation();
    startAnimation();
});

btnPause.addEventListener('click', pauseAnimation);
btnReset.addEventListener('click', resetAnimation);

function initAnimation() {
    animationStarted = true;
    drawTrack();
    createDistanceMarkers();
    resetAnimation();
    drawMiniGraph();
}

function startAnimation() {
    if (isPlaying) return;
    isPlaying = true;
    btnPlay.style.display = 'none';
    btnPause.style.display = '';
    lastTime = performance.now();
    animFrameId = requestAnimationFrame(animLoop);
}

function pauseAnimation() {
    isPlaying = false;
    btnPlay.style.display = '';
    btnPause.style.display = 'none';
    if (animFrameId) cancelAnimationFrame(animFrameId);
}

function resetAnimation() {
    pauseAnimation();
    animIndex = 0;
    totalDistanceCovered = 0;
    derailed = false;
    locoFlashed = false;
    stopped = false;
    accumulator = 0;

    // Reset visuals
    trainAssembly.style.left = '0';
    trainAssembly.style.top = '0';
    updateTrainPosition(0);

    // Reset visuals
    coach3.classList.remove('derailed', 'derailed-final');
    coupler4.classList.remove('broken', 'parting');
    coupler4.style.width = '';
    eventPopup.classList.remove('visible', 'danger');
    yardContainer.classList.remove('flash');

    const locoFlash = document.getElementById('loco-speed-flash');
    if (locoFlash) locoFlash.classList.remove('visible');
    const coachFlash = document.getElementById('coach-speed-flash');
    if (coachFlash) coachFlash.classList.remove('visible');

    updateHUD(0);
    progressFill.style.width = '0%';
    drawMiniGraph(0);
}

function animLoop(timestamp) {
    if (!isPlaying) return;

    const dt = timestamp - lastTime;
    lastTime = timestamp;
    accumulator += dt;

    const interval = 1000 / animSpeed; // ms per data point

    while (accumulator >= interval && animIndex < SPEED_DATA.length - 1) {
        accumulator -= interval;
        animIndex++;
        processFrame(animIndex);
    }

    if (animIndex >= SPEED_DATA.length - 1) {
        processFrame(SPEED_DATA.length - 1);
        pauseAnimation();
        stopped = true;
        return;
    }

    animFrameId = requestAnimationFrame(animLoop);
}

function processFrame(idx) {
    const data = SPEED_DATA[idx];
    totalDistanceCovered += data.d;

    updateHUD(idx);
    updateTrainPosition(idx);
    checkEvents(idx);
    updateProgress(idx);
    drawMiniGraph(idx);

    // Loco crosses PT 78 (554m)
    if (totalDistanceCovered >= 554 && !locoFlashed) {
        locoFlashed = true;
        const locoFlash = document.getElementById('loco-speed-flash');
        if (locoFlash) {
            locoFlash.textContent = data.s + ' kmph';
            locoFlash.classList.add('visible');
            setTimeout(() => locoFlash.classList.remove('visible'), 3000);
        }
    }

    // Coach 3 reaches PT 78 (offset -78, so Loco is at 554 + 78 = 632m)
    if (totalDistanceCovered >= 632 && !derailed) {
        triggerDerailment(12);
    }
}

function updateHUD(idx) {
    const data = SPEED_DATA[idx];
    hudTime.textContent = data.t;
    hudSpeed.innerHTML = `${data.s} <small>kmph</small>`;
    hudDistance.innerHTML = `${totalDistanceCovered} <small>m</small>`;

    const throttle = getThrottle(idx);
    const throttleClass = throttle === 'Coasting' ? 'coast' : throttle === 'Braking' ? 'brake' : 'te';
    hudThrottle.innerHTML = `<span class="throttle-badge ${throttleClass}">${throttle}</span>`;

    const status = getStatus(idx);
    hudStatus.textContent = status;

    // Color coding
    if (idx >= 179) {
        hudSpeed.style.color = '#ef4444';
        hudStatus.style.color = '#ef4444';
    } else if (idx >= 161) {
        hudSpeed.style.color = '#f59e0b';
        hudStatus.style.color = '#f59e0b';
    } else {
        hudSpeed.style.color = '#06b6d4';
        hudStatus.style.color = '#06b6d4';
    }
}

function getAngle(d) {
    const p1 = getTrackPosition(Math.max(0, d - 1));
    const p2 = getTrackPosition(Math.min(746, d + 1));
    const w = yardContainer.clientWidth || 1000;
    const h = yardContainer.clientHeight || 350;
    const dx = (p2.x - p1.x) * w / 100;
    const dy = (p2.y - p1.y) * h / 100;
    return Math.atan2(dy, dx) * 180 / Math.PI;
}

function updateTrainPosition(idx) {
    const offsets = [
        { id: 'loco', offset: 0, w: 32 },
        { id: 'coach-1', offset: -26, w: 34 },
        { id: 'coach-2', offset: -52, w: 34 },
        { id: 'coach-3', offset: -78, w: 34 },
        { id: 'coach-4', offset: -104, w: 34 }
    ];

    offsets.forEach(unit => {
        let d = totalDistanceCovered + unit.offset;

        // Handle coupler parting for coach-4 when derailed
        if (derailed && unit.id === 'coach-4') {
            d -= 9; // 9m apart
        }

        if (d < 0) d = 0;

        const pos = getTrackPosition(d);
        const angle = getAngle(d);

        const el = document.getElementById(unit.id);
        if (el) {
            el.style.left = `calc(${pos.x}% - ${unit.w / 2}px)`;
            el.style.top = `calc(${pos.y}% - 10px)`; // height is 20px

            if (el.classList.contains('derailed-final')) {
                el.style.transform = `rotate(${angle + 10}deg) translateY(8px)`;
            } else if (!el.classList.contains('derailed')) {
                el.style.transform = `rotate(${angle}deg)`;
            }
        }
    });

    // Hide original couplers as we are doing independent positioning
    document.querySelectorAll('.coupler').forEach(c => c.style.display = 'none');
}

function checkEvents(idx) {
    const event = KEY_EVENTS.find(e => e.index === idx);
    if (event) {
        showPopup(event.label, event.type);
    }
}

function showPopup(text, type) {
    popupContent.textContent = text;
    eventPopup.classList.remove('danger');
    if (type === 'danger') eventPopup.classList.add('danger');
    eventPopup.classList.add('visible');

    clearTimeout(eventPopup._timer);
    eventPopup._timer = setTimeout(() => {
        eventPopup.classList.remove('visible');
    }, type === 'danger' ? 5000 : 3000);
}

function triggerDerailment(speed) {
    derailed = true;

    // Flash the yard
    yardContainer.classList.add('flash');
    setTimeout(() => yardContainer.classList.remove('flash'), 600);

    // Coach 3 derails
    coach3.classList.add('derailed');

    const coachFlash = document.getElementById('coach-speed-flash');
    if (coachFlash) {
        coachFlash.textContent = (speed !== undefined ? speed : '12') + ' kmph';
        coachFlash.classList.add('visible');
    }

    // After some frames, show final state
    setTimeout(() => {
        coach3.classList.remove('derailed');
        coach3.classList.add('derailed-final');
        coupler4.classList.add('parting');
    }, 3000);
}

function updateProgress(idx) {
    const pct = (idx / (SPEED_DATA.length - 1)) * 100;
    progressFill.style.width = pct + '%';
}

// ===== MINI SPEED GRAPH =====
function drawMiniGraph(currentIdx = 0) {
    const canvas = document.getElementById('speed-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 0.5;
    for (let y = 0; y <= h; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }

    // Speed line
    ctx.beginPath();
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 1.5;
    const len = SPEED_DATA.length;
    for (let i = 0; i < len; i++) {
        const x = (i / (len - 1)) * w;
        const y = h - (SPEED_DATA[i].s / 25) * (h - 10) - 5;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Current position indicator
    if (currentIdx > 0) {
        const cx = (currentIdx / (len - 1)) * w;
        const cy = h - (SPEED_DATA[currentIdx].s / 25) * (h - 10) - 5;

        // Filled area up to current
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let i = 0; i <= currentIdx; i++) {
            const x = (i / (len - 1)) * w;
            const y = h - (SPEED_DATA[i].s / 25) * (h - 10) - 5;
            ctx.lineTo(x, y);
        }
        ctx.lineTo(cx, h);
        ctx.closePath();
        ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.fill();

        // Cursor dot
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Derailment line
    const derailIdx = 179;
    const dx = (derailIdx / (len - 1)) * w;
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(dx, 0);
    ctx.lineTo(dx, h);
    ctx.stroke();
    ctx.setLineDash([]);
}

// ===== MAIN SPEED-TIME GRAPH =====
function drawMainGraph() {
    const canvas = document.getElementById('main-speed-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const padding = { top: 30, right: 30, bottom: 60, left: 60 };
    const graphW = w - padding.left - padding.right;
    const graphH = h - padding.top - padding.bottom;

    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.lineWidth = 0.5;
    // Horizontal grid (speed)
    for (let s = 0; s <= 25; s += 5) {
        const y = padding.top + graphH - (s / 25) * graphH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '11px JetBrains Mono, monospace';
        ctx.textAlign = 'right';
        ctx.fillText(s + ' kmph', padding.left - 8, y + 4);
    }

    // Vertical grid (time - every 30 seconds)
    const len = SPEED_DATA.length;
    const timeLabels = [0, 30, 60, 90, 120, 150, 180, 216];
    timeLabels.forEach(sec => {
        if (sec >= len) return;
        const x = padding.left + (sec / (len - 1)) * graphW;
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, h - padding.bottom);
        ctx.stroke();

        if (sec < len) {
            ctx.fillStyle = '#64748b';
            ctx.font = '10px JetBrains Mono, monospace';
            ctx.textAlign = 'center';
            ctx.fillText(SPEED_DATA[Math.min(sec, len - 1)].t, x, h - padding.bottom + 18);
        }
    });

    // Speed curve - gradient fill
    ctx.beginPath();
    ctx.moveTo(padding.left, h - padding.bottom);
    for (let i = 0; i < len; i++) {
        const x = padding.left + (i / (len - 1)) * graphW;
        const y = padding.top + graphH - (SPEED_DATA[i].s / 25) * graphH;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(padding.left + graphW, h - padding.bottom);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.02)');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Speed line
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2.5;
    for (let i = 0; i < len; i++) {
        const x = padding.left + (i / (len - 1)) * graphW;
        const y = padding.top + graphH - (SPEED_DATA[i].s / 25) * graphH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Annotations
    function drawAnnotation(idx, text, color, offsetY = -20) {
        const x = padding.left + (idx / (len - 1)) * graphW;
        const y = padding.top + graphH - (SPEED_DATA[idx].s / 25) * graphH;

        // Dot
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Line
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + offsetY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Label
        ctx.fillStyle = color;
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(text, x, y + offsetY - 6);
    }

    // Start
    drawAnnotation(0, '🟢 START 0 kmph', '#22c55e', -35);

    // Loco at derailment point
    drawAnnotation(161, '⚠️ LOCO at derail pt: 22 kmph', '#f59e0b', -50);

    // Derailment
    drawAnnotation(179, '🔴 DERAILMENT: 12 kmph', '#ef4444', -35);

    // Stop
    drawAnnotation(SPEED_DATA.length - 1, '🛑 STOP', '#f59e0b', -35);

    // Derailment vertical line
    const derailX = padding.left + (179 / (len - 1)) * graphW;
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(derailX, padding.top);
    ctx.lineTo(derailX, h - padding.bottom);
    ctx.stroke();
    ctx.setLineDash([]);

    // Title
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Speed Profile — Train 08895 at MURI Yard (01:36:13 to 01:39:49)', w / 2, 20);

    // X-axis label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Time (HH:MM:SS)', w / 2, h - 10);

    // Y-axis label
    ctx.save();
    ctx.translate(15, h / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Speed (kmph)', 0, 0);
    ctx.restore();

    // Phase regions
    const phases = [
        { start: 0, end: 38, label: 'TE', color: 'rgba(34, 197, 94, 0.06)' },
        { start: 39, end: 134, label: 'Coasting', color: 'rgba(245, 158, 11, 0.06)' },
        { start: 135, end: 165, label: 'TE', color: 'rgba(34, 197, 94, 0.06)' },
        { start: 166, end: 170, label: 'Braking', color: 'rgba(239, 68, 68, 0.06)' },
        { start: 171, end: len - 1, label: 'Stopping', color: 'rgba(168, 85, 247, 0.06)' }
    ];

    phases.forEach(p => {
        const x1 = padding.left + (p.start / (len - 1)) * graphW;
        const x2 = padding.left + (p.end / (len - 1)) * graphW;
        ctx.fillStyle = p.color;
        ctx.fillRect(x1, padding.top, x2 - x1, graphH);

        // Phase label at bottom
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.font = '9px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(p.label, (x1 + x2) / 2, h - padding.bottom + 35);
    });
}

// ===== COPY IMAGES for local use =====
// We'll try to load images from relative paths; the HTML references are handled
// Let's copy images to the presentation folder

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
    // Set initial state
    goToSlide(0);
});

// Also handle window resize for responsive distance markers
window.addEventListener('resize', () => {
    const container = document.getElementById('distance-markers');
    if (container) {
        container.innerHTML = '';
        createDistanceMarkers();
    }
});
