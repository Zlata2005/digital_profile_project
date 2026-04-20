// -------------------- ОПИСАНИЯ ПРОФЕССИЙ-РЕЗУЛЬТАТОВ --------------------
const quizProfessions = {
    dev: {
        title: 'Разработчик',
        description: 'Вы любите создавать новые продукты, писать код и воплощать идеи в жизнь. Разработчик — одна из самых востребованных профессий.',
        salary: '120 000 – 250 000 ₽',
        skills: 'JavaScript, Python, Java, алгоритмы, фреймворки'
    },
    analytics: {
        title: 'Аналитик данных',
        description: 'Вы умеете работать с цифрами, находить закономерности и делать выводы. Data Scientist — ключевая фигура в принятии решений.',
        salary: '100 000 – 220 000 ₽',
        skills: 'SQL, Python (pandas), статистика, визуализация'
    },
    security: {
        title: 'Специалист по кибербезопасности',
        description: 'Вы внимательны к деталям, любите защищать системы и находить уязвимости. Безопасность сейчас критически важна.',
        salary: '110 000 – 240 000 ₽',
        skills: 'Сети, криптография, этичный хакинг, Linux'
    },
    management: {
        title: 'IT-менеджер / предприниматель',
        description: 'Вы обладаете лидерскими качествами, умеете организовывать процессы и вести проекты.',
        salary: '130 000 – 300 000 ₽',
        skills: 'Agile, Scrum, управление рисками, переговоры'
    }
};

// -------------------- ВОПРОСЫ (10) --------------------
const quizQuestions = [
    {
        question: "Что вас больше привлекает в работе с компьютером?",
        options: [
            { text: "Создание новых программ и сайтов", icon: "fa-code", scores: { dev: 2 } },
            { text: "Анализ больших данных и поиск закономерностей", icon: "fa-chart-line", scores: { analytics: 2 } },
            { text: "Обеспечение безопасности и защита от взломов", icon: "fa-shield-alt", scores: { security: 2 } },
            { text: "Управление IT-проектами и командой", icon: "fa-users-cog", scores: { management: 2 } }
        ]
    },
    {
        question: "Какой школьный предмет вам давался легче всего?",
        options: [
            { text: "Информатика", icon: "fa-microchip", scores: { dev: 2, analytics: 1 } },
            { text: "Математика", icon: "fa-calculator", scores: { dev: 1, analytics: 2 } },
            { text: "Физика", icon: "fa-atom", scores: { dev: 1, security: 2 } },
            { text: "Обществознание", icon: "fa-landmark", scores: { management: 2 } }
        ]
    },
    {
        question: "Что вы скорее выберете для изучения на выходных?",
        options: [
            { text: "Новый язык программирования", icon: "fa-terminal", scores: { dev: 3 } },
            { text: "Курс по статистике и машинному обучению", icon: "fa-robot", scores: { analytics: 3 } },
            { text: "Статью о новых уязвимостях в Wi-Fi", icon: "fa-wifi", scores: { security: 3 } },
            { text: "Книгу по управлению стартапами", icon: "fa-book-open", scores: { management: 3 } }
        ]
    },
    {
        question: "Какой тип задач вам интереснее решать?",
        options: [
            { text: "Написать алгоритм для автоматизации рутины", icon: "fa-robot", scores: { dev: 2 } },
            { text: "Найти факторы, влияющие на продажи, по данным", icon: "fa-chart-pie", scores: { analytics: 2 } },
            { text: "Проверить систему на прочность и найти уязвимости", icon: "fa-bug", scores: { security: 2 } },
            { text: "Спланировать этапы разработки нового продукта", icon: "fa-tasks", scores: { management: 2 } }
        ]
    },
    {
        question: "В какой сфере вы хотели бы применить свои навыки?",
        options: [
            { text: "Разработка мобильных приложений", icon: "fa-mobile-alt", scores: { dev: 2 } },
            { text: "Бизнес-аналитика в крупной компании", icon: "fa-chart-bar", scores: { analytics: 2 } },
            { text: "Кибербезопасность в банке", icon: "fa-university", scores: { security: 2 } },
            { text: "Управление цифровыми проектами в госсекторе", icon: "fa-city", scores: { management: 2 } }
        ]
    },
    {
        question: "Какое качество вы считаете своим главным преимуществом?",
        options: [
            { text: "Креативность и умение придумывать новое", icon: "fa-lightbulb", scores: { dev: 2, analytics: 1 } },
            { text: "Логическое мышление и внимание к деталям", icon: "fa-brain", scores: { dev: 1, analytics: 2 } },
            { text: "Ответственность и бдительность", icon: "fa-eye", scores: { security: 2 } },
            { text: "Коммуникабельность и лидерство", icon: "fa-comments", scores: { management: 3 } }
        ]
    },
    {
        question: "Какой фильм или книга вам ближе?",
        options: [
            { text: "«Социальная сеть» (про создание Facebook)", icon: "fa-facebook", scores: { dev: 2 } },
            { text: "«Игра в имитацию» (про Алана Тьюринга)", icon: "fa-puzzle-piece", scores: { analytics: 2, security: 1 } },
            { text: "«Кто я» (хакерский триллер)", icon: "fa-user-secret", scores: { security: 3 } },
            { text: "«Основатель» (про создание McDonald's)", icon: "fa-hamburger", scores: { management: 2 } }
        ]
    },
    {
        question: "Что для вас важнее при выборе работы?",
        options: [
            { text: "Возможность создавать что-то новое", icon: "fa-hands", scores: { dev: 2 } },
            { text: "Работа с данными и аналитика", icon: "fa-database", scores: { analytics: 2 } },
            { text: "Гарантия безопасности и стабильности", icon: "fa-lock", scores: { security: 2 } },
            { text: "Управленческий рост и лидерство", icon: "fa-chart-line", scores: { management: 2 } }
        ]
    },
    {
        question: "Какой формат обучения вам ближе?",
        options: [
            { text: "Онлайн-курсы с практикой кодинга", icon: "fa-laptop", scores: { dev: 2 } },
            { text: "Анализ кейсов и реальных данных", icon: "fa-chart-line", scores: { analytics: 2, management: 1 } },
            { text: "Лабораторные работы по взлому и защите", icon: "fa-flask", scores: { security: 3 } },
            { text: "Бизнес-симуляции и командные проекты", icon: "fa-users", scores: { management: 2 } }
        ]
    },
    {
        question: "Что вас раздражает больше всего?",
        options: [
            { text: "Медленная работа компьютера", icon: "fa-tachometer-alt", scores: { dev: 2 } },
            { text: "Неполные или противоречивые данные", icon: "fa-exclamation-triangle", scores: { analytics: 2 } },
            { text: "Небезопасные сайты, где легко украсть пароль", icon: "fa-skull-crossbones", scores: { security: 2 } },
            { text: "Неорганизованность в команде", icon: "fa-users-slash", scores: { management: 2 } }
        ]
    }
];

// -------------------- DOM ЭЛЕМЕНТЫ --------------------
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const resultContent = document.getElementById('result-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// -------------------- ПЕРЕМЕННЫЕ --------------------
let currentQuestionIndex = 0;
let scores = { dev: 0, analytics: 0, security: 0, management: 0 };
let userAnswers = [];
let selectedOptionIndex = null;
const totalQuestions = quizQuestions.length;

// Инициализация массива ответов
for (let i = 0; i < totalQuestions; i++) userAnswers[i] = null;

// -------------------- ОТРИСОВКА ТЕКУЩЕГО ВОПРОСА --------------------
function renderQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    const savedAnswer = userAnswers[currentQuestionIndex];
    selectedOptionIndex = savedAnswer;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.dataset.index = idx;
        btn.innerHTML = `<i class="fas ${opt.icon}"></i> ${opt.text}`;
        if (idx === savedAnswer) btn.classList.add('selected');
        btn.addEventListener('click', () => selectOption(idx));
        optionsContainer.appendChild(btn);
    });

    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
    updateNavigationButtons();
}

// -------------------- ВЫБОР ВАРИАНТА --------------------
function selectOption(index) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    const selectedBtn = document.querySelector(`.option-btn[data-index="${index}"]`);
    if (selectedBtn) selectedBtn.classList.add('selected');
    selectedOptionIndex = index;
    nextBtn.disabled = false;
}

// -------------------- ОБНОВЛЕНИЕ КНОПОК --------------------
function updateNavigationButtons() {
    prevBtn.disabled = (currentQuestionIndex === 0);
    nextBtn.disabled = (selectedOptionIndex === null);
    nextBtn.textContent = (currentQuestionIndex === totalQuestions - 1) ? 'Завершить' : 'Далее →';
}

// -------------------- ПЕРЕСЧЁТ БАЛЛОВ --------------------
function recalculateScores() {
    scores = { dev: 0, analytics: 0, security: 0, management: 0 };
    for (let i = 0; i < totalQuestions; i++) {
        const ansIdx = userAnswers[i];
        if (ansIdx !== null) {
            const inc = quizQuestions[i].options[ansIdx].scores;
            for (let key in scores) {
                scores[key] += inc[key] || 0;
            }
        }
    }
}

// -------------------- КНОПКА "ДАЛЕЕ / ЗАВЕРШИТЬ" --------------------
function handleNext() {
    if (selectedOptionIndex === null) return;
    userAnswers[currentQuestionIndex] = selectedOptionIndex;
    recalculateScores();

    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showResult();
    }
}

// -------------------- КНОПКА "НАЗАД" --------------------
function handlePrev() {
    if (currentQuestionIndex > 0) {
        if (selectedOptionIndex !== null) {
            userAnswers[currentQuestionIndex] = selectedOptionIndex;
            recalculateScores();
        }
        currentQuestionIndex--;
        renderQuestion();
    }
}

// -------------------- ПОКАЗ РЕЗУЛЬТАТА --------------------
function showResult() {
    recalculateScores();
    let maxCategory = 'dev';
    for (let key in scores) {
        if (scores[key] > scores[maxCategory]) maxCategory = key;
    }
    const prof = quizProfessions[maxCategory];
    resultContent.innerHTML = `
        <div class="result-card">
            <div>
                <h3><i class="fas fa-user-tie"></i> ${prof.title}</h3>
                <p><i class="fas fa-align-left"></i> ${prof.description}</p>
                <p><i class="fas fa-money-bill-wave"></i> Средняя зарплата: ${prof.salary}</p>
                <p><i class="fas fa-cogs"></i> Ключевые навыки: ${prof.skills}</p>
            </div>
        </div>
    `;
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// -------------------- СБРОС КВИЗА (ПРОЙТИ ЗАНОВО) --------------------
function resetQuiz() {
    currentQuestionIndex = 0;
    scores = { dev: 0, analytics: 0, security: 0, management: 0 };
    userAnswers = new Array(totalQuestions).fill(null);
    selectedOptionIndex = null;
    progressBar.style.width = '0%';
    startQuiz(); // сразу запускаем
}

// -------------------- ЗАПУСК КВИЗА --------------------
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    renderQuestion();
}

// -------------------- ПРИВЯЗКА СОБЫТИЙ --------------------
document.addEventListener('DOMContentLoaded', () => {
    if (startBtn) startBtn.addEventListener('click', startQuiz);
    if (restartBtn) restartBtn.addEventListener('click', resetQuiz);
    if (prevBtn) prevBtn.addEventListener('click', handlePrev);
    if (nextBtn) nextBtn.addEventListener('click', handleNext);
});