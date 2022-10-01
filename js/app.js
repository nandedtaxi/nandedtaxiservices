// console.log('this is nande taxi');
document.querySelector("#ast-desktop-header > div.ast-main-header-wrap.main-header-bar-wrap > div > div > div > div.site-header-primary-section-right.site-header-section.ast-flex.ast-grid-right-section > div.ast-builder-layout-element.ast-flex.site-header-focus-item.ast-header-button-1")

//google translate
src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
  }

// reading progress
const readingProgress = document.querySelector('#reading-progress-fill');
const footerHeight = 250;
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
});

