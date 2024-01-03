
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const answers = document.querySelector(`.answers.${target}`);
        const btn2 = document.querySelector(`.btn2[data-target="${target}"]`);

        if (answers && btn2) {
            answers.classList.toggle('hidden');
            btn.classList.toggle('hidden');
            btn2.classList.toggle('hidden');
        }
    });
});

document.querySelectorAll('.btn2').forEach(btn2 => {
    btn2.addEventListener('click', () => {
        const target = btn2.getAttribute('data-target');
        const answers = document.querySelector(`.answers.${target}`);
        const btn = document.querySelector(`.btn[data-target="${target}"]`);

        if (answers && btn) {
            answers.classList.toggle('hidden');
            btn.classList.toggle('hidden');
            btn2.classList.toggle('hidden');
        }
    });
});