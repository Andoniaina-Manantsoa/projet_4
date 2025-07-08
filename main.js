function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Prise en charge de la modal */
const topnav = document.querySelector("#myTopnav")
const heroSection = document.querySelector("#myHero-section")
const modal = document.querySelector("#modal");
const form = document.querySelector("form[name='reserve']");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

//Afficher les menus lors du clique sur l'icon fa-bars
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mainNavbar = document.querySelector(".main-navbar");

  menuButton.addEventListener("click", () => {
    mainNavbar.classList.toggle("active");
  });
});

// launch modal form
function launchModal() {
  modal.style.display = "block";
  form.style.display = "block";

  // Afficher l'en-tête avec la formulaire sur mobile
  // Détecte la largeur d'écran
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Sur mobile : garder le topnav visible
    document.getElementById("myTopnav").style.display = "block";
  } else {
    // Sur desktop : cacher le topnav
    document.getElementById("myTopnav").style.display = "none";
  }

  //Masquer la page d'acceuil
  document.getElementById("myHero-section").style.display = "none";
  document.getElementById("myFooter").style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Affichage du page d'acceuil au rafraichissement
window.addEventListener("DOMContentLoaded", () => {
  // Cacher la modal au chargement
  modal.style.display = "none";
  form.style.display = "block"; // Assure que le formulaire est prêt mais caché
  confirmation.style.display = "none";

  // Réafficher la page d'accueil
  document.getElementById("myHero-section").style.display = "";
  document.getElementById("myFooter").style.display = "block";
  topnav.style.display = "block";
});

// Etape 2 - Cacher l'erreur
let errors = document.querySelectorAll('.text-error');
errors.forEach(function (error) {
  error.style.display = "none";
});

// Ajout des écouteurs une seule fois
document.getElementById("first").addEventListener("input", () => validateInput("first"));
document.getElementById("last").addEventListener("input", () => validateInput("last"));
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);

// Récupération et vérifier les champs à valider
// Vérification Prénom et nom
function validateInput(id) {
  const input = document.getElementById(id);
  const error = input.parentElement.querySelector(".text-error");
  if (input.value.trim().length < 2) {
    input.classList.add('input-error');
    error.style.display = "inline";
    return false;
  } else {
    input.classList.remove('input-error');
    error.style.display = "none";
    return true;
  }
}

//Vérifier email
function validateEmail() {
  const email = document.getElementById("email");
  const emailError = email.parentElement.querySelector(".text-error");
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value.trim())) {
    email.classList.add('input-error');
    emailError.style.display = "inline";
    return false;
  } else {
    email.classList.remove('input-error');
    emailError.style.display = "none";
    return true;
  }
}

// Valider date de naissance
function validateBirthdate() {
  const birthdate = document.getElementById("birthdate");
  const birthdateError = birthdate.parentElement.querySelector('.text-error');
  if (!birthdate.value.trim()) {
    // Afficher le message d'erreur
    birthdate.classList.add('input-error');
    birthdateError.style.display = "inline";
    return false;
  }
  else {
    // Cacher le message d'erreur
    birthdate.classList.remove('input-error');
    birthdateError.style.display = "none";
    return true;
  }
}

//Valider la quantité
function validateQuantity() {
  const quantity = document.getElementById("quantity");
  const quantityError = quantity.parentElement.querySelector('.text-error');
  if (quantity.value < 0 || quantity.value > 99 || quantity.value === "") {
    quantity.classList.add('input-error');
    quantityError.style.display = "inline";
    return false;
  }
  else {
    // Cacher le message d'erreur
    quantity.classList.remove('input-error');
    quantityError.style.display = "none";
    return true;
  }
}

//Valider la localisation
function validateLocation() {
  const selectLocation = document.querySelector('input[name="location"]:checked');
  const locationError = document.getElementById('location-error');
  if (!selectLocation) {
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
  const checkbox1Error = document.getElementById('checkbox1-error');
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

document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.querySelector(".btn-submit");
  const form = document.querySelector("form[name='reserve']");
  const reserveForm = document.querySelector("form[name='reserve']");
  const confirmation = document.querySelector("#confirmation");

  submitBtn.addEventListener("click", submitForm);

  function submitForm() {
    if (validate()) {
      // Masquer le formulaire
      form.style.display = "none";
      // Réinitialiser le formulaire
      reserveForm.reset();
      // Afficher le modal de confirmation
      confirmation.style.display = "block";
    }
  }

  // Validation au submit
  function validate() {
    let valid = true;
    if (!validateInput("first")) valid = false;
    if (!validateInput("last")) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateBirthdate()) valid = false;
    if (!validateQuantity()) valid = false;
    if (!validateLocation()) valid = false;
    if (!validatecheckbox1()) valid = false;
    return valid; // Si false, le submit est bloqué
  }
});

//Fermer les modal avec close
function closeModal() {
  modal.style.display = "none";
  confirmation.style.display = "none";

  // Réafficher le page d'acceuil
  topnav.style.display = "block"
  heroSection.style.display = "";
  document.getElementById("myFooter").style.display = "block";
}

// Fermer le message de confirmation
/*form.reset(); // Réinitialise le formulaire*/
document.getElementById("closeModal").addEventListener("click", closeModal);









