const user = {
    firstname: 'Borat',
    lastname: 'Sagdiyev',
    email: 'boratsagdiyev@hello.world',
    password: 'iLuvPamelaAnderson',
    age: 45
}


const firstname = document.querySelector('#firstname');
firstname.innerHTML = user.firstname;

const lastname = document.querySelector('#lastname');
lastname.innerHTML = user.lastname;

const email = document.querySelector('#email');
email.innerHTML = user.email;

const password = document.querySelector('#password');
password.innerHTML = user.password;

const age = document.querySelector('#age');
age.innerHTML = user.age;

