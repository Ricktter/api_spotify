$(document).ready(function() {
	// Este es un metodo para que el select funcione
	// Pueden checar la documentación de materlializecss 
	$('select').material_select();
		
	$('#sub').click( function() {
		$('#resultados').empty();
		  // Asynchronous JavaScript And XML (JavaScript asíncrono y XML), 
		  // es una técnica de desarrollo web para crear aplicaciones interactivas
	    $.ajax({
	        url: 'https://api.spotify.com/v1/search', //url base de la api que queremos consultar
	        type: 'get',  //tipo de metodo HTTP que vamos a utilizar
	        dataType: 'json',  // tipo de dato
	        data: $('#myForm').serialize(), // jalar todos los datos de mi form y serializarlos
	        // si la peticion fue exitosa entrara a la funcion success
	        // tener en cuenta que la funcion success se asigna a un elemento del objeto que estamos creando
	        // success es un atributo al que le estamos pasando una funcion como valor
	        success: function(response) {
	        // response va a ser la variable donde se va a guardar la respuesta de la solicitud
	        // tengan en cuenta que le pueden dar el nombre que quieran al parametro "response" 
		        console.log(response);
	        	for(var i = 0; i < response.artists.items.length; i++){

	        		// if ternario
	        		// condición ? expr1 : expr2
	        		var img = response.artists.items[i].images.length>0?response.artists.items[i].images[0].url:"http://materializecss.com/images/sample-1.jpg"
	        		console.log(img)
	        		$('#resultados').append(
	        		  '<div class="col s3">\
	        			<div class="card">\
	        			  <div class="card-image waves-effect waves-block waves-light">\
	        			    <img class="activator" src="'+img+'">\
	        			  </div>\
		    			  <div class="card-content">\
		    				<span class="card-title activator grey-text text-darken-4">'+response.artists.items[i].name+'<i class="material-icons right">more_vert</i>\
		    				</span>\
		    				<p>Seguidores: '+response.artists.items[i].followers.total+'</p>\
		      				<p><a href="'+response.artists.items[i].external_urls.spotify+'">Escuchalo en Spotify</a></p>\
		    			  </div>\
		    			  <div class="card-reveal">\
		      				<span class="card-title grey-text text-darken-4">'+response.artists.items[i].name+'<i class="material-icons right">close</i>\
		      				</span>\
		      				<p>Here is some more information about this product that is only revealed once clicked on.</p>\
		    			  </div>\
						</div>\
					  </div>'

	        		);
		            console.log(response.artists.items[i].name);
	        	}
	        },
	        error: function(e){
	        	console.log(e);
	        	alert("ocurrio un error");
	        }
	    });
	});
});