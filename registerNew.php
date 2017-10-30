


<?php

	// connect to mongodb
	$m = new MongoClient();

	// select a database
   $db = $m->MergedParticipant;
   
   $collection = $db->participantList;  
   

$fname=$_POST['name1']; 
$lname=$_POST['name2']; 
$nickname = $_POST['name3']; 
$portraitLink = $_POST['linkPic'];
$YoB = $_POST['YoBvalue'];
$gender = $_POST['gender'];
$email=$_POST['email1'];
$password= $_POST['password1']; // Password Encryption, If you like you can also leave sha1.
// Check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
	echo "Invalid Email.......";
}
else
{
	$filter = array('email' => $email, 'password' => $password);
	$query = array('email' => $email, 'password' => $password);
	
	$cursor = $collection->find($query, $filter);
	
	if ( $cursor->count() ==0 )
	{
		$author = array( 
			  "firstName" 				=> $fname, 
			  "lastName"				=> $lname,
			  "userID"					=> $nickname,
			  "email"					=> $email,
			  "password"				=> $password,			  
			  "yearOfBirth" 			=> $YoB,
			  "gender"					=> $gender,
			  "linkProfilePic" 			=> $portraitLink,			  
			  "timeOfRegister"			=> date("Y-m-d H:i:s"),
			  "device"					=> 'empty device',
			  "APK version"				=> 0,
			  "participantSecretCode"	=> -1,
			  "rewardCode"				=> '',
			  "expPoint"				=> 0,
			  "money"					=> 0,
			  "moneyFromFlatPayment"	=> 0,
			  "prize"					=> array()
			  
		   );
		$collection->insert($author);
		echo "You have Successfully Registered.....";
	}
	else
	{
		echo "This email is already registered, Please try another email...";
	}
	
}
//mysql_close ($connection);
?>

