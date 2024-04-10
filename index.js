function calculateTotal() {
    const valueInputs = document.querySelectorAll('.value');
    let total = 0;

    valueInputs.forEach(input => {
        const value = parseFloat(input.value || 0);
        const dataValue = parseFloat(input.getAttribute('data-value') || 0);
        total += value * dataValue;
    });

    document.getElementById('totalAmount').value = 'R$ ' + total.toFixed(2);
}