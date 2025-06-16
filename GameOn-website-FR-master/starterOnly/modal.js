function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

  //Masquer la page d'acceuil et afficher le formulaire
  document.getElementById("myTopnav").style.display = "none";
  document.getElementById("myHero-section").style.display = "none";
  document.getElementById("myFooter").style.display = "none";
  document.getElementById("formModal").style.display = "block";
}

function validate() {
  // Récupération des champs à valider
  const first = document.getElementById("first").value.trim();
  const last = document.getElementById("last").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const locationChecked = document.querySelector('input[name="location"]:checked');
  const termsAccepted = document.getElementById("checkbox1").checked;

  // Vérification simple
  if (first.length < 2 || last.length < 2 || email === "" || !birthdate || quantity === "" || !locationChecked || !termsAccepted) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return false; // Empêche l'envoi
  }

  // Masquer le formulaire et afficher le message
  document.getElementById("formModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "block";

  return false; // Empêche le rechargement de la page
}

// Fermer le message de confirmation
function closeConfirmation() {
  document.getElementById("confirmationModal").style.display = "none";
  document.querySelector('form[name="reserve"]').reset(); // Réinitialise le formulaire

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "grid";
  document.getElementById("myFooter").style.display = "block";

  return false; // Empêche le rechargement de la page
}

//Fermer les modal avec close
function closeForm() {
  document.getElementById("formModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "none";
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "grid";
  document.getElementById("myFooter").style.display = "block";
  document.querySelector('form[name="reserve"]').reset();

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "grid";
  document.getElementById("myFooter").style.display = "block";

  return false; // Empêche le rechargement de la page
}



