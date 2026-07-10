const DAY_START = 6 * 60;
const DAY_END = 18 * 60;
const DAY_MINUTES = DAY_END - DAY_START;
const TARGET_MINUTES = 9 * 60;
const SNAP_MINUTES = 5;
const STORAGE_KEY = "time-ledger-state-v1";

const defaultCodes = [
  {
    code: "PRG-A",
    extension: "01",
    description: "Program A support",
    type: "Admin",
    color: "#168a8f"
  },
  {
    code: "ENG-204",
    extension: "EXT-17",
    description: "Engineering execution",
    type: "Build",
    color: "#7c5cc4"
  },
  {
    code: "OPS-711",
    extension: "",
    description: "Operations sync",
    type: "Meeting",
    color: "#d89a26"
  },
  {
    code: "QA-332",
    extension: "R2",
    description: "Quality review",
    type: "Review",
    color: "#c8566d"
  }
];

const demoEntries = [
  {
    start: "6:00 AM",
    end: "6:45 AM",
    code: "PRG-A",
    extension: "01",
    description: "Program A support",
    type: "Admin",
    notes: "Morning planning"
  },
  {
    start: "6:45 AM",
    end: "9:45 AM",
    code: "ENG-204",
    extension: "EXT-17",
    description: "Engineering execution",
    type: "Build",
    notes: "Design review and implementation"
  },
  {
    start: "9:45 AM",
    end: "10:15 AM",
    code: "OPS-711",
    extension: "",
    description: "Operations sync",
    type: "Meeting",
    notes: "Daily coordination"
  },
  {
    start: "10:15 AM",
    end: "10:35 AM",
    code: "QA-332",
    extension: "R2",
    description: "Quality review",
    type: "Review",
    notes: "Ticket validation"
  },
  {
    start: "10:35 AM",
    end: "3:00 PM",
    code: "ENG-204",
    extension: "EXT-17",
    description: "Engineering execution",
    type: "Build",
    notes: "Feature completion"
  }
];

const els = {
  selectedDayLabel: document.querySelector("#selectedDayLabel"),
  loggedHours: document.querySelector("#loggedHours"),
  loggedMinutes: document.querySelector("#loggedMinutes"),
  remainingHours: document.querySelector("#remainingHours"),
  chargeCount: document.querySelector("#chargeCount"),
  extensionCount: document.querySelector("#extensionCount"),
  statusLabel: document.querySelector("#statusLabel"),
  statusDetail: document.querySelector("#statusDetail"),
  workDate: document.querySelector("#workDate"),
  timelineTrack: document.querySelector("#timelineTrack"),
  entryRows: document.querySelector("#entryRows"),
  submitRows: document.querySelector("#submitRows"),
  codeList: document.querySelector("#codeList"),
  weekList: document.querySelector("#weekList"),
  addEntryButton: document.querySelector("#addEntryButton"),
  copyButton: document.querySelector("#copyButton"),
  saveButton: document.querySelector("#saveButton"),
  addCodeButton: document.querySelector("#addCodeButton"),
  clearWeekButton: document.querySelector("#clearWeekButton"),
  codeCardTemplate: document.querySelector("#codeCardTemplate")
};

let state = loadState();
let toastTimer = 0;

function loadState() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.codes) && saved.days) {
      return {
        selectedDate: saved.selectedDate || today,
        codes: saved.codes.length ? saved.codes : defaultCodes,
        days: saved.days
      };
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    selectedDate: today,
    codes: structuredClone(defaultCodes),
    days: {
      [today]: structuredClone(demoEntries)
    }
  };
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentEntries() {
  if (!state.days[state.selectedDate]) {
    state.days[state.selectedDate] = [];
  }
  return state.days[state.selectedDate];
}

function parseTime(value) {
  if (!value || !String(value).trim()) return null;
  const cleaned = String(value).trim().toUpperCase().replace(/\s+/g, " ");
  const match = cleaned.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/);
  if (!match) return null;

  let hours = Number(match[1]);
  const minutes = Number(match[2] || 0);
  const period = match[3];

  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) return null;
  if (period === "AM" && hours === 12) hours = 0;
  if (period === "PM" && hours !== 12) hours += 12;
  return hours * 60 + minutes;
}

function formatTime(totalMinutes) {
  const clamped = Math.max(0, Math.min(24 * 60 - 1, Math.round(totalMinutes)));
  const hours24 = Math.floor(clamped / 60);
  const minutes = clamped % 60;
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;
  return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}

function formatDateLabel(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function hoursFromMinutes(minutes) {
  return `${(minutes / 60).toFixed(2)}h`;
}

function roundToSnap(minutes) {
  return Math.round(minutes / SNAP_MINUTES) * SNAP_MINUTES;
}

function codeByName(name) {
  return state.codes.find((item) => item.code === name);
}

function normalizeEntry(entry) {
  const code = codeByName(entry.code);
  if (!code) return entry;
  return {
    ...entry,
    extension: entry.extension || code.extension,
    description: entry.description || code.description,
    type: entry.type || code.type
  };
}

function entryBounds(entry) {
  const start = parseTime(entry.start);
  const end = parseTime(entry.end);
  if (start === null || end === null || end <= start) return null;
  return { start, end, duration: end - start };
}

function validEntries() {
  return currentEntries()
    .map((entry, index) => ({ ...normalizeEntry(entry), index, bounds: entryBounds(entry) }))
    .filter((entry) => entry.bounds);
}

function renderAll() {
  persistState();
  renderHeader();
  renderCodes();
  renderEntries();
  renderTimeline();
  renderSubmit();
  renderWeek();
}

function renderHeader() {
  const entries = validEntries();
  const totalMinutes = entries.reduce((sum, entry) => sum + entry.bounds.duration, 0);
  const remaining = TARGET_MINUTES - totalMinutes;
  const codes = new Set(entries.map((entry) => entry.code).filter(Boolean));
  const extensions = new Set(entries.map((entry) => entry.extension).filter(Boolean));
  const issues = findIssues(entries);

  els.selectedDayLabel.textContent = formatDateLabel(state.selectedDate);
  els.loggedHours.textContent = hoursFromMinutes(totalMinutes);
  els.loggedMinutes.textContent = `${totalMinutes} minutes entered`;
  els.remainingHours.textContent = hoursFromMinutes(Math.abs(remaining));
  els.chargeCount.textContent = codes.size;
  els.extensionCount.textContent = `${extensions.size} extensions used`;

  const remainingStat = els.remainingHours.closest(".stat");
  remainingStat.className = "stat";
  if (remaining === 0) remainingStat.classList.add("good");
  if (remaining < 0) remainingStat.classList.add("danger");
  if (remaining > 0) remainingStat.classList.add("warn");

  const statusStat = els.statusLabel.closest(".stat");
  statusStat.className = "stat";

  if (issues.length) {
    statusStat.classList.add("danger");
    els.statusLabel.textContent = "Review";
    els.statusDetail.textContent = issues[0];
  } else if (totalMinutes === TARGET_MINUTES) {
    statusStat.classList.add("ready");
    els.statusLabel.textContent = "Ready";
    els.statusDetail.textContent = "No gaps or overlaps found.";
  } else {
    statusStat.classList.add("warn");
    els.statusLabel.textContent = totalMinutes > TARGET_MINUTES ? "Over" : "Short";
    els.statusDetail.textContent = totalMinutes > TARGET_MINUTES
      ? `Over target by ${hoursFromMinutes(totalMinutes - TARGET_MINUTES)}.`
      : `Short by ${hoursFromMinutes(TARGET_MINUTES - totalMinutes)}.`;
  }
}

function findIssues(entries) {
  const issues = [];
  const ordered = [...entries].sort((a, b) => a.bounds.start - b.bounds.start);

  for (const entry of ordered) {
    if (entry.bounds.start < DAY_START || entry.bounds.end > DAY_END) {
      issues.push("One or more entries are outside the 6 AM to 6 PM window.");
      break;
    }
  }

  for (let index = 1; index < ordered.length; index += 1) {
    if (ordered[index].bounds.start < ordered[index - 1].bounds.end) {
      issues.push("Entries overlap. Adjust the highlighted time range.");
      break;
    }
  }

  return issues;
}

function renderCodes() {
  els.codeList.replaceChildren();

  state.codes.forEach((code, index) => {
    const card = els.codeCardTemplate.content.firstElementChild.cloneNode(true);
    const codeInput = card.querySelector(".code-name");
    const extensionInput = card.querySelector(".code-extension");
    const descriptionInput = card.querySelector(".code-description");
    const typeInput = card.querySelector(".code-type");
    const colorInput = card.querySelector(".code-color");
    const removeButton = card.querySelector(".remove-code");

    codeInput.value = code.code;
    extensionInput.value = code.extension;
    descriptionInput.value = code.description;
    typeInput.value = code.type;
    colorInput.value = code.color;

    codeInput.addEventListener("change", () => {
      const previousCode = state.codes[index].code;
      const nextCode = codeInput.value.trim().toUpperCase() || previousCode;
      state.codes[index].code = nextCode;
      currentEntries().forEach((entry) => {
        if (entry.code === previousCode) entry.code = nextCode;
      });
      renderAll();
    });

    extensionInput.addEventListener("input", () => {
      state.codes[index].extension = extensionInput.value.trim();
      syncEntriesForCode(state.codes[index]);
      renderAll();
    });

    descriptionInput.addEventListener("input", () => {
      state.codes[index].description = descriptionInput.value;
      syncEntriesForCode(state.codes[index]);
      renderAll();
    });

    typeInput.addEventListener("input", () => {
      state.codes[index].type = typeInput.value;
      syncEntriesForCode(state.codes[index]);
      renderAll();
    });

    colorInput.addEventListener("input", () => {
      state.codes[index].color = colorInput.value;
      renderAll();
    });

    removeButton.addEventListener("click", () => {
      state.codes.splice(index, 1);
      renderAll();
    });

    els.codeList.append(card);
  });
}

function syncEntriesForCode(code) {
  currentEntries().forEach((entry) => {
    if (entry.code === code.code) {
      entry.extension = code.extension;
      entry.description = code.description;
      entry.type = code.type;
    }
  });
}

function renderEntries() {
  els.entryRows.replaceChildren();
  const entries = currentEntries();

  entries.forEach((entry, index) => {
    const row = document.createElement("tr");
    const bounds = entryBounds(entry);
    const hours = bounds ? (bounds.duration / 60).toFixed(2) : "";

    row.innerHTML = `
      <td>${index + 1}</td>
      <td><input data-field="start" aria-label="Entry ${index + 1} start"></td>
      <td><input data-field="end" aria-label="Entry ${index + 1} end"></td>
      <td class="hours-cell">${hours}</td>
      <td><select data-field="code" aria-label="Entry ${index + 1} charge code"></select></td>
      <td><input data-field="extension" aria-label="Entry ${index + 1} extension"></td>
      <td><input data-field="description" aria-label="Entry ${index + 1} description"></td>
      <td><input data-field="type" aria-label="Entry ${index + 1} work type"></td>
      <td><input data-field="notes" aria-label="Entry ${index + 1} notes"></td>
      <td><button type="button" class="delete-entry" aria-label="Delete entry ${index + 1}">X</button></td>
    `;

    row.querySelectorAll("input").forEach((input) => {
      const field = input.dataset.field;
      input.value = entry[field] || "";
      input.addEventListener("change", () => {
        entry[field] = input.value.trim();
        renderAll();
      });
    });

    const select = row.querySelector("select");
    select.append(new Option("Select", ""));
    state.codes.forEach((code) => select.append(new Option(code.code, code.code)));
    select.value = entry.code || "";
    select.addEventListener("change", () => {
      entry.code = select.value;
      const code = codeByName(entry.code);
      if (code) {
        entry.extension = code.extension;
        entry.description = code.description;
        entry.type = code.type;
      }
      renderAll();
    });

    row.querySelector(".delete-entry").addEventListener("click", () => {
      entries.splice(index, 1);
      renderAll();
    });

    els.entryRows.append(row);
  });
}

function renderTimeline() {
  els.timelineTrack.replaceChildren();

  validEntries().forEach((entry) => {
    const code = codeByName(entry.code);
    const left = ((entry.bounds.start - DAY_START) / DAY_MINUTES) * 100;
    const width = (entry.bounds.duration / DAY_MINUTES) * 100;
    const block = document.createElement("div");

    block.className = "time-block";
    block.style.left = `${Math.max(0, left)}%`;
    block.style.width = `${Math.max(1.2, width)}%`;
    block.style.background = code?.color || "#607080";
    block.dataset.index = entry.index;
    block.innerHTML = `
      <strong>${entry.code || "No code"}${entry.extension ? ` / ${entry.extension}` : ""}</strong>
      <span>${formatTime(entry.bounds.start)} - ${formatTime(entry.bounds.end)}</span>
      <i class="resize-handle left" data-mode="resize-left"></i>
      <i class="resize-handle right" data-mode="resize-right"></i>
    `;

    block.addEventListener("pointerdown", startBlockDrag);
    els.timelineTrack.append(block);
  });
}

function startBlockDrag(event) {
  const block = event.currentTarget;
  const index = Number(block.dataset.index);
  const entry = currentEntries()[index];
  const bounds = entryBounds(entry);
  if (!bounds) return;

  const mode = event.target.dataset.mode || "move";
  const trackRect = els.timelineTrack.getBoundingClientRect();
  const startX = event.clientX;
  const start = bounds.start;
  const end = bounds.end;

  block.setPointerCapture(event.pointerId);

  const onMove = (moveEvent) => {
    const deltaPx = moveEvent.clientX - startX;
    const deltaMinutes = roundToSnap((deltaPx / trackRect.width) * DAY_MINUTES);
    let nextStart = start;
    let nextEnd = end;

    if (mode === "move") {
      const duration = end - start;
      nextStart = Math.max(DAY_START, Math.min(DAY_END - duration, start + deltaMinutes));
      nextEnd = nextStart + duration;
    }

    if (mode === "resize-left") {
      nextStart = Math.max(DAY_START, Math.min(end - SNAP_MINUTES, start + deltaMinutes));
    }

    if (mode === "resize-right") {
      nextEnd = Math.min(DAY_END, Math.max(start + SNAP_MINUTES, end + deltaMinutes));
    }

    entry.start = formatTime(nextStart);
    entry.end = formatTime(nextEnd);
    renderAll();
  };

  const onUp = () => {
    block.releasePointerCapture(event.pointerId);
    block.removeEventListener("pointermove", onMove);
    block.removeEventListener("pointerup", onUp);
    showToast("Timeline updated");
  };

  block.addEventListener("pointermove", onMove);
  block.addEventListener("pointerup", onUp);
}

function renderSubmit() {
  els.submitRows.replaceChildren();
  const rollup = new Map();

  validEntries().forEach((entry) => {
    const key = [state.selectedDate, entry.code, entry.extension, entry.description].join("|");
    if (!rollup.has(key)) {
      rollup.set(key, {
        date: state.selectedDate,
        code: entry.code,
        extension: entry.extension,
        description: entry.description,
        minutes: 0,
        notes: []
      });
    }

    const item = rollup.get(key);
    item.minutes += entry.bounds.duration;
    if (entry.notes) item.notes.push(entry.notes);
  });

  [...rollup.values()].forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.date}</td>
      <td>${item.code}</td>
      <td>${item.extension || ""}</td>
      <td>${(item.minutes / 60).toFixed(2)}</td>
      <td>${item.description || ""}</td>
      <td>${item.notes.join("; ")}</td>
    `;
    els.submitRows.append(row);
  });
}

function renderWeek() {
  els.weekList.replaceChildren();
  const base = dateFromValue(state.selectedDate);
  const monday = new Date(base);
  monday.setDate(base.getDate() - ((base.getDay() + 6) % 7));

  for (let index = 0; index < 5; index += 1) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    const dateKey = valueFromDate(date);
    const label = date.toLocaleDateString(undefined, { weekday: "short" });
    const entries = state.days[dateKey] || [];
    const valid = entries
      .map((entry) => ({ ...entry, bounds: entryBounds(entry) }))
      .filter((entry) => entry.bounds);
    const total = valid.reduce((sum, entry) => sum + entry.bounds.duration, 0);
    const row = document.createElement("div");

    row.className = "week-row";
    row.innerHTML = `<b>${label}</b><div class="mini-track"></div><b>${(total / 60).toFixed(1)}h</b>`;
    const track = row.querySelector(".mini-track");

    if (valid.length) {
      valid.forEach((entry) => {
        const code = codeByName(entry.code);
        const segment = document.createElement("span");
        segment.className = "mini-segment";
        segment.style.width = `${Math.max(2, (entry.bounds.duration / Math.max(total, 1)) * 100)}%`;
        segment.style.background = code?.color || "#607080";
        track.append(segment);
      });
    }

    els.weekList.append(row);
  }
}

function dateFromValue(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function valueFromDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function addEntry() {
  const entries = currentEntries();
  const lastBounds = entries.length ? entryBounds(entries[entries.length - 1]) : null;
  const start = lastBounds ? lastBounds.end : DAY_START;
  const end = Math.min(DAY_END, start + 30);
  const code = state.codes[0] || {};

  entries.push({
    start: formatTime(start),
    end: formatTime(end),
    code: code.code || "",
    extension: code.extension || "",
    description: code.description || "",
    type: code.type || "",
    notes: ""
  });

  renderAll();
}

function addCode() {
  state.codes.push({
    code: `CODE-${state.codes.length + 1}`,
    extension: "",
    description: "New charge code",
    type: "Work",
    color: "#607080"
  });
  renderAll();
}

async function copyTimesheet() {
  const rows = [...els.submitRows.querySelectorAll("tr")].map((row) =>
    [...row.children].map((cell) => cell.textContent).join("\t")
  );
  const header = ["Date", "Charge Code", "Extension", "Hours", "Description", "Notes"].join("\t");
  const text = [header, ...rows].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showToast("Timesheet copied");
  } catch {
    showToast("Copy blocked by browser");
  }
}

function saveDay() {
  persistState();
  showToast("Day saved");
}

function clearWeek() {
  const base = dateFromValue(state.selectedDate);
  const monday = new Date(base);
  monday.setDate(base.getDate() - ((base.getDay() + 6) % 7));

  for (let index = 0; index < 5; index += 1) {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    delete state.days[valueFromDate(date)];
  }

  state.days[state.selectedDate] = [];
  renderAll();
  showToast("Week cleared");
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.append(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

els.workDate.value = state.selectedDate;
els.workDate.addEventListener("change", () => {
  state.selectedDate = els.workDate.value;
  if (!state.days[state.selectedDate]) state.days[state.selectedDate] = [];
  renderAll();
});

els.addEntryButton.addEventListener("click", addEntry);
els.addCodeButton.addEventListener("click", addCode);
els.copyButton.addEventListener("click", copyTimesheet);
els.saveButton.addEventListener("click", saveDay);
els.clearWeekButton.addEventListener("click", clearWeek);

renderAll();
