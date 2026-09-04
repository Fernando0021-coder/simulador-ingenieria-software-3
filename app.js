// Lógica del simulador — no depende de librerías externas.
(function () {
  const el = (id) => document.getElementById(id);

  const state = {
    mode: null,          // 'exam' | 'study'
    questions: [],        // array plano de preguntas seleccionadas
    current: 0,
    userAnswers: [],       // paralelo a questions: string | null
    revealed: [],          // solo modo estudio: bool por pregunta
    timeLimitSec: 0,
    timeLeft: 0,
    timerHandle: null,
    startedAt: null
  };

  function normalize(s) {
    return (s || "")
      .toString()
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita acentos
  }

  function buildSectionChecks() {
    const container = el("sectionChecks");
    container.innerHTML = "";
    EXAM_DATA.sections.forEach((sec) => {
      const label = document.createElement("label");
      label.className = "check";
      label.innerHTML = `<input type="checkbox" value="${sec.id}" checked>
        <span>${sec.name} <span style="color:var(--text-dim)">— ${sec.level} (${sec.questions.length} preg.)</span></span>`;
      container.appendChild(label);
    });
    el("metaSub").textContent =
      `${EXAM_DATA.meta.materia} · ${EXAM_DATA.meta.carrera} · Docente: ${EXAM_DATA.meta.docente}`;
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function collectSelectedQuestions() {
    const checked = Array.from(document.querySelectorAll("#sectionChecks input:checked")).map(i => i.value);
    let flat = [];
    EXAM_DATA.sections.filter(s => checked.includes(s.id)).forEach((sec) => {
      sec.questions.forEach((q, idx) => {
        flat.push({
          sectionId: sec.id,
          sectionName: sec.name,
          type: q.type || sec.type,
          numberInSection: idx + 1,
          text: q.text,
          options: q.options || null,
          answer: q.answer,
          accept: q.accept || null
        });
      });
    });
    if (el("shuffleChk").checked) flat = shuffleArray(flat);
    return flat;
  }

  function startSession(mode) {
    const questions = collectSelectedQuestions();
    if (questions.length === 0) {
      alert("Seleccioná al menos una sección para comenzar.");
      return;
    }
    state.mode = mode;
    state.questions = questions;
    state.current = 0;
    state.userAnswers = new Array(questions.length).fill(null);
    state.revealed = new Array(questions.length).fill(false);

    const minutes = parseInt(el("timeLimit").value, 10) || 0;
    state.timeLimitSec = minutes > 0 ? minutes * 60 : 0;
    state.timeLeft = state.timeLimitSec;
    state.startedAt = Date.now();

    show("screen-exam");
    el("finishBtn").classList.toggle("hidden", mode !== "exam");
    el("nextBtn").classList.toggle("hidden", mode === "exam" && false); // always show next in exam mode too
    el("submitStudyBtn").classList.toggle("hidden", mode !== "study");

    if (state.timeLimitSec > 0) {
      el("timer").classList.remove("hidden");
      startTimer();
    } else {
      el("timer").textContent = "";
    }

    renderQuestion();
  }

  function startTimer() {
    clearInterval(state.timerHandle);
    updateTimerDisplay();
    state.timerHandle = setInterval(() => {
      state.timeLeft--;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        clearInterval(state.timerHandle);
        finishExam(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(state.timeLeft / 60);
    const s = state.timeLeft % 60;
    const t = el("timer");
    t.textContent = `⏱ ${m}:${s.toString().padStart(2, "0")}`;
    t.classList.toggle("low", state.timeLeft <= 60);
  }

  function isCorrect(q, userAnswer) {
    if (userAnswer == null || userAnswer === "") return false;
    if (q.type === "fill") {
      const norm = normalize(userAnswer);
      const candidates = [q.answer, ...(q.accept || [])].map(normalize);
      return candidates.some(c => c === norm || (c.length > 3 && norm.includes(c)));
    }
    return normalize(userAnswer) === normalize(q.answer);
  }

  function renderQuestion() {
    const q = state.questions[state.current];
    const total = state.questions.length;

    el("qCounter").textContent = `Pregunta ${state.current + 1} de ${total}`;
    el("progressFill").style.width = `${((state.current) / total) * 100}%`;
    el("qSectionLabel").textContent = `${q.sectionName} · pregunta ${q.numberInSection}`;
    el("qText").textContent = q.text;

    const body = el("qBody");
    body.innerHTML = "";
    const userAns = state.userAnswers[state.current];
    const revealed = state.mode === "study" && state.revealed[state.current];

    if (q.type === "vf") {
      const wrap = document.createElement("div");
      wrap.className = "vf-row";
      ["V", "F"].forEach((val) => {
        const optDiv = document.createElement("label");
        optDiv.className = "opt";
        if (userAns === val) optDiv.classList.add("selected");
        if (revealed) {
          if (val === q.answer) optDiv.classList.add("correct");
          else if (val === userAns) optDiv.classList.add("incorrect");
        }
        optDiv.innerHTML = `<input type="radio" name="ans" value="${val}" ${userAns === val ? "checked" : ""} ${revealed ? "disabled" : ""}>
          <span>${val === "V" ? "Verdadero" : "Falso"}</span>`;
        optDiv.querySelector("input").addEventListener("change", () => selectAnswer(val));
        wrap.appendChild(optDiv);
      });
      body.appendChild(wrap);
    } else if (q.type === "mc") {
      Object.entries(q.options).forEach(([letter, text]) => {
        const optDiv = document.createElement("label");
        optDiv.className = "opt";
        if (userAns === letter) optDiv.classList.add("selected");
        if (revealed) {
          if (letter === q.answer) optDiv.classList.add("correct");
          else if (letter === userAns) optDiv.classList.add("incorrect");
        }
        optDiv.innerHTML = `<input type="radio" name="ans" value="${letter}" ${userAns === letter ? "checked" : ""} ${revealed ? "disabled" : ""}>
          <span class="opt-letter">${letter})</span><span>${text}</span>`;
        optDiv.querySelector("input").addEventListener("change", () => selectAnswer(letter));
        body.appendChild(optDiv);
      });
    } else if (q.type === "fill") {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Escribí tu respuesta...";
      input.value = userAns || "";
      input.disabled = revealed;
      input.addEventListener("input", () => { state.userAnswers[state.current] = input.value; });
      body.appendChild(input);
    }

    const fb = el("qFeedback");
    fb.innerHTML = "";
    if (revealed) {
      const correct = isCorrect(q, userAns);
      const div = document.createElement("div");
      div.className = "feedback " + (correct ? "good" : "bad");
      const answerDisplay = q.type === "mc" ? `${q.answer}) ${q.options[q.answer]}` : (q.type === "vf" ? (q.answer === "V" ? "Verdadero" : "Falso") : q.answer);
      div.innerHTML = correct
        ? `✅ <b>¡Correcto!</b>`
        : `❌ <b>Incorrecto.</b> Respuesta correcta: <b>${answerDisplay}</b>`;
      fb.appendChild(div);
    }

    el("prevBtn").disabled = state.current === 0;
    const isLast = state.current === total - 1;
    el("nextBtn").classList.toggle("hidden", isLast);
    if (state.mode === "exam") {
      el("finishBtn").classList.toggle("hidden", !isLast);
    }
    if (state.mode === "study") {
      el("submitStudyBtn").classList.toggle("hidden", revealed);
      el("nextBtn").classList.toggle("hidden", !revealed || isLast);
      el("finishBtn").classList.toggle("hidden", !(revealed && isLast));
    }
  }

  function selectAnswer(val) {
    state.userAnswers[state.current] = val;
    if (state.mode === "exam") {
      // en modo examen no hacemos nada más, solo guardamos
    }
  }

  function goNext() {
    if (state.current < state.questions.length - 1) {
      state.current++;
      renderQuestion();
    }
  }
  function goPrev() {
    if (state.current > 0) {
      state.current--;
      renderQuestion();
    }
  }

  function submitStudyAnswer() {
    state.revealed[state.current] = true;
    renderQuestion();
  }

  function finishExam(timedOut) {
    clearInterval(state.timerHandle);
    show("screen-results");
    renderResults(timedOut);
  }

  function renderResults(timedOut) {
    const total = state.questions.length;
    let correctCount = 0;
    const bySection = {};

    state.questions.forEach((q, i) => {
      const ok = isCorrect(q, state.userAnswers[i]);
      if (ok) correctCount++;
      if (!bySection[q.sectionId]) bySection[q.sectionId] = { name: q.sectionName, total: 0, correct: 0 };
      bySection[q.sectionId].total++;
      if (ok) bySection[q.sectionId].correct++;
    });

    const pct = Math.round((correctCount / total) * 100);
    const scoreEl = el("scoreNum");
    scoreEl.textContent = `${pct}%`;
    scoreEl.className = "score-num " + (pct >= 80 ? "good" : pct >= 60 ? "mid" : "bad");
    el("scoreSub").textContent = `${correctCount} de ${total} correctas` + (timedOut ? " · ⏱ tiempo agotado" : "");

    const secWrap = el("sectionScores");
    secWrap.innerHTML = "";
    Object.values(bySection).forEach((s) => {
      const row = document.createElement("div");
      row.className = "section-score";
      const p = Math.round((s.correct / s.total) * 100);
      row.innerHTML = `<span>${s.name}</span><span><b>${s.correct}/${s.total}</b> (${p}%)</span>`;
      secWrap.appendChild(row);
    });

    const body = el("reviewBody");
    body.innerHTML = "";
    state.questions.forEach((q, i) => {
      const userAns = state.userAnswers[i];
      const ok = isCorrect(q, userAns);
      const tr = document.createElement("tr");
      const userDisplay = userAns == null || userAns === ""
        ? "(sin responder)"
        : (q.type === "mc" ? `${userAns}) ${q.options[userAns] || ""}` : (q.type === "vf" ? (userAns === "V" ? "Verdadero" : "Falso") : userAns));
      const correctDisplay = q.type === "mc" ? `${q.answer}) ${q.options[q.answer]}` : (q.type === "vf" ? (q.answer === "V" ? "Verdadero" : "Falso") : q.answer);
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td style="max-width:320px">${q.text}</td>
        <td>${userDisplay}</td>
        <td>${correctDisplay}</td>
        <td>${ok ? '<span class="tag ok">OK</span>' : '<span class="tag no">X</span>'}</td>
      `;
      body.appendChild(tr);
    });
  }

  function show(screenId) {
    ["screen-home", "screen-exam", "screen-results"].forEach((id) => {
      el(id).classList.toggle("hidden", id !== screenId);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function init() {
    buildSectionChecks();

    el("startExamBtn").addEventListener("click", () => startSession("exam"));
    el("startStudyBtn").addEventListener("click", () => startSession("study"));
    el("prevBtn").addEventListener("click", goPrev);
    el("nextBtn").addEventListener("click", goNext);
    el("submitStudyBtn").addEventListener("click", submitStudyAnswer);
    el("finishBtn").addEventListener("click", () => finishExam(false));
    el("retryBtn").addEventListener("click", () => startSession(state.mode));
    el("homeBtn").addEventListener("click", () => { clearInterval(state.timerHandle); show("screen-home"); });

    show("screen-home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
