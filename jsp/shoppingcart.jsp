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
<!-- Linking scripts -->
<script src="/jadrn050/js/jquery.js"></script>
<script src="/jadrn050/js/jquery.nivo.slider.pack.js"></script>   
<script src="/jadrn050/js/shoppingcart.js"></script>
<script type="text/javascript" src="/jadrn050/js/html5.js"></script>
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
<div class="shopping-cart">
      <!-- Title -->
      <div class="title">
        Shopping Bag
      </div>
 
      <!-- Product #1 -->
	  
      <div class="master" id="masteritem">
	  <p id="res"><%= session.getAttribute("res")%></p>
	  
   <!--     <div class="buttons">
          <span class="delete-btn"><img src="delete-icn.svg" alt="" /></span>
          <span class="like-btn"><img src="plus.svg" alt="" /></span>
        </div>
 
        <div class="image">
          <img src="facebook.svg" alt="" />
        </div>
 
        <div class="description">
          <span>Common Projects</span>
          <span>Bball High</span>
          <span>White</span>
        </div>
 
        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            <img src="plus.png" alt="" />
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            <img src="minus.png" alt="" />
          </button>
        </div>
 
        <div class="total-price">$549</div>
      </div>-->
 
      <!-- Product #2 -->
    <!--  <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>
 
        <div class="image">
          <img src="item-2.png" alt=""/>
        </div>
 
        <div class="description">
          <span>Maison Margiela</span>
          <span>Future Sneakers</span>
          <span>White</span>
        </div>
 
        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            <img src="plus.svg" alt="" />
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            <img src="minus.svg" alt="" />
          </button>
        </div>
 
        <div class="total-price">$870</div>
      </div>-->
 
      <!-- Product #3 -->
     <!-- <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>
 
        <div class="image">
          <img src="item-3.png" alt="" />
        </div>
 
        <div class="description">
          <span>Our Legacy</span>
          <span>Brushed Scarf</span>
          <span>Brown</span>
        </div>
 
        <div class="quantity">
          <button class="plus-btn" type="button" name="button">
            <img src="plus.svg" alt="" />
          </button>
          <input type="text" name="name" value="1">
          <button class="minus-btn" type="button" name="button">
            <img src="minus.svg" alt="" />
          </button>
        </div>
 
        <div class="total-price">$349</div>
      </div>-->
    </div>
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
