// shared.js – injects nav + footer on every page
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav class="site-nav">
    <div class="nav-inner">
      <a class="nav-brand" href="index.html">
        <img src="assets/logo.png" alt="Good Samaritan Fellowship Logo">
        <div class="nav-brand-text">
          <span class="nav-brand-name">Good Samaritan Fellowship</span>
          <span class="nav-brand-sub">English Church · Chennai</span>
        </div>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html"    data-page="index.html">Home</a></li>
        <li><a href="about.html"    data-page="about.html">About Us</a></li>
        <li><a href="services.html" data-page="services.html">Services</a></li>
        <li><a href="ministries.html" data-page="ministries.html">Ministries</a></li>
        <li><a href="gallery.html"  data-page="gallery.html">Gallery</a></li>
        <li><a href="events.html"   data-page="events.html">News &amp; Events</a></li>
        <li><a href="contact.html"  data-page="contact.html" class="nav-cta">Contact</a></li>
      </ul>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="assets/logo.png" alt="GSF Logo">
        <p>Good Samaritan Fellowship is an English-speaking church in Kodungaiyur, Chennai — a community of faith committed to love, worship, and service.</p>
        <div class="footer-tagline">offering love, hope and faith…</div>
        <a class="wa-footer" href="https://wa.me/919955828282" target="_blank">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Join WhatsApp Updates
        </a>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="ministries.html">Ministries</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="events.html">News &amp; Events</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Service Times</h4>
        <ul>
          <li style="color:rgba(255,255,255,0.82);font-size:0.875rem;margin-bottom:8px;">🕗 <strong style="color:#D4A017">Sunday Service</strong><br>&nbsp;&nbsp; 8:00 AM</li>
          <li style="color:rgba(255,255,255,0.82);font-size:0.875rem;margin-bottom:16px;">🌅 <strong style="color:#D4A017">Friday Service</strong><br>&nbsp;&nbsp; 6:00 AM</li>
        </ul>
        <h4 style="margin-top:8px">Address</h4>
        <p style="font-size:0.875rem;color:rgba(255,255,255,0.65);line-height:1.7;">Hosanna Tower,<br>Kodungaiyur,<br>Chennai, Tamil Nadu, India</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Good Samaritan Fellowship. All rights reserved.</span>
      <span>English Church in Kodungaiyur, Chennai</span>
    </div>
  </footer>`;

  // Inject nav
  const navTarget = document.getElementById('site-nav');
  if (navTarget) navTarget.outerHTML = navHTML;

  // Inject footer
  const footerTarget = document.getElementById('site-footer');
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  // Set active nav link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }
})();
