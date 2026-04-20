// -------------------- ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ --------------------
// Ждём полной загрузки DOM, чтобы элементы навигации существовали
document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки в навигации
    const navLinks = document.querySelectorAll('nav a');
    // Определяем имя текущего файла (например, "index.html" или "professions.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Перебираем ссылки и добавляем класс active, если href совпадает с текущей страницей
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// -------------------- ТЁМНАЯ ТЕМА С СОХРАНЕНИЕМ В LOCALSTORAGE --------------------
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    // При загрузке проверяем, была ли сохранена тёмная тема
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // меняем иконку на солнце
    }
    // Обработчик клика по кнопке переключения
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}