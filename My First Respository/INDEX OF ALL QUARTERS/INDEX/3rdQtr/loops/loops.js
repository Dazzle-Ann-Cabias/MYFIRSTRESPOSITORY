const num = document.getElementById('numInput');
const numInputBtn = document.getElementById('count');
const clearBtn = document.getElementById('clearcount');
const resultDiv = document.getElementById('countResult');

numInputBtn.addEventListener('click', () => {
    const n = Number(num.value);
    if (isNaN(n) || n < 1 || n > 1000) {
        console.error('Please enter a valid positive number.');
        countResult.textContent = 'Please enter a valid number for number (1 to 1000).';
        countResult.style.color = 'crimson';
        return;
    }
    let output = '';
    for (let i = 1; i <= n; i++) {
        output += `counting: ${i}\n`;
    }
    resultDiv.style.color = 'green';
    resultDiv.textContent = output;
    // LOOP FOR MAIN RESPO
    // resultDiv.innerHTML = output.trim();
});
//JS FOR LOPS PAGE