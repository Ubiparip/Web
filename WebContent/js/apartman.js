$(document).ready(function(){
	
	$('#vrPrijave').datepicker({
		format: "yyyy-mm-dd"
	});
	$('#vrOdjave').datepicker({
		format: "yyyy-mm-dd"
	});
	$('#apartmentForm').submit( (event)=>{
		event.preventDefault();
		
		
		var obj = {"tipSobe":$('#tipSobe').val(), "brojSoba" : $('#brojSoba').val(), "brojGostiju" : $('#brojGostiju').val(), "datePocetakVazenja" : $('#datePocetakVazenja').val(), 
				"krajPocetakVazenja" : $('#krajPocetakVazenja').val(),
				"cenaPoNoci" : $('#cenaPoNoci').val(), "vremeZaPrijavu" : $('#vremeZaPrijavu').val(), 
				"vremeZaOdjavu" : $('#vremeZaOdjavu').val(),
				"lokacija": {"adresa": {"mesto": $('#mesto').val(), "ulica": $('#ulica').val()}}};
								
		
		console.log(JSON.stringify(obj));
		$.ajax({
	    	contentType: 'application/json',
	        url: 'rest/apartman/dodaj',
	        type : 'POST',
	        data: JSON.stringify(obj),
	        success: function(response){
	        	alert('Uspesno dodat apartman.');
	        	console.log(response);
	        	
	        }
	    });
	});
})