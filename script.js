// Tony - JavaScript Developer  
  
//Comment 1: Declare some simulated user data 
let users = [];   

//Comment 2: Simulate registering user function

function registerUser() {    
    let username = document.getElementById('username').value;  
    let password = document.getElementById('password').value;  
  
      
    if (username && password) {  
        users.push({ username, password });  
  
        alert('registered successfully Going to the login page.');  
  
        window.location.href = 'login.html'; 
    } else {  
        alert('The username and password cannot be empty!');  
    }  
}
  
//Comment 3: Simulate login user function
function loginUser() {  
    let loginUsername = document.getElementById('loginUsername').value;  
    let loginPassword = document.getElementById('loginPassword').value;  
  
    let user = users.find(user => user.username === loginUsername && user.password === loginPassword);  
  
    if (users) {  
        alert('Login successful! Going to the shopping page.');  
        window.location.href = 'shopping.html'; 
    } else {  
        alert('Incorrect username or password!');  
    }  
}  
  
//Note 4: Simulate checkout function (only displaying a warning here)
function checkout() {  
    alert('You have successfully checkout!');  
}  
  
//Note 5: Notify quantity
let cart = [];   
  function addToCart(price, name, quantityId) {  
    let quantity = parseInt(document.getElementById(quantityId).value, 10);  
    if (isNaN(quantity) || quantity <= 0) {  
        alert('Please enter a valid quantity!');  
        return;  
    }  
    cart.push({ price, name, quantity });  
    updateCartSummary();   
}  
  
function updateCartSummary() {  
    let total = 0;  
    cart.forEach(item => {  
        total += item.price * item.quantity;  
    });  
    document.getElementById('cart-total').innerText = 'Total price: $' + total.toFixed(2);  
}  
  
document.getElementById('quantity1').addEventListener('input', function() {  
    let productInCart = cart.find(item => item.name === 'Product 1');   
    if (productInCart) {  
        productInCart.quantity = parseInt(this.value, 10);  
        updateCartSummary(); 
    }  
});  