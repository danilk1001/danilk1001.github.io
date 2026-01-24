document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки вкладок и контент
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Функция переключения вкладок
    function switchTab(tabId) {
        // Убираем активный класс у всех кнопок и контента
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Добавляем активный класс к выбранной кнопке
        const activeBtn = document.querySelector(`[data-tab="${tabId}"]`);
        activeBtn.classList.add('active');
        
        // Показываем выбранный контент
        const activeContent = document.getElementById(tabId);
        activeContent.classList.add('active');
    }
    
    // Добавляем обработчики событий на кнопки
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
            
            // Сохраняем выбранную вкладку в localStorage
            localStorage.setItem('activeTab', tabId);
        });
    });
    
    // При загрузке проверяем, есть ли сохраненная вкладка
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        switchTab(savedTab);
    }
    
    // Добавляем анимацию при загрузке
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
