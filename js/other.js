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
