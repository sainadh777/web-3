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
<link rel="stylesheet" href="/jadrn050/css/details.css" type="text/css" media="screen">
<link rel="stylesheet" href="/jadrn050/css/nivo-slider.css" type="text/css" media="screen">
<!-- Linking scripts -->
<script src="/jadrn050/js/jquery.js"></script>
<script src="/jadrn050/js/jquery.nivo.slider.pack.js"></script>   
<script src="/jadrn050/js/main.js"></script>
<script src="/jadrn050/js/add_page.js"></script>
<script src="/jadrn050/js/apply_filters.js"></script>
<script src="/jadrn050/js/shoppingcart.js"></script>
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
<div id="cartplace">
<a id="carthref" onclick="return add_cart();"><img src="/jadrn050/public_html/proj1/file_upload/_p_images/cart.jpg" class="imagel" alt="Demo"></a>
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
<div id="productdetails">
    <table>
	<thead>
	<tr>
		<th>Product Information</th>
		<th></th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>Category</td>
		<td><%= session.getAttribute("category")%></td>
		
	</tr>
	<tr>
		<td>Vendor</td>
		<td><%= session.getAttribute("vendor")%></td>
		
	</tr>
	<tr>
		<td>Vendor Model</td>
		<td><%= session.getAttribute("vendormodel")%></td>
		
	</tr>
	<tr>
		<td>Description</td>
		<td><%= session.getAttribute("description")%></td>
		
	</tr>
	<tr>
		<td>Features</td>
		<td><%= session.getAttribute("features")%></td>
		
	</tr>
	<tr>
		<td>Cost</td>
		<td><%= session.getAttribute("retail")%></td>
		
	</tr>
	<tr>
		<td>Image</td>
		<td><img src="<%=session.getAttribute("image")%>" alt="laptop.png"></td>
		
	</tr>
	</tbody>
</table>
</div>
</section>
</div>

<footer><!-- Defining the footer section of the page -->
<div id="privacy">
Sai Lapop E-Store <a class="link" href="#">Privacy Policy</a><br />
</div>
</footer>
</div>
</body>
</html>
