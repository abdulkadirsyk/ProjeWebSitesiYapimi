const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const progressWidth = (scrollTop / (scrollHeight - clientHeight)) * 100;
  progressBar.style.width = `${progressWidth}%`;
});

function menu() {
  document.querySelector(".hamburger").classList.toggle("change");
  document.querySelector(".nav").classList.toggle("nav-mobile");
}
let pageTitle = document.title;

window.addEventListener('blur', () => {
  document.title = 'Hemen Üye Ol';
});

window.addEventListener('focus', () => {
  document.title = pageTitle;
});
function kaynak_belirtme() {
  var body = document.getElementsByTagName('body')[0];
  var secilen_yazi;
  secilen_yazi = window.getSelection();
  var kaynak = " Kaynak: www.ironwork.com";
  var yazilacak_metin = secilen_yazi + kaynak;
  var kutu = document.createElement('div');
  body.appendChild(kutu);
  kutu.innerHTML = yazilacak_metin;
  secilen_yazi.selectAllChildren(kutu);
  window.setTimeout(function () {
    body.removeChild(kutu);
  }, 0);
}
document.oncopy = kaynak_belirtme;


