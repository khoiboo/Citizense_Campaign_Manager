

<?php

	// connect to mongodb
	$m = new MongoClient();
	//$m = new MongoDB\Driver\Manager("mongodb://localhost:27017");

	// select a database
   $db = $m->MergedParticipant;
   
   $collection = $db->participantList;
   
   

$email=$_POST['email1']; // Fetching Values from URL.
$password= $_POST['password1']; // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else
{
	
	$filter = array('email' => $email, 'password' => $password);
	$query = array('email' => $email, 'password' => $password);
	
	$cursor = $collection->find($query, $filter);
	
	if ( $cursor->count() ==1 )
	{
		echo "Successfully";
	}
	else
	{
		//echo "Email or Password is wrong";
		echo $count;
	}
	

	

}

?>

