let plus = document.querySelector(".plus");
let workExperince = document.querySelector(".work-experince");
let skills = document.querySelector(".skills");
let skillsPlus = document.querySelector(".skill-plus");
let achievementPlus = document.querySelector(".achievement-plus");
let achievements = document.querySelector(".achievement");
let achievementCount = 0;
let skillCount = 0;
let count = 0;
let form = document.querySelector(".main_form");

function handlePlus(event){
	++count;
	let workForm = document.createElement("form");
	workForm.setAttribute("id",count);
	workForm.classList.add("work-form");
	let companyDiv = document.createElement("div");
	let compnayLabel = document.createElement("label");
	compnayLabel.innerText = "Company Name";
	let companyInput = document.createElement("input");
	companyInput.setAttribute("data-compnay-id",count);
	console.log(companyInput);
	companyInput.setAttribute("name","company_name");
	companyDiv.classList.add("flex-col");
	companyDiv.append(compnayLabel,companyInput);

	let gridColTwo = document.createElement("div");
	gridColTwo.classList.add("grid-col-two");
	let designationDiv = document.createElement("div")
	designationDiv.classList.add("flex-col");
	let designationLabel = document.createElement("label");
	designationLabel.innerText = "Designation";
	let designationInput = document.createElement("input");
	designationInput.setAttribute("data-designation-id", count);
	console.log(designationInput);
	designationInput.setAttribute("name","designation");
	designationDiv.append(designationLabel,designationInput);
	let timelineDiv = document.createElement("div");
	timelineDiv.classList.add("flex-col");
	let timelineLabel = document.createElement("label");
	timelineLabel.innerText = "Timeline"
	let timelineInput = document.createElement("input");
	timelineInput.setAttribute("data-timeline-id", count);
	timelineInput.setAttribute("name","timeline")
	console.log(timelineInput);
	timelineDiv.append(timelineLabel,timelineInput);
	gridColTwo.append(designationDiv,timelineDiv);

	let textAreaDiv = document.createElement("div");
	textAreaDiv.classList.add("flex-col");
	let descriptionLabel = document.createElement("label");
	descriptionLabel.innerText = "Description"
	let textArea = document.createElement("textArea");
	textArea.setAttribute("data-text-area-id", count);
	textArea.setAttribute("name","description")
	console.log(textArea);
	textArea.setAttribute("col","30");
	textArea.setAttribute("row","10");
	textArea.setAttribute("placeholder","Description")
	// textArea.setAttribute("type","textArea")
	textAreaDiv.append(descriptionLabel,textArea);
	workForm.append(companyDiv,gridColTwo,textAreaDiv);
	console.log(workForm);
	workExperince.append(workForm);

}

function handleSkills(event){
	console.log("test");
	++skillCount;
	let skillForm = document.createElement("form");
	skillForm.setAttribute("data-skill-id",skillCount);
	// skillForm.setAttribute("name","skill-form");
	skillForm.classList.add("skill-form")
	let skilldiv = document.createElement("div");
	skilldiv.classList.add("flex-col");
	let labelSkill = document.createElement("label");
	labelSkill.innerText = "Skill Name";
	let inputSkill = document.createElement("input");
	inputSkill.setAttribute("name", "skills");
	inputSkill.setAttribute("data-skill-id", skillCount);
	console.log(inputSkill);
	skilldiv.append(labelSkill,inputSkill);
	let skillDescriptionDiv = document.createElement("div");
	skillDescriptionDiv.classList.add("flex-col");
	let skillDescriptionLabel = document.createElement("label");
	skillDescriptionLabel.innerText = "Description";
	let skillDescriptionInput = document.createElement("textArea");
	skillDescriptionInput.setAttribute("data-skill-description-id",skillCount)
	skillDescriptionInput.setAttribute("name","skill_description");
	skillDescriptionInput.setAttribute("col","30");
	skillDescriptionInput.setAttribute("row","10");
	skillDescriptionInput.setAttribute("placeholder","Description");
	console.log(skillDescriptionInput);
	skillDescriptionDiv.append(skillDescriptionLabel,skillDescriptionInput);
	skillForm.append(skilldiv,skillDescriptionDiv);
	console.log(skillForm);
	skills.append(skillForm);

}

function handleAchivement(event){
	++achievementCount;
	let achievementForm = document.createElement("form");
	achievementForm.setAttribute("data-achivement-id",achievementCount);
	achievementForm.classList.add("achivement-form")
	let achivementdiv = document.createElement("div");
	achivementdiv.classList.add("flex-col");
	let labelAchivement = document.createElement("label");
	labelAchivement.innerText = "Achivement";
	let inputAchivement = document.createElement("input");
	inputAchivement.setAttribute("name", "achivemnent");
	inputAchivement.setAttribute("data-achivement-id",achievementCount);

	console.log(inputAchivement);
	achivementdiv.append(labelAchivement,inputAchivement);
	let achivementDescriptionDiv = document.createElement("div");
	achivementDescriptionDiv.classList.add("flex-col");
	let achivementDescriptionLabel = document.createElement("label");
	achivementDescriptionLabel.innerText = "Description";
	let achivementDescriptionInput = document.createElement("textArea");
	achivementDescriptionInput.setAttribute("data-achivement-description-id",achievementCount)
	achivementDescriptionInput.setAttribute("name","achivement_description");
	achivementDescriptionInput.setAttribute("col","30");
	achivementDescriptionInput.setAttribute("row","10");
	achivementDescriptionInput.setAttribute("placeholder","Description");
	console.log(achivementDescriptionInput);
	achivementDescriptionDiv.append(achivementDescriptionLabel,achivementDescriptionInput);
	achievementForm.append(achivementdiv,achivementDescriptionDiv);
	console.log(achievementForm);
	achievements.append(achievementForm);

}

function handleForm(event){
	console.log("test");
	event.preventDefault();
	localStorage.clear();
	let firstName = document.querySelector(".first_name").value;
	let secondName = document.querySelector(".middle_name").value;
	let lastName = document.querySelector(".last_name").value;
	let city = document.querySelector(".city").value;
	let state = document.querySelector(".state").value;
	let zipCode = document.querySelector(".zip-code").value;
	let phoneNUmber = document.querySelector(".phone-number").value;
	let email = document.querySelector(".email").value;
	let pg = document.querySelector(".pg").value;
	let pgDegree = document.querySelector(".pg-degree").value;
	let pgTimeline =document.querySelector(".pg-timeline").value;
	let ug = document.querySelector(".ug").value;
	let ugDegree = document.querySelector(".ug-degree").value;
	let ugTimeline =document.querySelector(".ug-timeline").value;
	let twelthCollegeName = document.querySelector(".twelth-college").value;
	let twelthStream = document.querySelector(".twelth-stream").value;
	let twelthTimeline = document.querySelector(".twelth-timeline").value;
	let tenthSchoolName = document.querySelector(".school_name").value;
	let tenthBoard = document.querySelector(".board").value;
	let tenthTimeline = document.querySelector(".tenth-timeline").value;
	let about = document.querySelector(".about").value;
	let workFormChild = document.querySelectorAll(".work-form");

	const workMapFormChild = [...workFormChild].map(elem => {
		const formObj = {};
		formObj.company_name = elem.elements.company_name.value;
		formObj.designation = elem.elements.designation.value;
		formObj.timeline = elem.elements.timeline.value;
		formObj.description = elem.elements.description.value;
		return formObj;
	})
	console.log(workMapFormChild);

	let skillFormChild = document.querySelectorAll(".skill-form");
	const skillMapFormChild = [...skillFormChild].map(elem => {
		const formObj = {};
		formObj.skill = elem.elements.skills.value;
		formObj.description = elem.elements.skill_description.value;
		return formObj;
	})
	console.log(skillMapFormChild);

	let achivementFormChild = document.querySelectorAll(".achivement-form");
	const achivementMapFormChild = [...achivementFormChild].map(elem => {
		const formObj = {};
		formObj.achivement = elem.elements.achivemnent.value;
		formObj.description = elem.elements.achivement_description.value;
		return formObj;
	})
	console.log(achivementMapFormChild);
	localStorage.setItem("firstName",`${firstName}`);
	localStorage.setItem("about",about);
	localStorage.setItem("secondName",`${secondName}`);
	localStorage.setItem("lastName",`${lastName}`);
	localStorage.setItem("city",`${city}`);
	localStorage.setItem("state",`${state}`);
	localStorage.setItem("zipCode", `${zipCode}`);
	localStorage.setItem("phoneNumber", `${phoneNUmber}`);
	localStorage.setItem("email",`${email}`);
	localStorage.setItem("pg",`${pg}`);
	localStorage.setItem("pgDegree",`${pgDegree}`);
	localStorage.setItem("pgTimeline",`${pgTimeline}`);
	localStorage.setItem("ug",`${ug}`);
	localStorage.setItem("ugDegree",`${ugDegree}`);
	localStorage.setItem("ugTimeline",`${ugTimeline}`);
	localStorage.setItem("twelthCollegeName",`${twelthCollegeName}`);
	localStorage.setItem("twelthStream",`${twelthStream}`);
	localStorage.setItem("twelthTimeline",`${twelthTimeline}`);
	localStorage.setItem("tenthSchoolName",`${tenthSchoolName}`);
	localStorage.setItem("tenthBoard",`${tenthBoard}`);
	localStorage.setItem("tenthTimeline",`${tenthTimeline}`);
	localStorage.setItem("workExperience",JSON.stringify(workMapFormChild) );
	localStorage.setItem("achivements",JSON.stringify(achivementMapFormChild) );
	localStorage.setItem("skills",JSON.stringify(skillMapFormChild) );
}

plus.addEventListener("click", handlePlus);
skillsPlus.addEventListener("click", handleSkills);
achievementPlus.addEventListener("click", handleAchivement);
form.addEventListener("submit", handleForm);