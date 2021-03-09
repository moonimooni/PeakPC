const formShower = document.querySelector('.msg_add');
const form = document.querySelector('form');

formShower.addEventListener('click', async (e) => {
  e.preventDefault();
  form.style.display='block'
});