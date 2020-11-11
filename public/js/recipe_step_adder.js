const addBtn = document.getElementById('step_add');
const steps = document.getElementById('recipe_steps');
let step = 3;

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  wrapper.classList.add('recipe_step_wrapper');
  input.type = 'text';
  input.name = 'step';
  input.classList.add('text_info');
  label.textContent = `STEP ${step}`;
  label.setAttribute('for', 'step');
  step ++;
  wrapper.appendChild(label);
  wrapper.appendChild(input);
  steps.appendChild(wrapper);
});