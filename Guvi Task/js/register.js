// Get form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const registerButton = document.getElementById('register-btn');

// Event listener for form submission
registerButton.addEventListener('click', (event) => {
	// Prevent form from submitting
	event.preventDefault();

	// Get input values
	const username = usernameInput.value;
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	// Validate input values
	if (username === '') {
		alert('Please enter a username.');
		return;
	}
	if (password === '') {
		alert('Please enter a password.');
		return;
	}
	if (password !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	}

	// Send registration request
