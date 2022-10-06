$(window).ready(function() {
    $('header nav ul li').hover(
      function() {
        $(this).children('ul').stop( true, true ).slideDown(200);
      },
      function() {
        $(this).children('ul').stop( true, true ).slideUp(200);
      }
   );
});


function myFunction() {
  document.getElementById("myDropdown2").classList.toggle("show");
}


//  time
var dateCountDown = new Date("Sep 30, 2022 23:05:08").getTime()

var setInt = setInterval(function () {
  var now = new Date().getTime()
  var countDiffer = dateCountDown - now
  var hours = Math.floor((countDiffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((countDiffer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDiffer % (1000 * 60)) / 1000);

  document.getElementById('date').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's'

}, 1000)


setInterval(() => {
  getTime()
}, 1000);


$(window).on('load', function () {
  $("#cover").fadeOut(1750);
});


//carousel



$('.slider6').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows:false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 700,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.slider2').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.slider5').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows:false,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: '<button class="slide-arrow prev-arrow3 prev-sm-arrow4"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow3 next-sm-arrow4"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.slider8').slick({
  dots: true,
  infinite: true,
  speed: 700,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button class="slide-arrow prev-arrow prev-sm-arrow"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow next-sm-arrow"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.slider4').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});



$('.slider7').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows:true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button class="slide-arrow prev-arrow prev-sm-arrow"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow next-sm-arrow"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.slider3').slick({
  dots: false,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 7,
  slidesToScroll: 3,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});




//sidebar codes start



const hamburgerMenu = document.getElementById("hamburger-icon");
const link = document.querySelectorAll(".link");
const closeBtn = document.getElementById("close");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Menu
hamburgerMenu.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("toggle");
  hamburgerMenu.style.display = "none"
});

//   close icon
function closeNav() {
  const sidebar = document.getElementById("sidebars");
  sidebar.classList.toggle("toggle");
  hamburgerMenu.style.display = "block"
}






var dateCountDown = new Date("Oct 30, 2022 23:59:08").getTime()

var setInt = setInterval(function () {
  var now = new Date().getTime()
  var countDiffer = dateCountDown - now
  var hours = Math.floor((countDiffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((countDiffer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDiffer % (1000 * 60)) / 1000);

  document.getElementById('date2').innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's'

}, 1000)


setInterval(() => {
  Time()
}, 1000);













// $(window).on("scroll", function (event) {
//   if ($(this).scrollTop() > 600) {
//       $(".back-to-top").fadeIn(200);
//   } else {
//       $(".back-to-top").fadeOut(200);
//   }
// });





//dropdown login



function myFunction() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}






//BASKET------------------


// let basket = JSON.parse(localStorage.getItem("basket"));
// if (basket.length > 0) {
//   document.querySelector(".countt").innerText = basket.length;
// }
// for (let item of basket) {
//   let tbody = document.querySelector(".cart-body");
//   // Tr
//   let tr = document.createElement("tr");
//   // Product id
//   let productIdw = document.createElement("span");
//   productIdw.setAttribute("class", "product-id");
//   productIdw.innerText = item.id;
//   // CheckBox input td
//   let checkBoxtd = document.createElement("td");

//   checkBoxtd.setAttribute("class", "custome-checkbox");
//   let CheckBoxInput = document.createElement("input");
//   CheckBoxInput.setAttribute("type", "checkbox");
//   checkBoxtd.append(CheckBoxInput);
//   // Image td
//   let imagetd = document.createElement("td");

//   imagetd.setAttribute("class", "image");
//   let image = document.createElement("img");
//   image.setAttribute("src", item.image);
//   imagetd.append(image);
//   // Product name td
//   let prodNametd = document.createElement("td");

//   prodNametd.setAttribute("class", "product-name");
//   prodNametd.innerHTML = `<h6>
//     <a href="">${item.name}</a>
// </h6>
// <div class="icons">
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star-half-stroke"></i>
//     <span>(4.0)</span>
// </div>`;

//   // Price td first
//   let prodfPricetd = document.createElement("td");

//   prodfPricetd.setAttribute("class", "price");
//   prodfPricetd.innerHTML = `
// <h4>${item.price}</h4>
// `;
//   // Custom input count
//   let prodCounttd = document.createElement("td");

//   prodCounttd.setAttribute("class", "item-count");
//   if (productIdw.innerText == item.id) {
//     prodCounttd.innerHTML = `<div class="inp-num number">
//         <a href="#" class="up"><i class="fa-solid fa-angle-up "></i></a>
//         <span class="inp-value count">${item.count}</span>
//         <a href="#" class="down"><i class="fa-solid fa-angle-down"></i></a>
//     </div>
//     `;
//   }
//   // Price td second
//   let prodsPricetd = document.createElement("td");

//   prodsPricetd.setAttribute("class", "price subtotal-price");
//   prodsPricetd.innerHTML = `
// <h4>$<span class="subtotal-value">${Math.round(
//     Number(item.price) * Number(item.count)
//   )}</span></h4>
// `;
//   // Remove td
//   let prodRemovetd = document.createElement("td");

//   prodRemovetd.setAttribute("class", "remove");
//   prodRemovetd.innerHTML = `
// <a href="#">
//     <i class="fa-solid fa-trash-can"></i>
// </a>
// `;
//   tr.append(
//     checkBoxtd,
//     imagetd,
//     prodNametd,
//     prodfPricetd,
//     prodCounttd,
//     prodsPricetd,
//     prodRemovetd,
//     productIdw
//   );
//   tbody.append(tr);

//   // Remove product from basket
//   let removeIcon = document.querySelectorAll(".cart-body .remove");
//   for (let icon of removeIcon) {
//     icon.addEventListener("click", function () {
//       for (let product = 0; product < basket.length; product++) {
//         if (this.nextElementSibling.innerText == basket[product].id) {
//           basket.splice(product, 1);
//           localStorage.setItem("basket", JSON.stringify(basket));
//           window.location.reload();
//         }
//       }
//     });
//   }
// }

// EmptyMessage();

// function EmptyMessage() {
//   if (document.querySelector(".cart-body").children.length == 0) {
//     let err = document.createElement("div");
//     err.setAttribute("class", "err-message");
//     err.innerHTML = `
//         <i class="fa-solid fa-circle-minus"></i>
//         <h3>Basket is empty</h3>
//         `;
//     document.querySelector(".cart-body").append(err);
//   }
// }

// // input count
// if (document.querySelector(".cart-body").children.length != 0) {
//   for (let a = 0; a < basket.length; a++) {
//     var myInps = document.querySelectorAll(".number");
//     for (let inp of myInps) {
//       var increaseBtn = inp.querySelector(".up");
//       var decreaseBtn = inp.querySelector(".down");
//       increaseBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         if (
//           this.parentElement.parentElement.parentElement.querySelector(
//             ".product-id"
//           ).innerText === basket[a].id
//         ) {
//           let myInp = inp.querySelector(".count");
//           basket[a].count += 1;
//           myInp.innerText = basket[a].count;
//           this.parentElement.parentElement.nextElementSibling.querySelector(
//             ".subtotal-value"
//           ).innerText = Math.round(Number(basket[a].price * basket[a].count));
//           totalPrice();
//           localStorage.setItem("basket", JSON.stringify(basket));
//         }
//       });
//       decreaseBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         if (
//           basket[a].count != 0 &&
//           this.parentElement.parentElement.parentElement.querySelector(
//             ".product-id"
//           ).innerText === basket[a].id
//         ) {
//           let myInp = inp.querySelector(".count");
//           basket[a].count -= 1;
//           myInp.innerText = basket[a].count;
//           this.parentElement.parentElement.nextElementSibling.querySelector(
//             ".subtotal-value"
//           ).innerText = Math.round(Number(basket[a].price * basket[a].count));
//           totalPrice();
//           localStorage.setItem("basket", JSON.stringify(basket));
//         }
//       });
//     }
//   }
// } else {
//   console.log("bosdur");
// }
// // Total price
// function totalPrice() {
//   var totalPrice = 0;
//   for (let elem of basket) {
//     totalPrice += Math.round(elem.price * elem.count);
//   }
//   document.querySelector(".total-price-s").innerText = totalPrice;
// }
// totalPrice();
// // Clear basket
// document.querySelector(".clear-basket").addEventListener("click", function (e) {
//   e.preventDefault();
//   localStorage.setItem("basket", JSON.stringify([]));
//   window.location.reload();
// });

// // Calculate shipping dropdown
// function openCloseDpC() {
//   document.querySelector(".selectInp").classList.toggle("show-sr");
// }
// function filterFunctionC() {
//   var input, filter, a, i;
//   input = document.querySelector(".drp-inp2");
//   filter = input.value.toUpperCase();
//   div = document.querySelector(".select-option");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }



// //BASKET-END--------------

// //Index basket js---------



// var cartBasket = JSON.parse(localStorage.getItem("basket"))
// var myCartul = document.querySelector(".cart-shopping-basket");
// if(cartBasket.length > 0){
//   var totalPriceCount = 0;
  
//   for(let item of cartBasket){
//   let li = document.createElement("li");
  
//   let divImg = document.createElement("div");
//   divImg.setAttribute("class","shopping-cart-img");
//   divImg.innerHTML = 
//   `
//   <a href="" class="link">
//     <img alt="Nest" src="${item.image}">
//   </a>
//   `;
  
//   let divTitle = document.createElement("div");
//   divTitle.setAttribute("class","shopping-cart-title");
//   divTitle.innerHTML = 
//   `
//   <h4><a href="">Daisy Casual Bag</a></h4>
//   <h4><span>${item.count} × </span>$${item.price}</h4>
//   `;
//   let divDel = document.createElement("div");
//   divDel.setAttribute("class","shopping-cart-delete")
//   divDel.innerHTML = 
//   `
//   <a href="#" class="cart-cls-ic"><i class="fa-solid fa-xmark"></i></a>
//   <span class="cart-item-id">${item.id}</span>
//   `;
  
//   totalPriceCount += Math.round(item.price*item.count);
//   li.append(divImg,divTitle,divDel);
//   myCartul.append(li);
//   }
//   let totalPric = document.createElement("div");
//   totalPric.setAttribute("class","total-cart-price");
//   totalPric.innerHTML = 
//   `
//   <span>Total</span>
//   <span>$${totalPriceCount}</span>
//   `
//   let btndiv = document.createElement("div");
//   btndiv.setAttribute("class","btns");
//   let viewBtn = document.createElement("button");
//   viewBtn.innerText = "View cart"
//   let checkBtn = document.createElement("button");
//   checkBtn.innerText = "Checkout"
//   btndiv.append(viewBtn,checkBtn);
//   myCartul.append(totalPric,btndiv)
//   document.querySelector(".cart-item-count").innerText = cartBasket.length;
// }
// else{
//   let err = document.createElement("div");
//   err.setAttribute("class","err-message")
//   err.innerHTML = 
//   `
//   <i class="fa-solid fa-circle-minus"></i>
//   <h3>Sebet bosdur ... </h3>
//   `;
//   myCartul.append(err)
// }
// // Header cart button remove item
// var closeIcons = document.querySelectorAll(".cart-cls-ic");
// for(let icon of closeIcons){
//   icon.addEventListener("click",function(){
//       for(let i = 0;i<cartBasket.length;i++){
//           if(this.nextElementSibling.innerText == cartBasket[i].id){
//               cartBasket.splice(i,1);
//               localStorage.setItem("basket",JSON.stringify(cartBasket));
//               window.location.reload();
//           }
//       }
//   })
// }
// // Basket
// var addButtons = document.querySelectorAll(".add-prod-basket");
// for(let btn of addButtons){
//   btn.parentElement.addEventListener("click",function(e){
//     if(JSON.parse(localStorage.getItem("basket"))===null){
//       localStorage.setItem("basket",JSON.stringify([]))
//     }
//     let basket = JSON.parse(localStorage.getItem("basket"));
//     let prodImage = this.parentElement.parentElement.previousElementSibling.querySelector(".first").getAttribute("src");;
//     let prodName = this.parentElement.previousElementSibling.querySelector(".name").innerText;
//     let prodId = this.parentElement.parentElement.parentElement.getAttribute("data-id");
//     let proPrice = Number(this.previousElementSibling.querySelector(".price-value").innerText);
//     let exist = basket.find(n =>n.id==prodId);

//     if(exist===undefined){
//       basket.push({
//         id: prodId,
//         name: prodName,
//         image: prodImage,
//         price: proPrice,
//         count: 1
//       })
//     }
//     else{
//       exist.count+=1;
//     }
//     localStorage.setItem("basket",JSON.stringify(basket));
//   })
// }
// // Home page and Product page link
// $(document).ready(function(){
//   $(".GoToProduct").click(function(e){
//     localStorage.setItem("product",JSON.stringify([]))
//     let product = JSON.parse(localStorage.getItem("product"));
//     let img1 = this.querySelector(".first").getAttribute("src")
//     let img2 = this.querySelector(".second").getAttribute("src")
//     let thisPrId = this.parentElement.parentElement.getAttribute("data-id")
//     let prName = this.parentElement.nextElementSibling.querySelector(".name").innerText;
//     let prPrice = Number(this.parentElement.nextElementSibling.querySelector(".price-value").innerText);
//     product.push({
//       img1: img1,
//       img2: img2,
//       id: thisPrId,
//       name: prName,
//       price: prPrice
//     })
//     localStorage.setItem("product",JSON.stringify(product))
//   })
// })












// Preload



// $(window).load(function() {
// 	$(".loader").delay(2000).fadeOut("slow");
//   $("#overlayer").delay(2000).fadeOut("slow");
// })


// var thumbsize = 14;

// function draw(slider,splitvalue) {

//     /* set function vars */
//     var min = slider.querySelector('.min');
//     var max = slider.querySelector('.max');
//     var lower = slider.querySelector('.lower');
//     var upper = slider.querySelector('.upper');
//     var legend = slider.querySelector('.legend');
//     var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
//     var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
//     var rangemin = parseInt(slider.getAttribute('data-rangemin'));
//     var rangemax = parseInt(slider.getAttribute('data-rangemax'));

//     /* set min and max attributes */
//     min.setAttribute('max',splitvalue);
//     max.setAttribute('min',splitvalue);

//     /* set css */
//     min.style.width = parseInt(thumbsize + ((splitvalue - rangemin)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
//     max.style.width = parseInt(thumbsize + ((rangemax - splitvalue)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
//     min.style.left = '0px';
//     max.style.left = parseInt(min.style.width)+'px';
//     min.style.top = lower.offsetHeight+'px';
//     max.style.top = lower.offsetHeight+'px';
//     legend.style.marginTop = min.offsetHeight+'px';
//     slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight)+'px';
    
//     /* correct for 1 off at the end */
//     if(max.value>(rangemax - 1)) max.setAttribute('data-value',rangemax);

//     /* write value and labels */
//     max.value = max.getAttribute('data-value'); 
//     min.value = min.getAttribute('data-value');
//     lower.innerHTML = min.getAttribute('data-value');
//     upper.innerHTML = max.getAttribute('data-value');

// }

// function init(slider) {
//     /* set function vars */
//     var min = slider.querySelector('.min');
//     var max = slider.querySelector('.max');
//     var rangemin = parseInt(min.getAttribute('min'));
//     var rangemax = parseInt(max.getAttribute('max'));
//     var avgvalue = (rangemin + rangemax)/2;
//     var legendnum = slider.getAttribute('data-legendnum');

//     /* set data-values */
//     min.setAttribute('data-value',rangemin);
//     max.setAttribute('data-value',rangemax);
    
//     /* set data vars */
//     slider.setAttribute('data-rangemin',rangemin); 
//     slider.setAttribute('data-rangemax',rangemax); 
//     slider.setAttribute('data-thumbsize',thumbsize); 
//     slider.setAttribute('data-rangewidth',slider.offsetWidth);

//     /* write labels */
//     var lower = document.createElement('span');
//     var upper = document.createElement('span');
//     lower.classList.add('lower','value');
//     upper.classList.add('upper','value');
//     lower.appendChild(document.createTextNode(rangemin));
//     upper.appendChild(document.createTextNode(rangemax));
//     slider.insertBefore(lower,min.previousElementSibling);
//     slider.insertBefore(upper,min.previousElementSibling);
    
//     /* write legend */
//     var legend = document.createElement('div');
//     legend.classList.add('legend');
//     var legendvalues = [];
//     for (var i = 0; i < legendnum; i++) {
//         legendvalues[i] = document.createElement('div');
//         var val = Math.round(rangemin+(i/(legendnum-1))*(rangemax - rangemin));
//         legendvalues[i].appendChild(document.createTextNode(val));
//         legend.appendChild(legendvalues[i]);

//     } 
//     slider.appendChild(legend);

//     /* draw */
//     draw(slider,avgvalue);

//     /* events */
//     min.addEventListener("input", function() {update(min);});
//     max.addEventListener("input", function() {update(max);});
// }

// function update(el){
//     /* set function vars */
//     var slider = el.parentElement;
//     var min = slider.querySelector('#min');
//     var max = slider.querySelector('#max');
//     var minvalue = Math.floor(min.value);
//     var maxvalue = Math.floor(max.value);
    
//     /* set inactive values before draw */
//     min.setAttribute('data-value',minvalue);
//     max.setAttribute('data-value',maxvalue);

//     var avgvalue = (minvalue + maxvalue)/2;

//     /* draw */
//     draw(slider,avgvalue);
// }

// var sliders = document.querySelectorAll('.min-max-slider');
// sliders.forEach( function(slider) {
//     init(slider);
// });
