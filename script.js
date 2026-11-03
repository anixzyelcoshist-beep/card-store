// Screen elements
const securityScreen = document.getElementById('security-screen');
const loginScreen = document.getElementById('login-screen');
const storeScreen = document.getElementById('store-screen');
const paymentScreen = document.getElementById('payment-screen');

// Buttons
const verifyBtn = document.getElementById('verify-btn');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const proceedPaymentBtn = document.getElementById('proceed-payment-btn');
const backToStoreBtn = document.getElementById('back-to-store-btn');
const copyUpiBtn = document.getElementById('copy-upi-btn');
const paidBtn = document.getElementById('paid-btn');

// Selected Card State
let selectedCard = {
    name: "Starter Card",
    price: "99",
    balance: "5,000"
};

// Card Selection Logic
const cardItems = document.querySelectorAll('.card-item');
cardItems.forEach(item => {
    // Default select first
    if(item.dataset.name === "Starter Card") item.classList.add('selected');

    item.addEventListener('click', () => {
        cardItems.forEach(c => c.classList.remove('selected'));
        item.classList.add('selected');

        selectedCard = {
            name: item.dataset.name,
            price: item.dataset.price,
            balance: item.dataset.balance
        };
    });
});

// Step 1 -> Step 2
verifyBtn.addEventListener('click', () => {
    securityScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
});

// Step 2 -> Step 3
loginBtn.addEventListener('click', () => {
    const mobile = document.getElementById('login-mobile').value;
    if(mobile.length < 10) {
        alert('Kripya valid mobile number enter karein');
        return;
    }
    loginScreen.classList.add('hidden');
    storeScreen.classList.remove('hidden');
});

registerBtn.addEventListener('click', () => {
    alert('Registration page par redirect kiya ja raha hai.');
});

// Step 3 -> Step 4 (Payment)
proceedPaymentBtn.addEventListener('click', () => {
    const name = document.getElementById('cust-name').value;
    const mobile = document.getElementById('cust-mobile').value;

    if(!name || !mobile) {
        alert('Apna naam aur mobile number bharein.');
        return;
    }

    // Update summary values
    document.getElementById('summary-name').innerText = name;
    document.getElementById('summary-mobile').innerText = mobile;
    document.getElementById('summary-price').innerText = selectedCard.price;
    document.getElementById('summary-balance').innerText = selectedCard.balance;
    document.getElementById('qr-price').innerText = selectedCard.price;

    storeScreen.classList.add('hidden');
    paymentScreen.classList.remove('hidden');
});

// Back to store
backToStoreBtn.addEventListener('click', () => {
    paymentScreen.classList.add('hidden');
    storeScreen.classList.remove('hidden');
});

// Copy UPI ID functionality
copyUpiBtn.addEventListener('click', () => {
    const upiInput = document.getElementById('upi-input');
    navigator.clipboard.writeText(upiInput.value);
    copyUpiBtn.innerText = "✓ UPI ID COPIED!";
    setTimeout(() => {
        copyUpiBtn.innerText = "📋 COPY UPI ID";
    }, 2000);
});

paidBtn.addEventListener('click', () => {
    alert('Payment verification ke liye submit ho gaya hai!');
});
