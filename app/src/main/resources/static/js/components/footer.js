function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-logo">
          <a class="logo-link" href="/" aria-label="Smart Clinic home">
            <img src="/assets/images/logo/logo.png" alt="Smart Clinic logo">
            <span class="logo-title">Smart Clinic</span>
          </a>
          <p>Care, connected.</p>
        </div>
        <nav class="footer-links" aria-label="Footer navigation">
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <a href="/pages/patientDashboard.html">Account</a>
            <a href="#help-center">Help Center</a>
            <a href="mailto:support@smartclinic.example">Contact</a>
          </div>
          <div class="footer-column">
            <h4>Legals</h4>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#licensing">Licensing</a>
          </div>
        </nav>
      </div>
      <p class="footer-copyright">&copy; ${new Date().getFullYear()} Smart Clinic Management System</p>
    </footer>`;
}

window.renderFooter = renderFooter;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderFooter, { once: true });
} else {
  renderFooter();
}
