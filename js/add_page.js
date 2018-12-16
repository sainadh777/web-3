$(document).ready(function() { 

		  var url="/jadrn050/servlet/GetData";
		  $.get(url, handle_product_adddata);

        window.cart = new shopping_cart("jadrn050");
		//window.cart.setCart();
		/*var param="";
		var arr=window.cart.getCartArray();
	 for(i=0;i<arr.length;i++){
		 //console.log(arr[i][0]);
		 param=param+arr[i][0];
		 param=param+'$';
	 }
	 param=param.substr(0,param.length-1);
	 document.getElementById('carthref').href="/jadrn050/servlet/GetCartData?cartparam="+param;*/
		});
		


function add_to_cart(sku){
	////alert(sku);
	 window.cart.setQuantity(sku, 1);
	 var cartid="addcart"+sku;
	 document.getElementById(cartid).text="Added to Cart";
	 $('#addcart').removeAttr('href');
	 window.cart.setCart(sku);
	 /*var arr=window.cart.getCartArray();
	 for(i=0;i<arr.length;i++){
		 for(j=0;j<arr[i].length;j++){
			 //console.log(arr[i][j]);
		 }
	 }*/
}


function handle_product_adddata(response) { 
    //alert(response);
    $("#skumessage").html("");
    //var obj_data = eval("("+response+")"); 
    ////console.log(obj_data);	
	////console.log(response);
	document.getElementById("addlist").innerHTML="";

	if(response.startsWith("Error")){
		$('#skumessage').css('color','red');
		$("#skumessage").html("Error Fetching Data");	
		 $("#addSubmit").attr("disabled","true");
		
		}
		else{
			var temp = new Array();
			temp=response.split("@");
			
			for(i=0;i<temp.length-1;i++){
				var temp1 = new Array();
				temp1=temp[i].split("#");
				
			var objs = new Array();
			objs=temp1;
			
			//console.log(objs);
			////console.log(objs[2]);
			
			var list = document.createElement("LI");
			document.getElementById("addlist").appendChild(list);
			var divlist=document.createElement("div");
			//divlist.setAttribute("class", "img");
			divlist.className="img";
			divlist.setAttribute("id", "prodimg");
			var x = document.createElement("IMG");
				var img="/~jadrn050/proj1/file_upload/_p_images/"+objs[8];
			 	window.fetchedImage=objs[8];
				x.setAttribute("src", img);
				x.setAttribute("width", "150");
				x.setAttribute("height", "150");
				x.setAttribute("alt", "The Laptop");
				x.setAttribute("id", "addfetchedImage");
				x.setAttribute("name","product_image");
			divlist.appendChild(x);
			list.appendChild(divlist);
			var div2=document.createElement("div");
			//divlist.setAttribute("class", "info");
			div2.className="info";
			div2.setAttribute("id", "prodinfo");
			list.appendChild(div2);
			var p2 = document.createElement('p');
			p2.className= "title";
			p2.setAttribute("id", "prodtitle");
			var title=objs[3];
			//console.log(title);
			////console.log(title);
			p2.innerHTML=title;
			div2.appendChild(p2);
			var p3 = document.createElement('p');
			p3.setAttribute("id", "proddesc");
			p3.innerHTML=objs[4];
			//div2.appendChild(p3);
			var p4 = document.createElement('p');
			p4.setAttribute("id", "prodstatus");
			p4.innerHTML=objs[11];
			if(objs[11]=="*In Stock"){
				p4.setAttribute('style', 'color: blue');
			}
			else if(objs[11]=="*Coming Soon"){
				p4.setAttribute('style', 'color: Salmon');
			}
			else{
				p4.setAttribute('style', 'color: red');
			}
			div2.appendChild(p4);
			
			var proddiv=document.createElement("div");
			proddiv.className="price";
			//proddiv.setAttribute("class", "price");
			proddiv.setAttribute("id", "prodprice");
			proddiv.innerHTML="<span class=\"st\">Our price:</span><strong>$"+objs[7]+"</strong>";
			div2.appendChild(proddiv);
			
			var prodaction=document.createElement("div");
			prodaction.className="actions";
			//proddiv.setAttribute("class", "actions");
			prodaction.setAttribute("id", "prodactions");
			//prodaction.setAttribute("overflow","hidden");
			
			var a = document.createElement('a');
			var linkText = document.createTextNode("Details");
			
			a.appendChild(linkText);
			
			//a.setAttribute("float","left");
			/*a.setAttribute("border","1px solid #E0E0E0");
			a.setAttribute("color","#fd7a01");
			a.setAttribute("display","block");
			a.setAttribute("float","left");
			a.setAttribute("font-size","11px");
			a.setAttribute("font-weight","bold");
			a.setAttribute("line-height","16px");
			a.setAttribute("padding","5px");*/
			a.title = "Details";
			a.href = "/jadrn050/servlet/GetProductData?skuinput="+objs[0];
			prodaction.appendChild(a);
			
			var url="javascript:add_to_cart('"+objs[0]+"');";
			var a2 = document.createElement('a');
			if(objs[11]=="*In Stock"){
			var linkText2 = document.createTextNode("Add to cart");
			var cartid="addcart"+objs[0];
			a2.setAttribute("id", cartid);
			a2.href=url;
			
			}
			else{
			var linkText2 = document.createTextNode("Not Available");
			 //a2.setAttribute('style', 'color: red');
			var cartid="addcart"+objs[0];
			a2.setAttribute("id", cartid);
			}
			a2.appendChild(linkText2);
			
			//a2.setAttribute("float","right");
			/*a2.title = "Add to Cart";
			a2.href = "http://example.com";
			a2.setAttribute("border","1px solid #E0E0E0");
			a2.setAttribute("color","#009832");
			a2.setAttribute("display","block");
			a2.setAttribute("float","right");
			a2.setAttribute("font-size","11px");
			a2.setAttribute("font-weight","bold");
			a2.setAttribute("line-height","16px");
			a2.setAttribute("padding","5px");*/
			prodaction.appendChild(a2);
			div2.appendChild(prodaction);
			
			
		
		 }
		}
   
        
		
	}
	
	function handle_product_skudata(response) { 
    $("#skumessage").html("");
    //var obj_data = eval("("+response+")"); 
    ////console.log(obj_data);	
	//console.log(response);
	//var n = response.indexOf("@");
	//var res = response.substring(n+1);
	////console.log(res);
	////console.log(res[0]);
	
    //var answer = "";
	if(response.startsWith("Enter")){
		$('#skumessage').css('color','red');
		$("#skumessage").html("Enter a valid SKU");	
		 $("#addSubmit").attr("disabled","true");
		
		}
		else{
			document.getElementById("addlist").innerHTML="";
			var temp = new Array();
// this will return an array with strings "1", "2", etc.
			temp = response.split("#");
			//console.log(temp);
			for(j=0; j < temp.length; j++){
			var url="/jadrn050/servlet/GetData?skuinput="+temp[j];
			 $.get(url, handle_product_adddata); 	
				
			
		}
		
	}
	
	//window.cart.setCart();
	}
		
    
   

