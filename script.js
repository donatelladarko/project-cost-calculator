// script.js

// Hourly rate
const hourlyRate = 150;

// Function to calculate estimate
function calculateEstimate() {
    const items = [
        { id: 'branding-upgrade-cost', hours: 5 },
        { id: 'logo-refresh-cost', hours: 5 },
        { id: 'line-card-redesign-cost', hours: 4 },
        { id: 'line-card-integration-cost', hours: 5 },
        { id: 'parametric-search-cost', hours: 3 },
        { id: 'interactive-maps-cost', hours: 2 },
        { id: 'events-calendar-cost', hours: 5 },
        { id: 'sales-chat-cost', hours: 4 }
    ];

    items.forEach(item => {
        const costElement = document.getElementById(item.id);
        if (costElement) {
            costElement.textContent = `$${item.hours * hourlyRate}`;
        }
    });

    // Fixed prices
    const fixedPrices = [
        { id: 'annual-hosting-cost', price: 500 },
        { id: 'accessibility-plugin-cost', price: 1000 },
        { id: 'website-policies-cost', price: 250 }
    ];

    fixedPrices.forEach(item => {
        const costElement = document.getElementById(item.id);
        if (costElement) {
            costElement.textContent = `$${item.price}`;
        }
    });

    // Calculate total estimate
    let total = items.reduce((sum, item) => sum + (item.hours * hourlyRate), 0);
    total += fixedPrices.reduce((sum, item) => sum + item.price, 0);

    // Display total estimate
    const estimateOutput = document.getElementById('estimate-output');
    if (estimateOutput) {
        estimateOutput.textContent = `$${total}`;
    }
}
