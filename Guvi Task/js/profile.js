// Get form elements
const ageInput = document.getElementById('age');
const dobInput = document.getElementById('dob');
const contactInput = document.getElementById('contact');
const updateButton = document.getElementById('update-btn');

// Event listener for form submission
updateButton.addEventListener('click', (event) => {
	// Prevent form from submitting
	event.preventDefault();

	// Get input values
	const age = ageInput.value;
	const dob = dobInput.value;
	const contact = contactInput.value;

	// Validate input values
	if (age < 1 || age > 120) {
		alert('Please enter a valid age.');
		return;
	}
	if (!isValidDate(dob)) {
		alert('Please enter a valid date of birth.');
		return;
	}
	if (contact === '') {
		alert('Please enter your contact information.');
		return;
	}

	// Submit form
	const form = event.target.form;
	form.submit();
});

// Function to validate date format
function isValidDate(dateString) {
	// Check if date string is in YYYY-MM-DD format
	const regex = /^\d{4}-\d{2}-\d{2}$/;
	if (!regex.test(dateString)) {
		return false;
	}

	// Check if date string represents a valid date
	const date = new Date(dateString);
	if (isNaN(date.getTime())) {
		return false;
	}

	return true;
}
