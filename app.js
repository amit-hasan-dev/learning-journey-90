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
