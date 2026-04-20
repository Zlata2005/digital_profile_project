// ============================================================================
// ФАЙЛ companies.js – ОТРИСОВКА КАРТОЧЕК КОМПАНИЙ
// ============================================================================
// Функция renderCompanies фильтрует компании по сфере и создаёт HTML-карточки.
// В объекте companyLogos перечислены соответствия названий компаний и файлов логотипов.
// Добавлены логотипы для новых компаний (Simtex, Инфософт, АйТи-Сервис, НПО «Марс»).
// Удалены логотипы вымышленных компаний (Mobyte, Кибербез, Эксперт, Ulyanovsk Cloud).

function renderCompanies(field) {
    // Получаем контейнер, куда будем вставлять карточки
    const container = document.getElementById('companiesContainer');
    // Очищаем контейнер перед новой отрисовкой
    container.innerHTML = '';

    // Фильтруем массив companies по полю field (все / IT / Финансы / Производство)
    let filtered = field === 'all' ? companies : companies.filter(c => c.field === field);

    // Если после фильтрации не осталось компаний – выводим сообщение
    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет компаний в этой сфере.</p>';
        return;
    }

    // Объект для сопоставления названий компаний и имён файлов логотипов (из папки images/)
    // Добавлены все реальные компании, вымышленные удалены.
    const companyLogos = {
        'СимбирСофт': 'simbirsoft.png',
        'ВТБ': 'vtb.png',
        'Сбербанк': 'sberbank.png',
        'Авиастар-СП': 'aviastar.png',
        'УАЗ': 'uaz.png',
        'Ростелеком': 'rostelecom.png',
        'Альфа-Банк': 'alfabank.png',
        // Новые компании
        'Simtex': 'simtex.png',
        'Инфософт': 'infosoft.png',
        'АйТи-Сервис': 'itservice.png',
        'НПО «Марс»': 'npo-mars.png'
    };

    // Перебираем каждую компанию из отфильтрованного списка
    filtered.forEach(company => {
        // Создаём элемент div с классом 'card'
        const card = document.createElement('div');
        card.className = 'card';

        // Определяем путь к логотипу: ищем название компании в объекте companyLogos
        let logoSrc = 'images/default.png'; // путь по умолчанию (заглушка)
        for (let [name, file] of Object.entries(companyLogos)) {
            if (company.name.includes(name)) {
                logoSrc = `images/${file}`;
                break;
            }
        }

        // Проверяем ссылку на вакансии: если она равна '#' или отсутствует – показываем предупреждение
        const vacanciesLink = (company.vacancies && company.vacancies !== '#') ? company.vacancies : '#';
        const onclickAttr = (vacanciesLink === '#') 
            ? ' onclick="alert(\'Ссылка на вакансии временно недоступна. Посетите официальный сайт компании.\'); return false;"' 
            : '';

        // Формируем HTML карточки: логотип, название, описание, сфера, кнопка "Вакансии"
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <img src="${logoSrc}" alt="${company.name}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 12px;">
                <h3 style="margin: 0;">${company.name}</h3>
            </div>
            <p>${company.description}</p>
            <p><strong><i class="fas fa-tag"></i> Сфера:</strong> ${company.field}</p>
            <a href="${vacanciesLink}" target="_blank" class="btn" ${onclickAttr}>
                <i class="fas fa-external-link-alt"></i> Вакансии →
            </a>
        `;
        // Добавляем карточку в контейнер
        container.appendChild(card);
    });
}

// Обработчик изменения фильтра (вызывается при выборе другой сферы)
document.getElementById('fieldFilter').addEventListener('change', (e) => {
    renderCompanies(e.target.value);
});

// Первоначальная отрисовка (показываем все компании)
renderCompanies('all');