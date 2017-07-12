$('form').submit(function(event){
	event.preventDefault();
	var newarr = [];
	var wc = 0, uwc = 0, same = 0, x = 0;

	$("#user-text").val().split(" ").forEach(function(val){
		newarr.forEach(function(val2){
			if (val == val2)
				same = 1;
		})
		if (same == 0){
			wc++;
			uwc++;
			newarr.push(val);
		}
		else{
			same = 0;
			wc++;
		}
		x += val.length;
	})
	var awl = x/wc;

	$("dd").empty();
	$("dl.hidden").removeClass("hidden");
	$("dd:nth-of-type(1)").append(wc);
	$("dd:nth-of-type(2)").append(uwc);
	$("dd:nth-of-type(3)").append(awl, " characters");
})