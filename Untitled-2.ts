
<html>
    <head>
        <title>First Class Html</title>
        <link rel='icon' type='image/png' href='simple-twitter-16x16-icon-png-7.png' />
        <link rel='stylesheet' href='style.css' />
        <style>
            .discount-price {
                text-decoration: line-through;
                color: red
            }
            .actual-price {
                color: green;
            }
 
            .paymentLabel {
                display: flex;
                align-items: center;
            }
 
        </style>
    </head>
 
    <body>    
        <div id='header' class='slideDown'>
          <h1>Header</h1>
        </div>
        <div id='container'>
          <div id='sidebar'>
            <h1>Sidebar</h1>
          </div>
          <div id='mainBox' style='display: flex; width: 100%; gap:10px'>
            <div class='grid-item slideDown' style='width: 30%;'>
                <form id='taskForm' onsubmit='event.preventDefault();' style='display: flex; flex-direction:column; gap: 4px; '>
                  <label>Checkout Form</label>
                  <input type='text' name='first_name' required id='first_name' placeholder="Enter you first_name"/>
                  <span style='color:red;' hidden id='taskErrorField-first_name'>This field is required</span>
                  <input type='text' name='last_name' required id='last_name' placeholder="Enter you last_name"/>
                  <span style='color:red;' hidden id='taskErrorField-last_name'>This field is required</span>
                  <input type='tel' name='number' required id='number' placeholder="Enter you phone_number"/>
                  <span style='color:red;' hidden id='taskErrorField-number'>This field is required</span>
                  <textarea id="address" name="address" placeholder="enter your full address"></textarea>
                  <span style='color:red;' hidden id='taskErrorField-address'>This field is required</span>
                  <input type='text' name='email' required id='email' placeholder="Enter you email"/>
                  <span style='color:red;' hidden id='taskErrorField-email'>This field is required</span>
                  <input type='text' name='postal_code' required id='postal_code' placeholder="Enter you postal_code"/>
                  <span style='color:red;' hidden id='taskErrorField-postal_code'>This field is required</span>
                  <select id="city" name="city">
                    <option selected>Karachi</option>
                    <option >Lahore</option>
                    <option >Islamabed</option>
                    <option >Peshawar</option>
                    <option >Queta</option>
                  </select>
                  <span style='color:red;' hidden id='taskErrorField-city'>This field is required</span>
                  <select id="country" name="country">
                    <option selected>Pakistan</option>
                  </select>
                  <span style='color:red;' hidden id='taskErrorField-country'>This field is required</span>
                  <div>
                      <label class="paymentLabel">
                          <input type='radio' name='task' required id='payment_method' checked placeholder="Enter you payment_method"/>
                          Cash on Delivery
                      </label>
                      <label class="paymentLabel">
                        <input type='radio' name='task' required id='payment_method' placeholder="Enter you payment_method"/>
                        Online Payment
                    </label>
                  </div>
                  <button type='button' onclick="sumbitCheckout()" id='submitBtn' class='submitBtn' style='background-color: blue; color: white; padding: 10px; border: none; border-radius: 5px;'>Checkout</button>
                </form>
                <div>
                  <label>Cart Details</label>
                  <div id="boxList"  style="width: 80%; display: flex; flex-direction: column; gap: 4px;" class="grid-item slideDown">
 
                  </div>
                </div>
            </div>
            <div id='main'>
 
            </div>
        </div>
      </body>
    <script>
        var checkoutForm = {
            first_name: '',
            last_name: '',
            phone_number: 0,
            address: '',
            email: '',
            postal_code: '',
            city: '',
            country: '',
            payment_method: '',
            shipping_details: {
                address:'',
                city: '',
                postal_code: '',
                country: '',
                phone_number: '',
                reciever_name: ''
            },
            total_amount: '',
            cart_details: [],
        }
 
        var products = [
            {
                id: 1,
                name: 'water bottle',
                description: 'color: blue size: large',
                price: 100,
                discounted_price: 99,
            },
            {
                id: 2,
                name: 'mouse',
                description: 'wired usb port',
                price: 250,
                discounted_price: 199,
            },
            {
                id: 3,
                name: 'watch',
                description: 'color: black, watch type: smart, brand: apple',
                price: 5000,
                discounted_price: 4999,
            },
            {
                id: 4,
                name: 'infinix s23',
                description: 'color blue, storage: 120gb ram: 2gb display: 6x4',
                price: 25000,
                discounted_price: 24999,
            },
            {
                id: 5,
                name: 'shoes',
                description: 'size: 8, color blue, type: sports wear',
                price: 3000,
                discounted_price: 3000,
            },
        ];
 
        renderProducts();
 
        function validateFields() {
            debugger;
            // const basicValidation = () => {
            //     var checkValidation = true;
            //     basicFields.forEach((x)=> {
            //         if(document.getElementById(x).value == '' || document.getElementById(x).value == null) {
            //             checkValidation = false;
            //             document.getElementById('taskErrorField-'+x).hidden = false
            //         }
            //     })
            //     return checkValidation
            // }
            // var basicFields = [
            //     'first_name',
            //     'last_name',
            //     'address',
            //     'postal_code'
            // ]
 
            // var testBasicValidation = basicValidation();
            // if(!testBasicValidation) {
            //     return false
            // }
            // const mobileRegex = /^(\+92|92|033|03)[ -]*\d{3}[ -]*\d{7}$/;
            // if (!mobileRegex.test(document.getElementById('number').value)) {
            //     document.getElementById('taskErrorField-number').hidden = false
            //     return false
            // }
            if(email) {
 
            }
            if(country) {
 
            }
            if(city) {
 
            }
            if(cartItems) {
 
            }
 
        //  // Validation function GPT VAlidation
        //  let isValid = true;
 
        // // Reset error messages
        // const errorFields = document.querySelectorAll('[id^="taskErrorField-"]');
        // errorFields.forEach(field => {
        //   field.hidden = true;
        // });
 
        // // First Name validation
        // const firstName = document.getElementById('first_name').value.trim();
        // if (firstName === '') {
        //   document.getElementById('taskErrorField-first_name').hidden = false;
        //   isValid = false;
        // }
 
        // // Last Name validation
        // const lastName = document.getElementById('last_name').value.trim();
        // if (lastName === '') {
        //   document.getElementById('taskErrorField-last_name').hidden = false;
        //   isValid = false;
        // }
 
        // // Phone Number validation
        // const phoneNumber = document.getElementById('number').value.trim();
        // // Regular expression for Pakistani phone number patterns
        // const phoneRegex = /^(\+92|92|033|03)[ -]*\d{3}[ -]*\d{7}$/;
        // if (phoneNumber === '' || !phoneRegex.test(phoneNumber)) {
        //   document.getElementById('taskErrorField-number').hidden = false;
        //   isValid = false;
        // }
 
        // // Address validation
        // const address = document.getElementById('address').value.trim();
        // if (address === '') {
        //   document.getElementById('taskErrorField-address').hidden = false;
        //   isValid = false;
        // }
 
        // // Email validation
        // const email = document.getElementById('email').value.trim();
        // // Basic email format validation
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (email === '' || !emailRegex.test(email)) {
        //   document.getElementById('taskErrorField-email').hidden = false;
        //   isValid = false;
        // }
 
        // // Postal Code validation
        // const postalCode = document.getElementById('postal_code').value.trim();
        // if (postalCode === '') {
        //   document.getElementById('taskErrorField-postal_code').hidden = false;
        //   isValid = false;
        // }
 
        // // City validation (assuming it's a select box)
        // const city = document.getElementById('city').value;
        // if (city === '') {
        //   document.getElementById('taskErrorField-city').hidden = false;
        //   isValid = false;
        // }
 
        // // Country validation (assuming it's a select box)
        // const country = document.getElementById('country').value;
        // if (country === '') {
        //   document.getElementById('taskErrorField-country').hidden = false;
        //   isValid = false;
        // }
 
        // // Payment Method validation (assuming it's a radio input)
        // const paymentMethod = document.querySelector('input[name="task"]:checked');
        // if (!paymentMethod) {
        //   // No payment method selected
        //   alert('Please select a payment method.');
        //   isValid = false;
        // }
 
        // // If all validations pass, submit the form or perform further actions
        // if (isValid) {
        //   alert('Form submitted successfully!');
        //   // Uncomment the line below to actually submit the form
        //   // document.getElementById('checkoutForm').submit();
        // }
 
 
        }
 
        function sumbitCheckout() {
            debugger;
            validateFields();
        }
 
 
        function addToCart(product) {
            debugger;
            var currentProduct = products.find((x) => { return x.id == product });
            var currentQty = document.getElementById('qty'+product).value == '' || document.getElementById('qty'+product).value == null ? 1: document.getElementById('qty'+product).value;
            cartExistIndex = checkoutForm.cart_details.findIndex((x)=> { return x.id == product} );
            if(cartExistIndex != -1) {
                https://pastebin.com/58EAtHgr

                checkoutForm.cart_details[cartExistIndex].quantity = parseInt(checkoutForm.cart_details[cartExistIndex].quantity) + parseInt(currentQty);
            } else {                
                var cartItem = {
                    ...currentProduct,
                    quantity: currentQty,
                }
 
                checkoutForm.cart_details.push(cartItem);
            }
            document.getElementById('qty'+product).value = '';
            renderCarts();
        }
 
        /**
         * This function is used to remove items from cart
         * @params number id
         * return void | null
         */
         function removeItemCart(id) {
            debugger;
            var proIndex = checkoutForm.cart_details.findIndex((x) => {return x.id == id});
            checkoutForm.cart_details.splice(proIndex,1);
 
            renderCarts();
        }
 
 
        function renderCarts() {
            let cartHtml = '';
            var cartDiv = document.getElementById('boxList');
 
 
            checkoutForm.cart_details.forEach((x) => {
                var priceBox = x.discounted_price < x.price ? `<div class='actual-price'>
                        <span class='discount-price'> `+x.price+`</span>
                        `+x.discounted_price+`
                    </div>` : `<div class='actual-price'>
                        `+x.price+`
                    </div>` ;
 
 
                cartHtml += `<div class="box" style="background-color: aqua;">
                    <div style="padding-left:10px; border-radius: 50%; padding-right: 10px; display:flex; justify-content: space-between; align-items: center;">
                        <p>`+ x.name +`</p>
                        `+ priceBox +`
                        <div>
                            Quantity `+ x.quantity +`
                        </div>
                        <div>
                            <button onclick="removeItemCart(`+ x.id +`)">
                                X
                            </button>
                        </div>
                    </div>
                </div>`;
            });
            cartDiv.innerHTML = cartHtml;
        }
 
        function renderProducts() {
            let productHtml = '';
            var productDiv = document.getElementById('main');
 
 
            products.forEach((x) => {
                var priceBox = x.discounted_price < x.price ? `<div class='actual-price'>
                        <span class='discount-price'> `+x.price+`</span>
                        `+x.discounted_price+`
                    </div>` : `<div class='actual-price'>
                        `+x.price+`
                    </div>` ;
 
 
                productHtml += `<div class='grid-item slideDown'>
                    <h1>`+ x.name +`</h1>
                    <p>`+ x.description +`</p>
                    `+ priceBox +`
                    <div class='addToCartBox'>
                        <input type='number' id='qty`+ x.id +`'/>
                        <button onclick='addToCart(`+x.id+`)'>Add to Cart</button>
 
                    </div>
                </div>`;
            });
            productDiv.innerHTML = productHtml;
        }
 
    </script>
</html>