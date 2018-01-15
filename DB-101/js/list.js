/* <div class="game">
	<img src="" width="200px">
	<p></p>
</div> */

db.collection('games').get().then(function(querySnapshot){
	querySnapshot.forEach((doc) => {
		var tmpl =
		'<div class="user">' +
		'<img src="' + doc.data().photo + '" width="200px" alt="">' +
		'<p>' + doc.data().nombre + '</p>'
		'</div>';

	    $('#games').append(tmpl);
	});
});