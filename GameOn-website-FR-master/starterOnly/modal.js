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

// Récupération et vérifier les champs à valider
function validate() {

  // Vérification Prénom
  const first = document.getElementById("first");
  const firstError = first.parentElement.querySelector('.text-error');
  first.addEventListener('input', () => {
    if (first.value.trim().length < 2) {
      firstError.style.display = "inline";
    } else {
      firstError.style.display = "none";
    }
  });

  // Vérification Nom
  const last = document.getElementById("last");
  const lastError = last.parentElement.querySelector('.text-error');
  last.addEventListener('input', () => {
    if (last.value.trim().length < 2) {
      lastError.style.display = "inline";
    } else {
      lastError.style.display = "none";
    }
  })

  // Vérification email
  const email = document.getElementById("email");
  const emailError = email.parentElement.querySelector('.text-error');
  let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  email.addEventListener('input', () => {
    if (!emailPattern.test(email.value.trim())) {
      // Afficher le message d'erreur
      emailError.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      emailError.style.display = "none";
    }
  })

  // Valider date de naissance
  const birthdate = document.getElementById("birthdate").value;
  const birthdateError = birthdate.parentElement.querySelector('.text-error');
  birthdate.addEventListener('input', () => {
    if (!birthdate.value.trim()) {
      // Afficher le message d'erreur
      birthdateError.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      birthdateError.style.display = "none";
    }
  })

  //Valider la quantité
  const quantity = document.getElementById("quantity");
  const quantityError = quantity.parentElement.querySelector('.text-error');
  quantity.addEventListener('input', () => {
    if (!quantity.value.trim()) {
      // Afficher le message d'erreur
      quantityError.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      quantityError.style.display = "none";
    }
  })

  //Validé la localisation
  const locationRadios = document.querySelectorAll('input[name="location"]');
  locationRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const checked = document.querySelector('input[name="location"]:checked');
      const locationError = radio.closest('.form-group').querySelector('.text-error');
      if (!checked) {
        locationError.style.display = "inline";
      } else {
        locationError.style.display = "none";
      }
    });
  });

  //Validation checkbox
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox1Error = checkbox1.parentElement.querySelector('.text-error');
  checkbox1.addEventListener('input', () => {
    if (!checkbox1.checked) {
      // Afficher le message d'erreur
      checkbox1Error.style.display = "inline";
    }
    else {
      // Cacher le message d'erreur
      checkbox1Error.style.display = "none";
    }
  })
}

/*if (!isValid) {
  document.getElementById("formModal").style.display = "block";
  event.preventDefault(); // Empêche l'envoi du formulaire
} else {
  // Masquer le formulaire et afficher la confirmation
  document.getElementById("formModal").style.display = "none";
  document.getElementById("confirmationModal").style.display = "block";
  event.preventDefault(); // Empêche de recharger la page
}
}*/

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



