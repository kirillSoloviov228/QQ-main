document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const mapContainer = document.getElementById('mapContainer');
    const merchContainer = document.getElementById('merchContainer');
    const savedPlacesContainer = document.getElementById('savedPlacesContainer');
    const addPlaceContainer = document.getElementById('addPlaceContainer');
    const addPlaceForm = document.getElementById('addPlaceForm');
    const mapButton = document.getElementById('mapButton');
    const popularButton = document.getElementById('popularButton');
    const merchButton = document.getElementById('merchButton');
    const savedPlacesButton = document.getElementById('savedPlacesButton');
    const addPlaceButton = document.getElementById('addPlaceButton');
    const routesButton = document.getElementById('routesButton'); // Новая кнопка
    const routesContainer = document.getElementById('routesContainer'); // Добавлено

    // Скрываем все контейнеры по умолчанию
    hideAllContainers();

    // Вешаем обработчики на кнопки
    mapButton.addEventListener('click', function() {
        hideAllContainers();
        mapContainer.style.display = 'block';
    });

    popularButton.addEventListener('click', function() {
        hideAllContainers();
        content.style.display = 'block';
    });

    merchButton.addEventListener('click', function() {
        hideAllContainers();
        merchContainer.style.display = 'block';
    });

    savedPlacesButton.addEventListener('click', function() {
        hideAllContainers();
        savedPlacesContainer.style.display = 'block';
    });

    routesButton.addEventListener('click', function() { // Обработчик для кнопки "Маршруты"
        hideAllContainers();
        routesContainer.style.display = 'block';
    });

    routesButton.addEventListener('click', function() { // Обработчик для кнопки "Маршруты"
        hideAllContainers();
        routesContainer.style.display = 'block';

    });

    function hideAllContainers() {
        content.style.display = 'none';
        mapContainer.style.display = 'none';
        merchContainer.style.display = 'none';
        savedPlacesContainer.style.display = 'none';
        addPlaceContainer.style.display = 'none';
        addPlaceForm.style.display = 'none';
        routesContainer.style.display = 'none'; // Добавляем скрытие контейнера с маршрутами
    }
});

function toggleMenu() {
    var buttonContainer = document.querySelector('.button-container');
    var menuToggle = document.querySelector('.menu-toggle');
    buttonContainer.classList.toggle('open');
    menuToggle.classList.toggle('open');
}