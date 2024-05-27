//Note 4: Simulate checkout function (only displaying a warning here)
function checkout() {  
    alert('You have successfully checkout!');  
}  
  
//Note 5: Notify quantity
let cart = [];  
  
function CartItem(productName, price, quantity) {  
    this.productName = productName;  
    this.price = price;  
    this.quantity = quantity;  
}  
  
function addToCart(price, productName, quantityId) {    
    let quantity = parseInt(document.getElementById(quantityId).value, 10);  
    if (isNaN(quantity) || quantity <= 0) {  
        alert('Please enter a valid quantity.');  
        return;  
    }  
  
    let existingItem = cart.find(item => item.productName === productName);  
    if (existingItem) {  
        existingItem.quantity += quantity;  
    } else {  
        let item = new CartItem(productName, price, quantity);  
        cart.push(item);  
    }  
  
    displayCart();  
    updateCartTotal();  
}  
  
function displayCart() {  
    let cartItemsList = document.getElementById('cart-items');  
    cartItemsList.innerHTML = ''; 
  
    cart.forEach(item => {  
        let listItem = document.createElement('div');  
        listItem.textContent = `${item.quantity} x ${item.productName} - 
${item.price * item.quantity}`;  
        cartItemsList.appendChild(listItem);  
    });  
}  
  
function updateCartTotal() {  
    let total = 0;  
    cart.forEach(item => {  
        total += item.price * item.quantity;  
    });  
    document.getElementById('cart-total').textContent = total.toFixed(2);  
}  
  
displayCart();  
updateCartTotal();  

// 假设购物车数据存储在名为cart的数组中    
// 清空购物车按钮的点击事件监听器  
document.getElementById('clearCart').addEventListener('click', function() {  
  // 清空购物车数组  
  cart = [];  
    
  // 更新购物车页面显示（这里只是一个示例，具体实现取决于你的页面结构）  
  document.getElementById('cartContents').innerHTML = '购物车已清空！';  
    
  // 如果需要，你也可以在这里更新总价显示等其他与购物车相关的元素  
});  


    
    // ... 其他商品数据  
    
  // 渲染购物车列表的函数  
  function renderCart() {  
    var cartList = document.getElementById('cartItems');  
    cartList.innerHTML = ''; // 清空购物车列表  
    
    if (cart.length === 0) {  
      cartList.textContent = '购物车为空'; // 如果没有商品，显示空购物车消息  
    } else {  
      // 渲染购物车中的每个商品（这里只是简单示例）  
      cart.forEach(function(item) {  
        var listItem = document.createElement('li');  
        listItem.textContent = item.name + ' × ' + item.quantity;  
        cartList.appendChild(listItem);  
      });  
    }  
  }  
    
  // 绑定清空购物车按钮的点击事件  
  document.addEventListener('DOMContentLoaded', function() {  
    var clearCartButton = document.getElementById('clearCart');  
    if (clearCartButton) {  
      clearCartButton.addEventListener('click', function() {  
        cart = []; // 清空购物车数据 
        total = 0; 
        renderCart(); // 更新购物车列表显示  
        console.log('购物车已清空'); // 在控制台打印消息以确认事件被触发  
      });  
    }  
    
    // 初始渲染购物车列表  
    renderCart();  
  });  