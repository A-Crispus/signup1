const form = document.getElementById('signup-form');
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

 