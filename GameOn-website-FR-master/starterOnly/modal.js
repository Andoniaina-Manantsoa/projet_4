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
let errors = document.querySelectorAll('.text-error');

// Etape 2 - Cacher l'erreur
errors.forEach(function (error) {
  error.style.display = "none";
});

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

// Ajout des écouteurs une seule fois
document.getElementById("first").addEventListener("input", validateFirst);
document.getElementById("last").addEventListener("input", validateLast);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("brirthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);
document.getElementById("location").addEventListener("input", validateLocation);
document.getElementById("checkbox1").addEventListener("input", validatecheckbox1);

// Récupération et vérifier les champs à valider
// Vérification Prénom
function validateFirst() {
  const first = document.getElementById("first");
  const firstError = first.parentElement.querySelector(".text-error");
  if (first.value.trim().length < 2) {
    firstError.style.display = "inline";
    return false;
  } else {
    firstError.style.display = "none";
    return true;
  }
}

// Vérifier nom
function validateLast() {
  const last = document.getElementById("last");
  const lastError = last.parentElement.querySelector(".text-error");
  if (last.value.trim().length < 2) {
    lastError.style.display = "inline";
    return false;
  } else {
    lastError.style.display = "none";
    return true;
  }
}

//Vérifier email
function validateEmail() {
  const email = document.getElementById("email");
  const emailError = email.parentElement.querySelector(".text-error");
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.style.display = "inline";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

// Valider date de naissance
function validateBirthdate() {
  const birthdate = document.getElementById("birthdate").value;
  const birthdateError = birthdate.parentElement.querySelector('.text-error');
  if (!birthdate.value.trim()) {
    // Afficher le message d'erreur
    birthdateError.style.display = "inline";
    return false;
  }
  else {
    // Cacher le message d'erreur
    birthdateError.style.display = "none";
    return true;
  }
}

//Valider la quantité
function validateQuantity() {
  const quantity = document.getElementById("quantity");
  const quantityError = quantity.parentElement.querySelector('.text-error');
  if (!quantity.value.trim()) {
    // Afficher le message d'erreur
    quantityError.style.display = "inline";
    return false;
  }
  else {
    // Cacher le message d'erreur
    quantityError.style.display = "none";
    return true;
  }
}

//Validé la localisation
function validateLocation() {
  const selectedLocation = document.querySelectorAll('input[name="location"]:checked');
  const locationError = document.getElementsByClassName('.text-error');
  if (!selectedLocation) {
    locationError.style.display = "inline";
    return false
  } else {
    locationError.style.display = "none";
    return true
  }
}

//Validation checkbox
function validatecheckbox1() {
  const selectcheckbox1 = document.getElementById("checkbox1");
  const checkbox1Error = document.getElementsByClassName('.text-error');
  if (!selectcheckbox1.checked) {
    // Afficher le message d'erreur
    checkbox1Error.style.display = "inline";
    return false
  }
  else {
    // Cacher le message d'erreur
    checkbox1Error.style.display = "none";
    return true
  }
}

// Validation au submit
function validate() {
  let valid = true;
  if (!validateFirst()) valid = false;
  if (!validateLast()) valid = false;
  if (!validateEmail()) valid = false;
  if (!validateBirthdate()) valid = false;
  if (!validateQuantity()) valid = false;
  if (!validateLocation()) valid = false;
  if (!validatecheckbox1()) valid = false;
  return valid; // Si false, le submit est bloqué
}

// Masquer le formulaire et afficher la confirmation
document.getElementById("myTopnav").style.display = "none";
document.getElementById("myHero-section").style.display = "none";
document.getElementById("myFooter").style.display = "none";
document.getElementById("formModal").style.display = "none";
document.getElementById("confirmationModal").style.display = "block";

// Fermer le message de confirmation
function closeConfirmation() {
  document.getElementById("confirmationModal").style.display = "none";
  document.querySelector('form[name="reserve"]').reset(); // Réinitialise le formulaire

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "grid";
  document.getElementById("myFooter").style.display = "block";
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



