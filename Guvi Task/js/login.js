// Get form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-btn');

// Event listener for form submission
loginButton.addEventListener('click', (event) => {
	// Prevent form from submitting
	event.preventDefault();

	// Get input values
	const username = usernameInput.value;
	const password = passwordInput.value;

	// Validate input values
	if (username === '') {
		alert('Please enter your username.');
		return;
	}
	if (password === '') {
		alert('Please enter your password.');
		return;
	}

	// Send login request
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'process_login.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = () => {
		if (xhr.status === 200) {
			// Login successful, redirect to profile page
			window.location.href = 'profile.html';
		} else {
			// Login failed, display error message
			alert('Invalid username or password.');
		}
	};
	xhr.send(`username=${username}&password=${password}`);
});
