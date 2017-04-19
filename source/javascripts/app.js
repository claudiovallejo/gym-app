//  Daily routine exercise cards
const $cards = document.querySelectorAll('[data-value]');
$cards && window.addEventListener('load', function(){
  loadElements($cards);
});
//  Weekly routine cards
const $routines = document.querySelectorAll('[data-card="routine"]');
$routines && window.addEventListener('load', function(){
  loadElements($routines);
});
//  Prepare element cards for load animation
function loadElements($elements) {
  for (var i = 0; i < $elements.length; i++) {
    $elements[i].setAttribute('style', 'transition-delay: ' + ((i+1)*0.15) + 's;');
    toggle($elements[i], ['o-0', 'o-1']);
    toggle($elements[i], ['t-translateY0', 't-translateY4r']);
  };
}
//  Preload test
const $preload = document.getElementsByClassName('preload');
window.addEventListener("load", function(){
  if ($preload) {
    for (var p = 0; p < $preload.length; p++) {
      $preload[p].classList.remove('preload');
    }
  }
});
//  Menu navigation
const $menu = document.querySelector('[data-component="menu"]');
const $nav = document.querySelector('[data-component="nav"]');
const $cover = document.querySelector('[data-component="cover"]');
//  Menu switch
var menuSwitch = false;
if ($menu) {
  $menu.addEventListener('click', function(){
    if (!menuSwitch) {
      toggle($nav, 't-translateY0', 't-translateY100p');
      toggle($cover, 'o-0', 'o-1');
      toggle($cover, 'pe-none', 'pe-auto');
      menuSwitch = true;
    }
  });
}
//  Menu cover
if ($cover) {
  $cover.addEventListener('click', function(){
    if (menuSwitch) {
      toggle($nav, 't-translateY0', 't-translateY100p');
      toggle($cover, 'o-0', 'o-1');
      toggle($cover, 'pe-none', 'pe-auto');
      menuSwitch = false;
    }
  });
}
//  Toggle element classes
function toggle($element, classA, classB) {
  $element.classList.toggle(classA);
  $element.classList.toggle(classB);
}
