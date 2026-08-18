const door = document.querySelector('.doorway');
let entered = false;

door.addEventListener('click', () => {
  if (entered) return;
  entered = true;
  document.body.classList.add('is-opening');
  window.setTimeout(() => document.body.classList.add('is-passing'), 720);
  window.setTimeout(() => window.location.href = 'objects/', 1570);
});
