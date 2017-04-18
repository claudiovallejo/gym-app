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
