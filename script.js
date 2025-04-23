const container=document.querySelector('.container');
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

const registerForm = document.querySelector(".form-box.register form");


registerBtn.addEventListener('click',()=>{
    container.classList.add('active');

})

loginBtn.addEventListener('click',()=>{
    container.classList.remove('active');
    
})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent real form submission
    // Simulate registration delay or success here
    alert("Registration successful! You can now log in.");
    container.classList.remove("active"); // Show login form
  });


