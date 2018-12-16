$(function () {
	
	//document.getElementById("billingid").style.visibility="hidden";
  $('[data-toggle="popover"]').popover();
  $(".checkbox_check").change(function() {
  if($('input.checkbox_check').is(':checked')) {
	  var val=$('<h3>Billing Info</h3><table><tr><th><label>First Name <em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>Last Name <em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>Address <em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>City <em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>State/Region/Province<em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>Zip/Postal Code<em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>Country <em>*</em></label></th><td><input type="text"></td></tr><tr><th><label>Phone <em>*</em></label></th><td><input type="text"></td></tr></tbody>');
	  $("#billingid").append(val);

}
else{
document.getElementById("billingid").innerHTML="";
	}
  });
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
  $('.cvc-preview-container').on('click', function(){
    $(this).addClass('hide');
  });
});

