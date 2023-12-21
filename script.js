const userEntries = [];

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value || 'Not Provided';
  const imageLink = document.getElementById("imageLink").value || '';
  const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not Specified';

  const skills = [];
  document.querySelectorAll('input[name="skills"]:checked').forEach(skill => {
    skills.push(skill.value);
  });

  const userEntry = {
    name: name,
    email: email,
    website: website,
    imageLink: imageLink,
    gender: gender,
    skills: skills.join(', ')
  };

  userEntries.push(userEntry);

  displayUserEntries();
}

function displayUserEntries() {
  const displayDiv = document.getElementById("displayData");
  const table = document.createElement("table");
  table.classList.add("data-table");

  const tableBody = document.createElement("tbody");

  userEntries.forEach(entry => {
    addRowWithDescriptionAndImage(tableBody, entry);
  });

  table.appendChild(tableBody);

  displayDiv.innerHTML = '';
  displayDiv.appendChild(table);
}
function addRowWithDescriptionAndImage(tableBody, entry) {
  const headerRow = document.createElement("tr");

  const descriptionHeaderCell = document.createElement("th");
  descriptionHeaderCell.textContent = "Description";
  headerRow.appendChild(descriptionHeaderCell);

  const imageHeaderCell = document.createElement("th");
  imageHeaderCell.textContent = "Image";
  headerRow.appendChild(imageHeaderCell);

  tableBody.appendChild(headerRow);

  const dataRow = document.createElement("tr");

  const descriptionCell = document.createElement("td");
  descriptionCell.style.whiteSpace = 'pre-line';
  descriptionCell.textContent = `${entry.name}\n${entry.email}\n${entry.website}\n${entry.gender}\n${entry.skills}`;
  dataRow.appendChild(descriptionCell);

  const imageCell = document.createElement("td");
  const imageElement = document.createElement("img");
  imageElement.src = entry.imageLink || 'blank-image.jpg';
  imageElement.alt = "User Image";
  imageElement.style.maxWidth = "150px";
  imageCell.appendChild(imageElement);
  dataRow.appendChild(imageCell);

  tableBody.appendChild(dataRow);
}

function clearForm() {
  document.getElementById("registrationForm").reset();
}



