// Bnak calculation
const depositForm = document.getElementById('deposit-form');
const withdrawForm = document.getElementById('withdraw-form');
const depositInput = document.getElementById('deposit-input');
const withdrawInput = document.getElementById('withdraw-input');
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');


// Create a function for deposit and withdraw 

function bankCalculaction(inputAmount, currentAmount, outputAmount, totalBalance, calculation) {
    if (!isNaN(inputAmount.value) && inputAmount.value > 0) {

        // Convert the user Input into number
        const getInputAmount = parseFloat(inputAmount.value);

        // Convert the current amount to number
        const getCurrentAmount = parseFloat(currentAmount.innerText);
        
        // Check calculation condition if it true than it will sum the value either it will subtraction
        if (calculation === true) {
            const sumAmount = getInputAmount + getCurrentAmount;

            // Show the output into outputAmount innerText
            outputAmount.innerText = sumAmount;

            // Show the output also in total balance
            const totalAmount = parseFloat(totalBalance.innerText);
            totalBalance.innerText = totalAmount + getInputAmount;
            console.log('Deposit was successfull!');

        } else {
             // Add balance to the withdrawAmount 
            const sumAmount = getInputAmount + getCurrentAmount;

            // Show the output into outputAmount innerText
            outputAmount.innerText = sumAmount;

           // Decrease the balance from total blance
            const totalAmount = parseFloat(totalBalance.innerText);
            totalBalance.innerText = totalAmount - getInputAmount;
            console.log('Withdraw was successfull!');
        };
        inputAmount.value = '';
    } else {
        alert('Amount Can\'t be Blank or Less Than 0');
    };
};

// Call the Functionality

depositForm.addEventListener('submit', function (e) {
    e.preventDefault();
    bankCalculaction(depositInput, depositAmount, depositAmount, balanceAmount, true);
});


withdrawForm.addEventListener('submit', function (event) {
    event.preventDefault();
    bankCalculaction(withdrawInput, withdrawAmount, withdrawAmount, balanceAmount, false);
});