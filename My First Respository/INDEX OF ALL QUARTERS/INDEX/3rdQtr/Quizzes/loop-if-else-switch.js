document.getElementById('checkBtn').addEventListener('click', function() {
    // Get the goal and amount saved from the user inputs
    let goalAmount = parseFloat(document.getElementById('goal').value);
    let savedAmount = parseFloat(document.getElementById('saved').value);

    // If the inputs are invalid (empty or non-numeric), show an error
    if (isNaN(goalAmount) || isNaN(savedAmount)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    // Check if the goal has been met or how much more is needed
    let resultText = "";
    if (savedAmount >= goalAmount) {
        resultText = `Sana makalibre ₱${goalAmount}!`;
    } else {
        let remainingAmount = goalAmount - savedAmount;
        resultText = `Mag ipon ka pa ₱${remainingAmount.toFixed(2)} para may pang gala ₱${goalAmount}.`;
    }
    document.getElementById('result').innerText = resultText;

    // Categorize the savings progress using a switch statement
    let categoryText = "";
    switch (true) {
        case savedAmount < goalAmount * 0.25:
            categoryText = 'Mahinang nilalang putik';
            break;
        case savedAmount >= goalAmount * 0.25 && savedAmount < goalAmount * 0.75:
            categoryText = 'konti pa! malapit mo na akong malibre';
            break;
        case savedAmount >= goalAmount * 0.75:
            categoryText = 'tara gala';
            break;
        default:
            categoryText = 'ano yan??? panaginip???';
            break;
    }
    document.getElementById('category').innerText = categoryText;
});