$(function() {

    $("#filterForm").submit(function() {
		////alert("submit");
		var filterlist=[];
        $("input.test[type=checkbox]:checked").each(function() {
            ////alert($(this).val());
			filterlist.push($(this).val());
			
        });
		var param=filterlist.join('$');
		//alert(param);
		var index=param.indexOf('C');
		////alert(index);
		if(index!=-1){
		var vendorparam=param.substr(0, index-1);
		var catparam=param.substr(index);
		////alert(param);
		var url="/jadrn050/servlet/FilterData?vendorparam="+vendorparam+"&catparam="+catparam;
		//alert(url);
		  $.get(url, handle_product_adddata);
		}
		else{
			var vendorparam=param;
		var catparam="";
		////alert(param);
		var url="/jadrn050/servlet/FilterData?vendorparam="+vendorparam+"&catparam="+catparam;
		//alert(url);
		  $.get(url, handle_product_adddata);
		}
		
        return false;
    });
});