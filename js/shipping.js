function shipping(){
	//e.preventDefault();
	//alert("shipping");
	var fname=document.getElementById('fname').value;
	var lname=document.getElementById('lname').value;
	var address=document.getElementById('address').value;
	var city=document.getElementById('city').value;
	var state=document.getElementById('state').value;
	var zip=document.getElementById('zip').value;
	var country=document.getElementById('country').value;
	var phone=document.getElementById('phone').value;
var durl="/jadrn050/servlet/ShippingDetails?fname="+fname+"&lname="+lname+"&address="+address+"&city="+city+"&state="+state+"&zip="+zip+"&country="+country+"&phone="+phone;
//alert(durl);
console.log(durl);

    $.get(durl,handlesresponse);
	window.location.href="/jadrn050/jsp/billing.jsp";
	return false;

	
}

function handlesresponse(response){
	//window.location.href=response.location;
	//alert("response");
	window.location.href=response;

}