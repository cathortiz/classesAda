var el = document.getElementById('new-user')

el.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var storageRef = firebase.storage().ref();
  var file = document.getElementById('pic').files[0];

  var imgRef = storageRef.child(file.name);
  imgRef.put(file)
    .then(function (doc) {
      var usersRef = db.collection("usuarios");
      var newUser = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        photo: doc.downloadURL
      };

      usersRef.add(newUser)
      .then(function (userRef) {
        var tmpl =
          '<div class="user">' +
            '<img src="' + newUser.photo + '" width="200px" alt="">' +
            '<p>' + newUser.nombre + '</p>'
          '</div>';

        $('#users').append(tmpl);
      })
      .catch(function () {
        console.log('algo no funco')
      })
    })
})