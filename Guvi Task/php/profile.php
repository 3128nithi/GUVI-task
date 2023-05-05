<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>Welcome, <?php echo $_SESSION['username']; ?></h1>
	<form method="POST" action="update.php">
		<label for="age">Age:</label>
		<input type="number" id="age" name="age" value="<?php echo $_SESSION['age']; ?>">
		<label for="dob">Date of Birth:</label>
		<input type="date" id="dob" name="dob" value="<?php echo $_SESSION['dob']; ?>">
		<label for="contact">Contact:</label>
		<input type="text" id="contact" name="contact" value="<?php echo $_SESSION['contact']; ?>">
		<button type="submit">Update</button>
	</form>
	<a href="logout.php">Logout</a>
</body>
</html>
