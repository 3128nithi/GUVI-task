<?php
session_start();
$db = mysqli_connect('localhost', 'username', 'password', 'database');

if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['email'])) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$email = $_POST['email'];

	$query = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
	mysqli_query($db, $query);

	$_SESSION['username'] = $username;
	$_SESSION['age'] = "";
	$_SESSION['dob'] = "";
	$_SESSION['contact'] = "";

	header('Location: profile.php');
} else {
	header('Location: signup.php');
}
?>
