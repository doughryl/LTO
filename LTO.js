const classificationCheckbox = document.getElementById("classification");
const classificationOptions = document.getElementById("classificationOptions");

classificationCheckbox.addEventListener("change", function () {
  if (classificationCheckbox.checked) {
    classificationOptions.style.display = "block";
    classificationOptions.style.marginLeft = "22px";
  } else {
    classificationOptions.style.display = "none";
  }
});

const revisionCheckbox = document.getElementById("revision");
const revisionOptions = document.getElementById("revisionOptions");

revisionCheckbox.addEventListener("change", function () {
  if (revisionCheckbox.checked) {
    revisionOptions.style.display = "block";
    revisionOptions.style.marginLeft = "22px";
  } else {
    revisionOptions.style.display = "none";
  }
});

const foreignerRadio = document.getElementById("foreigner");
const nationalityInput = document.getElementById("nationalityInput");

function toggleNationalityInput() {
  if (foreignerRadio.checked) {
    nationalityInput.style.display = "block";
  } else {
    nationalityInput.style.display = "none"; 
  }
}

foreignerRadio.addEventListener("change", toggleNationalityInput);

toggleNationalityInput();

const filipinoRadio = document.getElementById("filipino");
filipinoRadio.addEventListener("change", function() {
  if (filipinoRadio.checked) {
    nationalityInput.style.display = "none"; 
  }
});

const hairSelect = document.getElementById("hair");
const hairOther = document.getElementById("hairOther");
const hairSpecifyInput = document.getElementById("hairSpecify");

hairSelect.addEventListener("change", function () {
  if (hairSelect.value === "OTHERS") {
    hairOther.style.display = "block";
  } else {
    hairOther.style.display = "none";
    hairSpecifyInput.value = "";
  }
});

const eyeSelect = document.getElementById("eyeColor");
const eyeOther = document.getElementById("eyeOther");
const eyeSpecifyInput = document.getElementById("eyeSpecify");

eyeSelect.addEventListener("change", function () {
  if (eyeSelect.value === "OTHERS") {
    eyeOther.style.display = "block";
  } else {
    eyeOther.style.display = "none";
    eyeSpecifyInput.value = "";
  }
});

const provinceSelect = document.getElementById("provinceSelect");
const citySelect = document.getElementById("citySelect");
const provinceBirthplaceSelect = document.getElementById("provinceBirthplace");
const cityBirthplaceSelect = document.getElementById("cityBirthplace");
const provinceEmployerSelect = document.getElementById("provinceEmployer");
const cityEmployerSelect = document.getElementById("cityEmployer");

const citiesByProvince = {
  "Batangas": ["Agoncillo", "Alitagtag", "Balayan", "Balete", "Batangas City", "Bauan", "Calaca", "Calatagan", "Cuenca", "Ibaan", "Laurel", 
  "Lemery", "Lipa", "Lobo", "Mabini", "Malvar", "Mataasnakahoy", "Nasugbu", "Padre Garcia", "Rosorio", "San Jose", "San Juan", "San Luis", 
  "San Nicolas", "San Pascual", "San Teresita", "Santo Tomas", "Taal", "Talisay", "Tanauan", "Taysan", "Tingloy", "Tuy"],

  "Cavite": ["Amadeo", "Alfonso", "Bacoor", "Carmona", "Cavite City", "Dasmariñas City", "General Trias", "General Emilio Aguinaldo", 
  "General Mariano Alvares", "Imus", "Indang",   "Kawit",  "Magallanes", "Maragondon", "Mendez", "Naic", "Novelete", "Rosario","Tagaytay", 
  "Tanza", "Ternate", "Trece Martires", "San Pedro", "Silang"],
  
  "Laguna": ["Alaminos", "Bay", "Biñan", "Cabuyao", "Calamba", "Calauan", "Cavinti", "Famy", "Kalayaan", "Liliw", "Los Baños", "Luisiana", 
  "Lumban", "Mabitac", "Magdalena", "Majayjay", "Nagcarlan", "Paete", "Pagsanjan", "Pakil", "Pangil", "Pila", "Rizal", "San Pablo", "San Pedro", "Santa Cruz", "Santa Maria", "Santa Rosa", "Siniloan",  "Victoria"],
  
  "Quezon": ["Agdangan", "Alabat", "Atimonan", "Buenavista", "Burdeos", "Calauag", "Candelaria", "Catanauan", "Dolores", 
  "General Luna", "General Nakar", "Guinayangan", "Gumaca", "Infanta", "Jomalig", "Lopez", "Lucban", "Lucena", "Macalelon",
  "Mauban", "Mulanay", "Padre Burgos", "Pagbilao", "Panukulan", "Patnanungan", "Perez", "Pitogo", "Plaridel", "Polillo", "Quezon",
  "Real", "Sampaloc", "San Andres", "San Antonio", "San Francisco", "San Narciso", "Sariaya", "Tagkawayan", "Tayabas", "Tiaong", "Unisan"],
  
  "Rizal":  ["Angono", "Antipolo", "Baras", "Binangonan", "Cainta", "Cardona", "Jalajala", "Morong", "Pililla", "Rodriguez", "San Mateo", 
  "Tanay", "Taytay",  "Teresa"],
 
  "Metropolitan Manila": ["Caloocan", "Las Pinas", "Makati", "Malabon", "Mandaluyong", "Manila", "Marikina", "Muntinlupa", "Navotas", "Parañaque", 
  "Pasay", "Pasig", "Pateros", "Quezon City", "San Juan", "Taguig", "Valenzuela"]
};

function populateCities() {
  const selectedProvince = provinceSelect.value;
  const cities = citiesByProvince[selectedProvince] || [];

  citySelect.innerHTML = "";

  if (cities.length === 0) {
    citySelect.innerHTML = '<option value="">Select City</option>';
  } else {
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

function populateBirthplaceCities() {
  const selectedProvince = provinceBirthplaceSelect.value;
  const cities = citiesByProvince[selectedProvince] || [];

  cityBirthplaceSelect.innerHTML = "";

  if (cities.length === 0) {
    cityBirthplaceSelect.innerHTML = '<option value="">Select City</option>';
  } else {
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityBirthplaceSelect.appendChild(option);
    });
  }
}

function populateEmployerCities() {
  const selectedProvince = provinceEmployerSelect.value;
  const cities = citiesByProvince[selectedProvince] || [];

  cityEmployerSelect.innerHTML = "";

  if (cities.length === 0) {
    cityEmployerSelect.innerHTML = '<option value="">Select City</option>';
  } else {
    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityEmployerSelect.appendChild(option);
    });
  }
}

provinceSelect.addEventListener("change", populateCities);
provinceBirthplaceSelect.addEventListener("change", populateBirthplaceCities);
provinceEmployerSelect.addEventListener("change", populateEmployerCities);

populateCities();
populateBirthplaceCities();
populateEmployerCities();

const civilStatusSelect = document.getElementById("civilStatus");
const spouseNameSection = document.querySelector(".spouseName");

function toggleSpouseNameSection() {
  const selectedCivilStatus = civilStatusSelect.value;

  if (selectedCivilStatus === "MARRIED") {
    spouseNameSection.style.display = "flex"; 
    spouseNameSection.style.alignItems = "center"; 
  } 
  else if (selectedCivilStatus ===  "WIDOW/ER") {
    spouseNameSection.style.display = "flex"; 
    spouseNameSection.style.alignItems = "center"; 
  }
  else {
    spouseNameSection.style.display = "none"; 
  }
}

civilStatusSelect.addEventListener("change", toggleSpouseNameSection);

toggleSpouseNameSection();