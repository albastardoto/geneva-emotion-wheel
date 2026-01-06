const height = "1000px";
const width = "1000px";

Qualtrics.SurveyEngine.addOnload(function() {

	/*Place your JavaScript here to run when the page loads*/
	const answers = this.getAnswers();

	const container = this.questionContainer;
	//hide matrix question
	container.getElementsByClassName("Inner")[0].style.display = "none";
	container.style.width = width;
	container.style.height = height;
	container.style.overflow = "visible";

});
const valueCallback = (index, value) => {
	console.log("this was called back");
	console.log(index);
	console.log(value);
};
Qualtrics.SurveyEngine.addOnReady(function() {
	const info = this.getQuestionInfo();
	const choices = info.Choices;

	let emotions = [];

	const choice_ids = this.getChoices();
	choice_ids.forEach((choice_id) => {
		emotions.push(choices[choice_id].Text)
	});


	const container = this.questionContainer
	let gew = document.createElement("geneva-emotion-wheel");

	gew.emotions = emotions;
	gew["selection-callback"] = valueCallback;
	this.questionContainer.appendChild(gew);
	console.log(this.getAnswers());
	gew.addEventListener("change", (event) => {

		console.log(event);
		const name = event.target.name;
		const value = event.target.value;
		let chosen_id = choice_ids.find((c) => {
			return choices[c].Text === name;
		});
		const success = this.setChoiceAnswerValue(chosen_id, value, value);


	})

});

Qualtrics.SurveyEngine.addOnUnload(function() {
	/*Place your JavaScript here to run when the page is unloaded*/

});
