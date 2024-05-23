document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', log);
});

function log(event) {
    event.preventDefault();

    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const form = event.target;

    if (userName === "" || password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Invalid!',
            text: 'Username or password cannot be empty.'
        });
        return;
    }

    const storedUser = localStorage.getItem('User');
    const storedPassword = localStorage.getItem('Pass');

    if (userName === storedUser && password === storedPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: 'Welcome back!'
        }).then(() => {
            window.location.href = 'Dashboard.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid username or password!',
            text: 'Please try again.'
        });
    }

    form.reset();
}



// registration page


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', reg);
});

function reg(event) {
    event.preventDefault();

    const user = document.getElementById('user').value;
    const mail = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
 const form=event.target;
    if (user === "" || mail === "" || pass === "" || confirmPassword === "") {
        Swal.fire({
            icon: 'error',
            title: 'Invalid!',
            text: 'Please fill all fields'
        });
        return;
    }

    if (pass !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid!',
            text: 'Password do  not match!.'
        });
        return;
    }

    const storedUser = localStorage.getItem('User');
    const storedMail = localStorage.getItem('Email');


    if (user === storedUser && mail === storedMail) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid!',
            text: 'User already exist!'
        });
    } else {
        localStorage.setItem('User', user);
        localStorage.setItem('Email', mail);
        localStorage.setItem('Pass', pass);
        Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            text: 'Welcome!'
        }).then(() => {
            window.location.href = 'index.html';
        });
        form.reset();
    }
    
}
// dashboard

document.getElementById('departure').addEventListener('change', updateFare);
document.getElementById('destination').addEventListener('change', updateFare);
document.getElementById('clas').addEventListener('change', updateFare);

function updateFare() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const clas = document.getElementById('clas').value;
    const fare = document.getElementById('fare');

    if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DXB' || destination === 'AUH') && clas === 'Economy Class') {
        fare.value = 70000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DXB' || destination === 'AUH') && clas === 'Business Class') {
        fare.value = 100000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DXB' || destination === 'AUH') && clas === 'First Class') {
        fare.value = 190000;
    } else if ((departure === 'DXB' || departure === 'AUH') && (destination === 'KHI' || destination === 'ISB') && clas === 'Economy Class') {
        fare.value = 82000;
    } else if ((departure === 'DXB' || departure === 'AUH') && (destination === 'KHI' || destination === 'ISB') && clas === 'Business Class') {
        fare.value = 120000;
    } else if ((departure === 'DXB' || departure === 'AUH') && (destination === 'KHI' || destination === 'ISB') && clas === 'First Class') {
        fare.value = 200000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'JED' || destination === 'RUH' || destination === 'AMM' || destination === 'MCT') && clas === 'Economy Class') {
        fare.value = 100000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'JED' || destination === 'RUH' || destination === 'AMM' || destination === 'MCT') && clas === 'Business Class') {
        fare.value = 160000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'JED' || destination === 'RUH' || destination === 'AMM' || destination === 'MCT') && clas === 'First Class') {
        fare.value = 210000;
    } else if ((destination === 'KHI' || destination === 'ISB') && (departure === 'JED' || departure === 'RUH' || departure === 'AMM' || departure === 'MCT') && clas === 'Economy Class') {
        fare.value = 150000;
    } else if ((destination === 'KHI' || destination === 'ISB') && (departure === 'JED' || departure === 'RUH' || departure === 'AMM' || departure === 'MCT') && clas === 'Business Class') {
        fare.value = 205000;
    } else if ((destination === 'KHI' || destination === 'ISB') && (departure === 'JED' || departure === 'RUH' || departure === 'AMM' || departure === 'MCT') && clas === 'First Class') {
        fare.value = 250000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DOH' || destination === 'BAH') && clas === 'Economy Class') {
        fare.value = 137000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DOH' || destination === 'BAH') && clas === 'Business Class') {
        fare.value = 271000;
    } else if ((departure === 'KHI' || departure === 'ISB') && (destination === 'DOH' || destination === 'BAH') && clas === 'First Class') {
        fare.value = 350000;
    } else if ((departure === 'DOH' || departure === 'BAH') && (destination === 'KHI' || destination === 'ISB') && clas === 'Economy Class') {
        fare.value = 140000;
    } else if ((departure === 'DOH' || departure === 'BAH') && (destination === 'KHI' || destination === 'ISB') && clas === 'Business Class') {
        fare.value = 250000;
    } else if ((departure === 'DOH' || departure === 'BAH') && (destination === 'KHI' || destination === 'ISB') && clas === 'First Class') {
        fare.value = 377000;
    } else {
        fare.value = 93000; 
    }
}

async function myFunc(event) {
    event.preventDefault();

    const form = event.target;
    const fullName = document.getElementById('name').value;
    const airline = document.getElementById('airline').value;
    const passportNo = document.getElementById('passport').value;
    const contact = document.getElementById('contact').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const fare = document.getElementById('fare').value;
    const date = document.getElementById('date').value;
    const seat = document.getElementById('seat').value;
    const clas = document.getElementById('clas').value;

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('airline', airline);
    localStorage.setItem('passport', passportNo);
    localStorage.setItem('contact', contact);
    localStorage.setItem('departure', departure);
    localStorage.setItem('destination', destination);
    localStorage.setItem('fare', fare);
    localStorage.setItem('date', date);
    localStorage.setItem('Seat No', seat);
    localStorage.setItem('Class', clas);

    Swal.fire({
        title: 'Your ticket has been booked!',
        text: 'Would you like to download the ticket?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes, download it!',
        cancelButtonText: 'No, thanks'
    }).then((result) => {
        if (result.isConfirmed) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.text("Ticket Details", 10, 10);
            doc.text(`Full Name: ${fullName}`, 10, 20);
            doc.text(`Airline: ${airline}`, 10, 30);
            doc.text(`Passport Number: ${passportNo}`, 10, 40);
            doc.text(`Contact: ${contact}`, 10, 50);
            doc.text(`Departure: ${departure}`, 10, 60);
            doc.text(`Destination: ${destination}`, 10, 70);
            doc.text(`Fare: ${fare}`, 10, 80);
            doc.text(`Date: ${date}`, 10, 90);
            doc.text(`Seat Number: ${seat}`, 10, 100);
            doc.text(`Class: ${clas}`, 10, 110);
            doc.text('Design By :MF Dev Studios', 10, 120);
            doc.save('ticket.pdf');
        }
    });

    form.reset();
}
