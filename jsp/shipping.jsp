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
<script src="/jadrn050/js/shipping.js"></script>
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
<div id="clonedemo">
  <h3>Shipping Information</h3>
 <form id="formshipout" method="post" ">
  <table class="form-tbl" id="shoppingid" cellspacing="0">
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <td>
          <input type="checkbox"  value="1" name="checkbox" class="checkbox_check">
          <label for="populateinfo">My billing information is not same as my shipping information</label>
        </td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billFirstName.id}">First Name <em>*</em></label></th>
        <td><input id="fname" name="fname" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billLastName.id}">Last Name <em>*</em></label></th>
        <td><input id="lname" name="lname" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billAddress.id}">Address <em>*</em></label></th>
        <td><input id="address" name="address" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billCity.id}">City <em>*</em></label></th>
        <td><input id="city" name="city" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billStateText.id}">State/Region/Province<em>*</em></label></th>
        <td><input id="state" name="state" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billZipCode.id}">Zip/Postal Code<em>*</em></label></th>
        <td><input id="zip" name="zip" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billCountry.id}">Country <em>*</em></label></th>
        <td><input id="country" name="country" type="text" required="true"></td>
      </tr>
      <tr>
        <th><label for="{#billing.form.fields.billPhone.id}">Phone <em>*</em></label></th>
        <td><input id="phone" name="phone" type="text" required="true"></td>
      </tr>

    </tbody>
  </table>
  </div>
  
 <table class="form-tbl" id="billingid" cellspacing="0">

  </table>
  
  <!--<tr>
  <td>
  <input class="button checkout" type="submit" id="shopping" value="Continue" />
  </td>
  </tr>-->
	 
  <table>
	  <tr>
		<td>
		<input class="button checkout" type="submit" id="shopping" onclick="return shipping();" value="Continue" />
		</td>
		</tr>
</table>
  </form>
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
