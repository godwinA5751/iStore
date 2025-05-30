
const landing = document.querySelector('.landingPage');
const payment = document.querySelector('.paymentPage');
function buy(item, price) {
  landing.style.display = 'none';
  payment.style.display = 'block';
  document.getElementById('itemInfo').innerText = item;
  document.getElementById('itemPrice').innerText = `Price: ₦${price.toFixed(2)}`;
  const payNow = (60/100)*price;
  document.getElementById('sixtyPercent').innerText = `60%: ₦${payNow.toFixed(2)}`;

}
function copyAcc() {
  const acc = document.getElementById("accountNum").innerText;
  navigator.clipboard.writeText(acc);
  alert("Account number copied!");
}


function confirmPayment(event) {
  event.preventDefault();
  const landing = document.querySelector('.landingPage');
  const payment = document.querySelector('.paymentPage');
  const form = document.querySelector('form');
  const button = document.querySelector('.paid-btn');
  const messageBox = document.querySelector('#confirmationMsg');
  if(form.checkValidity()){
    messageBox.style.color = 'green';
    messageBox.innerText = 'Thank you! Once payment is confirmed, we will contact you for delivery.';

    setTimeout(() => {
      landing.style.display = 'block';
      payment.style.display = 'none';
    }, 3000);
  }
  else{
    messageBox.style.color = 'red';
    messageBox.innerText = 'Please fill out the required field!';
    setTimeout(() => {
      messageBox.innerText = '';
    }, 3500);
  }
}

