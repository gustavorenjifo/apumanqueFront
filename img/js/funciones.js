


$(document).ready(function(){

	$(".checkbox .nochequed").on("click",function(){
		$(this).addClass("chequed");
		$(this).removeClass("nochequed");
		$("#password, #passwordnuevo").attr('type', 'text'); 	
	});
	function chequed (){
	$(".checkbox .chequed").on("click",function(){
		$("#password, #passwordnuevo").attr('type', 'password'); 
		$(this).removeClass("chequed");
		$(this).addClass("nochequed");
		});
	};
	function nochequed (){
		$(".checkbox .nochequed").on("click",function(){
			$(this).addClass("chequed");
			$(this).removeClass("nochequed");
			$("#password, #passwordnuevo").attr('type', 'text'); 	
		});
	};
	$(".checkbox").on("click",function(){
		nochequed();
		chequed();		
	});


	/*$("div").each(function(){
		if($("div").hasClass("registro2") || $("div").hasClass("registro2") ){
			$(".footer").css("bottom","-90px")
		}	
	});*/




  
	//input file//
	$(document).on('change', '.btn-file :file', function() {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [label]);
		});
		$('.btn-file :file').on('fileselect', function(event, label) {    
		    var input = $(this).parents('.input-group').find(':text'),
		        log = label;   
		    if( input.length ) {
		        input.val(log);
		    } else {
		        if( log ) alert(log);
		    }   
		});
		function readURL(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();    
	        reader.onload = function (e) {
	            $('#img-upload').attr('src', e.target.result);
	        }       
	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$("#imgInp").change(function(){
	    readURL(this);
	}); 
  
	//Scroll animado
	function subir(){
		$("#subir").click(function(){
			$("html, body").animate({ scrollTop: "0px" });
		});
	}
  	subir();

  	//deteccion direccion vertical scroll
  	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		
		if (st > lastScrollTop){
			$("#subir").stop().fadeOut(40)
		
		} else {
			$("#subir").stop().fadeIn(40);
		}
		if (st < 360){
			$("#subir").stop().fadeOut(20)
		}
		lastScrollTop = st;
	});




	
	$("#mapasvg .instruccion").click(function(){
		$(this).fadeOut();
	});

	$("#cambiar").click(function(){
		$('input').prop("disabled", false);
		$('.botones2').hide();
		$('.botones').show();
	});

	$(".footer").load("include/footer.html");

	//owlCarousel//
	$('.owl-carousel.slideprincipal').owlCarousel({
		themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
		margin:0,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		items:1, // items to display in slider
		navRewind:true, // Go to first/last.
		navText:true, // left and right arrows
		autoHeight: true,
		navContainerClass: 'owl-buttons',
		dotsClass: 'owl-pagination',
		dotClass: 'owl-page',
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplayHoverPause:false, //false
		lazyLoad: false, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
		dots:false, // true
		responsiveClass:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
				navText:false,
				mouseDrag: true
			},
			720:{
				items:1,
				nav:true
			},
			960:{
				items:1,
				nav:true,			
		         mouseDrag: false,
				loop:true
			}
		}
    })

    $('.owl-carousel.carruselproductos').owlCarousel({
		themeClass: 'owl-fullscreen owl-nonav white owl-loaded',
		margin:25,
		autoplay:true,
		loop:true,
		autoplayTimeout:4000,
		items:3, 
		navRewind:true, // Go to first/last.
		navText:true, // left and right arrows
		autoHeight: true,
		navContainerClass: 'owl-buttons',
		dotsClass: 'owl-pagination',
		dotClass: 'owl-page',
		/*animateOut: 'fadeOut',
		animateIn: 'fadeIn',*/
		autoplayHoverPause:true, //false
		lazyLoad: false, // IMG need special markup class="lazyOwl" and data-src="url_to_img" or/and data-src-retina="url_to_highres_img"
		pagination:false,
		responsiveClass:false,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1,
				navText:false,
				mouseDrag: true,
				dots:true
			},
			720:{
				items:2,
				mouseDrag: true,
				nav:false
			},
			960:{
				items:3,
				nav:true,
				loop:true,
				mouseDrag: false,
				dots:false

			}
		}
    })//owlCarousel//

    $(".boton .iniciar").click(function(){
    	$(".registroinicio").fadeToggle("fast");
    	$(this).hide();
    	 $(".boton .cerrar").show();
    });
    $(".boton .cerrar").click(function(){
    	$(".registroinicio").fadeToggle("fast");
    	$(this).hide();
    	$(".boton .iniciar").show();
    	//$(".boton .iniciar").	
    });


      //scroll hacia abajo
         
		    	


    $("div").each(function(){
    	if($("div").hasClass("winterior")){
    		$("body").css("background","#f5f5f5");
    	}
    });
   
    $(".iconmenu.abrir").click(function(){
		$(".menuprincipalbox").slideDown("fast");
		$('body').css({
			overflow: 'hidden',	
		});
		$(this).hide();
		$(".iconmenu.cerrar").show();
	});

	$(".iconmenu.cerrar").click(function(){
		$('body').css({
			overflow: 'unset',	
		});	
	});

	$(".registroinicio .volver").click(function(){
		$(".registroinicio").hide();
		$(".menuprincipal ul li").show();
		$(".boton .iniciar").show();
	});



	if ($(window).width() > 768){
		$(window).scroll(function(){
		var margen = self.pageYOffset;
		
		if(margen>=200){
			$(".header").addClass("fixed");
		
		}else{
			$(".header").removeClass("fixed");
			};
		});
	}

    if ($(window).width() < 959) {


		$(".menutop").appendTo(".menuprincipal");
		$(".top form").appendTo(".menutop");

		/*menu mobile*/
		$(".iconmenu.abrir").click(function(){
			$(".menuprincipalbox").slideDown("fast");
			$(this).hide();
			$(".iconmenu.cerrar").show();
		});

		/*menu mobile*/
		$(".iconmenu.cerrar").click(function(){
			$(".menuprincipalbox").slideUp("fast");
			$(".iconmenu.abrir").show();
			$(this).hide();
		});

		$(".boton .iniciar").click(function(){
			$(".boton .cerrar").hide()
			$(".menuprincipal ul li").hide();			
		});
				
	}else {
		$('body').css({
			overflow: 'unset',	
		});
	}

	var mediaquery = window.matchMedia("(max-width:480px)");
	function handleOrientationChange(mediaquery) {
		if (mediaquery.matches) {		
			$(".menutop").appendTo(".menuprincipal");
			$(".top form").appendTo(".menutop");
	
			/*menu mobile*/
			$(".iconmenu.cerrar").click(function(){
				$(".menuprincipalbox").slideUp("fast");
				$('body').css({
					overflow: 'unset',	
				});
				$(".iconmenu.abrir").show();
				$(this).hide();
			});
		} else {
			$(".menutop").appendTo(".top .col-md-9");
			$('body').css({
				overflow: 'unset',	
			});
		}
	}
	mediaquery.addListener(handleOrientationChange);




});


//api google maps
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -33.4104455, lng: -70.5685494},
		zoom: 16,
		disableDefaultUI: true,
		scrollwheel: false,
		styles: 
		[
			{
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#f5f5f5"
			  }
			]
			},
			{
			"elementType": "labels.icon",
			"stylers": [
			  {
			    "visibility": "off"
			  }
			]
			},
			{
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#616161"
			  }
			]
			},
			{
			"elementType": "labels.text.stroke",
			"stylers": [
			  {
			    "color": "#f5f5f5"
			  }
			]
			},
			{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#bdbdbd"
			  }
			]
			},
			{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#eeeeee"
			  }
			]
			},
			{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#757575"
			  }
			]
			},
			{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#e5e5e5"
			  }
			]
			},
			{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			},
			{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#ffffff"
			  }
			]
			},
			{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#757575"
			  }
			]
			},
			{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#dadada"
			  }
			]
			},
			{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#616161"
			  }
			]
			},
			{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			},
			{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#e5e5e5"
			  }
			]
			},
			{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#eeeeee"
			  }
			]
			},
			{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			  {
			    "color": "#c9c9c9"
			  }
			]
			},
			{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			  {
			    "color": "#9e9e9e"
			  }
			]
			}
		]
    });
    var marker = new google.maps.Marker({
		position: {lat: -33.4100177, lng: -70.5677694},
		map: map,
			title: 'Apumanque',
			icon: {
			url: "img/marker.svg",
			scaledSize: new google.maps.Size(44, 44)
		}
	});	
}

	
  