/* Prise en charge de la modal *********************************************************/

const closeModalIcon = document.getElementById("closeModal");
closeModalIcon.addEventListener("click", closeModal);

const modal = document.querySelector("#modal");
const form = document.querySelector("form[name='reserve']");
const confirmation = document.querySelector("#confirmation");

const reserveForm = document.querySelector("form[name='reserve']");

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let errors = document.querySelectorAll('.text-error');

closeConfirmation.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modal.style.display = "block";
  form.style.display = "block";
  //modalbg.style.display = "block";

  /*// Afficher l'en-tête avec la formulaire sur mobile
  // Détecte la largeur d'écran
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Sur mobile : garder le topnav visible
    document.getElementById("myTopnav").style.display = "block";
  } else {
    // Sur desktop : cacher le topnav
    document.getElementById("myTopnav").style.display = "none";
  }

  //Masquer la page d'acceuil et afficher le formulaire
  document.getElementById("myHero-section").style.display = "none";
  document.getElementById("myFooter").style.display = "none";
  document.getElementById("formModal").style.display = "block";*/
}

//Fermer les modal avec close
function closeModal() {
  modal.style.display = "none";
  confirmation.style.display = "none";
  //document.getElementById("formModal").style.display = "none";

  /* document.getElementById("formModal").style.display = "none";
   document.getElementById("confirmationModal").style.display = "none";
   document.querySelector('form[name="reserve"]').reset();
 
   // Réafficher le page d'acceuil
   document.getElementById("myTopnav").style.display = "block";
   document.getElementById("myHero-section").style.display = "";
   document.getElementById("myFooter").style.display = "block";
   // Empêche le rechargement de la page
   */
}


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

/**************************************************************************************/

/*
function adjustBground() {
  const topnav = document.getElementById("myTopnav");
  const bground = document.querySelector(".bground");
  const navHeight = topnav.offsetHeight;
  bground.style.top = navHeight + "px";
  bground.style.height = `calc(100% - ${navHeight}px)`;
}
*/
/*function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  //adjustBground(); // update bground position after toggling nav
}*/

// Etape 2 - Cacher l'erreur
errors.forEach(function (error) {
  error.style.display = "none";
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Ajout des écouteurs une seule fois
document.getElementById("first").addEventListener("input", validateFirst);
document.getElementById("last").addEventListener("input", validateLast);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);

// Récupération et vérifier les champs à valider
// Vérification Prénom
function validateFirst() {
  const first = document.getElementById("first");
  const firstError = first.parentElement.querySelector(".text-error");
  if (first.value.trim().length < 2) {
    first.classList.add('input-error');
    firstError.style.display = "inline";
    return false;
  } else {
    first.classList.remove('input-error');
    firstError.style.display = "none";
    return true;
  }
}

// Vérifier nom
function validateLast() {
  const last = document.getElementById("last");
  const lastError = last.parentElement.querySelector(".text-error");
  if (last.value.trim().length < 2) {
    last.classList.add('input-error');
    lastError.style.display = "inline";
    return false;
  } else {
    last.classList.remove('input-error');
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

/*
// Fermer le message de confirmation
function closeConfirmation() {
  document.getElementById("confirmationModal").style.display = "none";
  document.querySelector('form[name="reserve"]').reset(); // Réinitialise le formulaire

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "";
  document.getElementById("myFooter").style.display = "block";
}
*/

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  const mainNavbar = document.querySelector(".main-navbar");
  //mainNavbar.classList.toggle("responsive");
  menuButton.classList.toggle("active");
  mainNavbar.classList.toggle("active");
  //operateur ternaire pour gérer l'affichage du menu en mobile
  //mainNavbar.style.display = mainNavbar.style.display === "none" ? "block" : "none";
}


