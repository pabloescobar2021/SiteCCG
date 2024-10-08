document.addEventListener('DOMContentLoaded', () => {
    const butt_tepl = document.querySelectorAll('.ptepl');
    const contfor = document.getElementById('telpintcontforbut');

    butt_tepl.forEach((button) => {
        button.addEventListener('click', function () {

            butt_tepl.forEach(btn => {
                btn.classList.remove('ptepl_active');
                btn.style.pointerEvents = 'auto';
            });


            const txtcont1 = this.getAttribute("data-target"); // Получаем значение data-target
            const txtcont2 = document.getElementById(txtcont1).innerHTML; // Ищем элемент по id
            contfor.innerHTML = txtcont2;        // Заменяем содержимое в нужном div
            // contfor.innerHTML = `<p>...</p> <p>${txtcont2}</p>`;
            contfor.style.display= "flex";
            this.classList.add('ptepl_active');
            this.style.pointerEvents = 'none';
        });
    });
});