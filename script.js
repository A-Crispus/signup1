/*const form = document.getElementById('signup-form');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const stars = document.querySelector('.starry-background');
    stars.style.animation = 'none';
    setTimeout(() => {
      stars.style.animation = 'starry 10s infinite alternate';
    }, 100);
  });
});
*/
 
var text = new createjs.Text(
  "Hello World!",
  "bold 24px Arial", 
  "#fff");
  text.textAlign = "centre";
  text.x = w / 2;
  text.y = h / 2 - text.
  getMeasuredLineHeight();
  stage.addChild(text);
  
