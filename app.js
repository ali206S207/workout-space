const defaultPlan = [
  {
    id: "push",
    name: "Push",
    title: "صدر، كتف، ترايسبس",
    exercises: [
      ["Barbell Bench Press", "4 مجموعات - 6 إلى 10 عدات"],
      ["Incline Dumbbell Press", "3 مجموعات - 8 إلى 12 عدة"],
      ["Seated Shoulder Press", "3 مجموعات - 8 إلى 12 عدة"],
      ["Cable Fly", "3 مجموعات - 12 إلى 15 عدة"],
      ["Lateral Raise", "4 مجموعات - 12 إلى 20 عدة"],
      ["Triceps Rope Pushdown", "3 مجموعات - 10 إلى 15 عدة"]
    ]
  },
  {
    id: "pull",
    name: "Pull",
    title: "ظهر، بايسبس، خلفي كتف",
    exercises: [
      ["Lat Pulldown", "4 مجموعات - 8 إلى 12 عدة"],
      ["Barbell Row", "4 مجموعات - 6 إلى 10 عدات"],
      ["Seated Cable Row", "3 مجموعات - 10 إلى 12 عدة"],
      ["Face Pull", "3 مجموعات - 12 إلى 20 عدة"],
      ["Dumbbell Curl", "3 مجموعات - 8 إلى 12 عدة"],
      ["Hammer Curl", "3 مجموعات - 10 إلى 14 عدة"]
    ]
  },
  {
    id: "legs",
    name: "Legs",
    title: "رجل، سمانة، كور",
    exercises: [
      ["Back Squat", "4 مجموعات - 6 إلى 10 عدات"],
      ["Romanian Deadlift", "3 مجموعات - 8 إلى 12 عدة"],
      ["Leg Press", "3 مجموعات - 10 إلى 15 عدة"],
      ["Leg Curl", "3 مجموعات - 10 إلى 15 عدة"],
      ["Standing Calf Raise", "4 مجموعات - 12 إلى 20 عدة"],
      ["Cable Crunch", "3 مجموعات - 12 إلى 18 عدة"]
    ]
  }
];

const exerciseLibrary = [
  { name: "Barbell Bench Press", muscle: "chest", target: "4 مجموعات - 6 إلى 10 عدات" },
  { name: "Incline Dumbbell Press", muscle: "chest", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Machine Chest Press", muscle: "chest", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Cable Fly", muscle: "chest", target: "3 مجموعات - 12 إلى 15 عدة" },
  { name: "Pec Deck", muscle: "chest", target: "3 مجموعات - 12 إلى 15 عدة" },
  { name: "Dips", muscle: "chest", target: "3 مجموعات - 6 إلى 12 عدة" },
  { name: "Push Up", muscle: "chest", target: "3 مجموعات - حتى الاقتراب من الفشل" },
  { name: "Lat Pulldown", muscle: "back", target: "4 مجموعات - 8 إلى 12 عدة" },
  { name: "Pull Up", muscle: "back", target: "4 مجموعات - 6 إلى 10 عدات" },
  { name: "Barbell Row", muscle: "back", target: "4 مجموعات - 6 إلى 10 عدات" },
  { name: "Seated Cable Row", muscle: "back", target: "3 مجموعات - 10 إلى 12 عدة" },
  { name: "Single Arm Dumbbell Row", muscle: "back", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Chest Supported Row", muscle: "back", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Straight Arm Pulldown", muscle: "back", target: "3 مجموعات - 12 إلى 15 عدة" },
  { name: "Seated Shoulder Press", muscle: "shoulders", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Dumbbell Shoulder Press", muscle: "shoulders", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Lateral Raise", muscle: "shoulders", target: "4 مجموعات - 12 إلى 20 عدة" },
  { name: "Rear Delt Fly", muscle: "shoulders", target: "3 مجموعات - 12 إلى 20 عدة" },
  { name: "Face Pull", muscle: "shoulders", target: "3 مجموعات - 12 إلى 20 عدة" },
  { name: "Cable Lateral Raise", muscle: "shoulders", target: "3 مجموعات - 12 إلى 20 عدة" },
  { name: "Smith Machine Shoulder Press", muscle: "shoulders", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Triceps Rope Pushdown", muscle: "arms", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Overhead Triceps Extension", muscle: "arms", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Dumbbell Curl", muscle: "arms", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Hammer Curl", muscle: "arms", target: "3 مجموعات - 10 إلى 14 عدة" },
  { name: "Preacher Curl", muscle: "arms", target: "3 مجموعات - 10 إلى 12 عدة" },
  { name: "Cable Curl", muscle: "arms", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Skull Crusher", muscle: "arms", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Back Squat", muscle: "legs", target: "4 مجموعات - 6 إلى 10 عدات" },
  { name: "Leg Press", muscle: "legs", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Romanian Deadlift", muscle: "legs", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Leg Curl", muscle: "legs", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Leg Extension", muscle: "legs", target: "3 مجموعات - 10 إلى 15 عدة" },
  { name: "Standing Calf Raise", muscle: "legs", target: "4 مجموعات - 12 إلى 20 عدة" },
  { name: "Walking Lunge", muscle: "legs", target: "3 مجموعات - 10 إلى 14 عدة لكل رجل" },
  { name: "Hip Thrust", muscle: "legs", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Seated Calf Raise", muscle: "legs", target: "4 مجموعات - 12 إلى 20 عدة" },
  { name: "Cable Crunch", muscle: "core", target: "3 مجموعات - 12 إلى 18 عدة" },
  { name: "Plank", muscle: "core", target: "3 مجموعات - 45 إلى 90 ثانية" },
  { name: "Ab Wheel Rollout", muscle: "core", target: "3 مجموعات - 8 إلى 12 عدة" },
  { name: "Hanging Knee Raise", muscle: "core", target: "3 مجموعات - 10 إلى 15 عدة" }
];

const state = {
  selectedDay: localStorage.getItem("awsDay") || "push",
  activeSession: null,
  sessionTimer: null,
  sessionStart: null,
  restTimer: null,
  restSeconds: 120,
  restRemaining: 120,
  restPaused: false,
  plan: JSON.parse(localStorage.getItem("awsPlan") || "null") || structuredClone(defaultPlan),
  records: JSON.parse(localStorage.getItem("awsRecords") || "[]")
};

const SUPABASE_URL = "https://ublurrzfsxikexfhqbns.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__eHTaR5LSjzgwhCsjp2h2Q_qH23zoNe";
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let deferredInstallPrompt = null;
let activeKeypadInput = null;
let currentUser = null;
let cloudSaveTimer = null;
let cloudReady = false;

function saveRecords() {
  localStorage.setItem("awsRecords", JSON.stringify(state.records));
  scheduleCloudSave();
}

function savePlan() {
  localStorage.setItem("awsPlan", JSON.stringify(state.plan));
  scheduleCloudSave();
}

function formatClock(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return h === "00" ? `${m}:${s}` : `${h}:${m}:${s}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function updatePwaStatus(message) {
  const status = $("#pwaStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.add("show");
  clearTimeout(updatePwaStatus.timer);
  updatePwaStatus.timer = setTimeout(() => status.classList.remove("show"), 2600);
}

function setupPwa() {
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js")
      .then(() => updatePwaStatus("جاهز للعمل أوفلاين"))
      .catch(() => updatePwaStatus("تعذر تجهيز الأوفلاين"));
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("#installApp")?.classList.remove("hidden");
  });

  $("#installApp")?.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      showToast("افتح التطبيق من localhost عشان يظهر التثبيت.");
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    $("#installApp")?.classList.add("hidden");
  });

  window.addEventListener("appinstalled", () => {
    $("#installApp")?.classList.add("hidden");
    showToast("اتثبت التطبيق بنجاح.");
  });
}

function inputLabelForKeypad(input) {
  const label = input.closest("label");
  return label ? label.childNodes[0].textContent.trim() : "إدخال رقم";
}

function openKeypad(input) {
  activeKeypadInput = input;
  $("#keypadLabel").textContent = inputLabelForKeypad(input);
  $("#keypadValue").textContent = input.value || "0";
  $("#numberKeypad").classList.remove("hidden");
}

function closeKeypad() {
  activeKeypadInput = null;
  $("#numberKeypad").classList.add("hidden");
}

function setKeypadValue(value) {
  if (!activeKeypadInput) return;
  activeKeypadInput.value = value;
  $("#keypadValue").textContent = value || "0";
  activeKeypadInput.dispatchEvent(new Event("input", { bubbles: true }));
}

function handleKeypadKey(key) {
  if (!activeKeypadInput) return;
  const mode = activeKeypadInput.dataset.keypad || "decimal";
  const current = activeKeypadInput.value || "";

  if (key === "done") {
    closeKeypad();
    return;
  }
  if (key === "clear") {
    setKeypadValue("");
    return;
  }
  if (key === "back") {
    setKeypadValue(current.slice(0, -1));
    return;
  }
  if (key === "." && (mode !== "decimal" || current.includes("."))) return;
  setKeypadValue(`${current}${key}`);
}

function setupCustomKeypad() {
  document.addEventListener("click", (event) => {
    const keypadInput = event.target.closest("[data-keypad]");
    const keypadKey = event.target.closest("#numberKeypad [data-key]");
    const insideKeypad = event.target.closest("#numberKeypad");

    if (keypadKey) {
      handleKeypadKey(keypadKey.dataset.key);
      return;
    }
    if (keypadInput) {
      openKeypad(keypadInput);
      return;
    }
    if (!insideKeypad && activeKeypadInput) closeKeypad();
  });
}

function renderAll() {
  renderPlanPreview();
  renderDayTabs();
  renderExerciseLibrary();
  state.activeSession = null;
  renderExercises();
  renderStats();
  renderHistory();
  updateRestClock();
}

function localPayload() {
  return {
    user_id: currentUser?.id,
    plan: state.plan,
    records: state.records
  };
}

function setCloudStatus(message) {
  $("#cloudStatus").textContent = message;
  $("#authState").textContent = currentUser ? "Cloud active" : "Offline local";
  $("#authEmail").textContent = currentUser?.email || "سجل دخولك عشان بياناتك تشتغل من أي جهاز";
}

function renderAuthState() {
  const signedIn = Boolean(currentUser);
  $("#signOutButton").classList.toggle("hidden", !signedIn);
  $("#authForm").classList.toggle("signed-in", signedIn);
  $("#authEmailInput").disabled = signedIn;
  $("#authPasswordInput").disabled = signedIn;
  setCloudStatus(signedIn ? `متصل بحساب ${currentUser.email}` : "بياناتك محفوظة محليًا على الجهاز ده.");
}

function scheduleCloudSave() {
  if (!currentUser || !cloudReady) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(syncCloudData, 650);
}

async function syncCloudData() {
  if (!supabaseClient || !currentUser) return;
  const { error } = await supabaseClient
    .from("app_state")
    .upsert(localPayload(), { onConflict: "user_id" });
  if (error) {
    showToast("المزامنة فشلت. اتأكد إن جدول Supabase معمول.");
    return;
  }
  setCloudStatus(`آخر مزامنة تمت الآن: ${currentUser.email}`);
}

async function loadCloudData() {
  if (!supabaseClient || !currentUser) return;
  const { data, error } = await supabaseClient
    .from("app_state")
    .select("plan, records")
    .eq("user_id", currentUser.id)
    .maybeSingle();

  if (error) {
    cloudReady = false;
    showToast("اعمل Run لملف supabase-schema.sql الأول.");
    setCloudStatus("محتاج تجهيز جدول Supabase قبل المزامنة.");
    return;
  }

  cloudReady = true;
  if (data?.plan?.length || data?.records?.length) {
    state.plan = data.plan?.length ? data.plan : structuredClone(defaultPlan);
    state.records = data.records || [];
    localStorage.setItem("awsPlan", JSON.stringify(state.plan));
    localStorage.setItem("awsRecords", JSON.stringify(state.records));
    renderAll();
    showToast("تم تحميل بياناتك من السحابة.");
  } else {
    await syncCloudData();
    showToast("تم رفع بيانات الجهاز للحساب.");
  }
}

async function signIn(event) {
  event.preventDefault();
  if (!supabaseClient) {
    showToast("مكتبة Supabase لم تحمل. اتأكد من الاتصال بالنت.");
    return;
  }
  const email = $("#authEmailInput").value.trim();
  const password = $("#authPasswordInput").value;
  if (!email || !password) {
    showToast("اكتب الإيميل والباسورد.");
    return;
  }
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) {
    showToast(error.message);
    return;
  }
  currentUser = data.user;
  renderAuthState();
  await loadCloudData();
}

async function signUp() {
  if (!supabaseClient) {
    showToast("مكتبة Supabase لم تحمل. اتأكد من الاتصال بالنت.");
    return;
  }
  const email = $("#authEmailInput").value.trim();
  const password = $("#authPasswordInput").value;
  if (!email || password.length < 6) {
    showToast("اكتب إيميل وباسورد 6 حروف على الأقل.");
    return;
  }
  const { data, error } = await supabaseClient.auth.signUp({ email, password });
  if (error) {
    showToast(error.message);
    return;
  }
  currentUser = data.user;
  renderAuthState();
  if (currentUser) await loadCloudData();
  showToast("الحساب اتعمل. لو Supabase طالب تأكيد، افتح الإيميل.");
}

async function signOut() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  currentUser = null;
  cloudReady = false;
  $("#authPasswordInput").value = "";
  renderAuthState();
  showToast("تم تسجيل الخروج.");
}

async function setupSupabaseAuth() {
  if (!supabaseClient) {
    setCloudStatus("مزامنة السحابة تحتاج اتصال بالإنترنت.");
    return;
  }
  const { data } = await supabaseClient.auth.getSession();
  currentUser = data.session?.user || null;
  renderAuthState();
  if (currentUser) await loadCloudData();

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    renderAuthState();
    if (currentUser) loadCloudData();
  });
}

function setView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-link").forEach((btn) => btn.classList.toggle("active", btn.dataset.view === viewId));
  if (viewId === "history") renderHistory();
}

function renderPlanPreview() {
  $("#planPreview").innerHTML = state.plan.map((day) => `
    <div class="plan-row">
      <div>
        <strong>${day.name}</strong>
        <small>${day.title}</small>
      </div>
      <small>${day.exercises.length} تمارين</small>
    </div>
  `).join("");
}

function renderDayTabs() {
  $("#dayTabs").innerHTML = state.plan.map((day) => `
    <button class="day-tab ${day.id === state.selectedDay ? "active" : ""}" data-day="${day.id}">
      <strong>${day.name}</strong>
      <small>${day.title}</small>
    </button>
  `).join("");
}

function defaultSets() {
  return [{ weight: "", reps: "", done: false }];
}

function getActiveDay() {
  return state.plan.find((day) => day.id === state.selectedDay) || state.plan[0];
}

function ensureActiveSession() {
  if (state.activeSession) return;
  const day = getActiveDay();
  state.activeSession = {
    type: "workout",
    dayId: day.id,
    dayName: day.name,
    title: day.title,
    date: new Date().toISOString(),
    duration: 0,
    exercises: day.exercises.map(([name, target]) => ({ name, target, sets: defaultSets() }))
  };
}

function libraryOptions(selectedName = "") {
  return exerciseLibrary.map((exercise, index) => `
    <option value="${index}" ${exercise.name === selectedName ? "selected" : ""}>${exercise.name} - ${muscleLabel(exercise.muscle)}</option>
  `).join("");
}

function renderExercises() {
  ensureActiveSession();
  $("#exerciseList").innerHTML = state.activeSession.exercises.map((exercise, exIndex) => `
    <article class="exercise-card">
      <div class="exercise-head">
        <div>
          <h3>${exercise.name}</h3>
          <small>${exercise.target}</small>
        </div>
        <div class="exercise-controls">
          <div class="order-controls" aria-label="ترتيب التمرين">
            <button class="ghost icon-button" data-move-exercise="${exIndex}:up" type="button" aria-label="رفع التمرين لفوق" ${exIndex === 0 ? "disabled" : ""}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
            </button>
            <button class="ghost icon-button" data-move-exercise="${exIndex}:down" type="button" aria-label="تنزيل التمرين لتحت" ${exIndex === state.activeSession.exercises.length - 1 ? "disabled" : ""}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </button>
          </div>
          <div class="exercise-swap">
            <label>بدل التمرين
              <select data-replace-select="${exIndex}">
                <option value="">اختار تمرين</option>
                ${libraryOptions(exercise.name)}
              </select>
            </label>
            <button class="ghost" data-replace-exercise="${exIndex}" type="button">تبديل</button>
          </div>
        </div>
      </div>
      <div class="set-table">
        ${exercise.sets.map((set, setIndex) => `
          <div class="set-row">
            <div class="set-number">${setIndex + 1}</div>
            <label>الوزن kg
              <input type="text" value="${set.weight}" data-ex="${exIndex}" data-set="${setIndex}" data-field="weight" data-keypad="decimal" inputmode="none" readonly>
            </label>
            <label>العدات
              <input type="text" value="${set.reps}" data-ex="${exIndex}" data-set="${setIndex}" data-field="reps" data-keypad="number" inputmode="none" readonly>
            </label>
            <button class="check-set ${set.done ? "done" : ""}" data-check="${exIndex}:${setIndex}" aria-label="إنهاء المجموعة">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>
            </button>
          </div>
        `).join("")}
      </div>
      <button class="ghost add-set" data-add-set="${exIndex}">إضافة مجموعة</button>
    </article>
  `).join("");
}

function muscleLabel(muscle) {
  return {
    chest: "صدر",
    back: "ظهر",
    shoulders: "كتف",
    arms: "ذراع",
    legs: "رجل",
    core: "كور"
  }[muscle] || "عام";
}

function renderExerciseLibrary() {
  const search = ($("#librarySearch")?.value || "").trim().toLowerCase();
  const muscle = $("#libraryMuscle")?.value || "all";
  const filtered = exerciseLibrary.filter((exercise) => {
    const matchesSearch = !search || exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search);
    const matchesMuscle = muscle === "all" || exercise.muscle === muscle;
    return matchesSearch && matchesMuscle;
  });
  $("#libraryList").innerHTML = filtered.map((exercise, index) => `
    <button class="library-card" data-library-index="${exerciseLibrary.indexOf(exercise)}" type="button">
      <span>${muscleLabel(exercise.muscle)}</span>
      <strong>${exercise.name}</strong>
      <small>${exercise.target}</small>
    </button>
  `).join("") || `<article class="history-card"><h3>مفيش نتيجة</h3><small>جرب بحث أو عضلة مختلفة.</small></article>`;
}

function addExerciseToSelectedDay(exercise) {
  const day = getActiveDay();
  if (!day) return;
  const item = [exercise.name, exercise.target];
  const alreadyExists = day.exercises.some(([name]) => name.toLowerCase() === exercise.name.toLowerCase());
  if (alreadyExists) {
    showToast("التمرين موجود بالفعل في اليوم ده.");
    return;
  }
  day.exercises.push(item);
  savePlan();
  renderPlanPreview();
  renderDayTabs();
  if (state.activeSession && state.activeSession.dayId === day.id) {
    state.activeSession.exercises.push({ name: exercise.name, target: exercise.target, sets: defaultSets() });
  } else if (!state.sessionStart) {
    state.activeSession = null;
  }
  renderExercises();
  showToast(`تمت إضافة ${exercise.name} إلى ${day.name}.`);
}

function addCustomExercise(event) {
  event.preventDefault();
  const name = $("#customExerciseName").value.trim();
  const target = $("#customExerciseTarget").value.trim() || "3 مجموعات - 8 إلى 12 عدة";
  if (!name) {
    showToast("اكتب اسم التمرين الأول.");
    return;
  }
  addExerciseToSelectedDay({ name, target, muscle: "custom" });
  $("#customExerciseName").value = "";
  $("#customExerciseTarget").value = "";
}

function replaceExercise(exIndex) {
  const select = document.querySelector(`[data-replace-select="${exIndex}"]`);
  if (!select || select.value === "") {
    showToast("اختار تمرين من القائمة الأول.");
    return;
  }
  const replacement = exerciseLibrary[Number(select.value)];
  const day = getActiveDay();
  const currentName = state.activeSession.exercises[exIndex]?.name;
  if (!replacement || !day || !currentName) return;
  const existsElsewhere = day.exercises.some(([name], index) => index !== exIndex && name.toLowerCase() === replacement.name.toLowerCase());
  if (existsElsewhere) {
    showToast("التمرين ده موجود بالفعل في نفس اليوم.");
    return;
  }
  day.exercises[exIndex] = [replacement.name, replacement.target];
  savePlan();
  state.activeSession.exercises[exIndex] = {
    name: replacement.name,
    target: replacement.target,
    sets: defaultSets()
  };
  renderPlanPreview();
  renderExercises();
  showToast(`تم تبديل ${currentName} بـ ${replacement.name}.`);
}

function moveExercise(exIndex, direction) {
  const day = getActiveDay();
  const nextIndex = direction === "up" ? exIndex - 1 : exIndex + 1;
  if (!day || nextIndex < 0 || nextIndex >= state.activeSession.exercises.length) return;

  const moveItem = (items) => {
    const [item] = items.splice(exIndex, 1);
    items.splice(nextIndex, 0, item);
  };

  moveItem(day.exercises);
  moveItem(state.activeSession.exercises);
  savePlan();
  renderPlanPreview();
  renderExercises();
  showToast(direction === "up" ? "التمرين طلع لفوق." : "التمرين نزل لتحت.");
}

function changeDay(dayId) {
  state.selectedDay = dayId;
  localStorage.setItem("awsDay", dayId);
  if (!state.sessionStart) state.activeSession = null;
  renderDayTabs();
  renderExercises();
}

function startWorkout() {
  ensureActiveSession();
  if (state.sessionStart) return;
  state.sessionStart = Date.now();
  $("#startWorkout").classList.add("hidden");
  $("#finishWorkout").classList.remove("hidden");
  state.sessionTimer = setInterval(() => {
    const seconds = Math.floor((Date.now() - state.sessionStart) / 1000);
    state.activeSession.duration = seconds;
    $("#sessionClock").textContent = formatClock(seconds);
  }, 1000);
  showToast("الجلسة بدأت. ركز في أول مجموعة.");
}

function finishWorkout() {
  if (!state.activeSession) return;
  clearInterval(state.sessionTimer);
  state.activeSession.duration = state.sessionStart ? Math.floor((Date.now() - state.sessionStart) / 1000) : 0;
  state.activeSession.completedAt = new Date().toISOString();
  state.records.unshift(structuredClone(state.activeSession));
  saveRecords();
  state.sessionStart = null;
  state.activeSession = null;
  $("#sessionClock").textContent = "00:00:00";
  $("#startWorkout").classList.remove("hidden");
  $("#finishWorkout").classList.add("hidden");
  stopRest();
  renderExercises();
  renderStats();
  showToast("اتحفظت في السجل.");
  setView("history");
}

function startRest() {
  stopRest();
  state.restSeconds = Math.max(15, Math.round(Number($("#restMinutes").value || 2) * 60));
  state.restRemaining = state.restSeconds;
  state.restPaused = false;
  updateRestClock();
  state.restTimer = setInterval(() => {
    if (state.restPaused) return;
    state.restRemaining -= 1;
    updateRestClock();
    if (state.restRemaining <= 0) {
      stopRest();
      showToast("الراحة خلصت. المجموعة اللي بعدها.");
    }
  }, 1000);
}

function stopRest() {
  clearInterval(state.restTimer);
  state.restTimer = null;
  state.restPaused = false;
  $("#pauseRest").textContent = "إيقاف";
  state.restRemaining = Math.max(15, Math.round(Number($("#restMinutes").value || 2) * 60));
  updateRestClock();
}

function updateRestClock() {
  const label = formatClock(Math.max(0, state.restRemaining));
  $("#restClock").textContent = label;
  $("#sideRest").textContent = label;
}

function renderStats() {
  const workouts = state.records.filter((record) => record.type === "workout");
  const restDays = state.records.filter((record) => record.type === "rest");
  const doneSets = workouts.flatMap((w) => w.exercises.flatMap((e) => e.sets)).filter((set) => set.done);
  const volume = doneSets.reduce((sum, set) => sum + (Number(set.weight) || 0) * (Number(set.reps) || 0), 0);
  $("#statSessions").textContent = workouts.length;
  $("#statSets").textContent = doneSets.length;
  $("#statVolume").textContent = `${Math.round(volume).toLocaleString("en-US")} kg`;
  $("#statRest").textContent = restDays.length;
}

function renderHistory() {
  if (!state.records.length) {
    $("#historyList").innerHTML = `<article class="history-card"><h3>لسه مفيش سجل</h3><small>ابدأ تمرينة واحفظها، وهتظهر هنا بشكل منظم.</small></article>`;
    return;
  }
  $("#historyList").innerHTML = state.records.map((record) => {
    const date = new Date(record.completedAt || record.date).toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" });
    if (record.type === "rest") {
      return `<article class="history-card">
        <header><div><h3>يوم راحة</h3><small>${date}</small></div><strong>Recovery</strong></header>
        <p>${record.notes || "راحة بدون ملاحظات."}</p>
      </article>`;
    }
    const doneSets = record.exercises.flatMap((e) => e.sets).filter((set) => set.done).length;
    const volume = record.exercises.flatMap((e) => e.sets).reduce((sum, set) => sum + (Number(set.weight) || 0) * (Number(set.reps) || 0), 0);
    return `<article class="history-card">
      <header>
        <div><h3>${record.dayName} - ${record.title}</h3><small>${date}</small></div>
        <strong>${formatClock(record.duration || 0)}</strong>
      </header>
      <small>${doneSets} مجموعات مكتملة - حجم ${Math.round(volume).toLocaleString("en-US")} kg</small>
      <ul>${record.exercises.map((exercise) => `<li>${exercise.name}: ${exercise.sets.filter((set) => set.done).map((set) => `${set.weight || 0}kg x ${set.reps || 0}`).join(" | ") || "لم تكتمل مجموعات"}</li>`).join("")}</ul>
    </article>`;
  }).join("");
}

function logRestDay(event) {
  event.preventDefault();
  state.records.unshift({
    type: "rest",
    date: new Date().toISOString(),
    completedAt: new Date().toISOString(),
    notes: $("#restNotes").value.trim()
  });
  $("#restNotes").value = "";
  saveRecords();
  renderStats();
  showToast("تم تسجيل يوم الراحة.");
  setView("history");
}

function openThreeDayReport() {
  const recent = state.records.filter((record) => record.type === "workout").slice(0, 3);
  if (!recent.length) {
    showToast("سجل تمرين واحد على الأقل الأول.");
    return;
  }
  const report = window.open("", "_blank", "width=900,height=1100");
  const rows = recent.map((record) => {
    const date = new Date(record.completedAt || record.date).toLocaleString("ar-EG", { dateStyle: "medium", timeStyle: "short" });
    const exercises = record.exercises.map((exercise) => `<li><strong>${exercise.name}</strong>: ${exercise.sets.filter((set) => set.done).map((set) => `${set.weight || 0}kg x ${set.reps || 0}`).join(" | ") || "لا يوجد"}</li>`).join("");
    return `<section><h2>${record.dayName} - ${date}</h2><p>المدة: ${formatClock(record.duration || 0)}</p><ul>${exercises}</ul></section>`;
  }).join("");
  report.document.write(`
    <!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>Ali Workout Space Report</title>
    <style>
      body{font-family:Arial,sans-serif;margin:32px;color:#141414;line-height:1.7}
      header{border-bottom:4px solid #d87816;margin-bottom:24px;padding-bottom:16px}
      h1{font-size:34px;margin:0} h2{font-size:22px;margin:22px 0 6px} section{break-inside:avoid;border-bottom:1px solid #ddd;padding-bottom:12px}
      button{position:fixed;left:20px;top:20px;padding:12px 18px;border:0;background:#d87816;color:#fff;font-weight:700;border-radius:8px}
      @media print{button{display:none} body{margin:18mm}}
    </style></head><body>
      <button onclick="window.print()">حفظ PDF</button>
      <header><h1>Ali Workout Space</h1><p>تقرير آخر 3 أيام تمرين</p></header>
      ${rows}
    </body></html>
  `);
  report.document.close();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.records, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `ali-workout-space-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

document.addEventListener("click", (event) => {
  const navTarget = event.target.closest("[data-view], [data-view-target]");
  if (navTarget) setView(navTarget.dataset.view || navTarget.dataset.viewTarget);

  const dayBtn = event.target.closest("[data-day]");
  if (dayBtn) changeDay(dayBtn.dataset.day);

  const libraryBtn = event.target.closest("[data-library-index]");
  if (libraryBtn) addExerciseToSelectedDay(exerciseLibrary[Number(libraryBtn.dataset.libraryIndex)]);

  const replaceBtn = event.target.closest("[data-replace-exercise]");
  if (replaceBtn) replaceExercise(Number(replaceBtn.dataset.replaceExercise));

  const moveBtn = event.target.closest("[data-move-exercise]");
  if (moveBtn) {
    const [exIndex, direction] = moveBtn.dataset.moveExercise.split(":");
    moveExercise(Number(exIndex), direction);
  }

  const addSet = event.target.closest("[data-add-set]");
  if (addSet) {
    ensureActiveSession();
    state.activeSession.exercises[Number(addSet.dataset.addSet)].sets.push({ weight: "", reps: "", done: false });
    renderExercises();
  }

  const check = event.target.closest("[data-check]");
  if (check) {
    const [exIndex, setIndex] = check.dataset.check.split(":").map(Number);
    const set = state.activeSession.exercises[exIndex].sets[setIndex];
    set.done = !set.done;
    renderExercises();
    if (set.done) startRest();
  }
});

document.addEventListener("input", (event) => {
  const input = event.target.closest("[data-field]");
  if (!input) return;
  ensureActiveSession();
  const exercise = state.activeSession.exercises[Number(input.dataset.ex)];
  exercise.sets[Number(input.dataset.set)][input.dataset.field] = input.value;
});

$("#startWorkout").addEventListener("click", startWorkout);
$("#finishWorkout").addEventListener("click", finishWorkout);
$("#restMinutes").addEventListener("input", stopRest);
$("#pauseRest").addEventListener("click", () => {
  state.restPaused = !state.restPaused;
  $("#pauseRest").textContent = state.restPaused ? "تشغيل" : "إيقاف";
});
$("#skipRest").addEventListener("click", () => {
  stopRest();
  showToast("تم تخطي الراحة.");
});
$("#restForm").addEventListener("submit", logRestDay);
$("#openReport").addEventListener("click", openThreeDayReport);
$("#exportJson").addEventListener("click", exportJson);
$("#librarySearch").addEventListener("input", renderExerciseLibrary);
$("#libraryMuscle").addEventListener("change", renderExerciseLibrary);
$("#customExerciseForm").addEventListener("submit", addCustomExercise);
$("#authForm").addEventListener("submit", signIn);
$("#signUpButton").addEventListener("click", signUp);
$("#signOutButton").addEventListener("click", signOut);

renderPlanPreview();
renderDayTabs();
renderExerciseLibrary();
renderExercises();
renderStats();
renderHistory();
updateRestClock();
setupPwa();
setupCustomKeypad();
setupSupabaseAuth();
