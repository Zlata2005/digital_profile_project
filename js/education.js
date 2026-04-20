// ============================================================================
// ФАЙЛ education.js – ОТРИСОВКА КАРТОЧЕК УЧЕБНЫХ ЗАВЕДЕНИЙ
// ============================================================================

function renderEducation(field) {
    const container = document.getElementById('educationContainer');
    container.innerHTML = '';

    let filtered = field === 'all' ? education : education.filter(e => e.field.includes(field));

    if (filtered.length === 0) {
        container.innerHTML = '<p>Нет учебных заведений в этой сфере.</p>';
        return;
    }

    filtered.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'card';

        // ----- ОПРЕДЕЛЕНИЕ ЛОГОТИПА ПО НАЗВАНИЮ -----
        let logoSrc = 'images/default.png';
        if (edu.name.includes('УлГУ')) {
            logoSrc = 'images/ulgu.png';
        } else if (edu.name.includes('УлГТУ')) {
            logoSrc = 'images/ulstu.png';
        } else if (edu.name.includes('УлГПУ') || edu.name.includes('педагогический')) {
            logoSrc = 'images/ulspu.png';
        } else if (edu.name.includes('авиационный колледж') || edu.name.includes('Авиационный колледж')) {
            logoSrc = 'images/aviacollege.png';
        } else if (edu.name.includes('Аграрный')) {
            logoSrc = 'images/agrarian.png';
        } else if (edu.name.includes('колледж')) {
            logoSrc = 'images/college.png';
        } else if (edu.name.includes('IT-куб') || edu.name.includes('itcube')) {
            logoSrc = 'images/itcube.png';
        }

        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <img src="${logoSrc}" alt="${edu.name}" style="width: 50px; height: 50px; object-fit: contain; border-radius: 12px;">
                <h3 style="margin: 0;">${edu.name}</h3>
            </div>
            <p>${edu.description}</p>
            <p><strong><i class="fas fa-graduation-cap"></i> Направление:</strong> ${edu.field}</p>
            <a href="${edu.link}" target="_blank" class="btn"><i class="fas fa-external-link-alt"></i> Сайт →</a>
        `;
        container.appendChild(card);
    });
}

document.getElementById('eduFieldFilter').addEventListener('change', (e) => {
    renderEducation(e.target.value);
});

renderEducation('all');
