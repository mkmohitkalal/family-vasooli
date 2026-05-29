// Initial Transcribed Data from Mohit's Spreadsheet
const defaultTransactions = [
  { id: "tx-1", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 1500, type: "lent", mode: "Cash", description: "given to nannu friends", status: "pending" },
  { id: "tx-2", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 219, type: "lent", mode: "Amazon Reward", description: "Dalpat Mobile Recharge", status: "pending" },
  { id: "tx-3", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 19, type: "lent", mode: "Amazon Reward", description: "Nandini Data Mobile Recharge", status: "pending" },
  { id: "tx-4", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 349, type: "lent", mode: "Amazon Reward", description: "Nandini Mobile Recharge", status: "pending" },
  { id: "tx-5", date: "2026-05-22", person: "घर खर्च", category: "udhar", amount: 707, type: "lent", mode: "Amazon Reward", description: "Jio Air Fiber Recharge", status: "pending" },
  { id: "tx-6", date: "2026-05-22", person: "घर खर्च", category: "udhar", amount: 3069, type: "lent", mode: "UPI Lite", description: "(Ghee5Kg,Khopra,Mirch tata,Thandai)", status: "pending" },
  { id: "tx-7", date: "2026-05-22", person: "vidya", category: "udhar", amount: 72, type: "lent", mode: "UPI Lite", description: "hair color raju mall", status: "pending" },
  { id: "tx-8", date: "2026-05-22", person: "घर खर्च", category: "udhar", amount: 2063, type: "lent", mode: "Credit Card Icici", description: "New Amazon Fresh order", status: "pending" },
  { id: "tx-9", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 193, type: "lent", mode: "UPI Lite", description: "apple for dalpat jio mart", status: "pending" },
  { id: "tx-10", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 252, type: "lent", mode: "UPI Lite", description: "apple coconut dalpat jio mart", status: "pending" },
  { id: "tx-11", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 76, type: "lent", mode: "UPI Lite", description: "aadhar card fees", status: "pending" },
  { id: "tx-12", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 403, type: "lent", mode: "Amazon rewards", description: "blinkit nandini print", status: "pending" },
  { id: "tx-13", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 210, type: "lent", mode: "UPI Lite", description: "bajri jowar aata", status: "pending" },
  { id: "tx-14", date: "2026-05-22", person: "vidya", category: "udhar", amount: 100, type: "lent", mode: "UPI Lite", description: "bajri vidya", status: "pending" },
  { id: "tx-15", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 1000, type: "lent", mode: "cash", description: "petrol", status: "pending" },
  { id: "tx-16", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 218, type: "lent", mode: "UPI Lite", description: "medipulse canteen and medicine", status: "pending" },
  { id: "tx-17", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 812, type: "lent", mode: "Amazon rewards", description: "blinkit Home vegetable", status: "pending" },
  { id: "tx-18", date: "2026-05-22", person: "घर खर्च", category: "udhar", amount: 1000, type: "lent", mode: "cash", description: "1000 cash to poonam water", status: "pending" },
  { id: "tx-19", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 200, type: "lent", mode: "UPI Lite", description: "200 rs petrol scooty", status: "pending" },
  { id: "tx-20", date: "2026-05-22", person: "vijay", category: "udhar", amount: 5404, type: "lent", mode: "Credit Card Icici", description: "5404 cooler amazon", status: "pending" },
  { id: "tx-21", date: "2026-05-22", person: "dalpat", category: "udhar", amount: 498, type: "lent", mode: "UPI Lite", description: "498 petrol,apple,tamatar", status: "pending" },
  { id: "tx-22", date: "2026-05-22", person: "vidya", category: "udhar", amount: 500, type: "lent", mode: "cash", description: "500 rs to bharti", status: "pending" },
  
  // Split House Expenses (to be recovered from Dalpat/Vidya)
  { id: "tx-ss-1", date: "2026-05-22", person: "dalpat", category: "house", amount: 1000, type: "lent", mode: "Cash", description: "1000 to nandini", status: "pending" },
  { id: "tx-ss-2", date: "2026-05-22", person: "dalpat", category: "house", amount: 250, type: "lent", mode: "Cash", description: "250 JioMart Vegetabl", status: "pending" },
  { id: "tx-ss-3", date: "2026-05-22", person: "dalpat", category: "house", amount: 700, type: "lent", mode: "Cash", description: "700 Blinkit Vegetable Medipulse", status: "pending" },
  { id: "tx-ss-4", date: "2026-05-22", person: "dalpat", category: "house", amount: 2000, type: "lent", mode: "Cash", description: "2000 cash to Nandini Print", status: "pending" },
  { id: "tx-ss-5", date: "2026-05-22", person: "vidya", category: "house", amount: 170, type: "lent", mode: "Cash", description: "170 mirchi bada", status: "pending" },
  { id: "tx-ss-6", date: "2026-05-22", person: "dalpat", category: "house", amount: 300, type: "lent", mode: "Cash", description: "300rs aam 1kg,mirch 2kg,kharbuja", status: "pending" }
];

// App State
const defaultDashboards = [
  { id: "udhar", name: "Mohit वसूली Personal", icon: "fa-solid fa-hand-holding-dollar", color: "#6366f1" },
  { id: "house", name: "उधार from (वसूली घर खर्च)", icon: "fa-solid fa-house-chimney-user", color: "#0d9488" }
];

let transactions = [];
let customPeople = [];
let dashboards = [];
let currentDashboard = 'udhar'; // 'udhar' or custom dashboard id
let currentStatusFilter = 'all'; // 'all', 'pending', 'recovered'
let currentPersonFilter = 'all'; // 'all' or person name
let parsedTransactionsBuffer = [];
let memberPendingSums = {}; // key: person/category, value: net pending recovery

function isHouseDashboard(id) {
  if (id === 'house') return true;
  const dashObj = dashboards.find(d => d.id === id);
  return dashObj && (dashObj.name === 'उधार from (वसूली घर खर्च)' || dashObj.name.includes('घर खर्च'));
}

let supabaseClient = null;
let isCloudActive = false;
let currentUser = null;
let isOfflineOverride = false;

// DOM Elements
const bodyEl = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const txTableBody = document.getElementById('tx-table-body');
const membersListEl = document.getElementById('members-list');
const txSearchInput = document.getElementById('tx-search');
const tabButtons = document.querySelectorAll('.tab-btn');
const txCountBadge = document.getElementById('tx-count');

// Metrics DOM
const metricTotalPending = document.getElementById('metric-total-pending');
const metricTotalHouse = document.getElementById('metric-total-house');
const metricCcDues = document.getElementById('metric-cc-dues');
const metricOwnFunds = document.getElementById('metric-own-funds');

// Modals DOM
const txModal = document.getElementById('tx-modal');
const parserModal = document.getElementById('parser-modal');
const btnAddTx = document.getElementById('btn-add-tx');
const txForm = document.getElementById('tx-form');
const txPersonSelect = document.getElementById('tx-person');
const btnAddCustomPerson = document.getElementById('btn-add-custom-person');
const customPersonInputGroup = document.getElementById('custom-person-input-group');
const txCustomPersonInput = document.getElementById('tx-custom-person');
const btnSaveCustomPerson = document.getElementById('btn-save-custom-person');

// File / Data Actions
const btnExportCSV = document.getElementById('btn-export-csv');
const btnBackup = document.getElementById('btn-backup');
const btnRestoreTrigger = document.getElementById('btn-restore-trigger');
const restoreFileInput = document.getElementById('restore-file');

// Parser DOM
const rawNotesInput = document.getElementById('raw-notes-input');
const btnParseNotes = document.getElementById('btn-parse-notes');
const parsedTxBody = document.getElementById('parsed-tx-body');
const btnImportParsed = document.getElementById('btn-import-parsed');
const btnCancelParser = document.getElementById('btn-cancel-parser');
const btnCloseParser = document.getElementById('btn-close-parser');
const selectAllParsedCheckbox = document.getElementById('select-all-parsed');
const parsedSummaryText = document.getElementById('parsed-summary-text');

// Toast
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toast-message');

// Google Auth & Multi-Dashboard DOM
const cloudModal = document.getElementById('cloud-modal');
const dashboardModal = document.getElementById('dashboard-modal');
const btnCloudSettings = document.getElementById('btn-cloud-settings');
const btnCloudDisconnect = document.getElementById('btn-cloud-disconnect');
const cloudStatusText = document.getElementById('cloud-status-text');
const loginOverlay = document.getElementById('login-overlay');
const btnLoginOffline = document.getElementById('btn-login-offline');
const userProfilePill = document.getElementById('user-profile-pill');
const userAvatar = document.getElementById('user-avatar');
const userAvatarInitials = document.getElementById('user-avatar-initials');
const userNameText = document.getElementById('user-name');
const btnSignOut = document.getElementById('btn-sign-out');
const dashSelectorList = document.getElementById('dash-selector-list');
const dashboardForm = document.getElementById('dashboard-form');
const dashNameInput = document.getElementById('dash-name');
const dashIconInput = document.getElementById('dash-icon');
const dashColorInput = document.getElementById('dash-color');

// Google Identity Services (GIS) Specific DOM Elements
const googleSigninActiveContainer = document.getElementById('google-signin-active-container');
const googleSigninBtnContainer = document.getElementById('google-signin-btn-container');
const displayClientId = document.getElementById('display-client-id');
const btnChangeClientId = document.getElementById('btn-change-client-id');
const googleSigninConfigContainer = document.getElementById('google-signin-config-container');
const configGoogleClientId = document.getElementById('config-google-client-id');
const btnSaveClientId = document.getElementById('btn-save-client-id');
const settingsGoogleClientId = document.getElementById('settings-google-client-id');
const btnSaveSettingsClientId = document.getElementById('btn-save-settings-client-id');


// Initialize App
// Initialize App
async function init() {
  initTheme();
  setupEventListeners();
  
  // Load session from local cache
  const savedUser = localStorage.getItem('vasooli_current_user');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    handleAuthState(true);
    await loadData();
  } else {
    handleAuthState(false);
    await loadData();
  }
  
  renderDashboardSelectors();
  renderApp();

  // Defensively initialize GIS if script loaded early
  if (window.google && window.google.accounts) {
    googleGsiLoaded = true;
    initGoogleSignIn();
  }
}

// Cloud Sync Engine & Auth State using keyvalue.immanuel.co
const KEYVALUE_APP_KEY = "vasooli1";
const CHUNK_SIZE = 100;

// Base64url safe encode/decode
function base64UrlEncode(str) {
  const b64 = btoa(unescape(encodeURIComponent(str)));
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlDecode(str) {
  let b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) {
    b64 += '=';
  }
  return decodeURIComponent(escape(atob(b64)));
}

// Generate 16 character SHA-256 hash for email
async function getEmailHash(email) {
  const emailClean = email.trim().toLowerCase();
  const msgBuffer = new TextEncoder().encode(emailClean);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.substring(0, 16);
}

// Compress data state keys to minimize chunks
function compressTransactions(txs) {
  return txs.map(tx => ({
    i: tx.id,
    d: tx.date,
    p: tx.person,
    c: tx.category,
    a: tx.amount,
    t: tx.type,
    m: tx.mode || '',
    x: tx.description,
    s: tx.status || 'pending',
    k: tx.ccPaid ? 1 : 0
  }));
}

function decompressTransactions(ctxs) {
  return ctxs.map(tx => ({
    id: tx.i,
    date: tx.d,
    person: tx.p,
    category: tx.c,
    amount: parseFloat(tx.a) || 0,
    type: tx.t,
    mode: tx.m || 'Cash',
    description: tx.x,
    status: tx.s || 'pending',
    ccPaid: tx.k === 1
  }));
}

function compressDashboards(dashes) {
  return dashes.map(d => ({
    i: d.id,
    n: d.name,
    o: d.icon,
    c: d.color
  }));
}

function decompressDashboards(cdashes) {
  return cdashes.map(d => ({
    id: d.i,
    name: d.n,
    icon: d.o,
    color: d.c
  }));
}

// Save entire state to Cloud key-value store in 100-character chunks
async function saveDataToCloud() {
  if (!currentUser || !currentUser.uhash) return;

  const syncBtn = document.getElementById('btn-cloud-settings');
  if (syncBtn) {
    syncBtn.classList.add('btn-syncing');
    syncBtn.querySelector('i').className = 'fa-solid fa-rotate fa-spin';
  }

  try {
    const state = {
      txs: compressTransactions(transactions),
      dashes: compressDashboards(dashboards),
      people: customPeople
    };
    const dataStr = JSON.stringify(state);

    // Chunk it
    const chunks = [];
    for (let i = 0; i < dataStr.length; i += CHUNK_SIZE) {
      chunks.push(dataStr.substring(i, i + CHUNK_SIZE));
    }
    const numChunks = chunks.length;

    // 1. Write the count chunk first
    const countUrl = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${KEYVALUE_APP_KEY}/${currentUser.uhash}_c/${numChunks}`;
    const countRes = await fetch(countUrl, { method: 'POST' });
    if (!countRes.ok) throw new Error("Failed to write chunk count");

    // 2. Write chunks in parallel
    const chunkPromises = chunks.map((chunk, idx) => {
      const encodedChunk = base64UrlEncode(chunk);
      const chunkUrl = `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${KEYVALUE_APP_KEY}/${currentUser.uhash}_${idx}/${encodedChunk}`;
      return fetch(chunkUrl, { method: 'POST' }).then(res => {
        if (!res.ok) throw new Error(`Failed to write chunk ${idx}`);
        return res;
      });
    });

    await Promise.all(chunkPromises);

    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString();
    localStorage.setItem('vasooli_last_sync', nowStr);

    const syncLastTime = document.getElementById('sync-last-time');
    if (syncLastTime) syncLastTime.textContent = nowStr;

    updateSyncStatusUI(true);
    console.log("Synced successfully.");
  } catch (err) {
    console.error("Cloud sync error:", err);
    showToast("Cloud sync failed. Working offline.", "error");
    updateSyncStatusUI(false);
  } finally {
    if (syncBtn) {
      syncBtn.classList.remove('btn-syncing');
      syncBtn.querySelector('i').className = 'fa-solid fa-cloud';
    }
  }
}

// Fetch entire state from Cloud key-value store
async function loadDataFromCloud(uhash) {
  try {
    const countUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${KEYVALUE_APP_KEY}/${uhash}_c`;
    const countRes = await fetch(countUrl);
    if (!countRes.ok) throw new Error("Failed to read chunk count");

    const countVal = await countRes.json();
    if (!countVal) return null;

    const numChunks = parseInt(countVal);
    if (isNaN(numChunks) || numChunks <= 0) return null;

    const readPromises = [];
    for (let idx = 0; idx < numChunks; idx++) {
      const chunkUrl = `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${KEYVALUE_APP_KEY}/${uhash}_${idx}`;
      readPromises.push(
        fetch(chunkUrl)
          .then(res => {
            if (!res.ok) throw new Error(`Failed to read chunk ${idx}`);
            return res.json();
          })
      );
    }

    const chunkVals = await Promise.all(readPromises);
    const decodedChunks = chunkVals.map(chunkVal => {
      if (!chunkVal) throw new Error("Empty chunk value");
      return base64UrlDecode(chunkVal);
    });

    const dataStr = decodedChunks.join('');
    return JSON.parse(dataStr);
  } catch (err) {
    console.error("Cloud load error:", err);
    return null;
  }
}

// Initialize session state
function handleAuthState(isLoggedIn) {
  const loginOverlay = document.getElementById('login-overlay');
  const userProfilePill = document.getElementById('user-profile-pill');
  const userAvatar = document.getElementById('user-avatar');
  const userAvatarInitials = document.getElementById('user-avatar-initials');
  const userNameText = document.getElementById('user-name');

  const syncActiveDetails = document.getElementById('sync-active-details');
  const syncInactiveDetails = document.getElementById('sync-inactive-details');
  const syncEmailDisplay = document.getElementById('sync-email-display');
  const syncKeyDisplay = document.getElementById('sync-key-display');
  const syncLastTime = document.getElementById('sync-last-time');

  if (isLoggedIn && currentUser) {
    userProfilePill.style.display = 'flex';
    if (currentUser.picture) {
      userAvatar.src = currentUser.picture;
      userAvatar.style.display = 'block';
      userAvatarInitials.style.display = 'none';
    } else {
      userAvatar.style.display = 'none';
      userAvatarInitials.style.display = 'flex';
      const initials = (currentUser.name || currentUser.email).substring(0, 2).toUpperCase();
      userAvatarInitials.textContent = initials;
    }
    userNameText.textContent = currentUser.name || currentUser.email;

    loginOverlay.style.display = 'none';

    if (syncActiveDetails) syncActiveDetails.style.display = 'block';
    if (syncInactiveDetails) syncInactiveDetails.style.display = 'none';
    if (syncEmailDisplay) syncEmailDisplay.textContent = currentUser.email;
    if (syncKeyDisplay) syncKeyDisplay.textContent = currentUser.uhash;

    const lastSync = localStorage.getItem('vasooli_last_sync') || 'Never';
    if (syncLastTime) syncLastTime.textContent = lastSync;

    updateSyncStatusUI(true);
  } else {
    currentUser = null;
    userProfilePill.style.display = 'none';

    const offlineMode = localStorage.getItem('vasooli_offline_mode') === 'true';
    if (offlineMode) {
      loginOverlay.style.display = 'none';
    } else {
      loginOverlay.style.display = 'flex';
      document.getElementById('login-main-panel').style.display = 'block';
      initGoogleSignIn();
    }

    if (syncActiveDetails) syncActiveDetails.style.display = 'none';
    if (syncInactiveDetails) syncInactiveDetails.style.display = 'block';

    updateSyncStatusUI(false);
  }
}

function updateSyncStatusUI(isSynced) {
  const statusText = document.getElementById('cloud-status-text');
  const statusBanner = document.getElementById('cloud-status-banner');

  if (statusText) {
    if (isSynced) {
      statusText.innerHTML = `<i class="fa-solid fa-circle-check"></i> Connected & Synced`;
      if (statusBanner) {
        statusBanner.style.borderColor = 'rgba(16, 185, 129, 0.3)';
        statusBanner.style.background = 'rgba(16, 185, 129, 0.05)';
      }
    } else {
      statusText.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Disconnected (Local Storage)`;
      if (statusBanner) {
        statusBanner.style.borderColor = 'var(--card-border)';
        statusBanner.style.background = 'rgba(255, 255, 255, 0.02)';
      }
    }
  }
}

// JWT Decode Helper
function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("JWT decoding failed:", e);
    return null;
  }
}

// Google Identity Services Library callback
async function handleCredentialResponse(response) {
  const jwt = response.credential;
  if (!jwt) {
    showToast("Google authentication failed", "error");
    return;
  }
  
  const payload = decodeJwt(jwt);
  if (!payload || !payload.email) {
    showToast("Failed to parse user profile from Google", "error");
    return;
  }

  showToast("Signing in...");
  const hash = await getEmailHash(payload.email);

  currentUser = {
    email: payload.email.trim().toLowerCase(),
    name: payload.name || '',
    picture: payload.picture || '',
    uhash: hash
  };

  localStorage.setItem('vasooli_current_user', JSON.stringify(currentUser));
  localStorage.removeItem('vasooli_offline_mode');

  handleAuthState(true);

  // Sync / Load data
  await loadData();
  renderDashboardSelectors();
  renderApp();

  showToast(`Signed in successfully as ${payload.email}!`);
}

let googleGsiLoaded = false;

window.onGoogleLibraryLoad = function() {
  googleGsiLoaded = true;
  initGoogleSignIn();
};

function initGoogleSignIn() {
  if (!googleGsiLoaded) return;
  
  const googleClientId = localStorage.getItem('vasooli_google_client_id') || '650454981187-uksjt63q9c3j20t0lvktktv52nnngqve.apps.googleusercontent.com';
  
  const activeContainer = document.getElementById('google-signin-active-container');
  const configContainer = document.getElementById('google-signin-config-container');
  const displayClientId = document.getElementById('display-client-id');
  
  // Pre-fill inputs
  const configInput = document.getElementById('config-google-client-id');
  const settingsInput = document.getElementById('settings-google-client-id');
  
  if (configInput) configInput.value = googleClientId || '';
  if (settingsInput) settingsInput.value = googleClientId || '';
  
  if (googleClientId) {
    if (activeContainer) activeContainer.style.display = 'block';
    if (configContainer) configContainer.style.display = 'none';
    if (displayClientId) displayClientId.textContent = googleClientId;
    
    try {
      google.accounts.id.initialize({
        client_id: googleClientId.trim(),
        callback: handleCredentialResponse
      });
      
      const btnContainer = document.getElementById('google-signin-btn-container');
      if (btnContainer) {
        btnContainer.innerHTML = '';
        google.accounts.id.renderButton(
          btnContainer,
          { theme: "outline", size: "large", type: "standard", shape: "rectangular", width: 280 }
        );
      }
    } catch (err) {
      console.error("Error initializing Google Sign-In:", err);
      showToast("Invalid Client ID or Google initialization error", "error");
    }
  } else {
    if (activeContainer) activeContainer.style.display = 'none';
    if (configContainer) configContainer.style.display = 'block';
  }
}

function saveGoogleClientId(clientId) {
  const cleanId = clientId.trim();
  if (!cleanId) {
    showToast("Please enter a valid Google Client ID", "error");
    return false;
  }
  localStorage.setItem('vasooli_google_client_id', cleanId);
  initGoogleSignIn();
  showToast("Google Client ID saved!");
  return true;
}


// Sign out handler
function signOut() {
  if (confirm("Sign out of cloud sync? Your local data will be preserved.")) {
    localStorage.removeItem('vasooli_current_user');
    localStorage.removeItem('vasooli_last_sync');
    localStorage.removeItem('vasooli_offline_mode');
    
    currentUser = null;
    handleAuthState(false);
    
    // Reload local data Fallback
    loadLocalDataFallback();
    renderDashboardSelectors();
    renderApp();
    showToast("Signed out. Using local storage.");
  }
}

// Load Custom and Default Dashboards
async function loadDashboards() {
  const localDashboards = localStorage.getItem('vasooli_dashboards');
  if (localDashboards) {
    dashboards = JSON.parse(localDashboards);
  } else {
    dashboards = [...defaultDashboards];
    localStorage.setItem('vasooli_dashboards', JSON.stringify(dashboards));
  }

  if (!dashboards.some(d => d.id === currentDashboard)) {
    currentDashboard = dashboards[0]?.id || 'udhar';
  }
}

// Render dynamic dashboard tab selector list
function renderDashboardSelectors() {
  if (!dashSelectorList) return;
  dashSelectorList.innerHTML = '';

  dashboards.forEach(dash => {
    const btn = document.createElement('button');
    btn.className = `dash-selector-btn ${currentDashboard === dash.id ? 'active' : ''}`;
    btn.dataset.dash = dash.id;
    if (currentDashboard === dash.id) {
      btn.style.setProperty('--dash-color', dash.color);
    }
    btn.innerHTML = `<i class="${dash.icon || 'fa-solid fa-folder'}"></i> ${dash.name}`;

    btn.addEventListener('click', () => {
      currentDashboard = dash.id;

      // Toggle body classes for theme shifts
      if (isHouseDashboard(currentDashboard)) {
        bodyEl.classList.add('dash-house-active');
      } else {
        bodyEl.classList.remove('dash-house-active');
      }

      currentPersonFilter = 'all';
      populatePersonSelect();
      renderDashboardSelectors();
      renderApp();
    });

    dashSelectorList.appendChild(btn);
  });

  // Append the Add Dashboard '+' button
  const addBtn = document.createElement('button');
  addBtn.className = 'dash-selector-btn-add';
  addBtn.id = 'btn-add-dashboard';
  addBtn.title = 'Create New Dashboard';
  addBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;

  addBtn.addEventListener('click', () => {
    dashboardModal.classList.add('active');
  });

  dashSelectorList.appendChild(addBtn);

  // Dynamic ambient background glow shift to match selected dashboard color
  const activeDashObj = dashboards.find(d => d.id === currentDashboard);
  if (activeDashObj) {
    const glassBg = document.querySelector('.glass-bg');
    if (glassBg) {
      const dashColor = activeDashObj.color || '#6366f1';
      let r = 99, g = 102, b = 241;
      if (dashColor.startsWith('#')) {
        const hex = dashColor.substring(1);
        if (hex.length === 6) {
          r = parseInt(hex.substring(0, 2), 16);
          g = parseInt(hex.substring(2, 4), 16);
          b = parseInt(hex.substring(4, 6), 16);
        }
      }
      const opacity1 = bodyEl.classList.contains('dark-theme') ? 0.15 : 0.08;
      const opacity2 = bodyEl.classList.contains('dark-theme') ? 0.12 : 0.06;
      glassBg.style.backgroundImage = `
        radial-gradient(circle at 10% 20%, rgba(${r}, ${g}, ${b}, ${opacity1}) 0%, transparent 40%),
        radial-gradient(circle at 80% 80%, rgba(217, 70, 239, ${opacity2}) 0%, transparent 45%)
      `;
    }
  }
}

// Create a new custom dashboard
async function createDashboard(name, icon, color) {
  const id = 'dash-' + Date.now();
  const newDash = { id, name, icon, color };
  dashboards.push(newDash);

  localStorage.setItem('vasooli_dashboards', JSON.stringify(dashboards));

  if (currentUser) {
    saveDataToCloud();
  }

  currentDashboard = id;
  populatePersonSelect();
  renderDashboardSelectors();
  renderApp();
  showToast(`Dashboard "${name}" created!`);
}

// Automatically remove duplicates based on transaction details
function deduplicateTransactions() {
  const seen = new Set();
  const unique = [];
  let updated = false;

  transactions.forEach(tx => {
    // Generate a unique key ignoring ID, so duplicate content is matched
    const key = `${tx.date}_${tx.person}_${tx.category}_${tx.amount}_${tx.type}_${(tx.mode || '').toLowerCase()}_${(tx.description || '').toLowerCase()}_${tx.status}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(tx);
    } else {
      updated = true;
      console.log("Removing duplicate transaction:", tx);
    }
  });

  if (updated) {
    transactions = unique;
    saveTransactions();
  }
  return updated;
}

// Overwrite and force clean udhar category data once to match new spreadsheet image exactly
function forceOverwriteUdhar() {
  const flagKey = 'vasooli_force_overwrite_udhar_v5';
  if (localStorage.getItem(flagKey) === 'true') return false;

  // 1. Remove all category === 'udhar'
  transactions = transactions.filter(t => t.category !== 'udhar');

  // 2. Fetch all udhar transactions from defaultTransactions
  const newUdhar = defaultTransactions.filter(t => t.category === 'udhar');

  // 3. Append them
  transactions = [...transactions, ...newUdhar];

  // 4. Save
  saveTransactions();

  // 5. Mark flag
  localStorage.setItem(flagKey, 'true');
  console.log("Forced overwrite of Mohit Personal entries completed!");
  return true;
}

// Overwrite and force clean house category data once to match split house expenses image exactly
function forceOverwriteHouse() {
  const flagKey = 'vasooli_force_overwrite_house_v5';
  if (localStorage.getItem(flagKey) === 'true') return false;

  // 1. Remove all category === 'house'
  transactions = transactions.filter(t => t.category !== 'house');

  // 2. Fetch all house transactions from defaultTransactions
  const newHouse = defaultTransactions.filter(t => t.category === 'house');

  // 3. Append them
  transactions = [...transactions, ...newHouse];

  // 4. Save
  saveTransactions();

  // 5. Mark flag
  localStorage.setItem(flagKey, 'true');
  console.log("Forced overwrite of House Expenses entries completed!");
  return true;
}

// Overwrite and force reset all data to default template once
function forceResetAllData() {
  const flagKey = 'vasooli_force_reset_all_v6';
  if (localStorage.getItem(flagKey) === 'true') return false;

  // Reset to default transactions and clear custom people
  transactions = JSON.parse(JSON.stringify(defaultTransactions));
  customPeople = [];

  saveTransactions();
  saveCustomPeople();

  localStorage.setItem(flagKey, 'true');
  console.log("Forced reset of all data to default template completed!");
  
  if (currentUser) {
    setTimeout(() => saveDataToCloud(), 1500);
  }
  return true;
}

// Load Data from Cloud (online) or LocalStorage (offline)
async function loadData() {
  if (currentUser && currentUser.uhash) {
    const cloudState = await loadDataFromCloud(currentUser.uhash);
    if (cloudState) {
      if (cloudState.txs) {
        transactions = decompressTransactions(cloudState.txs);
        let cloudMigrated = false;

        transactions.forEach(tx => {
          if (tx.person === 'घर खर्च' && tx.category !== 'udhar') {
            tx.category = 'udhar';
            cloudMigrated = true;
          }
          if (tx.id.startsWith('tx-ss-') && tx.category !== 'house') {
            tx.category = 'house';
            cloudMigrated = true;
          }
        });

        if (forceOverwriteUdhar()) {
          cloudMigrated = true;
        }
        if (forceOverwriteHouse()) {
          cloudMigrated = true;
        }

        if (deduplicateTransactions()) {
          cloudMigrated = true;
        }

        if (cleanExistingDuplicates()) {
          cloudMigrated = true;
        }

        if (cloudMigrated) {
          saveTransactions();
          setTimeout(() => saveDataToCloud(), 1000);
        }
      }
      if (cloudState.dashes) {
        const cloudDashes = decompressDashboards(cloudState.dashes);
        // Ensure default dashboards are always present
        defaultDashboards.forEach(defDash => {
          if (!cloudDashes.some(d => d.id === defDash.id)) {
            cloudDashes.push(defDash);
          }
        });
        dashboards = cloudDashes;
      } else {
        dashboards = [...defaultDashboards];
      }
      if (cloudState.people) {
        customPeople = cloudState.people;
      }

      saveTransactions();
      saveCustomPeople();
      localStorage.setItem('vasooli_dashboards', JSON.stringify(dashboards));
      localStorage.setItem('vasooli_data_owner', currentUser.uhash);
    } else {
      // First time cloud setup - check if local storage belongs to offline user or different cloud user
      const owner = localStorage.getItem('vasooli_data_owner') || 'offline';
      if (owner === 'offline') {
        // Safe to migrate offline data
        loadLocalDataFallback();
        localStorage.setItem('vasooli_data_owner', currentUser.uhash);
        await saveDataToCloud();
      } else {
        // Different user's data - start fresh with default data
        transactions = [...defaultTransactions];
        dashboards = [...defaultDashboards];
        customPeople = [];
        saveTransactions();
        saveCustomPeople();
        localStorage.setItem('vasooli_dashboards', JSON.stringify(dashboards));
        localStorage.setItem('vasooli_data_owner', currentUser.uhash);
        await saveDataToCloud();
      }
    }
  } else {
    loadLocalDataFallback();
  }

  populatePersonSelect();
}

function loadLocalDataFallback() {
  const localTxs = localStorage.getItem('vasooli_transactions');
  let migrated = false;

  if (localTxs) {
    transactions = JSON.parse(localTxs);
    let localUpdated = false;

    transactions.forEach(tx => {
      if (tx.id === 'tx-5' || tx.id === 'tx-6' || tx.id === 'tx-8') {
        if (tx.category !== 'udhar') {
          tx.category = 'udhar';
          tx.person = 'घर खर्च';
          migrated = true;
        }
      } else if (tx.id.startsWith('tx-ss-')) {
        if (tx.category !== 'house') {
          tx.category = 'house';
          migrated = true;
        }
      } else if (!tx.category) {
        if (tx.person === 'घर खर्च') {
          tx.category = 'udhar';
        } else {
          tx.category = 'udhar';
        }
        migrated = true;
      }
    });

    const hasSsTx = transactions.some(t => t.id === 'tx-ss-1');
    if (!hasSsTx) {
      const ssTxs = defaultTransactions.filter(t => t.id.startsWith('tx-ss-'));
      transactions = [...ssTxs, ...transactions];
      migrated = true;
    }

    // Force Overwrite Mohit Personal entries once
    if (forceOverwriteUdhar()) {
      localUpdated = true;
    }
    // Force Overwrite House split entries once
    if (forceOverwriteHouse()) {
      localUpdated = true;
    }

    // Deduplicate
    if (deduplicateTransactions()) {
      localUpdated = true;
    }

    if (migrated || localUpdated) {
      saveTransactions();
    }
  } else {
    transactions = [...defaultTransactions];
    saveTransactions();
  }

  // Load dashboards fallback
  const localDashboards = localStorage.getItem('vasooli_dashboards');
  if (localDashboards) {
    dashboards = JSON.parse(localDashboards);
  } else {
    dashboards = [...defaultDashboards];
  }
  // Ensure default dashboards are always present
  defaultDashboards.forEach(defDash => {
    if (!dashboards.some(d => d.id === defDash.id)) {
      dashboards.push(defDash);
    }
  });
  localStorage.setItem('vasooli_dashboards', JSON.stringify(dashboards));

  if (!dashboards.some(d => d.id === currentDashboard)) {
    currentDashboard = dashboards[0]?.id || 'udhar';
  }

  const localPeople = localStorage.getItem('vasooli_custom_people');
  if (localPeople) {
    customPeople = JSON.parse(localPeople);
  } else {
    customPeople = [];
  }

  cleanExistingDuplicates();
}

function cleanExistingDuplicates() {
  let updated = false;

  // 1. Deduplicate customPeople case-insensitively
  const uniqueCustom = [];
  const seenCustom = new Set();
  customPeople.forEach(p => {
    const trimmed = p.trim();
    const lower = trimmed.toLowerCase();
    if (!seenCustom.has(lower) && trimmed !== '') {
      seenCustom.add(lower);
      uniqueCustom.push(trimmed);
    } else {
      updated = true;
    }
  });
  if (updated) {
    customPeople = uniqueCustom;
    saveCustomPeople();
  }

  // 2. Standardize transactions person casing based on customPeople first, then first seen casing
  const knownPeople = ['dalpat', 'vidya', 'घर खर्च', ...customPeople];
  transactions.forEach(tx => {
    if (tx.person) {
      const trimmed = tx.person.trim();
      if (tx.person !== trimmed) {
        tx.person = trimmed;
        updated = true;
      }
      
      const matched = knownPeople.find(kp => kp.toLowerCase() === trimmed.toLowerCase());
      if (matched && tx.person !== matched) {
        tx.person = matched;
        updated = true;
      }
    }
  });

  if (updated) {
    saveTransactions();
  }
  return updated;
}

// Save Data (Local Cache)
function saveTransactions() {
  localStorage.setItem('vasooli_transactions', JSON.stringify(transactions));
  if (!localStorage.getItem('vasooli_data_owner')) {
    localStorage.setItem('vasooli_data_owner', currentUser ? currentUser.uhash : 'offline');
  }
}

function saveCustomPeople() {
  localStorage.setItem('vasooli_custom_people', JSON.stringify(customPeople));
}

// Set up event listeners
function setupEventListeners() {
  // Theme Toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // Search input
  txSearchInput.addEventListener('input', renderApp);

  // Tab Filtering (Status Filter)
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentStatusFilter = e.target.dataset.filter;
      renderApp();
    });
  });

  // Modal open/close
  btnAddTx.addEventListener('click', () => openTxModal());
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  // Handle transaction form submit
  txForm.addEventListener('submit', handleTxFormSubmit);

  // Custom person inline adding
  btnAddCustomPerson.addEventListener('click', () => {
    customPersonInputGroup.style.display = customPersonInputGroup.style.display === 'none' ? 'block' : 'none';
  });

  btnSaveCustomPerson.addEventListener('click', addCustomPerson);

  const btnDeletePerson = document.getElementById('btn-delete-person');
  if (btnDeletePerson) {
    btnDeletePerson.addEventListener('click', () => {
      const selectedPerson = txPersonSelect.value;
      if (!selectedPerson) {
        showToast('Please select a person to delete', 'error');
        return;
      }
      if (['dalpat', 'vidya', 'घर खर्च'].includes(selectedPerson)) {
        showToast('Default members cannot be deleted', 'error');
        return;
      }
      deleteCustomPersonTrigger(null, selectedPerson);
    });
  }

  // Parser
  btnParseNotes.addEventListener('click', handleParseNotes);
  btnCancelParser.addEventListener('click', closeModals);
  btnCloseParser.addEventListener('click', closeModals);
  btnImportParsed.addEventListener('click', importSelectedParsed);
  selectAllParsedCheckbox.addEventListener('change', toggleSelectAllParsed);

  // Backup & Restore & Export
  btnExportCSV.addEventListener('click', exportToCSV);
  btnBackup.addEventListener('click', exportToJSON);
  btnRestoreTrigger.addEventListener('click', () => restoreFileInput.click());
  restoreFileInput.addEventListener('change', importFromJSON);

  // Reset Template Action
  const btnResetTemplate = document.getElementById('btn-reset-template');
  if (btnResetTemplate) {
    btnResetTemplate.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset all transactions and custom people to the clean default template data? This will wipe your current changes and sync the clean template to the cloud.")) {
        localStorage.removeItem('vasooli_force_reset_all_v6');
        forceResetAllData();
        populatePersonSelect();
        renderApp();
        showToast("Data reset to default template successfully!");
      }
    });
  }

  // Cloud Settings Modal Trigger
  btnCloudSettings.addEventListener('click', () => {
    cloudModal.classList.add('active');
  });

  // Save Client ID from Login Overlay
  if (btnSaveClientId) {
    btnSaveClientId.addEventListener('click', () => {
      const clientId = configGoogleClientId.value;
      saveGoogleClientId(clientId);
    });
  }

  // Change Client ID from Login Overlay
  if (btnChangeClientId) {
    btnChangeClientId.addEventListener('click', () => {
      localStorage.removeItem('vasooli_google_client_id');
      initGoogleSignIn();
    });
  }

  // Save Client ID from Settings Modal
  if (btnSaveSettingsClientId) {
    btnSaveSettingsClientId.addEventListener('click', () => {
      const clientId = settingsGoogleClientId.value;
      saveGoogleClientId(clientId);
    });
  }

  // Cloud modal trigger for Google Sign In overlay
  const btnModalGoogleLogin = document.getElementById('btn-modal-google-login');
  if (btnModalGoogleLogin) {
    btnModalGoogleLogin.addEventListener('click', () => {
      cloudModal.classList.remove('active');
      loginOverlay.style.display = 'flex';
    });
  }

  // Sync Now button in settings modal
  const btnSyncNow = document.getElementById('btn-sync-now');
  if (btnSyncNow) {
    btnSyncNow.addEventListener('click', async () => {
      btnSyncNow.disabled = true;
      btnSyncNow.innerHTML = `<i class="fa-solid fa-rotate fa-spin"></i> Syncing...`;
      await saveDataToCloud();
      showToast("Sync complete!");
      btnSyncNow.disabled = false;
      btnSyncNow.innerHTML = `<i class="fa-solid fa-rotate"></i> Sync Data Now`;
    });
  }

  // Disconnect / Sign out
  btnCloudDisconnect.addEventListener('click', () => {
    signOut();
    cloudModal.classList.remove('active');
  });

  btnSignOut.addEventListener('click', () => {
    signOut();
  });

  // Offline bypass
  btnLoginOffline.addEventListener('click', () => {
    localStorage.setItem('vasooli_offline_mode', 'true');
    loginOverlay.style.display = 'none';
    showToast("Running in local offline mode");
  });

  // Dynamic Dashboard creation Form
  dashboardForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = dashNameInput.value.trim();
    const icon = dashIconInput.value.trim();
    const color = dashColorInput.value;

    if (name) {
      await createDashboard(name, icon, color);
      dashboardForm.reset();
      dashboardModal.classList.remove('active');
    }
  });

  // Modal backdrop clicks
  window.addEventListener('click', (e) => {
    if (e.target === txModal || e.target === parserModal || e.target === cloudModal || e.target === dashboardModal) {
      closeModals();
    }
  });
}



// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem('vasooli_theme') || 'dark-theme';
  bodyEl.className = savedTheme;
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = bodyEl.className;
  const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  bodyEl.className = newTheme;
  localStorage.setItem('vasooli_theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = themeToggleBtn.querySelector('i');
  if (theme === 'dark-theme') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// Populate Person Select dropdown
function populatePersonSelect() {
  txPersonSelect.innerHTML = '';
  
  if (currentDashboard === 'udhar') {
    txPersonSelect.innerHTML = `
      <option value="">Select Person...</option>
      <option value="dalpat">dalpat</option>
      <option value="vidya">vidya</option>
    `;
  } else {
    txPersonSelect.innerHTML = `
      <option value="">Select Person...</option>
      <option value="घर खर्च">घर खर्च (General House)</option>
      <option value="dalpat">dalpat</option>
      <option value="vidya">vidya</option>
    `;
  }

  customPeople.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p;
    opt.textContent = p;
    txPersonSelect.appendChild(opt);
  });
}

// Add Custom Person/Category
function addCustomPerson() {
  const newPerson = txCustomPersonInput.value.trim();
  if (!newPerson) {
    showToast('Please enter a valid name', 'error');
    return;
  }

  const allPeople = ['dalpat', 'vidya', 'घर खर्च', ...customPeople];
  if (allPeople.some(p => p.toLowerCase() === newPerson.toLowerCase())) {
    showToast('Person or Category already exists', 'error');
    return;
  }

  customPeople.push(newPerson);
  saveCustomPeople();
  populatePersonSelect();
  
  // Set the newly created person as selected
  txPersonSelect.value = newPerson;
  txCustomPersonInput.value = '';
  customPersonInputGroup.style.display = 'none';
  showToast(`Added and selected "${newPerson}"`);
}

// Delete Custom Person
async function deleteCustomPersonTrigger(e, name) {
  if (e && e.stopPropagation) {
    e.stopPropagation(); // Prevent filtering transactions by this member
  }

  // Count transactions for this person
  const txCount = transactions.filter(t => t.person.toLowerCase() === name.toLowerCase()).length;
  
  let confirmMsg = `Are you sure you want to remove "${name}" from custom people?`;
  if (txCount > 0) {
    confirmMsg = `"${name}" has ${txCount} transaction(s). Removing them will NOT delete their transactions, but they will be removed from your list of custom people. Proceed?`;
  }

  if (confirm(confirmMsg)) {
    const originalCustomPeople = [...customPeople];
    customPeople = customPeople.filter(p => p.toLowerCase() !== name.toLowerCase());
    saveCustomPeople();

    if (currentUser) {
      try {
        await saveDataToCloud();
        showToast(`Removed "${name}"`);
      } catch (err) {
        console.error("Error syncing custom people deletion to cloud:", err);
        customPeople = originalCustomPeople; // rollback
        saveCustomPeople();
        showToast("Failed to sync deletion with cloud. Check connection.", "error");
        return;
      }
    } else {
      showToast(`Removed "${name}"`);
    }

    // Refresh UI
    populatePersonSelect();
    renderApp();
  }
}
window.deleteCustomPersonTrigger = deleteCustomPersonTrigger;

// Settle / Recover Transaction quick action
async function settleTransaction(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;

  const oldStatus = tx.status;
  if (tx.status === 'recovered') {
    tx.status = 'pending';
  } else {
    tx.status = 'recovered';
  }

  saveTransactions();

  if (currentUser) {
    try {
      await saveDataToCloud();
      showToast(tx.status === 'recovered' ? 'Marked transaction as Recovered (वसूल हो गया)' : 'Marked transaction as Pending');
    } catch (err) {
      console.error("Error updating transaction status in cloud:", err);
      tx.status = oldStatus; // rollback
      saveTransactions();
      showToast("Failed to update cloud. Check connection.", "error");
      return;
    }
  } else {
    showToast(tx.status === 'recovered' ? 'Marked transaction as Recovered (वसूल हो गया)' : 'Marked transaction as Pending');
  }
  
  renderApp();
}

function isCreditCardPayment(mode) {
  if (!mode) return false;
  const m = mode.toLowerCase();
  return m.includes('credit card') || m.includes('icici') || m.includes('cc');
}

async function toggleCcPaymentStatus(id) {
  const tx = transactions.find(t => t.id === id);
  if (!tx) return;
  
  const oldCcPaid = tx.ccPaid;
  tx.ccPaid = !tx.ccPaid;

  saveTransactions();

  if (currentUser) {
    try {
      await saveDataToCloud();
      showToast(tx.ccPaid ? 'Marked Credit Card bill as Paid to Bank' : 'Marked Credit Card bill as Unpaid to Bank');
    } catch (err) {
      console.error("Error updating CC payment status in cloud:", err);
      tx.ccPaid = oldCcPaid; // rollback
      saveTransactions();
      showToast("Failed to update cloud. Check connection.", "error");
      return;
    }
  } else {
    showToast(tx.ccPaid ? 'Marked Credit Card bill as Paid to Bank' : 'Marked Credit Card bill as Unpaid to Bank');
  }
  renderApp();
}
window.toggleCcPaymentStatus = toggleCcPaymentStatus;

// Open Form Modal to Add or Edit
function openTxModal(tx = null) {
  txForm.reset();
  customPersonInputGroup.style.display = 'none';

  // Force Category dropdown to match the active dashboard and disable it to prevent accidental changes
  const categorySelect = document.getElementById('tx-category');
  categorySelect.innerHTML = dashboards.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
  categorySelect.value = tx ? (tx.category || 'udhar') : currentDashboard;
  categorySelect.disabled = true;

  if (tx) {
    document.getElementById('modal-title').textContent = 'Edit Transaction';
    document.getElementById('tx-id').value = tx.id;
    document.getElementById('tx-person').value = tx.person;
    document.getElementById('tx-amount').value = tx.amount;
    document.getElementById('tx-date').value = tx.date;
    document.getElementById('tx-type').value = tx.type;
    document.getElementById('tx-mode').value = tx.mode || '';
    document.getElementById('tx-description').value = tx.description;
  } else {
    document.getElementById('modal-title').textContent = 'Add Transaction';
    document.getElementById('tx-id').value = '';
    document.getElementById('tx-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('tx-type').value = 'lent';
  }

  txModal.classList.add('active');
}

// Close All Modals
function closeModals() {
  txModal.classList.remove('active');
  parserModal.classList.remove('active');
  if (cloudModal) cloudModal.classList.remove('active');
  if (dashboardModal) dashboardModal.classList.remove('active');
}

// Form Submission (Add/Edit)
async function handleTxFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('tx-id').value;
  const category = document.getElementById('tx-category').value;
  let person = document.getElementById('tx-person').value;
  const amount = parseFloat(document.getElementById('tx-amount').value);
  const date = document.getElementById('tx-date').value;
  const type = document.getElementById('tx-type').value;
  const mode = document.getElementById('tx-mode').value.trim() || 'Cash';
  const description = document.getElementById('tx-description').value.trim();

  // Auto-default person to 'घर खर्च' if category is house and no person selected
  if (!person && category === 'house') {
    person = 'घर खर्च';
  }

  if (!person || isNaN(amount) || amount <= 0 || !date || !description) {
    showToast('Please fill all required fields correctly', 'error');
    return;
  }

  let targetTx = null;
  let isEdit = false;
  let originalTransactions = [...transactions];

  if (id) {
    // Edit existing
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      isEdit = true;
      const oldStatus = transactions[index].status || 'pending';
      const oldCcPaid = transactions[index].ccPaid || false;
      targetTx = { id, date, person, category, amount, type, mode, description, status: oldStatus, ccPaid: oldCcPaid };
      transactions[index] = targetTx;
    }
  } else {
    // Add new
    targetTx = {
      id: 'tx-' + Date.now(),
      date,
      person,
      category,
      amount,
      type,
      mode,
      description,
      status: 'pending'
    };
    transactions.unshift(targetTx);
  }

  saveTransactions();

  if (currentUser && targetTx) {
    try {
      await saveDataToCloud();
      showToast(isEdit ? 'Transaction updated successfully' : 'Transaction added successfully');
    } catch (err) {
      console.error("Error saving transaction to cloud:", err);
      transactions = originalTransactions;
      saveTransactions();
      showToast("Failed to save transaction to cloud. Check connection.", "error");
      return;
    }
  } else {
    showToast(isEdit ? 'Transaction updated successfully' : 'Transaction added successfully');
  }

  closeModals();
  renderApp();
}

// Delete Transaction
async function deleteTransaction(id) {
  if (confirm('Are you sure you want to delete this transaction?')) {
    const tx = transactions.find(t => t.id === id);
    if (!tx) return;

    const originalTransactions = [...transactions];
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();

    if (currentUser) {
      try {
        await saveDataToCloud();
        showToast('Transaction deleted');
      } catch (err) {
        console.error("Error deleting transaction in cloud:", err);
        transactions = originalTransactions;
        saveTransactions();
        showToast("Failed to delete transaction from cloud. Check connection.", "error");
        return;
      }
    } else {
      showToast('Transaction deleted');
    }
    renderApp();
  }
}

// Toast Notification
function showToast(message, type = 'success') {
  toastMessageEl.textContent = message;
  toastEl.className = 'toast active';
  
  if (type === 'success') {
    toastEl.classList.add('toast-success');
  } else if (type === 'error') {
    toastEl.classList.add('toast-error');
  }

  setTimeout(() => {
    toastEl.classList.remove('active');
  }, 3000);
}

// --- SMART TEXT PARSER LOGIC ---

// Parse text input
function handleParseNotes() {
  const text = rawNotesInput.value.trim();
  if (!text) {
    showToast('Please enter some notes to parse', 'error');
    return;
  }

  const lines = text.split('\n');
  parsedTransactionsBuffer = [];

  lines.forEach((line, index) => {
    const parsed = parseSingleNoteLine(line);
    if (parsed) {
      parsed.id = 'parsed-' + index + '-' + Date.now();
      parsed.selected = true; // Selected by default
      parsedTransactionsBuffer.push(parsed);
    }
  });

  if (parsedTransactionsBuffer.length === 0) {
    showToast('Could not extract any valid transactions from the text', 'error');
    return;
  }

  renderParserModal();
  parserModal.classList.add('active');
}

// Compile dynamic known people
function getKnownPeople() {
  const peopleSet = new Set(['dalpat', 'vidya', 'घर खर्च']);
  customPeople.forEach(p => peopleSet.add(p.trim()));
  transactions.forEach(t => {
    if (t.person) peopleSet.add(t.person.trim());
  });
  return Array.from(peopleSet);
}

// Parser Engine
function parseSingleNoteLine(line) {
  line = line.trim();
  if (!line) return null;

  let amount = 0;
  let description = '';
  let person = ''; // Default to empty string instead of 'dalpat'
  let category = 'udhar'; // Default
  let mode = 'Cash'; // Default
  let type = 'lent'; // Default

  // Check for tab-separated (from Excel/Sheets copy-paste)
  if (line.includes('\t')) {
    const cols = line.split('\t');
    
    // Column 1 is description + amount (e.g. "1500 given to nannu friends" or "707 Jio Air Fiber Recharge")
    const descCol = cols[0] ? cols[0].trim() : '';
    // Column 2 is person name (e.g. "dalpat", "घर खर्च", "vidya")
    person = cols[1] ? cols[1].trim() : '';
    // Column 3 is payment mode (e.g. "Cash", "Amazon Reward", "Upi Lite phonepe")
    mode = cols[2] ? cols[2].trim() : 'Cash';

    // Parse amount from descCol (usually starts with a number)
    const amountMatch = descCol.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
    if (amountMatch) {
      amount = parseFloat(amountMatch[1]);
      description = amountMatch[2].trim();
    } else {
      // Amount could be anywhere in the text
      const inlineAmountMatch = descCol.match(/(\d+(?:\.\d+)?)/);
      if (inlineAmountMatch) {
        amount = parseFloat(inlineAmountMatch[1]);
      }
      description = descCol;
    }
  } else {
    // Regular text line parsing (unstructured note)
    // Extract first number found as amount
    const amountMatch = line.match(/(?:rs\.?|inr|₹)?\s*(\d+(?:\.\d+)?)/i);
    if (amountMatch) {
      amount = parseFloat(amountMatch[1]);
    }

    // Detect person using dynamically compiled list of known people
    const knownPeople = getKnownPeople();
    let matchedPerson = null;

    // Sort known people by length descending to match longer names first
    const sortedKnownPeople = [...knownPeople].sort((a, b) => b.length - a.length);

    for (const p of sortedKnownPeople) {
      let searchTerms = [p];
      if (p === 'घर खर्च') {
        searchTerms.push('ghar kharch', 'ghar', 'house');
      }
      
      let matched = false;
      for (const term of searchTerms) {
        const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp('\\b' + escapedTerm + '\\b', 'i');
        if (reg.test(line)) {
          matchedPerson = p;
          matched = true;
          break;
        }
      }
      if (matched) break;
    }

    if (matchedPerson) {
      person = matchedPerson;
    } else {
      // Look for patterns like "to [Name]" or "given to [Name]" or "for [Name]" or "from [Name]"
      const nameMatch = line.match(/(?:to|given\s+to|for|from)\s+([a-zA-Z\u0900-\u097F]+)/i);
      if (nameMatch) {
        const candidate = nameMatch[1].trim().toLowerCase();
        // Check if the candidate is not a common keyword
        const stopWords = ['cash', 'upi', 'gpay', 'phonepe', 'pay', 'recharge', 'fresh', 'canteen', 'medicine', 'blinkit', 'vegetable', 'water', 'petrol', 'scooty', 'cooler', 'ghee', 'khopra', 'thandai', 'friends', 'friend', 'rewards', 'reward', 'amazon'];
        if (!stopWords.includes(candidate) && candidate.length > 2) {
          // Capitalize candidate first letter
          person = nameMatch[1].trim().charAt(0).toUpperCase() + nameMatch[1].trim().slice(1);
        }
      }
    }

    // Detect payment mode
    const modesList = [
      { key: 'Amazon Reward', regex: /amazon\s*reward/i },
      { key: 'UPI PhonePe', regex: /phonepe|upi/i },
      { key: 'GPay', regex: /gpay|google\s*pay/i },
      { key: 'Credit Card', regex: /credit\s*card/i },
      { key: 'Cash', regex: /cash/i }
    ];

    for (const m of modesList) {
      if (m.regex.test(line)) {
        mode = m.key;
        break;
      }
    }

    // Build description: remove amount and person/mode names to avoid clutter
    let descTemp = line;
    if (amountMatch) {
      descTemp = descTemp.replace(amountMatch[0], '');
    }
    
    // Remove detected person and synonyms from description
    const searchTermsToRemove = [];
    if (person) {
      searchTermsToRemove.push(person);
      if (person === 'घर खर्च') {
        searchTermsToRemove.push('ghar kharch', 'ghar', 'house');
      }
    }
    // Also remove default categories and common words
    const removeKeywords = [...searchTermsToRemove, 'dalpat', 'vidya', 'cash', 'amazon\\s*reward', 'phonepe', 'google\\s*pay', 'gpay', 'upi'];
    
    removeKeywords.forEach(keyword => {
      const escaped = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const reg = new RegExp('\\b' + escaped + '\\b', 'gi');
      descTemp = descTemp.replace(reg, '');
    });
                       
    description = descTemp.replace(/\s+/g, ' ').trim();
    if (!description) {
      description = "Uncategorized transaction";
    }
  }

  // Detect type (if description contains 'return', 'give back', 'settle', 'वापस')
  const returnRegex = /return|give\s*back|settle|recovered|received|वापस|mila/i;
  if (returnRegex.test(line)) {
    type = 'recovered';
  }

  // Default category to match active dashboard view to prevent mixing them
  category = currentDashboard;

  return {
    date: new Date().toISOString().split('T')[0],
    person,
    category,
    amount,
    description,
    mode,
    type,
    isValid: amount > 0 && person.length > 0
  };
}

// Render parser modal preview table
function renderParserModal() {
  parsedTxBody.innerHTML = '';
  
  parsedTransactionsBuffer.forEach((tx, idx) => {
    const tr = document.createElement('tr');
    if (!tx.isValid) {
      tr.className = 'parsed-row-invalid';
    }

    tr.innerHTML = `
      <td>
        <input type="checkbox" class="parsed-select" data-id="${tx.id}" ${tx.selected && tx.isValid ? 'checked' : ''} ${!tx.isValid ? 'disabled' : ''}>
      </td>
      <td>
        <input type="text" class="parsed-edit-field parsed-person" data-id="${tx.id}" data-field="person" value="${tx.person}">
      </td>
      <td>
        <select class="parsed-edit-field parsed-category" data-id="${tx.id}" data-field="category">
          <option value="udhar" ${tx.category === 'udhar' ? 'selected' : ''}>Mohit वसूली Personal</option>
          <option value="house" ${tx.category === 'house' ? 'selected' : ''}>उधार (वसूली / घर खर्च)</option>
        </select>
      </td>
      <td>
        <input type="number" class="parsed-edit-field parsed-amount text-right" data-id="${tx.id}" data-field="amount" value="${tx.amount}">
      </td>
      <td>
        <input type="text" class="parsed-edit-field parsed-desc" data-id="${tx.id}" data-field="description" value="${tx.description}">
      </td>
      <td>
        <input type="text" class="parsed-edit-field parsed-mode" data-id="${tx.id}" data-field="mode" value="${tx.mode}">
      </td>
      <td>
        <select class="parsed-edit-field parsed-type" data-id="${tx.id}" data-field="type">
          <option value="lent" ${tx.type === 'lent' ? 'selected' : ''}>Lent</option>
          <option value="recovered" ${tx.type === 'recovered' ? 'selected' : ''}>Recovered</option>
        </select>
      </td>
    `;
    
    // Add inline event listeners to keep buffer updated when Mohit edits fields in the preview table
    tr.querySelectorAll('.parsed-edit-field').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const field = e.target.dataset.field;
        let value = e.target.value;

        const bufferTx = parsedTransactionsBuffer.find(t => t.id === id);
        if (bufferTx) {
          if (field === 'amount') {
            value = parseFloat(value) || 0;
          }
          bufferTx[field] = value;
          bufferTx.isValid = bufferTx.amount > 0 && bufferTx.person.trim().length > 0;
          
          // Re-evaluate select checkboxes and validation styles
          if (!bufferTx.isValid) {
            tr.className = 'parsed-row-invalid';
            tr.querySelector('.parsed-select').checked = false;
            tr.querySelector('.parsed-select').disabled = true;
            bufferTx.selected = false;
          } else {
            tr.className = '';
            tr.querySelector('.parsed-select').disabled = false;
          }
          updateParserSummary();
        }
      });
    });

    tr.querySelector('.parsed-select').addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      const bufferTx = parsedTransactionsBuffer.find(t => t.id === id);
      if (bufferTx) {
        bufferTx.selected = e.target.checked;
        updateParserSummary();
      }
    });

    parsedTxBody.appendChild(tr);
  });

  updateParserSummary();
}

function updateParserSummary() {
  const selectedCount = parsedTransactionsBuffer.filter(t => t.selected && t.isValid).length;
  parsedSummaryText.textContent = `${selectedCount} item(s) selected for import`;
  selectAllParsedCheckbox.checked = selectedCount === parsedTransactionsBuffer.filter(t => t.isValid).length && selectedCount > 0;
}

function toggleSelectAllParsed() {
  const checked = selectAllParsedCheckbox.checked;
  parsedTransactionsBuffer.forEach(tx => {
    if (tx.isValid) {
      tx.selected = checked;
    }
  });
  
  document.querySelectorAll('.parsed-select').forEach(checkbox => {
    if (!checkbox.disabled) {
      checkbox.checked = checked;
    }
  });

  updateParserSummary();
}

// Bulk Import
async function importSelectedParsed() {
  const toImport = parsedTransactionsBuffer.filter(tx => tx.selected && tx.isValid);
  if (toImport.length === 0) {
    showToast('No valid items selected to import', 'error');
    return;
  }

  const originalTransactions = [...transactions];
  const originalCustomPeople = [...customPeople];

  const newTransactions = [];
  toImport.forEach(item => {
    const knownPeople = getKnownPeople();
    const itemPerson = item.person.trim();
    
    // Find case-insensitive match in known people to standardize casing
    const matchedPerson = knownPeople.find(kp => kp.toLowerCase() === itemPerson.toLowerCase());
    const finalPerson = matchedPerson ? matchedPerson : itemPerson;

    const baseKnown = ['dalpat', 'vidya', 'घर खर्च'];
    if (finalPerson && !baseKnown.includes(finalPerson) && !customPeople.some(p => p.toLowerCase() === finalPerson.toLowerCase())) {
      customPeople.push(finalPerson);
    }

    const newTx = {
      id: 'tx-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now(),
      date: item.date,
      person: finalPerson, // Use standardized casing
      category: item.category || 'udhar',
      amount: item.amount,
      type: item.type,
      mode: item.mode,
      description: item.description,
      status: item.type === 'recovered' ? 'recovered' : 'pending'
    };

    newTransactions.push(newTx);
  });

  // Prepend new transactions to local state
  newTransactions.forEach(newTx => {
    transactions.unshift(newTx);
  });

  saveTransactions();
  saveCustomPeople();

  if (currentUser) {
    try {
      await saveDataToCloud();
    } catch (err) {
      console.error("Error bulk importing transactions to cloud:", err);
      // rollback
      transactions = originalTransactions;
      customPeople = originalCustomPeople;
      saveTransactions();
      saveCustomPeople();
      populatePersonSelect();
      showToast("Failed to sync imported transactions to cloud. Check connection.", "error");
      return;
    }
  }

  populatePersonSelect();
  rawNotesInput.value = ''; // clear input
  closeModals();
  renderApp();
  showToast(`Successfully imported ${toImport.length} transactions!`);
}


// --- EXPORTS & BACKUPS ---

// Export to CSV format
function exportToCSV() {
  if (transactions.length === 0) {
    showToast('No data to export', 'error');
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Date,Person,Category,Description,Payment Mode,Amount,Type,Status\n";

  transactions.forEach(tx => {
    const row = [
      tx.date,
      `"${tx.person.replace(/"/g, '""')}"`,
      `"${(tx.category || 'udhar').replace(/"/g, '""')}"`,
      `"${tx.description.replace(/"/g, '""')}"`,
      `"${(tx.mode || 'Cash').replace(/"/g, '""')}"`,
      tx.amount,
      tx.type,
      tx.status || 'pending'
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Mohit_Vasooli_Data_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('CSV file downloaded successfully');
}

// Export as JSON backup
function exportToJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
    transactions,
    customPeople
  }, null, 2));

  const link = document.createElement("a");
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `Mohit_Vasooli_Backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Backup JSON downloaded');
}

// Restore from JSON backup
function importFromJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const parsedData = JSON.parse(event.target.result);
      if (parsedData.transactions && Array.isArray(parsedData.transactions)) {
        transactions = parsedData.transactions;
        customPeople = parsedData.customPeople || [];
        
        saveTransactions();
        saveCustomPeople();
        populatePersonSelect();
        renderApp();
        showToast('Data restored successfully!');
      } else {
        showToast('Invalid backup file structure', 'error');
      }
    } catch (err) {
      showToast('Error reading backup file', 'error');
    }
  };
  reader.readAsText(file);
}

// --- RENDER CORE LOGIC ---

function renderApp() {
  calculateMetrics();
  renderMembers();
  renderTransactionsTable();
}

function calculateMetrics() {
  let totalPending = 0;
  let totalCcDues = 0;
  let totalPendingCcDues = 0;

  // Recalculate memberPendingSums globally for the current dashboard
  memberPendingSums = {};

  transactions.forEach(tx => {
    const amt = parseFloat(tx.amount) || 0;
    
    // Process only if it matches current dashboard category
    if (tx.category === currentDashboard) {
      if (tx.type === 'lent') {
        if (!memberPendingSums[tx.person]) memberPendingSums[tx.person] = 0;
        
        if (tx.status !== 'recovered') {
          memberPendingSums[tx.person] += amt;
          totalPending += amt;
        }

        // CC dues calculation
        if (isCreditCardPayment(tx.mode) && !tx.ccPaid) {
          totalCcDues += amt;
          if (tx.status !== 'recovered') {
            totalPendingCcDues += amt;
          }
        }
      } else if (tx.type === 'recovered') {
        if (!memberPendingSums[tx.person]) memberPendingSums[tx.person] = 0;
        memberPendingSums[tx.person] -= amt;
        totalPending -= amt;
      }
    }
  });

  // Ensure totalPending is not negative
  totalPending = Math.max(0, totalPending);

  // Own funds
  let totalOwnFunds = Math.max(0, totalPending - totalPendingCcDues);

  // Hide Card 4 (Total House Expenses) and make the metrics grid adapt
  const cardHouseExtra = document.getElementById('metric-card-house-extra');
  if (cardHouseExtra) {
    cardHouseExtra.style.display = 'none';
  }

  // Hide Credit Card Dues Card on the House expenses dashboard
  const ccCard = document.querySelector('.cc-dues-card');
  if (ccCard) {
    if (isHouseDashboard(currentDashboard)) {
      ccCard.style.display = 'none';
    } else {
      ccCard.style.display = '';
    }
  }

  // Update Metrics Labels dynamically based on Dashboard Mode
  const labelPending = document.querySelector('.recovery-card .metric-label');
  const labelCc = document.querySelector('.cc-dues-card .metric-label');
  const labelOwn = document.querySelector('.own-funds-card .metric-label');

  const activeDashObj = dashboards.find(d => d.id === currentDashboard) || { name: 'Vasooli' };
  if (labelPending) labelPending.textContent = `${activeDashObj.name} वसूली`;
  if (labelCc) labelCc.textContent = `ICICI CC Dues (${activeDashObj.name})`;
  if (labelOwn) labelOwn.textContent = 'खुद का पैसा (Own Capital out)';

  metricTotalPending.textContent = `₹${totalPending.toLocaleString('en-IN')}`;
  metricCcDues.textContent = `₹${totalCcDues.toLocaleString('en-IN')}`;
  metricOwnFunds.textContent = `₹${totalOwnFunds.toLocaleString('en-IN')}`;
}

function renderMembers() {
  membersListEl.innerHTML = '';
  
  // Find distinct members for current dashboard
  const membersSet = new Set();
  
  // Default members
  membersSet.add('dalpat');
  membersSet.add('vidya');

  transactions.forEach(t => {
    if (t.category === currentDashboard) {
      membersSet.add(t.person);
    }
  });

  customPeople.forEach(p => {
    // Custom registered people are added to Personal Loans dashboard
    // and House Expenses dashboard if they have matching transactions
    const hasTx = transactions.some(t => t.person === p && t.category === currentDashboard);
    if (hasTx || currentDashboard === 'udhar') {
      membersSet.add(p);
    }
  });

  const members = Array.from(membersSet).filter(Boolean);

  members.forEach(member => {
    // Calculate totals for this member in current dashboard
    let count = 0;
    let pendingAmount = 0;

    transactions.forEach(tx => {
      if (tx.person === member && tx.category === currentDashboard) {
        count++;
        const amt = parseFloat(tx.amount) || 0;
        if (tx.type === 'lent') {
          if (tx.status !== 'recovered') {
            pendingAmount += amt;
          }
        } else if (tx.type === 'recovered') {
          pendingAmount -= amt;
        }
      }
    });

    pendingAmount = Math.max(0, pendingAmount);

    const initials = member.substring(0, 2).toUpperCase();

    const memberCard = document.createElement('div');
    memberCard.className = `member-card ${currentPersonFilter === member ? 'active' : ''}`;
    
    const activeDashObj = dashboards.find(d => d.id === currentDashboard) || { name: 'Vasooli' };
    let subsplitText = `${activeDashObj.name}: ₹${pendingAmount.toLocaleString('en-IN')}`;

    const isCustom = !['dalpat', 'vidya', 'घर खर्च'].includes(member);
    const deleteHtml = isCustom ? `
      <button class="member-delete-btn" onclick="deleteCustomPersonTrigger(event, '${member.replace(/'/g, "\\'")}')" title="Delete Custom Person">
        <i class="fa-solid fa-trash-can" style="font-size: 0.85rem;"></i>
      </button>
    ` : '';

    memberCard.innerHTML = `
      <div class="member-left">
        <div class="member-avatar">${initials}</div>
        <div>
          <span class="member-name">${member}</span>
          <span class="member-tx-count">${count} transaction(s)</span>
          <span class="member-sub-splits">${subsplitText}</span>
        </div>
      </div>
      <div class="member-right" style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          ${deleteHtml}
          <span class="member-amount ${pendingAmount > 0 ? 'amount-lent' : 'text-muted'}">₹${pendingAmount.toLocaleString('en-IN')}</span>
        </div>
        <span class="member-tx-count">Pending</span>
      </div>
    `;

    memberCard.addEventListener('click', () => {
      if (currentPersonFilter === member) {
        currentPersonFilter = 'all';
      } else {
        currentPersonFilter = member;
      }
      renderApp();
    });

    membersListEl.appendChild(memberCard);
  });
}

function renderTransactionsTable() {
  txTableBody.innerHTML = '';
  
  // Rename table headers based on active dashboard
  const thPerson = document.getElementById('th-person');
  const thDesc = document.getElementById('th-desc');
  if (thPerson && thDesc) {
    if (isHouseDashboard(currentDashboard)) {
      thPerson.textContent = 'घर खर्च';
      thDesc.textContent = 'उधार';
    } else {
      thPerson.textContent = 'Person/Category';
      thDesc.textContent = 'Description';
    }
  }

  const search = txSearchInput.value.toLowerCase();

  // Filter transactions
  let filtered = transactions.filter(tx => {
    // Category Filter (Current Dashboard View)
    if (tx.category !== currentDashboard) return false;

    // Person Filter
    if (currentPersonFilter !== 'all') {
      if (tx.person !== currentPersonFilter) return false;
    }

    // Status Filter (All, Pending, Recovered)
    if (currentStatusFilter !== 'all') {
      if (currentStatusFilter === 'pending') {
        if (tx.status === 'recovered' || tx.type === 'recovered') return false;
      } else if (currentStatusFilter === 'recovered') {
        if (tx.status !== 'recovered' && tx.type !== 'recovered') return false;
      }
    }

    // Search filter
    if (search) {
      const matchDesc = tx.description.toLowerCase().includes(search);
      const matchPerson = tx.person.toLowerCase().includes(search);
      const matchMode = (tx.mode || '').toLowerCase().includes(search);
      if (!matchDesc && !matchPerson && !matchMode) return false;
    }

    return true;
  });

  // Sync active tab state based on the currentStatusFilter
  tabButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === currentStatusFilter) {
      btn.classList.add('active');
    }
  });

  // Calculate pending recovery for the filtered view (lent and pending status)
  let activePendingRecovery = 0;
  filtered.forEach(tx => {
    if (tx.status !== 'recovered' && tx.type === 'lent') {
      activePendingRecovery += parseFloat(tx.amount) || 0;
    }
  });

  // Update tab pending recovery DOM
  const tabPendingRecoveryEl = document.getElementById('tab-pending-recovery');
  if (tabPendingRecoveryEl) {
    let label = 'Pending';
    if (currentPersonFilter !== 'all') {
      label = `${currentPersonFilter} Pending`;
    } else {
      const activeDashObj = dashboards.find(d => d.id === currentDashboard) || { name: 'Vasooli' };
      label = `${activeDashObj.name} Pending`;
    }

    tabPendingRecoveryEl.innerHTML = `<i class="fa-solid fa-hand-holding-dollar"></i> ${label}: <strong>₹${activePendingRecovery.toLocaleString('en-IN')}</strong>`;
  }

  // Update count badge
  txCountBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    txTableBody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted" style="padding: 2rem;">
          No transactions found.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(tx => {
    const tr = document.createElement('tr');
    
    // Class names based on person
    let personClass = 'person-generic';
    if (tx.person === 'dalpat') personClass = 'person-dalpat';
    else if (tx.person === 'vidya') personClass = 'person-vidya';
    else if (tx.person === 'घर खर्च') personClass = 'person-house';

    // Amount class
    let amtClass = 'amount-lent';
    if (tx.type === 'recovered') amtClass = 'amount-recovered';
    else if (tx.category === 'house') amtClass = 'amount-expense';

    // Status Badge
    let statusBadge = '';
    if (tx.status === 'recovered' || tx.type === 'recovered') {
      statusBadge = `<span class="status-indicator status-recovered"><i class="fa-solid fa-circle-check"></i> Recovered</span>`;
    } else {
      statusBadge = `<span class="status-indicator status-pending"><i class="fa-solid fa-circle-notch fa-spin"></i> Pending</span>`;
    }

    // Settle Action Icon (Only for lent items)
    let settleActionHtml = '';
    if (tx.type === 'lent') {
      const isSettle = tx.status === 'recovered';
      const tooltip = isSettle ? 'Mark as Unsettled' : 'Mark as Recovered';
      const icon = isSettle ? 'fa-arrow-rotate-left' : 'fa-check';
      settleActionHtml = `
        <button class="action-btn btn-settle-quick" onclick="settleTransaction('${tx.id}')" title="${tooltip}">
          <i class="fa-solid ${icon}"></i>
        </button>
      `;
    }

    // CC Toggle Action Button (Only for CC lent items)
    let ccActionHtml = '';
    const isCC = isCreditCardPayment(tx.mode);
    if (tx.type === 'lent' && isCC) {
      const isCcPaid = tx.ccPaid;
      const tooltip = isCcPaid ? 'Mark CC Bill as Unpaid to Bank' : 'Mark CC Bill as Paid to Bank';
      const activeClass = isCcPaid ? 'active' : '';
      const icon = isCcPaid ? 'fa-solid fa-credit-card' : 'fa-regular fa-credit-card';
      ccActionHtml = `
        <button class="action-btn btn-cc-toggle ${activeClass}" onclick="toggleCcPaymentStatus('${tx.id}')" title="${tooltip}">
          <i class="${icon}"></i>
        </button>
      `;
    }

    // Format mode with CC badge if applicable
    let modeHtml = `<span class="text-muted" style="font-size: 0.85rem;">${tx.mode || 'Cash'}</span>`;
    if (isCC) {
      const badgeClass = tx.ccPaid ? 'cc-paid-badge' : 'cc-unpaid-badge';
      const badgeText = tx.ccPaid ? '<i class="fa-solid fa-circle-check"></i> Paid to Bank' : '<i class="fa-solid fa-clock"></i> Unpaid to Bank';
      modeHtml += `<div style="margin-top: 4px;"><span class="${badgeClass}">${badgeText}</span></div>`;
    }

    tr.innerHTML = `
      <td class="text-muted" style="white-space: nowrap;">${formatDateString(tx.date)}</td>
      <td><span class="person-badge ${personClass}">${tx.person}</span></td>
      <td>${tx.description}</td>
      <td>${modeHtml}</td>
      <td class="text-right tx-amount-cell ${amtClass}">${tx.type === 'recovered' ? '-' : ''}₹${tx.amount.toLocaleString('en-IN')}</td>
      <td>${statusBadge}</td>
      <td class="text-center">
        <div class="action-buttons">
          ${settleActionHtml}
          ${ccActionHtml}
          <button class="action-btn btn-edit" onclick="editTransactionTrigger('${tx.id}')" title="Edit">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="action-btn btn-delete" onclick="deleteTransaction('${tx.id}')" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    `;

    txTableBody.appendChild(tr);
  });
}

// Utility formatting date
function formatDateString(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    // Return DD/MM/YYYY
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// Global triggers for table buttons
window.settleTransaction = settleTransaction;
window.deleteTransaction = deleteTransaction;
window.editTransactionTrigger = function(id) {
  const tx = transactions.find(t => t.id === id);
  if (tx) {
    openTxModal(tx);
  }
};

// Start
init();
