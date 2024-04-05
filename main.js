var symptoms = [];

// Function to add symptom to the array
function addSymptom() { // Corrected function name
    var symptomInput = document.getElementById('symptomInput');
    var symptom = symptomInput.value.trim(); // Remove whitespace from the input

    if (symptom !== '') {
        symptoms.push(symptom);
        displaySymptoms(); // Corrected function name
        symptomInput.value = ''; // Clear input field
    }
}

function displaySymptoms() { // Corrected function name
    var symptomListDiv = document.getElementById('symptomList');
    var symptomsString = symptoms.join(', ');
    symptomListDiv.textContent = symptomsString; 
}

var diseases = [
    {
        name: 'Fever',
        symptoms: ['high temp', 'headache', 'body ache'],
        doctors: ['therapist']
    },
    {
        name: 'Common Cold',
        symptoms: ['runny nose', 'sore throat', 'cough'],
        doctors: ['therapist']
    },
    // Add more diseases with associated symptoms as needed
];

function findDisease() {
    var matchingDiseases = [];

    // Check each disease for matching symptoms
    diseases.forEach(function (disease) {
        var found = disease.symptoms.some(function (symptom) {
            return symptoms.includes(symptom.toLowerCase());
        });
        if (found) {
            matchingDiseases.push(disease);
        }
    });

    // Display matching diseases
    displayDiseases(matchingDiseases);
}


function displayDiseases(matchingDiseases) {
    var diseaseListDiv = document.getElementById('diseaseList');
    diseaseListDiv.innerHTML = ''; // Clear previous content

    if (matchingDiseases.length === 0) {
        var noMatchMessage = document.createElement('p');
        noMatchMessage.textContent = 'No diseases found matching the entered symptoms.';
        diseaseListDiv.appendChild(noMatchMessage);
    } else {
        matchingDiseases.forEach(function (disease) {
            var diseaseItem = document.createElement('div');
            diseaseItem.classList.add('disease-item');

            var diseaseName = document.createElement('h2');
            diseaseName.textContent = disease.name;
            diseaseItem.appendChild(diseaseName);

            var symptomsTitle = document.createElement('h3');
            symptomsTitle.textContent = 'Symptoms:';
            diseaseItem.appendChild(symptomsTitle);

            var symptomsList = document.createElement('ul');
            disease.symptoms.forEach(function (symptom) {
                var symptomItem = document.createElement('li');
                symptomItem.textContent = symptom;
                symptomsList.appendChild(symptomItem);
            });
            diseaseItem.appendChild(symptomsList);

            var doctorsTitle = document.createElement('h3');
            doctorsTitle.textContent = 'Doctors:';
            diseaseItem.appendChild(doctorsTitle);

            var doctorsList = document.createElement('ul');
            disease.doctors.forEach(function (doctor) {
                var doctorItem = document.createElement('li');
                doctorItem.textContent = doctor;
                doctorsList.appendChild(doctorItem);
            });
            diseaseItem.appendChild(doctorsList);

            diseaseListDiv.appendChild(diseaseItem);
        });
    }
}
