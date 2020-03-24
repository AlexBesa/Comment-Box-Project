const comments = [];
let idRandom = Math.floor(Math.random() * 10 + 1);

const btn = document.querySelector("#commentBtn");
const input = document.querySelector("#commentInput");
const commentList = document.querySelector("#commentList");

function addPhotoUser() {
	const photo = document.createElement("img");

	photo.setAttribute("src", "userphoto.jpg");
	photo.setAttribute("width", "35");
	photo.setAttribute("height", "45");
	photo.setAttribute("alt", "User Photo");
	document.body.appendChild(photo);
	return photo;
}

function addEmailUser(emailAdress) {
	const emailUser = document.createElement("h3");
	emailUser.innerText = emailAdress;
	return emailUser;
}

function addParagraph(text) {
	const newP = document.createElement("p");
	newP.innerText = text;
	return newP;
}

btn.addEventListener("click", function() {
	comments.push({
		id: idRandom,
		name: "alex.besa@gmail.com",
		msg: input.value
	});
	idRandom++;
    displayComments(comments, commentList);
	input.value = "";
});

function displayComments(comments, containerNode) {
	function createCommentNode(comment) {
		const containerBox = document.createElement("div");

		const userPhoto = addPhotoUser();
		const emailAdress = addEmailUser(comment.name);
		const p = addParagraph(comment.msg);
		const deleteBtn = createDeleteButton(comment.id);

		containerBox.appendChild(userPhoto);
		containerBox.appendChild(emailAdress);
		containerBox.appendChild(p);
		containerBox.appendChild(deleteBtn);

		return containerBox;
	}
	commentList.innerHTML = "";

	for (let idx = 0; idx < comments.length; idx++) {
		const comment = comments[idx];
		const commentNode = createCommentNode(comment);
		containerNode.appendChild(commentNode);
	}
}

function createDeleteButton(buttonID) {
	const btnDelete = document.createElement("button");
	btnDelete.setAttribute("type", "button");
	btnDelete.setAttribute("data-id", buttonID);

	btnDelete.textContent = "Delete";
	document.body.appendChild(btnDelete);
	btnDelete.onclick = removeParent;

	return btnDelete;
}

function removeParent(event) {
	let buttonID = event.target.getAttribute('data-id');	
	let indexElement = 0;
	for (let i = 0; i < comments.length; i++) {
		if (comments[i].id === buttonID) {
			indexElement = i;
		}
	}
	comments.splice(indexElement, 1);	
	displayComments(comments, commentList);
}

