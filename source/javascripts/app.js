const $cards = document.querySelectorAll('[data-value]');
$cards && window.addEventListener('load', loadCards);
//
function loadCards() {
  for (var i = 0; i < $cards.length; i++) {
    $cards[i].setAttribute('style', 'transition-delay: ' + ((i+1)*0.15) + 's;');
    toggle($cards[i], 'o0', 'o1');
    toggle($cards[i], 'transform-tY0', 'transform-tYm4');
  };
}
//
function toggle($element, classA, classB) {
  $element.classList.toggle(classA);
  $element.classList.toggle(classB);
}