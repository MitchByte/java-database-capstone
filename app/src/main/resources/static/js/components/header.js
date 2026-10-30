function renderHeader() {
  const headerDiv = document.getElementById("header");
  if (!headerDiv) return;

  const logo = `
    <a class="logo-link" href="/" aria-label="Smart Clinic home">
      <img src="/assets/images/logo/logo.png" alt="" class="logo-img">
      <span class="logo-title">Smart Clinic</span>
    </a>`;
  const isHomePage = window.location.pathname.endsWith("/") ||
    window.location.pathname.endsWith("/index.html");

  if (isHomePage) {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    headerDiv.innerHTML = `<header class="header">${logo}</header>`;
    return;
  }

  const role = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    alert("Session expired or invalid login. Please log in again.");
    window.location.href = "/";
    return;
  }

  let headerContent = `<header class="header">${logo}<nav aria-label="Main navigation">`;

  if (role === "admin") {
    headerContent += `
      <button type="button" id="addDocBtn" class="adminBtn" data-action="add-doctor">Add Doctor</button>
      <a href="/" data-action="logout">Logout</a>`;
  } else if (role === "doctor") {
    headerContent += `
      <a class="adminBtn" href="/doctorDashboard/${encodeURIComponent(token)}">Home</a>
      <a href="/" data-action="logout">Logout</a>`;
  } else if (role === "patient") {
    headerContent += `
      <button type="button" id="patientLogin" class="adminBtn" data-action="patient-login">Login</button>
      <button type="button" id="patientSignup" class="adminBtn" data-action="patient-signup">Sign Up</button>`;
  } else if (role === "loggedPatient") {
    headerContent += `
      <a id="home" class="adminBtn" href="/pages/loggedPatientDashboard.html">Home</a>
      <a id="patientAppointments" class="adminBtn" href="/pages/patientAppointments.html">Appointments</a>
      <a href="/" data-action="logout-patient">Logout</a>`;
  }

  headerContent += "</nav></header>";
  headerDiv.innerHTML = headerContent;
  attachHeaderButtonListeners();
}

function attachHeaderButtonListeners() {
  const bindModalButton = (id, modalType) => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("click", async () => {
        const modalModule = await import("./modals.js");
        modalModule.openModal(modalType);
      });
    }
  };

  bindModalButton("addDocBtn", "addDoctor");
  bindModalButton("patientLogin", "patientLogin");
  bindModalButton("patientSignup", "patientSignup");

  const logoutLink = document.querySelector('#header [data-action="logout"]');
  if (logoutLink) logoutLink.addEventListener("click", logout);

  const patientLogoutLink = document.querySelector('#header [data-action="logout-patient"]');
  if (patientLogoutLink) patientLogoutLink.addEventListener("click", logoutPatient);
}

window.logout = function logout(event) {
  event?.preventDefault();
  localStorage.removeItem("userRole");
  localStorage.removeItem("token");
  window.location.href = "/";
};

function logoutPatient(event) {
  event?.preventDefault();
  localStorage.setItem("userRole", "patient");
  localStorage.removeItem("token");
  window.location.href = "/pages/patientDashboard.html";
}

window.logoutPatient = logoutPatient;
window.renderHeader = renderHeader;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderHeader, { once: true });
} else {
  renderHeader();
}

