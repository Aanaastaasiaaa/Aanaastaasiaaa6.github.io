function validateQuantity(input) {
    if (input === '') {
        return { isValid: false, error: 'Пожалуйста, введите количество товара' };
    }

    if (/[a-zA-Zа-яА-Я]/.test(input)) {
        return { isValid: false, error: 'Введите целое число' };
    }

    if (input.includes('-')) {
        return { isValid: false, error: 'Введите целое число' };
    }

    if (!/^\d+$/.test(input)) {
        return { isValid: false, error: 'Введите целое число' };
    }

    const quantity = parseInt(input);

    if (quantity <= 0) {
        return { isValid: false, error: 'Введите целое число' };
    }


    return { isValid: true, error: '' };
}

function calculateCost() {
    console.log("Функция calculateCost вызвана");

    const quantityInput = document.getElementById('quantity');
    const quantityValue = quantityInput.value.trim();
    const productSelect = document.getElementById('product');
    const errorElement = document.getElementById('quantity-error');
    const resultElement = document.getElementById('result');
    const totalCostElement = document.getElementById('total-cost');

    console.log("Введенное значение:", quantityValue);

    errorElement.style.display = 'none';
    errorElement.textContent = '';
    resultElement.style.display = 'none';

    const validation = validateQuantity(quantityValue);

    if (!validation.isValid) {
        errorElement.textContent = validation.error;
        errorElement.style.display = 'block';
        console.log("Ошибка:", validation.error);
        return;
    }

    const quantity = parseInt(quantityValue);
    const price = parseInt(productSelect.value);

    console.log("Количество:", quantity, "Цена:", price);

    const totalCost = quantity * price;

    console.log("Общая стоимость:", totalCost);

    const formattedCost = totalCost.toLocaleString('ru-RU');

    totalCostElement.textContent = formattedCost + ' руб.';
    resultElement.style.display = 'block';

    console.log("Результат показан!");
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        calculateCost();
    }
}

window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен");

    const calculateBtn = document.getElementById('calculate-btn');
    const quantityInput = document.getElementById('quantity');

    calculateBtn.addEventListener('click', calculateCost);
    quantityInput.addEventListener('keypress', handleEnterKey);

    quantityInput.addEventListener('input', function() {
        const errorElement = document.getElementById('quantity-error');
        errorElement.style.display = 'none';
    });
    
    console.log("Обработчики назначены");
});