(() => {
  "use strict";

  const { QUESTIONS = [], ANIMALS = {} } = window.NA_DATA || {};
  const CONFIG = window.NA_EVENT_CONFIG || {};
  const keys = Object.keys(ANIMALS).filter(key => key !== "unicorn");
  const $ = id => document.getElementById(id);
  const state = { index: 0, answers: [], result: null };

  function show(id) {
    for (const section of ["home", "quiz", "result"]) $(section).classList.toggle("hidden", section !== id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function start() {
    if (!QUESTIONS.length || !keys.length) {
      alert("Quiz questions are unavailable. Please try again later.");
      return;
    }
    state.index = 0;
    state.answers = [];
    state.result = null;
    show("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const question = QUESTIONS[state.index];
    $("progress-text").textContent = `Question ${state.index + 1} of ${QUESTIONS.length}`;
    $("progress-fill").style.width = `${Math.round((state.index / QUESTIONS.length) * 100)}%`;
    $("question").textContent = question.text;
    $("back").hidden = state.index === 0;
    const answers = $("answers");
    answers.replaceChildren();
    question.answers.forEach((answer, answerIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer";
      button.textContent = answer.text;
      button.addEventListener("click", () => {
        state.answers[state.index] = answerIndex;
        state.answers.length = state.index + 1;
        if (state.index < QUESTIONS.length - 1) {
          state.index += 1;
          renderQuestion();
        } else {
          finish();
        }
      });
      answers.appendChild(button);
    });
  }

  function scoreAnswers() {
    const scores = Object.fromEntries(keys.map(key => [key, 0]));
    QUESTIONS.forEach((question, index) => {
      const selected = question.answers[state.answers[index]];
      for (const [key, weight] of Object.entries(selected?.w || {})) {
        if (Object.hasOwn(scores, key)) scores[key] += Number(weight) || 0;
      }
    });
    const ranked = keys.map(key => ({ key, score: scores[key] }))
      .sort((a, b) => b.score - a.score || keys.indexOf(a.key) - keys.indexOf(b.key));
    const positiveTotal = ranked.reduce((sum, row) => sum + Math.max(0, row.score), 0);
    const mix = ranked.map(row => ({
      animal: row.key,
      score: row.score,
      percent: Math.round(Math.max(0, row.score) / Math.max(1, positiveTotal) * 100)
    }));
    mix[0].percent += 100 - mix.reduce((sum, row) => sum + row.percent, 0);
    return {
      animal: ranked[0].key,
      runnerUp: ranked[1].score > 0 ? ranked[1].key : null,
      scores,
      mix
    };
  }

  function finish() {
    state.result = scoreAnswers();
    const key = state.result.animal;
    const animal = ANIMALS[key];
    $("animal-icon").src = `./icons/${key}.svg`;
    $("animal-icon").alt = `${key} icon`;
    $("animal-name").textContent = animal.title;
    $("core-truth").textContent = animal.coreTruth;
    $("strength").textContent = animal.strength;
    $("blind-spot").textContent = animal.blindSpot;
    $("next-move").textContent = animal.nextMove;
    $("best-match").textContent = state.result.runnerUp
      ? ANIMALS[state.result.runnerUp].title
      : "A mix of styles";
    const mix = $("mix");
    mix.replaceChildren();
    for (const item of state.result.mix) {
      const row = document.createElement("div");
      row.className = "mix-row";
      const label = document.createElement("span");
      label.textContent = ANIMALS[item.animal].title.split(" — ")[0];
      const bar = document.createElement("div");
      bar.className = "mix-track";
      const fill = document.createElement("div");
      fill.style.width = `${item.percent}%`;
      bar.appendChild(fill);
      const percent = document.createElement("strong");
      percent.textContent = `${item.percent}%`;
      row.append(label, bar, percent);
      mix.appendChild(row);
    }
    $("connect").classList.toggle("hidden", !CONFIG.formUrl);
    $("lead-panel").classList.add("hidden");
    $("lead-frame").removeAttribute("src");
    $("open-lead").hidden = false;
    show("result");
  }

  async function share() {
    if (!state.result) return;
    const animal = ANIMALS[state.result.animal];
    const text = `My Network Animal is ${animal.title}. ${animal.coreTruth} Take the quiz at ${location.href}`;
    try {
      if (navigator.share) await navigator.share({ title: "My Network Animal", text, url: location.href });
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        $("share").textContent = "Copied!";
        setTimeout(() => $("share").textContent = "Share result", 2000);
      }
    } catch (_) { /* User cancelled sharing. */ }
  }

  $("start").addEventListener("click", start);
  $("back").addEventListener("click", () => {
    if (state.index > 0) { state.index -= 1; renderQuestion(); }
  });
  $("retake").addEventListener("click", start);
  $("share").addEventListener("click", share);
  $("open-lead").addEventListener("click", () => {
    if (!CONFIG.formUrl) return;
    $("lead-link").href = CONFIG.formUrl;
    $("lead-frame").src = `${CONFIG.formUrl}?embedded=true`;
    $("lead-panel").classList.remove("hidden");
    $("open-lead").hidden = true;
  });
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch(error => console.warn("Offline install unavailable", error));
  }
})();
