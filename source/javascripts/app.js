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
    toggle($elements[i], ['transform-tY0', 'transform-tY4r']);
  };
}
//  Menu navigation
const $menu = document.querySelector('[data-component="menu"]');
const $nav = document.querySelector('[data-component="nav"]');
const $cover = document.querySelector('[data-component="cover"]');
//  Menu switch
var menuSwitch = false;
if ($menu) {
  $menu.addEventListener('click', function(){
    if (!menuSwitch) {
      toggle($nav, ['transform-tY0', 'transform-tY100p']);
      toggle($cover, ['o-0', 'o-1']);
      toggle($cover, ['pe-none', 'pe-auto']);
      menuSwitch = true;
    }
  });
}
//  Menu cover
if ($cover) {
  $cover.addEventListener('click', function(){
    if (menuSwitch) {
      toggle($nav, ['
      ', 'transform-tY100p']);
      toggle($cover, ['o-0', 'o-1']);
      toggle($cover, ['pe-none', 'pe-auto']);
      menuSwitch = false;
    }
  });
}
//  Toggle element classes
function toggle($element, classes) {
  classes.forEach(function(className){
    $element.classList.toggle(className);
  });
}
