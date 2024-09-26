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