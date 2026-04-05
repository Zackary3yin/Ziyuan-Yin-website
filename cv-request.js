/**
 * CV request modal → Formspree → your inbox. You approve and reply manually.
 * 1) Sign up at https://formspree.io → New form → copy ID from URL …/f/xxxxxx
 * 2) Replace YOUR_FORM_ID below with that ID.
 */
(function () {
  var CV_FORMSPREE_ACTION = 'https://formspree.io/f/xnjoobjk';

  var overlay = document.getElementById('cv-modal');
  var form = document.getElementById('cv-request-form');
  var successEl = document.getElementById('cv-modal-success');
  var formPanel = document.getElementById('cv-modal-form-panel');

  function openModal() {
    if (!overlay) return;
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (form) form.reset();
    if (successEl) successEl.hidden = true;
    if (formPanel) formPanel.hidden = false;
  }

  function closeModal() {
    if (!overlay) return;
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.body.addEventListener('click', function (e) {
    if (e.target.closest('.cv-request-open')) {
      e.preventDefault();
      openModal();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  document.querySelectorAll('.cv-modal-close').forEach(function (btn) {
    btn.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay && !overlay.hidden) closeModal();
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var action = CV_FORMSPREE_ACTION;
      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        alert(
          'CV request form is not configured yet. Site owner: set CV_FORMSPREE_ACTION in cv-request.js (Formspree form ID).'
        );
        return;
      }

      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      var fd = new FormData(form);

      fetch(action, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            if (formPanel) formPanel.hidden = true;
            if (successEl) successEl.hidden = false;
          } else {
            return res.json().then(function (data) {
              throw new Error((data && data.error) || 'Submit failed');
            });
          }
        })
        .catch(function () {
          alert('Could not send request. Check your connection or Formspree setup.');
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();
