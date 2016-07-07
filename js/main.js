$(function(){

	$(".bulletP1").hide()
	$(".bulletP2").hide()
	$(".bulletP3").hide()


	$(".clickToExpand1").click(clickMovies);

	function clickMovies(){
		$(".bulletP1").slideToggle(400);
	};


	$(".clickToExpand2").click(clickMusic);


	function clickMusic(){
		$(".bulletP2").slideToggle(400);
	};

	$(".clickToExpand3").click(clickHobbies);


	function clickHobbies(){
		$(".bulletP3").slideToggle(400);
	};


	$(".expandResume").hide()

	$(".expandResume2").click(expandResumeFull1);

	function expandResumeFull1(){
		$(".expandResume").slideToggle(400);
	};

	$(".navBarClick > li").click(function(){
		$(".navBarClick > li.highlighted").removeClass("highlighted");
		$(this).addClass("highlighted");
	});
});
