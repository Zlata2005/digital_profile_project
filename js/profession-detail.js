// -------------------- ПОЛУЧАЕМ ID ПРОФЕССИИ ИЗ URL --------------------
// Пример: profession-detail.html?id=1
const urlParams = new URLSearchParams(window.location.search);
const professionId = parseInt(urlParams.get('id'));
const profession = professions.find(p => p.id === professionId);
const container = document.getElementById('detail-content');

// -------------------- ЕСЛИ ПРОФЕССИЯ НЕ НАЙДЕНА – ПОКАЗЫВАЕМ ОШИБКУ --------------------
if (!profession) {
    container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e74c3c;"></i>
            <h2>Профессия не найдена</h2>
            <a href="professions.html" class="btn">Вернуться к списку</a>
        </div>
    `;
} else {
    // -------------------- ОПРЕДЕЛЯЕМ КЛАСС ВОСТРЕБОВАННОСТИ --------------------
    let demandClass = '', demandText = '';
    if (profession.demand === 'высокий') {
        demandClass = 'demand-high';
        demandText = 'Высокий спрос';
    } else if (profession.demand === 'средний') {
        demandClass = 'demand-medium';
        demandText = 'Средний спрос';
    } else {
        demandClass = 'demand-low';
        demandText = 'Низкий спрос';
    }

    // -------------------- ПОЛУЧАЕМ СПИСОК КОМПАНИЙ (по id) --------------------
    const companyNames = profession.companies.map(cId => {
        const company = companies.find(c => c.id === cId);
        return company ? `<li><i class="fas fa-building"></i> ${company.name} – ${company.description}</li>` : '';
    }).join('');

    // -------------------- ПОЛУЧАЕМ СПИСОК УЧЕБНЫХ ЗАВЕДЕНИЙ (по id) --------------------
    const eduNames = profession.education.map(eId => {
        const edu = education.find(e => e.id === eId);
        return edu ? `<li><i class="fas fa-university"></i> <a href="${edu.link}" target="_blank">${edu.name}</a> – ${edu.description}</li>` : '';
    }).join('');

    // -------------------- ФОРМИРУЕМ СТРАНИЦУ С ПОЛНОЙ ИНФОРМАЦИЕЙ --------------------
    container.innerHTML = `
        <h2 style="color: var(--primary);"><i class="fas fa-code"></i> ${profession.title}</h2>
        <div class="demand ${demandClass}" style="margin: 15px 0;">${demandText}</div>
        <h3><i class="fas fa-align-left"></i> Описание</h3>
        <p>${profession.description}</p>
        <h3><i class="fas fa-cogs"></i> Ключевые навыки</h3>
        <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0;">
            ${profession.skills.map(skill => `<li style="background: #eef2ff; padding: 5px 12px; border-radius: 30px;"><i class="fas fa-check-circle"></i> ${skill}</li>`).join('')}
        </ul>
        <h3><i class="fas fa-ruble-sign"></i> Зарплата</h3>
        <p><strong>Средняя:</strong> ${profession.salary.average.toLocaleString()} руб.</p>
        <p><strong>Диапазон:</strong> ${profession.salary.min.toLocaleString()} – ${profession.salary.max.toLocaleString()} руб.</p>
        <h3><i class="fas fa-building"></i> Компании-работодатели</h3>
        <ul style="list-style: none; padding: 0;">${companyNames || '<li>Нет данных</li>'}</ul>
        <h3><i class="fas fa-graduation-cap"></i> Где учиться</h3>
        <ul style="list-style: none; padding: 0;">${eduNames || '<li>Нет данных</li>'}</ul>
        <div style="margin-top: 30px; text-align: center;">
            <a href="calculator.html?prof=${profession.id}" class="btn"><i class="fas fa-calculator"></i> Рассчитать зарплату</a>
        </div>
    `;
}