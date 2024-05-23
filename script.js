// Tony - JavaScript Developer  

//Comment 1: Declare some simulated user data 
let users = [];   

//Comment 2: Simulate registering user function
function registerUser() {  
    // Get input values  
    var username = document.getElementById('register-username').value;  
    var password = document.getElementById('register-password').value;  
  
    // Simple validation  
    if (!username || !password) {  
        alert('Please fill in both username and password.');  
        return;  
    }  
  
    // Store user data in localStorage (not secure!)  
    localStorage.setItem('username', username);  
    // Note: Storing passwords in localStorage is not secure. Use hashed passwords in a real-world scenario.  
    localStorage.setItem('password', password);  
  
    alert('Registration successful!');  
    window.location.href = 'login.html';
}  
  
// Call the function when the register button is clicked  
document.getElementById('register-button').addEventListener('click', registerUser);
  
//Comment 3: Simulate login user function
function loginUser() {  
    // Get input values  
    var inputUsername = document.getElementById('login-username').value;  
    var inputPassword = document.getElementById('login-password').value;  
  
    // Get stored user data from localStorage  
    var storedUsername = localStorage.getItem('username');  
    var storedPassword = localStorage.getItem('password');  
  
    // Compare input values with stored values  
    if (inputUsername === storedUsername && inputPassword === storedPassword) {  
        alert('Login successful!');  
        window.location.href = 'shopping.html';
    } else {  
        alert('Invalid username or password.'); 
        window.location.href = 'register.html';
    }  
}  
  
// Call the function when the login button is clicked  
document.getElementById('login-button').addEventListener('click', loginUser);
  
