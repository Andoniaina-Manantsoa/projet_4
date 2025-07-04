function adjustBground() {
  const topnav = document.getElementById("myTopnav");
  const bground = document.querySelector(".bground");
  const navHeight = topnav.offsetHeight;
  bground.style.top = navHeight + "px";
  bground.style.height = `calc(100% - ${navHeight}px)`;
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  adjustBground(); // update bground position after toggling nav
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const span = document.getElementsByClassName("close")[0];
const topnav = document.getElementById("myTopnav");
const heroSection = document.getElementById("myHero-section");
const footer = document.getElementById("myFooter");
const formModal = document.getElementById("formModal");
let errors = document.querySelectorAll('.text-error');

// Etape 2 - Cacher l'erreur
errors.forEach(function (error) {
  error.style.display = "none";
});

// Lorsque l'utilisateur clique sur le bouton, ouvrez la fenêtre modale
modalBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    formModal.style.display = "block";

    const isMobile = window.innerWidth <= 768;
    topnav.style.display = isMobile ? "block" : "none";

    heroSection.style.display = "none";
    footer.style.display = "none";
  });
});

// Lorsque l'utilisateur clique sur <span> (x), fermez la fenêtre modale
span.onclick = function () {
  formModal.style.display = "none";

  // Réinitialiser le formulaire
  const form = document.querySelector('form[name="reserve"]');
  form.reset();

  // Cacher les messages d'erreur et retirer les styles d'erreur
  errors.forEach(function (error) {
    error.style.display = "none";
  });

  // Retirer la classe 'input-error' de tous les champs
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(function (input) {
    input.classList.remove('input-error');
  });

  // Restaurer les sections
  topnav.style.display = "block";
  heroSection.style.display = "";
  footer.style.display = "block";
}

// Ajout des écouteurs une seule fois
document.getElementById("first").addEventListener("input", () => validateField("first"));
document.getElementById("last").addEventListener("input", () => validateField("last"));
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("birthdate").addEventListener("input", validateBirthdate);
document.getElementById("quantity").addEventListener("input", validateQuantity);

// Récupération et vérifier les champs à valider
// Vérification Prénom et nom
function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldError = field.parentElement.querySelector(".text-error");
  if (field.value.trim().length < 2) {
    field.classList.add('input-error');
    fieldError.style.display = "inline";
    return false;
  } else {
    field.classList.remove('input-error');
    fieldError.style.display = "none";
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
  if (!validateField("first")) valid = false;
  if (!validateField("last")) valid = false;
  if (!validateEmail()) valid = false;
  if (!validateBirthdate()) valid = false;
  if (!validateQuantity()) valid = false;
  if (!validateLocation()) valid = false;
  if (!validatecheckbox1()) valid = false;
  return valid; // Si false, le submit est bloqué
}

// Fermer le message de confirmation
/*function close() {
  document.getElementById("confirmationModal").style.display = "none";
  document.getElementById("formModal").style.display = "none";
  document.querySelector('form[name="reserve"]').reset(); // Réinitialise le formulaire

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "";
  document.getElementById("myFooter").style.display = "block";
}
document.getElementById("closeConfirmation").addEventListener("click", close);
document.querySelector("#confirmationModal .btn-submit").addEventListener("click", close);*/


/* Prise en charge de la modal *********************************************************/

const closeModalIcon = document.getElementById("closeModal");
closeModalIcon.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

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

  //Masquer la page d'acceuil et afficher le formulaire
  document.getElementById("myHero-section").style.display = "none";
  document.getElementById("myFooter").style.display = "none";
  document.getElementById("formModal").style.display = "block";
}

//Fermer les modal avec close
function closeModal() {
  document.getElementById("formModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "none";
  document.querySelector('form[name="reserve"]').reset();

  // Réafficher le page d'acceuil
  document.getElementById("myTopnav").style.display = "block";
  document.getElementById("myHero-section").style.display = "";
  document.getElementById("myFooter").style.display = "block";
  // Empêche le rechargement de la page
}

function submitForm() {
  if (validate()) {
    // Masquer le formulaire
    document.getElementById("formModal").style.display = "none";

    // Réinitialiser le formulaire
    reserveForm.reset();

    // Afficher le modal de confirmation
    document.getElementById("confirmationModal").style.display = "block";
  }
}






