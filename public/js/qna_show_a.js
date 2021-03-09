const question = document.querySelector('.show_a');
const answer = document.querySelector('.a');

question.addEventListener('click', async (e) => {
  e.preventDefault();
  if (answer.style.display === 'none')
    answer.style.display = 'block';
  else
    answer.style.display = 'none';
});