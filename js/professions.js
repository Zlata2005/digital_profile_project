// -------------------- ОТРИСОВКА КАРТОЧЕК ПРОФЕССИЙ --------------------
// Параметр category – выбранная категория фильтра ('all', 'IT', 'Финансы', 'Производство', 'Управление')
function renderProfessions(category) {
    const container = document.getElementById('professionsContainer');
    container.innerHTML = ''; // очищаем контейнер перед отрисовкой

    // Фильтрация данных по категории
    let filtered = category === 'all' ? professions : professions.filter(p => p.category === category);

    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет профессий в этой категории.</p>';
        return;
    }

    // Проходим по каждой профессии и создаём карточку
    filtered.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'card';

        // Определяем класс и текст для бейджа востребованности
        let demandClass = '', demandText = '';
        if (prof.demand === 'высокий') {
            demandClass = 'demand-high';
            demandText = 'Высокий спрос';
        } else if (prof.demand === 'средний') {
            demandClass = 'demand-medium';
            demandText = 'Средний спрос';
        } else {
            demandClass = 'demand-low';
            demandText = 'Низкий спрос';
        }

        // Заполняем HTML карточки (обрезка описания до 90 символов)
        card.innerHTML = `
            <h3><i class="fas fa-code"></i> ${prof.title}</h3>
            <p>${prof.description.substring(0, 90)}...</p>
            <div class="salary">💰 ${prof.salary.average.toLocaleString()} руб./мес</div>
            <div class="demand ${demandClass}">${demandText}</div>
            <button onclick="showDetails(${prof.id})"><i class="fas fa-info-circle"></i> Подробнее</button>
        `;
        container.appendChild(card);
    });
}

// -------------------- ПЕРЕХОД НА СТРАНИЦУ ДЕТАЛЕЙ ПРОФЕССИИ --------------------
// ИЗМЕНЕНО: раньше был alert(), теперь открывается страница profession-detail.html с параметром id
function showDetails(id) {
    window.location.href = `profession-detail.html?id=${id}`;
}

// -------------------- ОБРАБОТЧИК ФИЛЬТРА --------------------
document.getElementById('categoryFilter').addEventListener('change', (e) => {
    renderProfessions(e.target.value);
});

// -------------------- ИНИЦИАЛИЗАЦИЯ --------------------
renderProfessions('all');