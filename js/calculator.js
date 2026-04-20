// -------------------- ЗАПОЛНЕНИЕ СЕЛЕКТА ПРОФЕССИЙ --------------------
function populateProfessionSelect() {
    const select = document.getElementById('professionSelect');
    // Перебираем массив professions (из data.js) и добавляем option
    professions.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.title;
        select.appendChild(option);
    });
}

// -------------------- РАСЧЁТ ЗАРПЛАТЫ С УЧЁТОМ СТАЖА --------------------
function calculateSalary() {
    const profId = parseInt(document.getElementById('professionSelect').value);
    const exp = parseInt(document.getElementById('experience').value) || 0;
    if (!profId) {
        alert('Выберите профессию');
        return;
    }
    const prof = professions.find(p => p.id === profId);
    let base = prof.salary.average;
    // Надбавка за стаж: до 5 лет +5% в год, максимум +25%
    let bonusMultiplier = 1 + Math.min(exp, 5) * 0.05;
    let estimated = Math.round(base * bonusMultiplier);
    const resultDiv = document.getElementById('salaryResult');
    resultDiv.innerHTML = `
        <p><strong><i class="fas fa-ruble-sign"></i> Примерная зарплата:</strong> ${estimated.toLocaleString()} руб.</p>
        <p><strong>Рыночный диапазон:</strong> ${prof.salary.min.toLocaleString()} – ${prof.salary.max.toLocaleString()} руб.</p>
        <p><small>Расчёт основан на средней зарплате с учётом стажа (до 5 лет +5% в год).</small></p>
    `;
}

// -------------------- АВТОВЫБОР ПРОФЕССИИ ИЗ URL (ПРИ ПЕРЕХОДЕ ИЗ ДЕТАЛЬНОЙ СТРАНИЦЫ) --------------------
// ИЗМЕНЕНО: добавлена обработка параметра ?prof=
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const profId = urlParams.get('prof');
    if (profId) {
        // Небольшая задержка, чтобы селект успел заполниться
        setTimeout(() => {
            const select = document.getElementById('professionSelect');
            if (select) {
                select.value = profId;
                calculateSalary(); // автоматический расчёт
            }
        }, 100);
    }
});

// -------------------- ЗАПУСК --------------------
populateProfessionSelect();