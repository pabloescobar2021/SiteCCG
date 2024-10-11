const parag = document.querySelectorAll('.battxt_1');

parag.forEach((p) =>{
    const arrow = document.createElement('span');
    arrow.textContent = '˅';
    arrow.style.cursor = 'pointer';
    p.appendChild(arrow);

    // Добавляем обработчик событий на клик
    p.addEventListener('click', function() {
        // Находим следующий элемент .intopunder
        const nextContent = p.nextElementSibling;
        
        // Проверяем, является ли следующий элемент блоком .intopunder
        if (nextContent && nextContent.classList.contains('intopunder')) {
            // Если блок виден, скрываем его, если скрыт — показываем
            if (nextContent.style.display === 'block') {
                nextContent.style.display = 'none';
                arrow.textContent = ' ˅';  // Возвращаем стрелку вниз
            } else {
                nextContent.style.display = 'block';
                arrow.textContent = ' ˄';  // Меняем стрелку на вверх
            }
        }
    })
})