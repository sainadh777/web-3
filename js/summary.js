$(document).ready(function() { 

 window.cart = new shopping_cart("jadrn050");
 var cartArray=window.cart.getCartArray();
        
if(document.getElementById('ressum') !=null){
document.getElementById('ressum').visibility="hidden";


window.result=document.getElementById('ressum').innerHTML;
//////alert(window.result);
handleresponse(window.result);
}
else{
	if(document.getElementById("masteritemsum")){
	document.getElementById("masteritemsum").innerHTML="<h2>No items in Cart</h2>";
}
}

		//handle_cart_data(window.result);
		
		});

				
function checkout(){
	
var d = new Date().toDateString();
var n = d.indexOf(" ");
var res = d.substring(n);
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var today = mm+'/'+dd+'/'+yyyy;
////alert(today);
//document.getElementById("adddate").value = today;
var arr=window.cart.getCartArray();
	for(i=0;i<arr.length;i++){
		var url="/jadrn050/servlet/OrderOut?outskuinput="+arr[i][0]+"&outdate="+today+"&outquantity="+arr[i][1];
		//alert(url);
		$.get(url,orderresponse);
		 
		}
		//window.location.href="/jadrn050/successful.html";

		}
	function orderresponse(response){
		//alert(response);

     deletecart(response);

	
	}
		
function summary(){
	var cartArray=window.cart.getCartArray();
	for(i=0;i<cartArray.length;i++){
		 //console.log(cartArray[i][0]+" "+cartArray[i][1]);
		}
	
}



function add_summary(){
	////alert("add");
	var param="";
	var arr=window.cart.getCartArray();
	 for(i=0;i<arr.length;i++){
		 //console.log(arr[i][0]);
		 param=param+arr[i][0];
		 param=param+'$';
	 }
	 param=param.substr(0,param.length-1);
	 //alert(param);
	//document.location.href="/jadrn050/servlet/GetCartData?cartparam="+param;
	var durl="/jadrn050/servlet/GetSumData?cartparam="+param;
    $.get(durl,handledresponse);
	return true;
		  
		
}
function handledresponse(response){
	////alert(response);
	//window.location.href=response.location;
	window.location.href="/jadrn050/jsp/summary.jsp";

}
function handleresponse(res) {
	////alert(res);
	var arr=window.cart.getCartArray();
	var temp = new Array();
    temp=res.split("+");
	document.getElementById('ressum').innerHTML="";
	for(i=0;i<temp.length-1;i++){
		var temp1 = new Array();
		temp1=temp[i].split("#");
		
		//console.log(temp1);
		var firstdiv=document.createElement("div");
		firstdiv.className="item";
		firstdiv.setAttribute("id", "additem"+temp1[0]);
		document.getElementById("masteritemsum").appendChild(firstdiv);
		
		
		
		var div2=document.createElement("div");
		div2.className="image";
		div2.setAttribute("id", "imagediv");
		document.getElementById("additem"+temp1[0]).appendChild(div2);
		var x3 = document.createElement("IMG");
				var img="/~jadrn050/proj1/file_upload/_p_images/"+temp1[8];
			 	//window.fetchedImage=objs[8];
				x3.setAttribute("src", img);
				x3.setAttribute("alt", "The Laptop");
			
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
		
		var span5=document.createElement("span");
		span5.setAttribute("id", "itemquan");
		var linkText5 = document.createTextNode("Quantity ="+arr[i][1]);
		span5.appendChild(linkText5);
		div3.appendChild(span5);
		
		
		
	}
	var span6=document.createElement("span");
	var element1 = document.createElement("a");
		  element1.className="checkout";
		  element1.setAttribute("id", "checkout");
		  element1.href="javascript:checkout();";
		  
		  var linkText5 = document.createTextNode("Submit Order");
		element1.appendChild(linkText5)
		//element1.appendChild(x5);
		span6.appendChild(element1);
		document.getElementById('masteritemsum').appendChild(span6);
		var span7=document.createElement("span");
		var element1 = document.createElement("a");
		  element1.className="checkout";
		  element1.setAttribute("id", "cancel");
		  element1.href="/jadrn050/proj3.html";
		  
		  var linkText5 = document.createTextNode("Cancel Order");
		element1.appendChild(linkText5)
		//element1.appendChild(x5);
		span7.appendChild(element1);
		document.getElementById('masteritemsum').appendChild(span7);
}

