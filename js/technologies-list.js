require('../css/technologies-list.css');

const langElements = document.querySelectorAll('.lang');

window.addEventListener('touchstart', function onFirstHover() {
  document.querySelectorAll('.lang-link').forEach((link) => {
    link.addEventListener('click', disableLink);
  });
  window.DOUBLE_CLICK_ENABLED = true;
  window.removeEventListener('touchstart', onFirstHover, false);
}, false);

function showSubTechnologeis(subs) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.classList.add('backToPosition');
    });
  }
}

function disableLink(e) {
  e.preventDefault();
  this.removeEventListener('click', disableLink);
}

function hideSubTechnologeis(subs, lang) {
  if (subs.length !== 0) {
    subs.forEach((sub) => {
      sub.classList.remove('backToPosition');
    });
  }
  if (window.DOUBLE_CLICK_ENABLED) {
    lang.querySelectorAll('.lang-link').forEach((link) => {
      link.addEventListener('click', disableLink);
    });
  }
}

langElements.forEach((lang) => {
  const subs = lang.querySelectorAll('.sub img');
  lang.addEventListener('mouseover', () => showSubTechnologeis(subs, lang));
  lang.addEventListener('mouseout', () => hideSubTechnologeis(subs, lang));
});