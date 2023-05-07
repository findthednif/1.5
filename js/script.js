//  Кнопка показать все\ скрыть
  let brandsList = document.querySelector('.brands__list');
  let readMore = document.querySelector('.list__read-more');
  let hideMore = document.querySelector('.list__hide-more');
  let brandsMain = document.querySelector('.brands__main');
  let slider = brandsMain.querySelector('.swiper');
  function classChanger (value1, value2, value3){
  value1.classList.toggle('brands__list--short');
  value2.classList.toggle('list__read-more--hidden');
  value3.classList.toggle('list__hide-more--hidden');
 }
  readMore.addEventListener('click', function (){
     classChanger(brandsList, readMore, hideMore);
  });
  hideMore.addEventListener('click', function(){
    classChanger(brandsList, readMore, hideMore);
  });
function checkResolution(){
  let res = window.matchMedia('(max-width: 767px)').matches;
  if (res) return res;
  else return false;
}
window.addEventListener('resize', function(){
  if (checkResolution()) {
    brandsMain.appendChild(slider);
    brandsList.remove();
    readMore.remove();
    hideMore.remove();
  }
  else {
    slider.remove();
    brandsMain.appendChild(brandsList);
    brandsMain.appendChild(readMore);
    brandsMain.appendChild(hideMore);
  }
});
// Инициализация свайпера
const swiper = new Swiper('.swiper', {  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  });
if (checkResolution()) {
     brandsList.remove();
     readMore.remove();
     hideMore.remove();
   }
   else slider.remove();
