<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>Laptop E-Store</title>
<meta charset="utf-8">
<!-- Linking styles -->
<link rel="stylesheet" href="/jadrn050/css/base.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/header.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/main.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/footer.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/nivo-slider.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/details.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/shoppingcart.css" type="text/css" media="screen">
<link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'>
<link rel="stylesheet" href="/jadrn050/css/billing.css">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
<!-- Linking scripts -->
<script src="/jadrn050/js/jquery.js"></script>
<script src="/jadrn050/js/jquery.nivo.slider.pack.js"></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>
<script src="/jadrn050/js/checkout.js"></script>   
<script src="/jadrn050/js/shoppingcart.js"></script>
<script src="/jadrn050/js/summary.js"></script>
<script src="/jadrn050/js/checkout.js"></script>
<script type="text/javascript" src="js/html5.js"></script>
</head>
<body>
<div class="container">
<header><!-- Defining the header section of the page -->
<nav><!-- Defining the navigation menu -->
<ul id="homediv">
<li class="selected"><a href="/jadrn050/proj3.html">Home</a></li>
<li><a href="/jadrn050/contactus.html">Contact us</a></li>
<li><a href="/jadrn050/aboutus.html">About</a></li>
</ul>
</nav>
<div class="top_head"><!-- Defining the top head element -->
<div class="logo"><!-- Defining the logo element -->
<h1 id="frank">Maggi Laptop Solutions</h1>
</a>
</div>
</div>
</header>
<div id="slider"><!-- Defining the main content section -->
<!-- Promo slider -->
<section id="slider-wrapper">
<div id="slider" class="nivoSlider">
<img style="display: none;" src="images/promo1.jpg" alt="" title="#htmlcaption-1">
<img style="display: none;" src="images/promo2.jpg" alt="" title="#htmlcaption-2">
<img style="display: none;" src="images/promo3.jpg" alt="" title="#htmlcaption-3">
</div>
<div id="htmlcaption-1" class="nivo-html-caption">
<h5 class="p2">Welcome to the our E-Shop</h5>
<p>Put any description here</p>
</div>
</section>
</div>
<div id="maindet"><!-- Defining submain content section -->
<section id="content">
<div class="container" id="containerid">
<h1>Checkout</h1> 
<div id="shippingdemo">
  <div id="Checkout" class="inline">
      <h1>Pay Invoice</h1>
      <div class="card-row">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
          <div class="form-group">
              <label or="NameOnCard">Name on card</label>
              <input id="NameOnCard" class="form-control" type="text" maxlength="255" required="true"></input>
          </div>
          <div class="form-group">
              <label for="CreditCardNumber">Card number</label>
              <input id="CreditCardNumber" class="null card-image form-control" type="text" required="true"></input>
          </div>
          <div class="expiry-date-group form-group">
              <label for="ExpiryDate">Expiry date</label>
              <input id="ExpiryDate" class="form-control" type="text" placeholder="MM / YY" maxlength="7" required="true"></input>
          </div>
          <div class="security-code-group form-group">
              <label for="SecurityCode">Security code</label>
              <div class="input-container" >
                  <input id="SecurityCode" class="form-control" type="text" required="true" ></input>
                  <i id="cvc" class="fa fa-question-circle"></i>
              </div>
              <div class="cvc-preview-container two-card hide">
                  <div class="amex-cvc-preview"></div>
                  <div class="visa-mc-dis-cvc-preview"></div>
              </div>
          </div>
          <div class="zip-code-group form-group">
              <label for="ZIPCode">ZIP/Postal code</label>
              <div class="input-container">
                  <input id="ZIPCode" required="true" class="form-control" type="text" maxlength="10"></input>
                  <a tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i class="fa fa-question-circle"></i></a>
              </div>
          </div>
          <button id="PayButton" type="button" onclick="return add_summary();">
              <span class="submit-button-lock"></span>
              <span class="align-middle">Pay</span>
          </button>
      </form>
  </div>
</div>
	</section>
	

<footer><!-- Defining the footer section of the page -->
<div id="privacy">
Sai Lapop E-Store <a class="link" href="#">Privacy Policy</a><br />
</div>
</footer>
</div>
</body>
</html>
