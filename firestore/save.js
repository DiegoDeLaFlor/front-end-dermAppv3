function save(){
  db.collection("users").add({
    firstname: "Ada",
    lastname: "Lovelace",
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
