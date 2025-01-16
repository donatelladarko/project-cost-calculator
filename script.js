document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculator-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const totalHoursEl = document.getElementById('total-hours');
    const totalCostEl = document.getElementById('total-cost');

    const baseCost = 5000;
    const hourlyRate = 150;

    const calculateTotal = () => {
        let totalHours = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                totalHours += parseInt(checkbox.dataset.hours, 10);
            }
        });

        const totalCost = baseCost + totalHours * hourlyRate;
        totalHoursEl.textContent = totalHours;
        totalCostEl.textContent = totalCost.toFixed(2);
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    form.addEventListener('input', calculateTotal);
});
