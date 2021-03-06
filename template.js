
document.write(`

	<!-- Overlay -->

	<!------------------------ Top Right Buttons --------------------------------------------->

	<div id="back-to-top" class="cta-button">
		<a href="resume/Steven-Li-CV-July-2020.pdf" target="_blank" class="button button-light cta-postition desktop w-button">CV</a>
		<a href="resume/Steven_Li_Resume_Dec_2019.pdf" target="_blank" class="button button-light cta-postition desktop w-button">Resume</a>

	</div>

	<div id='bg-overlay'>

		<div class="gradient-text main" id="overlay">
			<ul class="no-bullet-ul">
				<li><a href="index.html" class='text-h1 text-white nav-menu-link'>Home</a></li>
				<!-- <li><a href="about.html" class='text-h1 text-white nav-menu-link'>About Me</a></li> -->
				<li><a href="projects.html" class='text-h1 text-white nav-menu-link'>Projects</a></li>
				<li><a href="academics.html" class='text-h1 text-white nav-menu-link'>Academics</a></li>
				<!-- <li><a href="contact.html" class='text-h1 text-white nav-menu-link'>Contact</a></li> -->
			</ul>
		</div>
	</div>



	<!--------- SideNav But Really just a SideBar, Bar --------------->
	
	<div id="Navigation" class="nav-section">
		
		<!--- Transformed Font still looks blurry in Chrome, !! Needs a Fix !! --->
		<div class="nav-bar">
		
			<div class="nav-title-container">
				<div class="nav-title">Steven Li</div>
				<div class="nav-subtitle">Scientist & Developer</div>
			</div>	

			<!--------- Navigation Controls ----------------------------------->
			
			<div class="navigation-bar-controls">
				<div id="nav-menu" class="menu-toggle" onclick="nav_toggle()">
				
						<!-- Line Navigation Control -->
					<!-- There is still a problem with the animation because when I remove the class there is a brief second where the whole 3 line bar is shown leading to the transition to not be smooth but that has sometimes -->
					<div class="menu-toggle-line topBar"></div>
					<div class="menu-toggle-line midBar"></div>
					<div class="menu-toggle-line bottomBar"></div>
						<!---->
					
					<!-- Arrow Nav
					<span style="height: 50px; width: 50px; background-color: transparent; border-radius: 50%; display: inline-block; border: 0.5px solid white; padding:10px 5px; align-items: center; justify-content: center;">
					<i class="arrow-right" style="display: inline-block; padding: 3px; transform: rotate(-45deg) translate(3px,3px);"></i>
					<i class="arrow-right" style="display: inline-block; padding: 3px; transform: rotate(-45deg);"></i>
					<i class="arrow-right" style="display: inline-block; padding: 3px; transform: rotate(-45deg) translate(-3px,-3px);"></i>
					</span>
					 -->
					
				</div>
			</div>
			
		</div>
		
	</div>
	

		

	
    <script src="jquery.js"></script>

 	<!-- TO DO: move this script to it's own seperate file -->

    <script>

    //Escape key to toggle and untoggle navigation
	document.addEventListener('keyup', function(e) {
		if (e.keyCode == 27) {
		    nav_toggle();
		}
	});
 

    function nav_toggle() {
	  // document.getElementById("overlay").style.width = "100%";
	  let base = document.getElementsByTagName("BODY")[0];
	  let menuDisplay = document.getElementById("bg-overlay");
	  let menu = document.getElementById("overlay");
	  let contents = document.getElementsByClassName("content");
	  let lines = document.getElementsByClassName("menu-toggle-line");
	  if ($("#bg-overlay").css('opacity') == 0) {
	  	// base.style.overflow-y = 'hidden';
	  	// menuDisplay.style.animation = 'fadein 2s ease';
	  	// for(n in lines){
	  	// 	n.addClass('retrigger');
	  	// }
	  	$('#bg-overlay').css('display','block');
	  	if($(".menu-toggle-line").hasClass("reverse")){
	  		$(".menu-toggle-line").removeClass("reverse");
	  	}
	  	setTimeout("$('.menu-toggle-line').addClass('trigger');",10);

	  	setTimeout("$('.menu-toggle-l')",10)

	  	$('#overlay').css('display','block');
	  	// lines[0].style.animation = 'topDown 1s ease forwards';
	  	// lines[1].style.animation = 'fadeout 1s ease forwards';
	  	// lines[2].style.animation = 'bottomUp 1s ease forwards';
	  	// menu.style.animation = 'fadein 2.5s ease';
	  	// menuDisplay.style.display = "block"; 
	  	// menu.style.display = "inline-block"; 	
	  	// menuDisplay.style.width = 100%;
	  	// menuDisplay.style.height = 100%;
	  	// menuDisplay.style.visibility = 'visible';
	  	$("#bg-overlay").css('opacity',1);
	  	$("#overlay").css('opacity',1);
	  	$('body').css('overflow-y','hidden');
	  	// menuDisplay.style.opacity = 1;
	  	// menu.style.opacity = 1;
	  	// menu.style.z-index = 1;
	  	// for(let i =0; i< contents.length; i++){ //Hide all content
	  	// 	contents[i].style.display = "none"
	  	// }
	  		// for(let j = 0; j<100; j++){
	  		// 	menuDisplay.style.opacity+=0.01;
	  		// 	console.log(j);
	  		// $( "bg-overlay" ).css( "opacity", i );
	  	// }
	  	// $( "body" ).css( "background-image", 'url("overlay_bg.jpg")' );
	  }
	  else{
	  	$("#overlay").css('opacity',0);
	  	$("#bg-overlay").css('opacity',0);
	  	setTimeout("$('#overlay').css('display','none');",200) //Let animation play first
	  	// menu.style.opacity = 0;
	  	// for(n in lines){
	  	// 	n.removeClass('retrigger');
	  	// }
	  	// if($(".menu-toggle-line").hasClass("trigger")){
	  	// 	$(".menu-toggle-line").removeClass("trigger");
	  	// }
	  	$('body').css('overflow-y','visible');
	  	$(".menu-toggle-line").removeClass("trigger");
	  	setTimeout("$('.menu-toggle-line').addClass('reverse');",10);
	  	setTimeout("$('#bg-overlay').css('display','none');",500);
	  	// lines[0].style.animation = 'topDown 1s ease reverse forwards';
	  	// lines[1].style.animation = 'fadeout 1s ease reverse forwards';
	  	// lines[2].style.animation = 'bottomUp 1s ease reverse forwards';  	
	  	// lines[0].style.opacity = 1;
	  	// lines[1].style.opacity = 1;
	  	// lines[2].style.opacity = 1;
	  	// menu.style.display = "none"; 
	  	// base.style.overflow-y = "visible"
	  	// menu.style.z-index = -1;
	  	// menuDisplay.style.animation = 'fadeout 2s ease';
	  	// menuDisplay.style.visibility = 'hidden';		
	  	// menu.style.display = "none";
	  	// menuDisplay.style.display = "none";
	  	// menuDisplay.style.width = 0;
	  	// menuDisplay.style.height = 0;
	  	// for(let i = 0; i< contents.length; i++){ //Reveal all content
	  	// 	contents[i].style.display = "flex"
	  	// }
	  	// $( "body" ).css( "background-image", 'url("bg.jpg")' );
	  }
	  
	  // document.getElementById("overlay").style.position = "fixed";
	}


    $( document ).ready(function() {
	
		//To do: Add loading gif, when window is done, set opacity of background to 1. Actually, maybe...
		
		// let sound = document.createElement('audio');
		// sound.setAttribute('src',"surprise.mp3");
		// sound.play();


	
        $( "class" ).click(function( event ) {
            alert( "You clicked yourself, now the link is leaving");
			event.preventDefault();
			
			$(this).hide("slow");
			
        });
		
    });
	
	window.onload = function() {
		// $("body").css("opacity","1");
		console.log("Window has loaded");

	};
 
    </script>
	<!--- <iframe src="test.html"></iframe> Another Window within a Within, spooky, not really. -->

	<noscript>
         Your browser does not support JavaScript, therefore somethings may not work. Can be contacted at listeven8841@gmail.com.
     </noscript>

`);