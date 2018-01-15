/* <div class="user">
  <img src="" width="200px" alt="">
  <p>User</p>
</div> */

// agregar ejemplo get

db.collection('usuarios').doc('8mbAqWadYkFWPlL5b3Qw').set({
  nombre: 'User1Editado'
}, { merge: true })

db.collection('usuarios').get().then(function (querySnapshot) {
  console.log(querySnapshot)
  querySnapshot.forEach(function (doc) {

    var tmpl =
      '<div class="user">' +
        '<img src="' + doc.data().photo + '" width="200px" alt="">' +
        '<p>' + doc.data().nombre + '</p>'
      '</div>';

    $('#users').append(tmpl);
  });
})