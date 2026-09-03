const door = document.querySelector('.doorway');
let entered = false;

door.addEventListener('click', (event) => {
  event.preventDefault();
  if (entered) return;
  entered = true;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.location.assign(door.href);
    return;
  }

  document.body.classList.add('is-opening');
  window.setTimeout(() => document.body.classList.add('is-passing'), 720);
  window.setTimeout(() => window.location.assign(door.href), 1570);
});
