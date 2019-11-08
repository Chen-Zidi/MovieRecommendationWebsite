/**
 * present the forth question according to the third question
 */
function nextQuestion() {
	document.getElementById("nextQuestionForm").innerHTML = "";

	
	/**
	 * if the number of the people is set to "one","two" or "more"
	 */
	if (document.getElementById("one").checked == true) {

		document.getElementById("nextQuestion").innerText = "[4] What's your mood now?";
		document.getElementById("nextQuestionDescription").innerText = "We would like to recommend the movie which is helpful to you and suits the atmosphere well. :)";

		var nextQuestionForm = document.getElementById("nextQuestionForm");

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var moodNegative = document.createElement("input");
		moodNegative.type = "radio";
		moodNegative.name = "mood";
		moodNegative.id = "negative";
		moodNegative.value = "negative";
		nextQuestionForm.appendChild(moodNegative);
		nextQuestionForm.appendChild(document.createTextNode('negative mood (sad, anger, and so on)'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var moodPositive = document.createElement("input");
		moodPositive.type = "radio";
		moodPositive.name = "mood";
		moodPositive.id = "positive";
		moodPositive.value = "positive";
		nextQuestionForm.appendChild(moodPositive);
		nextQuestionForm.appendChild(document.createTextNode('positive mood (happy, excited, and so on)'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var moodOther = document.createElement("input");
		moodOther.type = "radio";
		moodOther.name = "mood";
		moodOther.id = "otherMood";
		moodOther.value = "other";
		nextQuestionForm.appendChild(moodOther);
		nextQuestionForm.appendChild(document
				.createTextNode('others (no special mood or just boring)'));

	} else if (document.getElementById("two").checked == true) {

		document.getElementById("nextQuestion").innerText = "[4] What's your relationship?";
		document.getElementById("nextQuestionDescription").innerText = "We would like to recommend the movie which is helpful to you and suits the atmosphere well. :)";

		var nextQuestionForm = document.getElementById("nextQuestionForm");

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationFriend = document.createElement("input");
		relationFriend.type = "radio";
		relationFriend.name = "relationship";
		relationFriend.id = "friend";
		relationFriend.value = "friend";
		nextQuestionForm.appendChild(relationFriend);
		nextQuestionForm.appendChild(document.createTextNode('Friend'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationCouple = document.createElement("input");
		relationCouple.type = "radio";
		relationCouple.name = "relationship";
		relationCouple.id = "couple";
		relationCouple.value = "couple";
		nextQuestionForm.appendChild(relationCouple);
		nextQuestionForm.appendChild(document.createTextNode('Couple'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationRelative = document.createElement("input");
		relationRelative.type = "radio";
		relationRelative.name = "relationship";
		relationRelative.id = "relative";
		relationRelative.value = "relative";
		nextQuestionForm.appendChild(relationRelative);
		nextQuestionForm.appendChild(document.createTextNode('Close relative'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationOthers = document.createElement("input");
		relationOthers.type = "radio";
		relationOthers.name = "relationship";
		relationOthers.id = "other";
		relationOthers.value = "other";
		nextQuestionForm.appendChild(relationOthers);
		nextQuestionForm.appendChild(document
				.createTextNode('Other relationship'));

	} else if (document.getElementById("more").checked == true) {

		document.getElementById("nextQuestion").innerText = "[4] What's your relationship?";
		document.getElementById("nextQuestionDescription").innerText = "We would like to recommend the movie which is helpful to you and suits the atmosphere well. :)";

		var nextQuestionForm = document.getElementById("nextQuestionForm");

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationFriend = document.createElement("input");
		relationFriend.type = "radio";
		relationFriend.name = "relationshipMore";
		relationFriend.id = "friends";
		relationFriend.value = "friends";
		nextQuestionForm.appendChild(relationFriend);
		nextQuestionForm.appendChild(document.createTextNode('Friends'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationRelative = document.createElement("input");
		relationRelative.type = "radio";
		relationRelative.name = "relationshipMore";
		relationRelative.id = "relatives";
		relationRelative.value = "relatives";
		nextQuestionForm.appendChild(relationRelative);
		nextQuestionForm.appendChild(document
				.createTextNode('Close relatives(including family)'));

		var br = document.createElement("div");
		br.innerHTML = "<br/>";
		nextQuestionForm.appendChild(br);

		var relationshipOthers = document.createElement("input");
		relationshipOthers.type = "radio";
		relationshipOthers.name = "relationshipMore";
		relationshipOthers.id = "others";
		relationshipOthers.value = "others";
		nextQuestionForm.appendChild(relationshipOthers);
		nextQuestionForm.appendChild(document.createTextNode('Other relationships'));

	}

}

/**
 * select the movie according to the user's choice
 * Ten movies' data here.
 * After the forth question, some suitable movies will be picked and stored in an array
 * Then, another function is used to decide the final result according to the fifth question.
 */
function selectMovie() {
	//movie data
	movie = [
			{
				name : "One Day",
				type : "love",
				description : "A love story that lasted for twenty years. The story is twisted and moving. \n"
						+ "It is worth mentioning that the heroine is played by Anne Hathaway.",
				href : "https://upload.wikimedia.org/wikipedia/en/a/ad/One_Day_Poster.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/One_Day_(2011_film), last access date 02.11.2019",
				factor : "highly evaluated"
			},
			{
				name : "3 idiots",
				type : "commedy",
				description : "It is a Indian movie which talks about a story between three friends in one college. \n"
						+ ""
						+ "Two of them would like to find the third people after several year of graduation. Then, they find some secrets from their friends.",
				href : "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/3_Idiots, last access date 02.11.2019",
				factor : "heated,highly evaluated"
			},
			{
				name : "13 Assassins",
				type : "action",
				description : "A Japanese action movie which is basically adapted from history. \n"
						+ "The movie contains many traditional Japanese architectures and it also has won many rewards.\n It is a good choice to get familiar with Japanese culture.",
				href : "https://upload.wikimedia.org/wikipedia/en/f/fd/Thirteen_Assassins.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/13_Assassins_(2010_film), last access date 02.11.2019",
				factor : "minority"
			},
			{
				name : "Witness for the Prosecution",
				type : "story",
				description : "This film is based on Agatha Christie’s novel. \n When I was watching it, I can hardly predict the next episode."
						+ " In the movie, it also alerts that please keep secret to others about the story.",
				href : "https://upload.wikimedia.org/wikipedia/en/a/ad/Movie_poster_for_%22Witness_for_the_Prosecution%22.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/Witness_for_the_Prosecution_(1957_film), last access date 02.11.2019",
				factor : "minority,highly evaluated"
			},
			{
				name : "The Wandering Earth",
				type : "science fiction",
				description : "I can say that this movie is one of the best science fiction movie in China. \n"
						+ "Almost all my friends have watched movie. Scenes, actors, and storylines are all impeccable. \n"
						+ "Watch it with your family, your friends, your lover or by yourself are all good choice.",
				href : "https://upload.wikimedia.org/wikipedia/en/1/1b/The_Wandering_Earth_film_poster.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/The_Wandering_Earth, last access date 02.11.2019",
				factor : "heated,highly evaluated"
			},
			{
				name : "A Quiet Place",
				type : "horror",
				description : "A heated horror film. It mainly talks about a family. \nThey"
						+ " have to talk by gestures, otherwise they will killed by the monsters. I think it is a unusual setting and worth watching. ",
				href : "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
				reference : "[1]content: https://en.wikipedia.org/wiki/A_Quiet_Place_(film), last access date 02.11.2019",
				factor : "heated"
			},
			{
				name : "Ne Zha",
				type : "animation",
				description : "A heated animation movie which is adapted from the traditional Chinese story.\n "
						+ "The movie suits both children and adults. It is really a progress of the Chinese animation. ",
				href : "https://upload.wikimedia.org/wikipedia/en/a/a2/Nezha_film_poster.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/Ne_Zha_(2019_film), last access date 02.11.2019",
				factor : "heated,highly evaluated"
			},
			{
				name : "Bedevilled",
				type : "crime",
				description : "A Korean movie which mainly describes a murder in a village.\n"
						+ "It also shows a woman in a miserable life.",
				href : "https://upload.wikimedia.org/wikipedia/en/3/36/BedevilledPoster.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/Bedevilled_(2010_film), last access date 02.11.2019",
				factor : "minority,highly evaluated"
			},
			{
				name : "Take my brother away",
				type : "family",
				description : "A movie talks about the conflict between a older brother and a younger sister.\n"
						+ "A heated Chinese youth movie with both laughing and moving.",
				href : "https://i.mydramalist.com/gZKEXf.jpg",
				reference : "[1]content: https://mydramalist.com/29525-take-my-brother-away, last access date 02.11.2019",
				factor : "heated"
			},
			{
				name : "The intouchables",
				type : "warmth",
				description : "A story between a old rich man and a black youth. The black youth takes care of the rich man's health.\n "
						+ "There is a moving story between them. The story is based on real person.",
				href : "https://upload.wikimedia.org/wikipedia/en/9/93/The_Intouchables.jpg",
				reference : "[1]content: https://en.wikipedia.org/wiki/The_Intouchables, last access date 02.11.2019",
				factor : "highly evaluated"
			} ];
	
	
	if (document.getElementById("one").checked == true) {//if the number of people is one
		if (document.getElementById("negative").checked == true) {
			var arr = [ 1, 8, 9 ];
			compareMovieType(arr);

		} else if (document.getElementById("positive").checked == true) {
			var arr = [ 2, 6, 1 ];
			compareMovieType(arr);

		} else if (document.getElementById("otherMood").checked == true) {
			if (document.getElementById("male").checked == true) {
				var arr = [ 2, 3, 4 ];
				compareMovieType(arr);
			}

			else if (document.getElementById("female").checked == true) {
				var arr = [ 0, 6, 8 ];
				compareMovieType(arr);
			}
		} else {
			alert("error1");
		}
	} else if (document.getElementById("two").checked == true) {//if the number of people is two
		if (document.getElementById("friend").checked == true) {
			var arr = [ 1, 5, 6 ];
			compareMovieType(arr);

		} else if (document.getElementById("couple").checked == true) {

			var arr = [ 6, 0, 9 ];
			compareMovieType(arr);
		} else if (document.getElementById("relative").checked == true) {
			var arr = [ 9, 8, 4 ];
			compareMovieType(arr);

		} else if (document.getElementById("other").checked == true) {
			var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
			compareMovieType(arr);

		} else {
			alert("error2");
		}

	} else if (document.getElementById("more").checked == true) {//if the number of people is more

		if (document.getElementById("friends").checked == true) {
			var arr = [ 1, 5, 6 ];
			compareMovieType(arr);

		} else if (document.getElementById("relatives").checked == true) {

			var arr = [ 6, 8, 9 ];
			compareMovieType(arr);
		} else if (document.getElementById("others").checked == true) {

			var arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

			compareMovieType(arr);

		} else {
			alert("error3");
		}

	}

}

/**
 * send the result to the result page
 */
function transmission(object) {

	sessionStorage.setItem("result name", object.name);
	sessionStorage.setItem("result type", object.type);
	sessionStorage.setItem("result description", object.description);
	sessionStorage.setItem("result href", object.href);
	sessionStorage.setItem("result reference", object.reference);
	sessionStorage.setItem("result factor", object.factor);

}

/**
 * determine the result considering the fifth question's answer
 */
function compareMovieType(arr) {
	//get the answer of the fifth question(decisive factor)
	var type = "";
	if (document.getElementById("heated").checked == true) {
		type = "heated";
	} else if (document.getElementById("minority").checked == true) {
		type = "minority";
	} else if (document.getElementById("highlyEvaluated").checked == true) {
		type = "highly evaluated";
	}

	patt = new RegExp(type);
	
	//check the possible result array
	//if there is a result that fits the factor(heat, minority, highly evaluated), then take the first-checked result.
	//if there is no result which is suitable for the factor(heat, minority, highly evaluated), then randomly choose one.
	var alreadyexist = false;

	for (var i = 0; i < arr.length; i++) {

		var movieType = movie[arr[i]].factor;

		if (patt.test(movieType)) {

			transmission(movie[arr[i]]);

			alreadyexist = true;
			break;
		}
	}

	if (alreadyexist == false) {
		var num = arr[Math.floor(Math.random() * arr.length)];
		transmission(movie[num]);
	}

}

var errorExist = false;

/**
 * validation function (alert)
 */
function validate() {
	error = "";
	errorExist = false;
	if (!((/^[A-Za-z]{2,10}$/).test(document.getElementById("userName").value))) {
		error = error
				+ "User name is not correct. It should be 2-10 English characters without spaces, numbers and underlines.\n";
		errorExist = true;
	}
	if (!(document.getElementById("male").checked || document
			.getElementById("female").checked)) {
		error = error + "The gender is not selected.\n";
		errorExist = true;
	}
	if (!(document.getElementById("one").checked
			|| document.getElementById("two").checked || document
			.getElementById("more").checked)) {
		error = error + "The number is not selected.\n";
		errorExist = true;
	}

	if (document.getElementById("one").checked) {
		if (!(document.getElementById("otherMood").checked
				|| document.getElementById("negative").checked || document
				.getElementById("positive").checked)) {
			error = error + "Your mood is not selected.\n";
			errorExist = true;

		}
	} else if (document.getElementById("two").checked) {
		if (!(document.getElementById("friend").checked
				|| document.getElementById("couple").checked
				|| document.getElementById("relative").checked || document
				.getElementById("other").checked)) {
			error = error + "The relationship is not selected.\n";
			errorExist = true;

		}
	} else if (document.getElementById("more").checked) {
		if (!(document.getElementById("friends").checked
				|| document.getElementById("relatives").checked || document
				.getElementById("others").checked)) {
			error = error + "The relationship is not selected.\n";
			errorExist = true;

		}
	}

	if (!(document.getElementById("heated").checked
			|| document.getElementById("minority").checked || document
			.getElementById("highlyEvaluated").checked)) {
		error = error + "The most decisive factor is not selected.\n";
		errorExist = true;
	}

	if (errorExist == true) {
		alert(error);
	}

}

/**
 * open the result page
 */
function newPage() {
	validate();
	if (errorExist == false) {
		sessionStorage.setItem("user name",
				document.getElementById("userName").value);

		if (document.getElementById("male").checked == true) {
			sessionStorage.setItem("gender", "Mr.");
		} else if (document.getElementById("female").checked == true) {
			sessionStorage.setItem("gender", "Ms.");
		}

		selectMovie();
		window.open("ResultPage.html");

	}

}

/**
 * reset the page
 */
function reset() {
	location.reload();

}

