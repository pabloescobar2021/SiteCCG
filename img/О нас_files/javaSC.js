
    
    
    function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
    }

        
    



    // zadaem nujnuyu ccilku dlya elemeta o nas 
    const aboutLink = document.querySelector('.a_nav1 .onas'); // Находим первый элемент с классом MenuBut
    if (aboutLink) {
        aboutLink.href = 'pages/Onas.html'; // Задаем ссылку
    }

















    /**     ��������       */
    let currentIndex1 = 0;
    const images1 = document.querySelectorAll('.ContIMG img');
    const totalImages1 = images1.length;
    const indicatorsContainer = document.getElementById('indicators');

    /*   // ������� ����������� ��������      */
    function moveCarousel1(direction) {
                        const imageWidth = document.querySelector('.ContForPhotos').clientWidth; // �������� ������ ���������� .con

    currentIndex1 += direction;

    if (currentIndex1 < 0) {
        currentIndex1 = totalImages1 - 1;
                        } else if (currentIndex1 >= totalImages1) {
        currentIndex1 = 0;
                        }
    const offset = -currentIndex1 * imageWidth; // ���������� ������ ���������� ��� ��������
    document.querySelector('.ContIMG').style.transform = `translateX(${offset}px)`;
    updateIndicators(); // ��������� ����������
                    }
    function updateIndicators() {
        // ������� ��� ������������ ����������
        indicatorsContainer.innerHTML = '';

    // ������� ����� ����������
    for (let i = 0; i < totalImages1; i++) {
                            const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === currentIndex1) {
        indicator.classList.add('active');
                            }
    indicatorsContainer.appendChild(indicator);
                        }
                    }
    function startAutoSlide() {
        setInterval(() => {
            moveCarousel1(1); // ������� �������� ������ �� ���� �����
        }, 10000); // 3000 ����������� = 3 �������
                    }
    window.onload = startAutoSlide;
                    // ���������� ������ ����������� ��� ��������� ������� ������
                    window.addEventListener('resize', () => {
        moveCarousel1(0); // ����������� �������� �� ������� ������ ��� ��������� ������� ������
                    });



                    

    document.getElementById('scrollto1').addEventListener('click', function(){
        document.getElementById('d222').scrollIntoView({behavior: 'smooth'});
    } );
                        

    document.addEventListener('DOMContentLoaded', () => {
        const uslugiscroll = document.getElementById('uslugiscroll');
        const d222 = document.getElementById('d222');
    
        // Проверяем, существуют ли элементы перед добавлением обработчика
        if (uslugiscroll && d222) {
            uslugiscroll.addEventListener('click', function() {
                d222.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });







           /**  ��������� ����  -----------------------     */
        // �������� ��������
    const modal = document.getElementById("consultationModal");
    const btn = document.getElementById("openModalBtn");
    const btn2 = document.getElementById("openModalBtn2");
    const closeBtn = document.querySelector(".close");
    const phoneInput = document.getElementById("phone");
    const form = document.getElementById("consultationForm");

    // �������� ���������� ���� � ������� ����� ��������� ������
    btn.onclick = function () {
        modal.style.display = "flex";
    form.reset(); // ������� ���� ����� ��� �������� ���������� ����
        }
    btn2.onclick = function () {
        modal.style.display = "flex";
    form.reset(); // ������� ���� ����� ��� �������� ���������� ����
        }

    // �������� ���������� ���� ��� ������� �� �������
    closeBtn.onclick = function () {
        modal.style.display = "none";
        }

    // ��������� ����� ����� ���������
    form.onsubmit = function (event) {
        event.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // ���������� ��������� ��� �������� ����������� ����� ������ ��������
    const phonePattern = /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/;

    if (name.trim() === "") {
        alert("����������, ������� ���� ���.");
            } else if (!phonePattern.test(phone)) {
        alert("����������, ������� ���������� ����� ��������.");
            } else {
        alert("������� �� ������!");
    modal.style.display = "none";
            }
        }

    // ������� ��� �������������� ������ ��������
    phoneInput.addEventListener("input", function () {
        let value = phoneInput.value.replace(/\D/g, ''); // ������� ��� ������� ����� ����

            // ������������ ����� ����� 11 ������� (��� ����� ������������� ��������)
            if (value.length > 11) value = value.slice(0, 11);
    let formattedValue = '+7 ';
            if (value.length > 1) {
        formattedValue += value.slice(1, 4); // ������ ��� ����� ����� ���� ������
            }
            if (value.length >= 5) {
        formattedValue += ' ' + value.slice(4, 7); // ��������� ��� �����
            }
            if (value.length >= 7) {
        formattedValue += '-' + value.slice(7, 9); // ������ ��� ����� ����� ������ ������
            }
            if (value.length >= 9) {
        formattedValue += '-' + value.slice(9, 11); // ��������� ��� �����
            }
    phoneInput.value = formattedValue;
        });
    // �������������� ���������� ���� ������ ��� ������ �� ���� ����� ��������
    phoneInput.addEventListener("focus", function () {
            if (this.value === '') {
        this.value = '+7 '; // ��� ������ (������)
            }
        });

/*     -----------------------       */


document.getElementById("form1").addEventListener("submit", function(event) {
    // Останавливаем отправку формы
    event.preventDefault();

    // Очищаем предыдущие ошибки
    clearErrors();

    // Получаем значения полей
    const name = document.getElementById("name_sv").value;
    const email = document.getElementById("email_sv").value;
    const phone = document.getElementById("tel_sv").value;
    const privacy = document.getElementById("privacy").checked;

    // Флаг для отслеживания наличия ошибок
    let hasErrors = false;


    // Проверка имени
    if (name.trim() === "") {
        showError("error-name", "Имя обязательно для заполнения.");
        hasErrors = true;
    }

    // Проверка email
    if (email.trim() === "") {
        showError("error-email", "Email обязателен для заполнения.");
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showError("error-email", "Введите корректный email.");
        hasErrors = true;
    }

    // Проверка телефона
    if (phone.trim() === "") {
        showError("error-tel", "Телефон обязателен для заполнения.");
        hasErrors = true;
    } else if (!validatePhone(phone)) {
        showError("error-tel", "Введите корректный телефон");
        hasErrors = true;
    }
    if (!privacy) {
        showError("privacy-error", "Вы должны согласиться с политикой конфиденциальности.");
        hasErrors = true;
    }

    // Если ошибок нет, можно отправлять форму
    if (!hasErrors) {
        alert("Ваша заявка отправлена");
        // Здесь можно отправить данные на сервер
    } 
    });

    // Функция для отображения ошибки
    function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
    }

    // Функция для очистки всех ошибок
    function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(error) {
        error.textContent = "";
        error.style.display = "none";
    });
    }

    // Пример простой проверки email
    function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
    }
    function validatePhone(phone) {
    const re = /^\+?[0-9]{10,14}$/; // Пример регулярного выражения
    return re.test(phone);
    }                           



     // Получаем элементы
    //  const ulsbutmenu = document.getElementById('ulsbutmenu');
    //  const uslmenuid = document.getElementById('uslmenuid');

    //  // Обрабатываем клик по ссылке "Услуги"
    //  ulsbutmenu.addEventListener('click', function(event) {
    //      event.preventDefault(); // Предотвращаем переход по ссылке
    //      // Показываем или скрываем окно с ссылками
    //      uslmenuid.style.display = uslmenuid.style.display === 'block' ? 'none' : 'block';
    //  });

    //  // Закрываем всплывающее окно при клике вне его
    //  document.addEventListener('click', function(event) {
    //      if (!ulsbutmenu.contains(event.target) && !uslmenuid.contains(event.target)) {
    //          uslmenuid.style.display = 'none';
    //      }
    //  });
    const ulsbutmenu = document.getElementById('ulsbutmenu');
const uslmenuid = document.getElementById('uslmenuid');
const triangle =document.querySelector('.triangle')  ;
// Показываем окно с ссылками при наведении на "Услуги"
ulsbutmenu.addEventListener('mouseenter', function() {
    uslmenuid.style.display = 'block';
    triangle.style.transform = 'rotate(120deg)';
});

// Скрываем окно с ссылками, когда курсор покидает "Услуги" или само меню
ulsbutmenu.addEventListener('mouseleave', function(event) {
    // Задержка, чтобы избежать резкого исчезновения, если пользователь навел на меню
    setTimeout(function() {
        if (!uslmenuid.matches(':hover')) {
            uslmenuid.style.display = 'none';
            triangle.style.transform = 'rotate(300deg)'
        }
        
    }, 200);
});

uslmenuid.addEventListener('mouseleave', function() {
    uslmenuid.style.display = 'none';
    triangle.style.transform = 'rotate(300deg)';
});












//  stranica electromontag

    const griditem123but = document.querySelectorAll('.griditem123');

    griditem123but.forEach(griditem123 =>{
        griditem123.addEventListener('click', function(){
            griditem123but.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');

            
        })
    })
    
    const contentelecphono = document.getElementById("eleckontent");
    const openphotobatelec = document.querySelectorAll(".griditem123");

    openphotobatelec.forEach(button => {
        button.addEventListener("click", function() {
            const targetphoto = this.getAttribute("data-target");
            const galleryelecph = document.getElementById(targetphoto).innerHTML;
            contentelecphono.innerHTML = galleryelecph;
        });
    });


//  stranica kond

    const kondbut = document.querySelectorAll('.btext_1');
    const modalgallery1 = document.getElementById("modalgallery");
    const photogal1 = document.querySelectorAll('.gallery');
    const modalkond = document.getElementById("Modalkond");
    const closekondgal = document.querySelector(".closekond");

    kondbut.forEach(button =>{
        button.addEventListener('click', function(){
            const kondohtarget = this.getAttribute("data-target");
            const galkondcont = document.getElementById(kondohtarget).innerHTML;
            modalgallery1.innerHTML = galkondcont;
            modalkond.style.display = "block";
        });
    });

    closekondgal.addEventListener("click", function(){
        modalkond.style.display = "none";
    })
    window.addEventListener('click',function(event){
        if(event.target == modalkond) {
            modalkond.style.display = "none";
        }
    });


    // toje samoe,no so strelkami i kruche
    
    document.addEventListener('DOMContentLoaded', function () {
        const kondbut = document.querySelectorAll('.btext_1');
        const modalgallery1 = document.getElementById('modalgallery');
        let currentGallery = [];
        let currentSlideIndex = 0;
    
        // Функция для отображения галереи
        kondbut.forEach(button => {
            button.addEventListener('click', function () {
                const kondohtarget = this.getAttribute("data-target");
                const galleryItems = document.querySelectorAll(`#${kondohtarget} img`);
                
                // Очищаем модальное окно
                modalgallery1.innerHTML = '';
    
                // Добавляем все изображения из выбранной галереи в модальное окно
                galleryItems.forEach((img, index) => {
                    const newImg = img.cloneNode(); // Клонируем изображения
                    if (index === 0) {
                        newImg.classList.add('active'); // Первое изображение по умолчанию активно
                    }
                    modalgallery1.appendChild(newImg);
                });
    
                currentGallery = document.querySelectorAll('#modalgallery img');
                currentSlideIndex = 0;
                showSlide(currentSlideIndex);
                document.getElementById('Modalkond').style.display = 'block'; // Открываем модалку
            });
        });
    
        // Функция для отображения слайда по индексу
        function showSlide(index) {
            currentGallery.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
        }
    
        // Переход к следующему слайду
        function nextSlide() {
            currentSlideIndex = (currentSlideIndex + 1) % currentGallery.length;
            showSlide(currentSlideIndex);
        }
    
        // Переход к предыдущему слайду
        function prevSlide() {
            currentSlideIndex = (currentSlideIndex - 1 + currentGallery.length) % currentGallery.length;
            showSlide(currentSlideIndex);
        }
    
        // Навешиваем обработчики на стрелки
        document.querySelector('.arrowkond.righ').addEventListener('click', nextSlide);
        document.querySelector('.arrowkond.lef').addEventListener('click', prevSlide);
    
        // Закрытие модального окна
        document.querySelector('.closekond').addEventListener('click', function () {
            document.getElementById('Modalkond').style.display = 'none';
        })
    });

    


    

 
    
    
