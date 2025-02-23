const phone = document.getElementById('phone');
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(event) {
    const phoneValid = phone.value.length === 10;
    if (!phoneValid) {
        event.preventDefault();
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    const birthdate = new Date(document.getElementById('birthday').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age < 18) {
        event.preventDefault();
        alert('You must be at least 18 years old');
    }else{
        alert('Thanks for your interest, our tour experts will get back to you shorty!');
    }
});


    



