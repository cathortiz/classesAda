var newGame = document.getElementById('newGame');

newGame.addEventListener('submit', function(e){
	e.preventDefault();
	var pic = document.getElementById('pic').files[0];
	console.log(pic.files);

	// Create a root reference
	var storageRef = firebase.storage().ref();
	var pic = document.getElementById('pic').files[0];
	// Create a reference to 'mountains.jpg'
	var imgRef = storageRef.child(pic.name);
	imgRef.put(pic)
	.then(function(img) {
	  console.log(img.downloadURL);
	});

});