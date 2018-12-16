$(document).ready(function() { 

window.cart = new shopping_cart("jadrn050");
//pricemap = new Object();
window.pricemap = new Map();
window.quantitymap = new Map();
if(document.getElementById('res') !=null){
//document.getElementById('res').visibility="hidden";

var result=document.getElementById('res').innerHTML;
document.getElementById('masteritem').innerHTML="";
//////alert(window.result);
handle_cart_data(result);
}
else{
	if(document.getElementById("masteritem")){
	document.getElementById("masteritem").innerHTML="<h2>No items in Cart</h2>";
}
}

$('.minus-btn').on('click', function(e) {
	var id=$(this).attr('id');
	var key=id.slice(-7);
	document.getElementById('quantitycheck'+key).innerHTML="";
	//////alert("minus");
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    
    if (value > 1) {
        value = value - 1;
    } else {
        value = 1;
    }
 
  $input.val(value);
  
	//////alert(key);
	changePrice(key);
 
});

$('.delete-btn').on('click', function(e) {
		
	e.preventDefault();
	var id=$(this).attr('id');
	var key=id.slice(-7);
	deletefunc(key);
	add_cart();
		
    
    
});
 
$('.plus-btn').on('click', function(e) {
	var id=$(this).attr('id');
	var key=id.slice(-7);
	document.getElementById('quantitycheck'+key).innerHTML="";
	//////alert("plus");
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    //////alert(value);
	//////alert(window.quantitymap[key]);
    if (value < window.quantitymap[key]) {
		//////alert("if");
        value = value + 1;
    } else {
		////alert("else");
		value=window.quantitymap[key];
        //document.getElementById('quantitycheck'+key).innerHTML="Sorry we have only "+window.quantitymap[key]+" items in stock";
    }
	//////alert($(this).attr('id'));
 
    	$input.val(value);
	//////alert(key);
	changePrice(key);
});



		});
		
function summary(){
	var cartArray=window.cart.getCartArray();
	for(i=0;i<cartArray.length;i++){
		 //console.log(cartArray[i][0]+" "+cartArray[i][1]);
		}
	
}
function deletefunc(key){
	//alert("delete");
if(Object.keys(pricemap).length != 0){
	document.getElementById('quantitycheck'+key).innerHTML="";
	//////alert("plus");
	window.cart.delete[key];
	window.cart.delete(key);
	delete window.pricemap[key]
	//alert(Object.keys(pricemap).length);
	delete window.quantitymap[key];
	
	var divid=document.getElementById("masteritem");
	divid.removeChild(document.getElementById("additem"+key));
	getTotal();
	}
	else{
		document.getElementById("masteritem").innerHTML="No items in cart";
	}
}
function deletecart(key){
		window.cart.delete(key);
	delete window.pricemap[key]
	//alert(Object.keys(pricemap).length);
	delete window.quantitymap[key];
	var arr=window.cart.getCartArray();
	 if(arr.length==0){
		 window.location.href="/jadrn050/successful.html"
		
	 }
}
function changePrice(key){
	//////alert("on change");
	var itemprice="itemprice"+key;
	var itemquantity="inputquantity"+key;
	document.getElementById('quantitycheck'+key).innerHTML="";
	var iquan=parseInt(document.getElementById(itemquantity).value);
	//////alert(document.getElementById(itemquantity).innerHTML);
	var quan=window.quantitymap[key];
	if (iquan < quan){
	////alert(window.pricemap[key]);
	var price=window.pricemap[key];
	//////alert(price);
	price=price*(document.getElementById(itemquantity).value);
	
	window.cart.setQuantity(key,document.getElementById(itemquantity).value);
	////alert(price);
    document.getElementById(itemprice).innerHTML=price;
	}
	else{
		document.getElementById(itemquantity).value=window.quantitymap[key];
		price=price*(document.getElementById(itemquantity).value);
		document.getElementById('quantitycheck'+key).innerHTML="Only "+window.quantitymap[key]+" items in stock";
	}
	getTotal();
};
		
	$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
   
});



function add_cart(){
	
	var param="";
	//document.getElementById("res").innerHTML="";
	//document.getElementById("res").innerHTML="";
	var arr=window.cart.getCartArray();
	 for(i=0;i<arr.length;i++){
		 //console.log(arr[i][0]);
		 param=param+arr[i][0];
		 param=param+'$';
	 }
	 param=param.substr(0,param.length-1);
	 //alert(param);
	//document.location.href="/jadrn050/servlet/GetCartData?cartparam="+param;
	var durl="/jadrn050/servlet/GetCartData?cartparam="+param;
    $.get(durl,handle_response);
	return true;
		  
		
}
function handle_response(response){
	
	////alert(response.location);
	//window.location.href=response.location;
	window.location.href="/jadrn050/jsp/shoppingcart.jsp";

}

function handle_cart_data(res) {
	////alert(res);
	
	var temp = new Array();
    temp=res.split("+");
	//document.getElementById('res').innerHTML="";
	for(i=0;i<temp.length-1;i++){
		var temp1 = new Array();
		temp1=temp[i].split("#");
		
		////console.log(temp1);
		var firstdiv=document.createElement("div");
		firstdiv.className="item";
		firstdiv.setAttribute("id", "additem"+temp1[0]);
		document.getElementById("masteritem").appendChild(firstdiv);
		
		var div=document.createElement("div");
		div.className="buttons";
		div.setAttribute("id", "buttonsdiv");
		firstdiv.appendChild(div);
		
		var span1=document.createElement("span");
		span1.className="delete-btn";
		span1.setAttribute("id", "deletebtn"+temp1[0]);
		div.appendChild(span1);
		//span1.innerHTML("<img src=\"delete-icn.svg\" />");
		var x = document.createElement("IMG");
				var img="/~jadrn050/proj1/file_upload/_p_images/delete-icn.png";
			 	//window.fetchedImage=objs[8];
				x.setAttribute("src", img);
				x.setAttribute("width", "150");
				x.setAttribute("height", "150");
				x.setAttribute("alt", "The Laptop");
				//x.onclick=function() {deleteChild(temp1[0])};
		span1.appendChild(x);
			//list.appendChild(divlist);
		
		var div2=document.createElement("div");
		div2.className="image";
		div2.setAttribute("id", "imagediv");
		document.getElementById("additem"+temp1[0]).appendChild(div2);
		var x3 = document.createElement("IMG");
				var img="/~jadrn050/proj1/file_upload/_p_images/"+temp1[8];
			 	//window.fetchedImage=objs[8];
				x3.setAttribute("src", img);
				x.setAttribute("alt", "The Laptop");
			
		div2.appendChild(x3);
		firstdiv.appendChild(div2);
		
		var div3=document.createElement("div");
		div3.className="description";
		div3.setAttribute("id", "itemdescription");
		firstdiv.appendChild(div3);
		
		var span3=document.createElement("span");
		span3.setAttribute("id", "itemspan");
		var linkText3 = document.createTextNode(temp1[2]);
		span3.appendChild(linkText3);
		div3.appendChild(span3);
		
		var span4=document.createElement("span");
		span4.setAttribute("id", "itemspan");
		var linkText4 = document.createTextNode(temp1[3]);
		span4.appendChild(linkText4);
		div3.appendChild(span4);
		
		var div5=document.createElement("div");
		div5.className="quantity";
		div5.setAttribute("id", "itemquantity");
		firstdiv.appendChild(div5);
		
		 var element2 = document.createElement("button");
  //Assign different attributes to the element. 
		  element2.className="plus-btn";
		  element2.setAttribute("id", "plus"+temp1[0]);
		  var x4 = document.createElement("IMG");
		  var img="/~jadrn050/proj1/file_upload/_p_images/plus.png";
			 	//window.fetchedImage=objs[8];
		   x4.setAttribute("src", img);
		   x4.setAttribute("alt", "The Laptop");
		element2.appendChild(x4);
		div5.appendChild(element2);
		 
		 var element3 = document.createElement("input");
		//Assign different attributes to the element. 
		  element3.type = "text";
		  element3.name = "name";
		  element3.value="1";
		  element3.setAttribute("id", "inputquantity"+temp1[0]);
		  element3.className="inputclass"
		  element3.onchange=function() {changePrice(temp1[0])};
		  div5.appendChild(element3);
		
	   
			
		var element1 = document.createElement("BUTTON");
		  element1.className="minus-btn";
		  element1.setAttribute("id", "minus"+temp1[0]);
		  var x5 = document.createElement("IMG");
		  var img="/~jadrn050/proj1/file_upload/_p_images/minus.png";
			 	//window.fetchedImage=objs[8];
		   x5.setAttribute("src", img);
				x5.setAttribute("alt", "The Laptop");
		element1.appendChild(x5);
		div5.appendChild(element1);
		
		 var p3 = document.createElement('p');
			p3.className= "quantitychec";
			p3.setAttribute("id", "quantitycheck"+temp1[0]);
			p3.setAttribute('style', 'color: red');
			//p2.innerHTML=title;
			div5.appendChild(p3);
		
		
		var div5=document.createElement("div");
		div5.className="total-price";
		div5.setAttribute("id", "itemprice"+temp1[0]);
		var linkText5 = document.createTextNode(temp1[7]);
		div5.appendChild(linkText5);
		firstdiv.appendChild(div5);
		
		window.pricemap[temp1[0]] = temp1[7];
		window.quantitymap[temp1[0]]=temp1[11];
		
		////console.log(temp1[0]+" "+window.pricemap[temp1[0]]);
		
		
		
		
	}
	
		var div7=document.createElement("div");
		div7.className="totalprice";
		div7.setAttribute("id", "taxprice");
	document.getElementById('masteritem').appendChild(div7);
	
			var div8=document.createElement("div");
		div8.className="totalprice";
		div8.setAttribute("id", "sprice");
	document.getElementById('masteritem').appendChild(div8);
	
	var div6=document.createElement("div");
		div6.className="totalprice";
		div6.setAttribute("id", "tprice");
	document.getElementById('masteritem').appendChild(div6);
	
	
	
	getTotal();
	var span6=document.createElement("span");
	var element1 = document.createElement("a");
		  element1.className="checkout";
		  element1.setAttribute("id", "checkout");
		  element1.href="/jadrn050/jsp/shipping.jsp";
		  
   var linkText5 = document.createTextNode("Proceed to CheckOut");
		element1.appendChild(linkText5)
		//element1.appendChild(x5);
		span6.appendChild(element1);
		if(window.cart.getCartArray().length!=0)
		document.getElementById('masteritem').appendChild(span6);
		
	
}


function getTotal(){
	if(Object.keys(pricemap).length != 0){
		var total=0;
		//////alert(Object.keys(window.pricemap));
		for(var v of Object.keys(window.pricemap)){
			//////alert(document.getElementById('itemprice'+v).innerHTML);
			total=total+parseInt(document.getElementById('itemprice'+v).innerHTML);
		}
		var tax=total*(0.08);
		var shippingcharges=5;
		total=total+tax+shippingcharges;
		document.getElementById("taxprice").innerHTML="8% Tax ="+tax;
		document.getElementById("sprice").innerHTML="Shipping Charges =$5";
		document.getElementById("tprice").innerHTML="<h2>Total = $"+total+"</h2>";
	}
	else{
		document.getElementById("masteritem").innerHTML="<h3>No items in cart</h3>";
	}
		
	}

function deleteChild(sku){
	////alert(sku);
	window.cart.delete(sku);
	window.pricemap.delete(sku);
	window.quantitymap.delete(sku);
	
	var divid=document.getElementById("masteritem");
	divid.removeChild(document.getElementById("additem"+sku));
	getTotal();
}






function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();

//////////////////////////////////////////////////////////////////////////
// Do not use the following two methods;  they are private to this class
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i] + "||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity) {
        sku = $.trim(sku);
        quantity = $.trim(quantity);
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
            found = true;            
            }
        if(!found) {       
            this.skuArray.push(sku);
            this.qtyArray.push(quantity);
            }
        this.writeCookie();         
    }
    
    this.setQuantity = function(sku, quantity) {
//////alert("set");		
//////alert(set);	
	
        sku = $.trim(sku);
        var found = false;
        if(sku == "") return;        
        quantity = $.trim(quantity);    
		//////alert(sku+ " "+quantity); 
        this.getCookieValues();
        
        for(i=0; i < this.skuArray.length; i++){
            if(this.skuArray[i] == sku) {        
                this.qtyArray[i] = parseInt(quantity,10);            
                found = true;
                }
		}
				
        if(found)
            this.writeCookie();
		else{
			//////alert("else");
			this.skuArray.push(sku);
            this.qtyArray.push(quantity);
			this.writeCookie();
			//////alert(this.skuArray[0]);
			//////alert(this.qtyArray[0]);
		}
        }    
    
    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) {      
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
        
    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
        return count;
        }        
        
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
            }
        return returnArray;
        }
     this.setCart = function(sku) {
		 //////alert("in set cart");
			var cartArray=this.getCartArray();
        //for(i=0;i<cartArray.length;i++){
		 ////console.log(cartArray[i][0]);
		    var cartid="addcart"+sku;
		    document.getElementById(cartid).text="Added to cart";
			var cartj="#"+cartid;
			//////alert(cartj);
			$(cartj).removeAttr('href');
		 
			 ////console.log(cartArray[i][0]);
		 
	 }  		
}
  
        