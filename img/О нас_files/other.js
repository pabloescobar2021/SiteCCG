document.addEventListener('DOMContentLoaded', () => {
    const mobbut_toIndex = document.getElementById('uslmobile2');

    
mobbut_toIndex.addEventListener('click', function(){
 window.location.href = "../index.html#d222";

})

});





 // zadaem nujnuyu ccilku dlya elemeta o nas 
 const aboutLink1 = document.querySelector('.a_nav1 .MenuBut'); // Находим первый элемент с классом MenuBut
 if (aboutLink1) {
     aboutLink1.href = 'Onas.html'; // Задаем ссылку
 }






document.addEventListener('DOMContentLoaded', function () {
    populateMenu();
});

// Функция для заполнения контейнера
function populateMenu() {
    const uslmenuid1 = document.getElementById("uslmenuid");

    // Массив с данными для ссылок
    const links = [
        { text: "Электромонтажные работы на коммерческих объектах", href: "elecrtomontaj.html" },
        { text: "Кондиционирование, вентиляция, пожаротушение", href: "kond.html" },
        { text: "Газификация коммерческих объектов", href: "gaz.html" },
        { text: "Кровельные работы", href: "#" },
        { text: "Отопление, водоснабжение и водоотведение коммерческих объектов", href: "#" },
        { text: "Монолитное строительство зданий", href: "#" },
        { text: "Строительно-бетонные работы и установка композитных бассейнов", href: "#" },
        { text: "Теплосети", href: "#" }
    ];

    // Заполнение контейнера ссылками
    links.forEach(link => {
        const a = document.createElement('a'); // Создаем элемент <a>
        a.textContent = link.text; // Устанавливаем текст ссылки
        a.href = link.href; // Устанавливаем ссылку

        // Добавляем класс, если необходимо
        a.classList.add('link-class'); // Здесь 'link-class' - это класс, который вы можете использовать для стилизации

        uslmenuid1.appendChild(a); // Добавляем ссылку в контейнер
        uslmenuid1.appendChild(document.createElement('br')); // Добавляем перенос строки после каждой ссылки
    });
}



window.addEventListener('scroll', function () {
    const parallaxImage = document.querySelector('.s1231sadasd');
    const scrolled = window.scrollY;
    
    // Чем больше значение, тем быстрее будет двигаться изображение
    parallaxImage.style.transform = `translateY(${scrolled * 0.3}px)`;
});





const contnvk = document.querySelector('.kontnvk2_grid');
const circlenvk = document.createElement('div');

contnvk.addEventListener('mousemove', (e) => {
    

    // Изменение фона элементов текста в зависимости от позиции курсора
    const elements = document.querySelectorAll('.kontnvk2_grid span, .kontnvk2_grid p');
    elements.forEach((el) => {
        const elRect = el.getBoundingClientRect();
        const elX = (e.clientX - elRect.left) / elRect.width * 100;
        const elY = (e.clientY - elRect.top) / elRect.height * 100;

        el.style.background = `radial-gradient(circle at ${elX}% ${elY}%, rgba(217, 164, 7, 0.6), #867249)`;
        el.style.opacity = '1'; // Делаем его полностью видимым при движении курсора
    });
});

contnvk.addEventListener('mouseleave', () => {
    // Восстанавливаем исходный фон
    const elements = document.querySelectorAll('.kontnvk2_grid span, .kontnvk2_grid p');
    elements.forEach((el) => {
        el.style.background = 'rgba(134, 114, 73, 1)'; // Устанавливаем плавное исчезновение градиента
    });
});





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






// document.addEventListener('DOMContentLoaded', () => {
//     const butt_tepl = document.querySelectorAll('.ptepl');
//     const contfor = document.getElementById('telpintcontforbut');

//     butt_tepl.forEach((button) => {
//         button.addEventListener('click', function () {
//             const txtcont1 = this.getAttribute("data-target"); // Получаем значение data-target
//             const txtcont2 = document.getElementById(txtcont1).innerHTML; // Ищем элемент по id
//             contfor.innerHTML = txtcont2; // Заменяем содержимое в нужном div
//         });
//     });
// });


