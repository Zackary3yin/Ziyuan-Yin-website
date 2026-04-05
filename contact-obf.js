/**
 * Obfuscated contact links (Base64 in data-b64). Not encryption—reduces casual scraping.
 * Re-run after any innerHTML replace (e.g. language switch).
 */
(function () {
  function dec(b64) {
    try {
      return atob(b64);
    } catch (e) {
      return '';
    }
  }

  function wireObfuscatedContact() {
    document.querySelectorAll('a.obf-mail[data-b64]').forEach(function (a) {
      var addr = dec(a.getAttribute('data-b64'));
      if (!addr) return;
      a.setAttribute('href', 'mailto:' + addr);
      if (a.classList.contains('obf-mail-fill')) {
        a.textContent = addr;
      }
    });

  }

  window.wireObfuscatedContact = wireObfuscatedContact;
})();
