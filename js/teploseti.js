document.addEventListener('DOMContentLoaded', () => {
    const butt_tepl = document.querySelectorAll('.ptepl');
    const contfor = document.getElementById('telpintcontforbut');

    butt_tepl.forEach((button) => {
        button.addEventListener('click', function () {

            // Если кнопка уже активна, сбрасываем её состояние
            if (this.classList.contains('ptepl_active')) {
                this.classList.remove('ptepl_active');
                contfor.innerHTML = ''; // Очищаем контейнер при втором нажатии
                this.style.pointerEvents = 'auto'; // Восстанавливаем возможность клика
                return;
            }

            // Удаляем активное состояние с других кнопок
            butt_tepl.forEach(btn => {
                btn.classList.remove('ptepl_active');
                btn.style.pointerEvents = 'auto';
            });

            // Получаем контент и обновляем div
            const txtcont1 = this.getAttribute("data-target"); 
            const txtcont2 = document.getElementById(txtcont1).innerHTML;
            contfor.innerHTML = txtcont2; 
            contfor.style.display = "grid";

            // Активируем текущую кнопку
            this.classList.add('ptepl_active');
            this.style.pointerEvents = 'none'; // Отключаем клик на активной кнопке
        });
    });
});





