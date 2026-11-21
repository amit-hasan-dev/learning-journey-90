const phases=[["Python Conditions","Comparison, logical operators, nested if, validation and grade calculator."],["Loops","while, for, range, break, continue and number guessing game."],["Data Structures","Lists, tuples, sets, dictionaries and student record manager."],["Functions","Parameters, arguments, return values, scope and finance calculator."],["Files & Exceptions","String manipulation, file handling, exceptions and personal journal."],["OOP & GitHub","Classes, objects, methods, inheritance, encapsulation and library manager."],["Computer Science","Algorithms, pseudocode, flowcharts, searching, sorting and Big O."],["Mathematics","Arithmetic, fractions, ratios, algebra, logarithms, functions and graphs."],["NumPy","Arrays, indexing, slicing, numerical operations and statistics."],["Pandas","Series, DataFrames, CSV, filtering, sorting and data cleaning."],["Data Visualization","Matplotlib, charts and learning analytics dashboard."],["Machine Learning","AI/ML fundamentals, datasets, train/test, regression and Scikit-learn."],["Final Project","Personal Learning & Performance Analytics System."]];
const topics=[["Comparison operators","Learn ==, !=, >, <, >= and <=. Understand Boolean results.","Write six small comparison examples. Take two numbers as input and print all six comparisons.","Create a program that checks an age requirement."],["Logical operators","Understand and, or and not. Combine conditions.","Write truth-table examples and combine comparisons.","Create an eligibility checker using at least two conditions."],["Nested if statements","Place one decision inside another and keep logic readable.","Write nested if examples and trace each branch.","Build a grade calculator with validation."],["Input validation","Check user input and handle boundary cases.","Test empty, unexpected and edge-case values.","Improve your eligibility checker with validation."],["Condition practice","Combine comparisons, logical operators and nested decisions.","Solve five decision problems without copying solutions.","Create a discount or ticket-pricing program."],["Mini project: Grade calculator","Turn marks into a grade and clear report.","Plan rules, code and test boundary values.","Finish and document your grade calculator."],["Weekly review & assessment","Review concepts and identify gaps.","Explain operators aloud and solve a self-test.","Refactor an exercise and write a reflection."]];
const projects=["Study Time Calculator","Personal Profile Generator","Number Guessing Game","Student Record Manager","Personal Finance Calculator","Personal Journal App","Library Management System","Numerical Data Analyzer","Expense Analysis","Learning Analytics Dashboard","Personal Learning & Performance Analytics System"];
const resources=[["Harvard CS50P","https://cs50.harvard.edu/python/"],["Harvard CS50x","https://cs50.harvard.edu/x/"],["Khan Academy Math","https://www.khanacademy.org/math"],["MIT OpenCourseWare","https://ocw.mit.edu/"],["3Blue1Brown Linear Algebra","https://www.3blue1brown.com/topics/linear-algebra"],["Kaggle Learn","https://www.kaggle.com/learn"],["Kaggle Intro to ML","https://www.kaggle.com/learn/intro-to-machine-learning"],["BBC Learning English","https://www.bbc.co.uk/learningenglish"],["YouGlish","https://youglish.com/"],["GitHub Skills","https://skills.github.com/"]];
const mathTopics=["Arithmetic, fractions & ratios","Percentages, powers & logarithms","Algebra & linear equations","Functions, graphs & coordinate geometry","Logic, sets & discrete mathematics","Vectors, matrices & linear algebra","Probability & statistics"];
const key="lj90_data_v1";let S=JSON.parse(localStorage.getItem(key)||"{}");S.done||=[];S.notes||={};S.projects||={};S.math||={};S.started||=false;
const $=s=>document.querySelector(s),save=()=>{localStorage.setItem(key,JSON.stringify(S));stats()},toast=m=>{let t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2000)};
function title(d){let p=Math.min(12,Math.floor((d-1)/7));return p===0?topics[(d-1)%7][0]:p===12?"Final project milestone":phases[p][0]}
function data(d){let p=Math.min(12,Math.floor((d-1)/7));if(p===0)return topics[(d-1)%7];if(d>=85)return ["Final project milestone","Build your Personal Learning & Performance Analytics System in manageable steps.","Collect and clean a dataset, analyze progress, create charts and evaluate results.","Publish a clear GitHub README and explain what you learned."];if(d>=78)return ["Machine learning foundations","Understand AI vs ML vs deep learning, features, labels, training and testing, then try a simple model.","Explore a small dataset and follow a beginner Scikit-learn regression example.","Explain what the model learns and why data must be split for evaluation."];if(d>=57&&d<=77){let group=d<64?["NumPy arrays","Create arrays and understand dimensions, indexing and slicing.","Practice array creation, selection and operations.","Build a numerical analyzer."]:d<71?["Pandas data frames","Read tabular data and explore Series and DataFrames.","Load a CSV, inspect columns, filter and sort rows.","Clean a small dataset and summarize it."]:["Data visualization","Choose charts that make patterns easier to understand.","Create line, bar, histogram and scatter plots.","Build a learning analytics dashboard."];return group}if(d>=50)return ["Math foundations","Build confidence with mathematical foundations used in programming and data science.","Work through examples, then solve problems without looking at the solution.","Explain the concept in your own words."];if(p===6)return ["Algorithms & problem solving","Break a problem into steps using pseudocode and flowcharts. Explore search, sorting and Big O.","Write pseudocode, trace a search and compare approaches.","Explain a simple algorithm in plain English."];return [phases[p][0],phases[p][1],"Practice the main concepts with small examples and solve problems without copying.","Complete the phase's milestone project and document what you learned."]}
function gpt(d,mode="explain"){let x=data(d),prompt=`Act as my personal beginner-friendly tutor for my 90-day Python, Computer Science, Mathematics and Applied AI learning journey. Current lesson: Day ${d} — ${x[0]}. Explanation: ${x[1]}. Practice: ${x[2]}. Application: ${x[3]}. Teach in simple Bangla with necessary English technical terms. Teach step by step, give examples, check my understanding and don't immediately reveal complete solutions. Mode: ${mode}. Ask what I find confusing.`;return "https://chatgpt.com/?q="+encodeURIComponent(prompt)}
function stats(){let n=S.done.length;$("#pct").textContent=Math.round(n/90*100)+"%";$("#bar").style.width=(n/90*100)+"%";$("#count").textContent=`${n} of 90 days completed`;$("#summary").textContent=`${n} / 90`;$("#status").textContent=S.started?"In progress":"Not started";$("#date").textContent=S.startDate||"Not set";$("#streak").textContent=(S.streak||0)+" days";$("#start").textContent=S.started?"Journey started ✓":"Start my journey ↗"}
function roadmap(){$("#roadmap").innerHTML=phases.map((p,i)=>`<article class="phase"><span class="num">${String(i+1).padStart(2,"0")}</span><div><b>${p[0]}</b><p>Day ${i===12?"85–90":`${i*7+1}–${i*7+7}`} · ${p[1]}</p></div></article>`).join("")}
function lesson(){let d=+$("#daySelect").value||1,x=data(d),p=phases[Math.min(12,Math.floor((d-1)/7))];$("#lesson").innerHTML=`<small>DAY ${String(d).padStart(2,"0")} · ${p[0].toUpperCase()}</small><h2 class="lesson-title">${x[0]}</h2><p class="lesson-text">${x[1]}</p><h3>Practice task</h3><p class="lesson-text">${x[2]}</p><h3>Apply what you learned</h3><p class="lesson-text">${x[3]}</p><label class="check"><input id="lessonDone" type="checkbox" ${S.done.includes(d)?"checked":""} ${!S.started?"disabled":""}> I completed this lesson's practice</label><a class="gpt" href="${gpt(d)}" target="_blank" rel="noopener">✦ Ask GPT about this lesson ↗</a><p class="muted">ChatGPT opens with this lesson's context. Existing ChatGPT conversations are not automatically attached.</p>`;$("#lessonDone").onchange=e=>toggle(d,e.target.checked)}
function toggle(d,v){if(!S.started){toast("Start your journey first.");return}S.done=v?[...new Set([...S.done,d])]:S.done.filter(x=>x!==d);save();tracker();lesson();toast(v?"Lesson marked complete":"Completion removed")}
function tracker(){$("#days").innerHTML=Array.from({length:90},(_,i)=>`<button class="day ${S.done.includes(i+1)?"done":""}" data-d="${i+1}" ${!S.started?"disabled":""}>${String(i+1).padStart(2,"0")}</button>`).join("");document.querySelectorAll(".day").forEach(b=>b.onclick=()=>toggle(+b.dataset.d,!S.done.includes(+b.dataset.d)));$("#assessments").innerHTML=phases.map((p,i)=>`<div class="row"><span><b>Week ${i+1}</b> · ${p[0]}</span><small>${i===12?"Final review":`Day ${i*7+1}–${i*7+7}`}</small></div>`).join("")}
function space(){let n=$("#noteDay");n.innerHTML=Array.from({length:90},(_,i)=>`<option value="${i+1}">Day ${i+1} — ${title(i+1)}</option>`).join("");$("#notes").value=S.notes[n.value]||"";$("#projects").innerHTML=projects.map((p,i)=>`<label class="check"><input type="checkbox" data-p="${i}" ${S.projects[i]?"checked":""}> ${p}</label>`).join("");$("#math").innerHTML=mathTopics.map((m,i)=>`<label class="check"><input type="checkbox" data-m="${i}" ${S.math[i]?"checked":""}> ${m}</label>`).join("");$("#resources").innerHTML=resources.map(r=>`<div class="row">${r[0]} <a href="${r[1]}" target="_blank" rel="noopener">Open ↗</a></div>`).join("");$("#github").value=S.github||"";$("#githubLink").innerHTML=S.github?`<a href="${S.github}" target="_blank">Open saved repository ↗</a>`:"";$("#english").checked=!!S.english;$("#uploaded").checked=!!S.uploaded}
function render(){stats();roadmap();lesson();tracker();space()}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>go(b.dataset.tab));document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go));function go(id){document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.tab===id));document.querySelectorAll(".view").forEach(x=>x.classList.toggle("active",x.id===id));scrollTo({top:0,behavior:"smooth"})}
for(let d=1;d<=90;d++)$("#daySelect").add(new Option(`Day ${String(d).padStart(2,"0")} — ${title(d)}`,d));$("#daySelect").onchange=lesson;$("#noteDay").onchange=()=>$("#notes").value=S.notes[$("#noteDay").value]||"";
$("#start").onclick=()=>{if(!S.started){if(!confirm("Ready to begin your 90-day journey today? This will set today as Day 1."))return;S.started=true;S.startDate=new Date().toLocaleDateString(undefined,{year:"numeric",month:"short",day:"numeric"});save();render();toast("Journey started. Day 1 is open.")}else go("lessons")};
$("#saveNote").onclick=()=>{S.notes[$("#noteDay").value]=$("#notes").value;save();$("#saved").textContent="Saved on this device ✓"};
$("#projects").onchange=e=>{if(e.target.dataset.p!==undefined){S.projects[e.target.dataset.p]=e.target.checked;save()}};
$("#math").onchange=e=>{if(e.target.dataset.m!==undefined){S.math[e.target.dataset.m]=e.target.checked;save()}};
$("#english").onchange=e=>{S.english=e.target.checked;save()};$("#uploaded").onchange=e=>{S.uploaded=e.target.checked;save()};
$("#saveGithub").onclick=()=>{let u=$("#github").value.trim();if(u&&!/^https:\/\/github\.com\/.+/.test(u)){toast("Enter a valid GitHub URL");return}S.github=u;save();space();toast("Repository saved")};
$("#quiz").onclick=()=>open(gpt(+$("#daySelect").value||1,"quiz me with 5 questions, one at a time, and explain my mistakes"),"_blank","noopener");
$("#export").onclick=()=>{let a=document.createElement("a"),u=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:"application/json"}));a.href=u;a.download="learning-journey-90-backup.json";a.click();URL.revokeObjectURL(u)};
$("#import").onchange=async e=>{try{let v=JSON.parse(await e.target.files[0].text());if(!Array.isArray(v.done))throw 0;S={...S,...v};localStorage.setItem(key,JSON.stringify(S));render();toast("Backup imported")}catch{toast("Invalid backup file")}};
let promptInstall;addEventListener("beforeinstallprompt",e=>{e.preventDefault();promptInstall=e;$("#install").hidden=false});$("#install").onclick=async()=>{if(promptInstall){promptInstall.prompt();await promptInstall.userChoice;promptInstall=null}else toast("Browser menu → Add to Home screen")};
if("serviceWorker"in navigator)addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));render();
// ===== SUPABASE AUTHENTICATION SETUP =====

const rememberMeInput = document.getElementById("rememberMe");

const rememberPreferenceKey = "lj90_remember_me";
const savedRememberPreference = localStorage.getItem(rememberPreferenceKey);

if (savedRememberPreference !== null) {
  rememberMeInput.checked = savedRememberPreference === "true";
}

rememberMeInput.addEventListener("change", () => {
  localStorage.setItem(
    rememberPreferenceKey,
    String(rememberMeInput.checked)
  );
});

const authStorage = {
  getItem(key) {
    const storage = rememberMeInput.checked
      ? localStorage
      : sessionStorage;
    return storage.getItem(key);
  },

  setItem(key, value) {
    const storage = rememberMeInput.checked
      ? localStorage
      : sessionStorage;

    const otherStorage = rememberMeInput.checked
      ? sessionStorage
      : localStorage;

    otherStorage.removeItem(key);
    storage.setItem(key, value);
  },

  removeItem(key) {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }
};

const supabaseClient = window.supabase.createClient(
  window.LJ90_CONFIG.SUPABASE_URL,
  window.LJ90_CONFIG.SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: authStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

function updateAuthView(session) {
  const authGate = document.getElementById("authGate");
  authGate.hidden = !!session;document.getElementById("logout").hidden = !session;

  document.querySelectorAll("main > *").forEach(element => {
    if (element.id !== "authGate") {
      element.hidden = !session;
    }
  });
}

supabaseClient.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("Session error:", error);
    updateAuthView(null);
    return;
  }

  updateAuthView(data.session);
});

supabaseClient.auth.onAuthStateChange((_event, session) => {
  updateAuthView(session);
});

// ===== END AUTHENTICATION SETUP =====
// ===== EMAIL AUTHENTICATION =====

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const authMessage = document.getElementById("authMessage");

document.getElementById("showSignup").onclick = () => {
  loginForm.hidden = true;
  signupForm.hidden = false;
  authMessage.textContent = "Enter your email and password to create an account.";
};

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;

  authMessage.textContent = "Signing in...";

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  authMessage.textContent = error
    ? error.message
    : "Login successful!";
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
const password = document.getElementById("signupPassword").value;
const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    authMessage.textContent = "Passwords do not match.";
    return;
  }

  authMessage.textContent = "Creating your account...";

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) {
    authMessage.textContent = error.message;
  } else if (data.session) {
    authMessage.textContent = "Account created successfully!";
  } else {
    authMessage.textContent = "Account created! Please check your email to confirm your account.";
  }
});

// ===== END EMAIL AUTHENTICATION =====
// ===== GOOGLE AUTHENTICATION =====

document.getElementById("googleLogin").addEventListener("click", async () => {
  authMessage.textContent = "Connecting to Google...";

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + window.location.pathname
    }
  });

  if (error) {
    authMessage.textContent = error.message;
  }
});

// ===== END GOOGLE AUTHENTICATION =====
// ===== LOGOUT FUNCTION =====

const logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", async () => {
  if (!confirm("Are you sure you want to log out?")) return;

  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    authMessage.textContent = error.message;
  }
});

// ===== END LOGOUT FUNCTION =====
// ===== PASSWORD RECOVERY =====

document.getElementById("forgotPassword").addEventListener("click", async () => {
  const email = document.getElementById("authEmail").value.trim();

  if (!email) {
    authMessage.textContent = "Please enter your email address first.";
    return;
  }

  authMessage.textContent = "Sending password recovery email...";

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname
  });

  authMessage.textContent = error
    ? error.message
    : "Password recovery email sent. Please check your inbox.";
});

// ===== END PASSWORD RECOVERY =====
// ===== PASSWORD RESET FUNCTIONALITY =====

const passwordResetForm = document.getElementById("passwordResetForm");
const googleLoginButton = document.getElementById("googleLogin");

supabaseClient.auth.onAuthStateChange((event) => {
  if (event === "PASSWORD_RECOVERY") {
    updateAuthView(null);

    loginForm.hidden = true;
    signupForm.hidden = true;
    googleLoginButton.hidden = true;
    passwordResetForm.hidden = false;

    authMessage.textContent = "Enter and confirm your new password.";
  }
});

passwordResetForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const confirmNewPassword = document.getElementById("confirmNewPassword").value;

  if (newPassword !== confirmNewPassword) {
    authMessage.textContent = "Passwords do not match.";
    return;
  }

  authMessage.textContent = "Updating your password...";

  const { error } = await supabaseClient.auth.updateUser({
    password: newPassword
  });

  if (error) {
    authMessage.textContent = error.message;
    return;
  }

  passwordResetForm.hidden = true;
  loginForm.hidden = false;
  signupForm.hidden = true;
  googleLoginButton.hidden = false;

  await supabaseClient.auth.signOut();

  authMessage.textContent = "Password updated successfully! Please sign in with your new password.";
});

// ===== END PASSWORD RESET FUNCTIONALITY =====
// ===== SIDEBAR FUNCTIONALITY =====

const appSidebar = document.getElementById("appSidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarProfileLink = document.getElementById("sidebarProfileLink");

// Keep sidebar hidden until authentication is confirmed.
appSidebar.hidden = true;
sidebarToggle.hidden = true;

function closeSidebar() {
  document.body.classList.remove("sidebar-open");
  sidebarOverlay.hidden = true;
  sidebarToggle.setAttribute("aria-expanded", "false");
  sidebarToggle.setAttribute("aria-label", "Open sidebar");
}

function openSidebar() {
  if (appSidebar.hidden) return;

  document.body.classList.add("sidebar-open");
  sidebarOverlay.hidden = false;
  sidebarToggle.setAttribute("aria-expanded", "true");
  sidebarToggle.setAttribute("aria-label", "Close sidebar");
}

sidebarToggle.addEventListener("click", () => {
  if (document.body.classList.contains("sidebar-open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

sidebarProfileLink.addEventListener("click", () => {
  go("profile");
  closeSidebar();
});

// Show sidebar only for authenticated users.
const originalUpdateAuthView = updateAuthView;

updateAuthView = function(session) {
  originalUpdateAuthView(session);

  appSidebar.hidden = !session;
  sidebarToggle.hidden = !session;

  if (!session) {
    closeSidebar();
  }
};

// ===== END SIDEBAR FUNCTIONALITY =====
// ===== PROFILE DATA LOADING =====

let profileLoadRequest = 0;

async function loadUserProfile(session) {
  const requestId = ++profileLoadRequest;

  const profileFields = {
    profileAvatar: "A",
    profileDisplayName: "Your Name",
    profileEmail: "Email address",
    profileFullName: "Not set",
    profileName: "Not set",
    profileBio: "Not set",
    profileCountry: "Not set",
    profileProvider: "Loading...",
    profileVerification: "Loading...",
    profileStatus: "Loading..."
  };

  if (!session) {
    Object.entries(profileFields).forEach(([id, value]) => {
      document.getElementById(id).textContent = value;
    });
    return;
  }

  const user = session.user;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("full_name, display_name, bio, country, avatar_path")
    .eq("id", user.id)
    .maybeSingle();

  if (requestId !== profileLoadRequest) return;

  if (error) {
    console.error("Profile loading error:", error);
    document.getElementById("profileStatus").textContent =
      "Unable to load";
    return;
  }

  const fullName =
    data?.full_name || user.user_metadata?.full_name ||
    user.user_metadata?.name || "";

  const displayName =
    data?.display_name || fullName || user.email || "User";

  document.getElementById("profileAvatar").textContent =
    displayName.trim().charAt(0).toUpperCase() || "A";

  // ===== LOAD SAVED PROFILE PICTURE =====

if (data?.avatar_path) {
  const { data: avatarData, error: avatarError } =
    await supabaseClient
      .storage
      .from("avatars")
      .createSignedUrl(data.avatar_path, 3600);

  if (requestId !== profileLoadRequest) return;

  if (avatarError) {
    console.error("Avatar loading error:", avatarError);
  } else if (avatarData?.signedUrl) {
    const avatar = document.getElementById("profileAvatar");
    const image = document.createElement("img");

    image.src = avatarData.signedUrl;
    image.alt = "Profile picture";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.borderRadius = "50%";

    avatar.replaceChildren(image);
  }
}

// ===== END LOAD SAVED PROFILE PICTURE =====
  
  document.getElementById("profileDisplayName").textContent =
    displayName;

  document.getElementById("profileEmail").textContent =
    user.email || "No email available";

  document.getElementById("profileFullName").textContent =
    fullName || "Not set";

  document.getElementById("profileName").textContent =
    displayName || "Not set";

  document.getElementById("profileBio").textContent =
    data?.bio || "Not set";

  document.getElementById("profileCountry").textContent =
    data?.country || "Not set";

  const provider = user.app_metadata?.provider || "email";

  document.getElementById("profileProvider").textContent =
    provider === "google" ? "Google" : "Email / Password";

  document.getElementById("profileVerification").textContent =
    user.email_confirmed_at ? "Verified" : "Not verified";

  document.getElementById("profileStatus").textContent =
    "Active";
}

const previousAuthView = updateAuthView;

updateAuthView = function(session) {
  previousAuthView(session);
  loadUserProfile(session);
};

// ===== END PROFILE DATA LOADING =====
// ===== EDIT PROFILE FORM CONTROLS =====

const editProfileButton = document.getElementById("editProfile");
const editProfileForm = document.getElementById("editProfileForm");
const cancelEditProfile = document.getElementById("cancelEditProfile");

editProfileButton.addEventListener("click", async () => {
  const { data: userData, error: userError } =
    await supabaseClient.auth.getUser();

  if (userError || !userData.user) {
    document.getElementById("editProfileMessage").textContent =
      "Please sign in again.";
    return;
  }

  const user = userData.user;

  const { data, error } = await supabaseClient
    .from("profiles")
    .select("full_name, display_name, bio, country")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    document.getElementById("editProfileMessage").textContent =
      "Unable to load profile details.";
    return;
  }

  document.getElementById("editFullName").value =
    data?.full_name || user.user_metadata?.full_name ||
    user.user_metadata?.name || "";

  document.getElementById("editDisplayName").value =
    data?.display_name || data?.full_name ||
    user.user_metadata?.full_name || user.user_metadata?.name || "";

  document.getElementById("editBio").value =
    data?.bio || "";

  document.getElementById("editCountry").value =
    data?.country || "";

  document.getElementById("editProfileMessage").textContent = "";
  editProfileForm.hidden = false;
});

cancelEditProfile.addEventListener("click", () => {
  editProfileForm.hidden = true;
  document.getElementById("editProfileMessage").textContent = "";
});

// ===== END EDIT PROFILE FORM CONTROLS =====
// ===== SAVE PROFILE CHANGES =====

editProfileForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = document.getElementById("editProfileMessage");
  const saveButton = editProfileForm.querySelector('button[type="submit"]');

  const fullName = document.getElementById("editFullName").value.trim();
  const displayName = document.getElementById("editDisplayName").value.trim();
  const bio = document.getElementById("editBio").value.trim();
  const country = document.getElementById("editCountry").value.trim();

  if (!displayName) {
    message.textContent = "Display Name is required.";
    return;
  }

  saveButton.disabled = true;
  message.textContent = "Saving changes...";

  try {
    const { data: userData, error: userError } =
      await supabaseClient.auth.getUser();

    if (userError || !userData.user) {
      throw new Error("Please sign in again.");
    }

    const user = userData.user;

    const { error } = await supabaseClient
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: fullName,
        display_name: displayName,
        bio: bio,
        country: country,
        updated_at: new Date().toISOString()
      });

    if (error) throw error;

    await loadUserProfile({ user });

    message.textContent = "Profile updated successfully!";
    editProfileForm.hidden = true;
  } catch (error) {
    console.error("Profile save error:", error);
    message.textContent = error.message || "Unable to save profile.";
  } finally {
    saveButton.disabled = false;
  }
});

// ===== END SAVE PROFILE CHANGES =====
// ===== PROFILE PICTURE SELECTION AND EDITOR =====

const chooseProfilePhoto = document.getElementById("chooseProfilePhoto");
const takeProfilePhoto = document.getElementById("takeProfilePhoto");
const profileGalleryInput = document.getElementById("profileGalleryInput");
const profileCameraInput = document.getElementById("profileCameraInput");
const profilePictureEditor = document.getElementById("profilePictureEditor");
const profilePicturePreviewImage = document.getElementById("profilePicturePreviewImage");
const profilePictureZoom = document.getElementById("profilePictureZoom");
const rotateProfilePicture = document.getElementById("rotateProfilePicture");
const cancelProfilePicture = document.getElementById("cancelProfilePicture");

let selectedProfilePicture = null;
let profilePictureRotation = 0;

chooseProfilePhoto.addEventListener("click", () => {
  profileGalleryInput.click();
});

takeProfilePhoto.addEventListener("click", () => {
  profileCameraInput.click();
});

function handleProfilePictureSelection(event) {
  const file = event.target.files[0];
  if (!file) return;

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    alert("Please select a JPG, PNG, or WebP image.");
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Image size must be 5 MB or less.");
    event.target.value = "";
    return;
  }

  selectedProfilePicture = file;
  profilePictureRotation = 0;
  profilePictureZoom.value = 1;

  const imageURL = URL.createObjectURL(file);
  profilePicturePreviewImage.src = imageURL;
  profilePicturePreviewImage.style.transform = "scale(1) rotate(0deg)";

  profilePictureEditor.hidden = false;
}

profileGalleryInput.addEventListener("change", handleProfilePictureSelection);
profileCameraInput.addEventListener("change", handleProfilePictureSelection);

profilePictureZoom.addEventListener("input", () => {
  const zoom = profilePictureZoom.value;
  profilePicturePreviewImage.style.transform =
    `scale(${zoom}) rotate(${profilePictureRotation}deg)`;
});

rotateProfilePicture.addEventListener("click", () => {
  profilePictureRotation = (profilePictureRotation + 90) % 360;

  profilePicturePreviewImage.style.transform =
    `scale(${profilePictureZoom.value}) rotate(${profilePictureRotation}deg)`;
});

cancelProfilePicture.addEventListener("click", () => {
  profilePictureEditor.hidden = true;
  profilePicturePreviewImage.removeAttribute("src");
  selectedProfilePicture = null;
  profilePictureRotation = 0;
  profileGalleryInput.value = "";
  profileCameraInput.value = "";
});

// ===== END PROFILE PICTURE SELECTION AND EDITOR =====
// ===== SAVE PROFILE PICTURE TO SUPABASE =====

const saveProfilePicture = document.getElementById("saveProfilePicture");

saveProfilePicture.addEventListener("click", async () => {
  if (!selectedProfilePicture) {
    alert("Please select a picture first.");
    return;
  }

  saveProfilePicture.disabled = true;
  saveProfilePicture.textContent = "Saving...";

  let uploadedPath = null;

  try {
    const { data: userData, error: userError } =
      await supabaseClient.auth.getUser();

    if (userError || !userData.user) {
      throw new Error("Please sign in again.");
    }

    const user = userData.user;
    const bitmap = await createImageBitmap(selectedProfilePicture);

    const canvas = document.createElement("canvas");
    const size = 512;

    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");

    const zoom = Number(profilePictureZoom.value);
    const scale = Math.max(
      size / bitmap.width,
      size / bitmap.height
    ) * zoom;

    context.translate(size / 2, size / 2);
    context.rotate(profilePictureRotation * Math.PI / 180);

    context.drawImage(
      bitmap,
      -(bitmap.width * scale) / 2,
      -(bitmap.height * scale) / 2,
      bitmap.width * scale,
      bitmap.height * scale
    );

    bitmap.close();

    const optimizedBlob = await new Promise((resolve, reject) => {
      canvas.toBlob(
        blob => blob ? resolve(blob) : reject(
          new Error("Image processing failed.")
        ),
        "image/jpeg",
        0.85
      );
    });

    const {
      data: sessionData,
      error: sessionError
    } = await supabaseClient.auth.getSession();

    const currentSession = sessionData?.session;

    alert(JSON.stringify({
      sessionExists: !!currentSession,
      accessTokenPresent: !!currentSession?.access_token,
      sessionUserId: currentSession?.user?.id || null,
      uploadUserId: user.id,
      sameUser: currentSession?.user?.id === user.id,
      sessionError: sessionError?.message || null
    }));

    return;
    
    const filePath =
      `${user.id}/avatar-${Date.now()}.jpg`;

    const { error: uploadError } = await supabaseClient
      .storage
      .from("avatars")
      .upload(filePath, optimizedBlob, {
        contentType: "image/jpeg",
        cacheControl: "3600",
        upsert: false
      });

    if (uploadError) {
      throw new Error(JSON.stringify({
        name: uploadError.name,
        message: uploadError.message,
        status: uploadError.status,
        statusCode: uploadError.statusCode,
        error: uploadError.error
      }));
    }
    uploadedPath = filePath;

    const { error: updateError } = await supabaseClient
      .from("profiles")
      .update({
        avatar_path: filePath,
        updated_at: new Date().toISOString()
      })
      .eq("id", user.id);

    if (updateError) throw updateError;

    const { data: signedData, error: signedError } =
      await supabaseClient
        .storage
        .from("avatars")
        .createSignedUrl(filePath, 3600);

    if (!signedError && signedData?.signedUrl) {
      const avatar = document.getElementById("profileAvatar");
      const image = document.createElement("img");

      image.src = signedData.signedUrl;
      image.alt = "Profile picture";
      image.style.width = "100%";
      image.style.height = "100%";
      image.style.objectFit = "cover";
      image.style.borderRadius = "50%";

      avatar.replaceChildren(image);
    }

    profilePictureEditor.hidden = true;
    selectedProfilePicture = null;
    profileGalleryInput.value = "";
    profileCameraInput.value = "";

    alert("Profile picture saved successfully!");

  } catch (error) {
    console.error("Profile picture save error:", error);

    if (uploadedPath) {
      await supabaseClient
        .storage
        .from("avatars")
        .remove([uploadedPath]);
    }

    alert(error.message || "Unable to save profile picture.");

  } finally {
    saveProfilePicture.disabled = false;
    saveProfilePicture.textContent = "Save Picture";
  }
});

// ===== END SAVE PROFILE PICTURE TO SUPABASE =====
