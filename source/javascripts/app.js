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
    toggle($elements[i], 'o0', 'o1');
    toggle($elements[i], 'transform-tY0', 'transform-tYm4');
  };
}
//  Toggle element classes
function toggle($element, classA, classB) {
  $element.classList.toggle(classA);
  $element.classList.toggle(classB);
}
