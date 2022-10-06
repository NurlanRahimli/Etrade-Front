// let productsInCart = JSON.parse(localStorage.getItem('ShoppingCart'));

// if(!productsInCart) {
//     productsInCart = [];

// }
// const parentElement = document.querySelector("#buyItems");
// const cartSumPrice = document.querySelector("#sum-prices");
// const products = document.querySelectorAll(".product-under");

// const countTheSumPrice = function(){
//     let sumPrice = 0;
//     productsInCart.forEach(product =>{
//         sumPrice += product.price;
//     })
//     return sumPrice;
// }

// const updateShoppingCartHTML = function() {
//     localStorage.setItem('ShoppingCart',JSON.stringify(productsInCart));

//     if (productsInCart.length>0) {
//         let result = productsInCart.map(product => {
//             return `
//             <li class="buyItem">
//                 <img src="${product.image}" alt="">
//                 <div>
//                     <h5>${product.name}</h5>
//                     <h6>$${product.price}</h6>
//                     <div>
//                         <button class="button-minus" data-id='${product.id}'>-</button>
//                         <span class="countOfProduct">${product.count}</span>
//                         <button class="button-plus" data-id="${product.id}">+</button>
//                     </div>
//                 </div>
//             </li>
//             `
//         });
//         parentElement.innerHTML = result.join('');
//         document.querySelector('.checkout').classList.remove('hidden');
//         cartSumPrice.innerHTML = "$" + countTheSumPrice();
//     }
//     else{
//         document.querySelector('.checkout').classList.add('hidden');
//         parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
//         cartSumPrice.innerHTML = "";
//     }
// }


// function updateProductsInCart(product) {
//     for (let i = 0; i < productsInCart.length; i++) {
//         if (productsInCart[i].id == product.id) {
//             productsInCart[i].count += 1;
//             productsInCart[i].price == productsInCart[i].basePrice * productsInCart[i].count;
//             return;
//         }
//     }
//     productsInCart.push(product);
// }


// products.forEach(product => {
//     product.addEventListener('click', (e) => {
//         if (e.target.classList.contains('addToCart')) {
//             const productID = e.target.dataset.productId;
//             const productName = product.querySelector('.productName').innerHTML;
//             const productPrice = product.querySelector('.priceValue').innerHTML
//             const productImage = product.querySelector('img').src;
//             let productToCart = {
//                 id: productID,
//                 name: productName,
//                 image: productImage,
//                 count: 1,
//                 price: +productPrice,
//                 basePrice : +productPrice
//             }
//             updateProductsInCart(productToCart);
//             updateShoppingCartHTML();
//         }
//     })
// })



// parentElement.addEventListener('click', (e) => {
//     const isPlusButton = e.target.classList.contains('button-plus');
//     const isMinusButton = e.target.classList.contains('button-minus');
//     if (isPlusButton || isMinusButton) {
//         for(let i = 0; i<productsInCart.length;i++){
//             if (productsInCart[i].id === e.target.dataset.id) {
//                 if(isPlusButton){
//                     productsInCart[i].count += 1;
//                 }
//                 else if (isMinusButton) {
//                     productsInCart[i].count -= 1;
//                 }
//                 productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
//             }
//             if (productsInCart[i].count<=0) {
//                 productsInCart.splice(i, 1);
//             }
//         }
//         updateShoppingCartHTML();
//     }
// });


// updateShoppingCartHTML();




// let add_to_cart_btns = document.getElementsByClassName('btn');
// for(let i = 0; i<add_to_cart_btns.length; i++){
//     add_to_cart_btns[i].addEventListener('click', addToCart)
// }

// function addToCart(event){
//     let itemContainer = document.createElement('tr')
//     let btn = event.target;
//     let btn_parent = btn.parentElement;
//     let btn_grandparent = btn.parentElement.parentElement;
//     let itemName = document.querySelector("#productName").innerHTML;
//     let itemPrice = document.querySelector("#productPrice").innerHTML;
//     let itemImage = document.querySelector("#productImage").src;


//     itemContainer.innerHTML = `
//     <td><input class="uk-checkbox" type="checkbox"></td>
//     <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
//     <td class="uk-table-link">
//         <h3 class = "item-name">${itemName}</h3>
//     </td>
//     <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
//     <td><input type = 'number' class = 'num' value = '1'></td>
//     <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
//     <td><button class="btn btn-danger" type="button">Remove</button></td>
//     `
//     console.log(itemContainer);


// }


// let cart = document.querySelector('add');

// for(let but of add){
//     but.onlick = e=>{
//         let item = Number(cart.getAttribute('#count'|| 0));
//         cart.setAttribute('data-count', item + 1);
//         cart.classList.add('on');

//         let parent = e.target.parentNode.parentNode.parentNode;
//         let image = parent.querySelector('img');
//         let span = document.createElement('span');
//         span.classList = 'image-carior';
//         parent.insertBefore(span,parent.lastElementChild);
//         let s_image = image.cloneNode(false);
//         span.appendChild(s_image);
//         span.classList.add('active');
//         setTimeout(() => {
//            span.classList.remove('active');
//            span.removeChild(s_image);

//         }, 500);
//         let clone = parent.cloneNode(true);
//         clone.querySelector('.add').style.display = "none";
//         clone.querySelector('.add').removeAttribute('class');
//         cartfield.appendChild(clone);

//         if(clone){
//             cart.onclick = ()=>{
//                 cartfield.classList.toggle('display');
//             }
//         }
//     }
// }





// ************************************************
// Shopping Cart API
// ************************************************

// var shoppingCart = (function() {
//     // =============================
//     // Private methods and propeties
//     // =============================
//     cart = [];
    
//     // Constructor
//     function Item(name, price, count) {
//       this.name = name;
//       this.price = price;
//       this.count = count;
//     }
    
//     // Save cart
//     function saveCart() {
//       sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//     }
    
//       // Load cart
//     function loadCart() {
//       cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//     }
//     if (sessionStorage.getItem("shoppingCart") != null) {
//       loadCart();
//     }
    
  
//     // =============================
//     // Public methods and propeties
//     // =============================
//     var obj = {};
    
//     // Add to cart
//     obj.addItemToCart = function(name, price, count) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart[item].count ++;
//           saveCart();
//           return;
//         }
//       }
//       var item = new Item(name, price, count);
//       cart.push(item);
//       saveCart();
//     }
//     // Set count from item
//     obj.setCountForItem = function(name, count) {
//       for(var i in cart) {
//         if (cart[i].name === name) {
//           cart[i].count = count;
//           break;
//         }
//       }
//     };
//     // Remove item from cart
//     obj.removeItemFromCart = function(name) {
//         for(var item in cart) {
//           if(cart[item].name === name) {
//             cart[item].count --;
//             if(cart[item].count === 0) {
//               cart.splice(item, 1);
//             }
//             break;
//           }
//       }
//       saveCart();
//     }
  
//     // Remove all items from cart
//     obj.removeItemFromCartAll = function(name) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart.splice(item, 1);
//           break;
//         }
//       }
//       saveCart();
//     }
  
//     // Clear cart
//     obj.clearCart = function() {
//       cart = [];
//       saveCart();
//     }
  
//     // Count cart 
//     obj.totalCount = function() {
//       var totalCount = 0;
//       for(var item in cart) {
//         totalCount += cart[item].count;
//       }
//       return totalCount;
//     }
  
//     // Total cart
//     obj.totalCart = function() {
//       var totalCart = 0;
//       for(var item in cart) {
//         totalCart += cart[item].price * cart[item].count;
//       }
//       return Number(totalCart.toFixed(2));
//     }
  
//     // List cart
//     obj.listCart = function() {
//       var cartCopy = [];
//       for(i in cart) {
//         item = cart[i];
//         itemCopy = {};
//         for(p in item) {
//           itemCopy[p] = item[p];
  
//         }
//         itemCopy.total = Number(item.price * item.count).toFixed(2);
//         cartCopy.push(itemCopy)
//       }
//       return cartCopy;
//     }
//     return obj;
//   })();
  
//   $('.add-to-cart').click(function(event) {
//     event.preventDefault();
//     var name = $(this).data('name');
//     var price = Number($(this).data('price'));
//     shoppingCart.addItemToCart(name, price, 1);
//     displayCart();
//   });
  
//   // Clear items
//   $('.clear-cart').click(function() {
//     shoppingCart.clearCart();
//     displayCart();
//   });
  
  
//   function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for(var i in cartArray) {
//       output += "<tr>"
//         + "<td>" + cartArray[i].name + "</td>" 
//         + "<td>(" + cartArray[i].price + ")</td>"
//         + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//         + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//         + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//         + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//         + " = " 
//         + "<td>" + cartArray[i].total + "</td>" 
//         +  "</tr>";
//     }
//     $('.show-cart').html(output);
//     $('.total-cart').html(shoppingCart.totalCart());
//     $('.total-count').html(shoppingCart.totalCount());
//   }
  
//   // Delete item button
  
//   $('.show-cart').on("click", ".delete-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
//   })
  
  
//   // -1
//   $('.show-cart').on("click", ".minus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
//   })
//   // +1
//   $('.show-cart').on("click", ".plus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.addItemToCart(name);
//     displayCart();
//   })
  
//   // Item count input
//   $('.show-cart').on("change", ".item-count", function(event) {
//      var name = $(this).data('name');
//      var count = Number($(this).val());
//     shoppingCart.setCountForItem(name, count);
//     displayCart();
//   });
  
//   displayCart();


if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}