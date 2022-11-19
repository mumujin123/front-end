const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');

function loginSubmit(event) {
  event.preventDefault();
  const user = {
    email: emailInput.value,
    password: passwordInput.value
  };

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    alert('ยินดีต้อนรับ คุณ No.' + json.token);
  })
  .catch((error) => {
    console.log(error.message);
  });
}

loginForm.addEventListener('submit', loginSubmit);