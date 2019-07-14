// Button selectors
const btn = {
	skills: document.getElementById('skills'),
	skillsClose: document.getElementById('skills-modal-close')
};

//Modal selectors
const modal = {
	skills: document.getElementById('skills-modal')
};

btn.skills.addEventListener('click', e => {
	modal.skills.style.display = 'flex';
});

btn.skillsClose.addEventListener('click', e => {
	modal.skills.style.display = 'none';
});
