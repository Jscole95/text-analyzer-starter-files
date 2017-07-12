function findUniqueWords(words){
	var uniqueWords = 0;
	var newArray = [];
	var same = false;
	words.forEach(function(word){
		newArray.forEach(function(word2){
			if (word == word2)
				same = true;
		});
		if (same == false){
			uniqueWords++;
			newArray.push(word);
		}
		same = false;
	});
	return uniqueWords;
}

function findAverageWordLength(words){
	var x = 0;
	words.forEach(function(word){
		x += word.length;
	});
	return x/words.length;
}


function analyze(){
	$('form').submit(function(event){
		//Stops page from reloading
		event.preventDefault();

		//Creates an array called words and makes every word inside lowercase
		var words = $("#user-text").val().toLowerCase().split(" ");

		//Removes old values
		$("dd").empty();

		//Removes the hidden class from the dl element
		$("dl.hidden").removeClass("hidden");

		//Returns total word count
		$(".js-word").append(words.length);

		//Returns a value of how many words are unique from each other
		$(".js-unique-word").append(findUniqueWords(words));
		
		//Returns a value of the average length of each word
		$(".js-word-length").append(findAverageWordLength(words), " characters");
	});
}

$(function() {
	analyze();
});