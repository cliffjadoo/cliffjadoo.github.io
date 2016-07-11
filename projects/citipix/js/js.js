$(function(){
	//listen for submit event and execute a function to change background
	$("form").submit(changeBackgroundImage);


	//function to execute the changing of the bg 
	function changeBackgroundImage(e) {
		e.preventDefault(); 	//prevent click event from changing


		//variable to retrieve user input and convert to uppercase to prevent case sensitivity

		var cityName = $("#city-type").val().toUpperCase();



		if (cityName === "SAN FRANCISCO" || cityName === "SF" || cityName === "	BAY AREA") { // if SF change to SF
			$("body").attr("class", "sf");
		} else if (cityName ==="NEW YORK" || cityName ==="NYC" || cityName ==="NEW YORK CITY") { // if ny change to ny
			$("body").attr("class", "nyc");
		} else if (cityName ==="LOS ANGELES" || cityName ==="LA" || cityName ==="LAX") { // if LA change to LA
			$("body").attr("class", "la");
		} else if (cityName === "AUSTIN" ||  cityName === "ATX") { // if ATX change to austin
			$("body").attr("class", "austin");
		} else if (cityName === "SYD" || cityName === "Sydney") { // if syndey change to sydney
			$("body").attr("class", "sydney");
		};
		$("#city-type").val(""); 			// clear the field 
	}; // end function changeBackground
}); // end ready