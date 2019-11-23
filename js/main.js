// Button selectors
const btn = {
  skills: document.getElementById('skills'),
  skillsClose: document.getElementById('skills-modal-close'),
  darkModeBtn: document.getElementById('darkMode')
};

const body = document.querySelector('body');

//Modal selectors
const modal = {
  skills: document.getElementById('skills-modal')
};

btn.skills.addEventListener('click', e => {
  modal.skills.style.display = 'flex';
});

btn.skillsClose.addEventListener('click', () => {
  modal.skills.style.display = 'none';
});

body.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('modal-wrapper')) {
    modal.skills.style.display = 'none';
  }
});

btn.darkModeBtn.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    btn.darkModeBtn.innerHTML = '<i class="far fa-adjust"></i> Light Mode';
  } else {
    body.classList.replace('dark', 'light');
    btn.darkModeBtn.innerHTML = '<i class="far fa-adjust"></i> Dark Mode';
  }
});
