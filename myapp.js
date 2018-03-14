const elements = document.getElementsByName('cssProperty');
const div = document.getElementById('modify');
const set = () => {
  for (let i = 0; i < elements.length; i++) {
    const cssProperty = elements[i].getAttribute('id');
    const cssValue = elements[i].value;
    div.style[cssProperty] = cssValue;
  }
}
document.getElementById('set').addEventListener('click', set, false);
document.getElementById('set').addEventListener('click', (e) => {
  e.stopPropagation();
}, false);