// Login Btn Click Function

document.querySelector('.login-btn').addEventListener('click', function () {
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.transaction-section').style.display = 'block';
});

// Deposit Value

document.querySelector('.deposit-input').addEventListener('click', function () {
    const depositValue = getInputValue('.deposit-amount');
    if (depositValue < 0) {
        document.querySelector('.deposit-amount').value = '';
        document.querySelector('.warning-message').textContent = 'Wrong Amount! 😢😢';
        document.querySelector('.warning-message').classList = 'text-danger';
    } else {
        getUpdateValue('.current-deposit', depositValue);
        getUpdateValue('.current-balance', depositValue);
        getUpdateValue('.total-balance', depositValue);
        displayMessage('Successfully Added 👍');
        messageTextColor('text-success');
        document.querySelector('.deposit-amount').value = '';
    }
});

// Withdraw Value

document.querySelector('.withdraw-input').addEventListener('click', function () {
    const withdrawValue = getInputValue('.withdraw-amount');
    if (withdrawValue < 0) {
        document.querySelector('.warning-message').textContent = 'Wrong Amount! 😢😢';
        document.querySelector('.warning-message').classList = 'text-danger';
        document.querySelector('.withdraw-amount').value = '';
    } else {
        getUpdateValue('.current-withdraw', withdrawValue);
        getUpdateValue('.current-balance', -1 * withdrawValue);
        getUpdateValue('.total-balance', -1 * withdrawValue);
        document.querySelector('.withdraw-amount').value = '';
    }
});

// Function for Getting Input Number

function getInputValue(inputValue) {
    const value = Number(document.querySelector(inputValue).value);
    return value;
}

// Function for Calculation
function getUpdateValue(updateValue, newValue) {
    let currentValue = Number(document.querySelector(updateValue).textContent);
    let totalValue = currentValue + newValue;

    document.querySelector(updateValue).textContent = totalValue;
}

// Function for Warning Message Text
function displayMessage(message) {
    const warningMessage = (document.querySelector('.warning-message').textContent = message);
    return warningMessage;
}

// Function for Warning Message Text Color
function messageTextColor(className) {
    const warningText = (document.querySelector('.warning-message').classList = className);
    return warningText;
}
