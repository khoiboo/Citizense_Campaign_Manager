<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$data1=$_POST['finalName'];

//echo "Server receives the following ";

$target_dir = "Pic/";
//$target_file = $target_dir . basename($_FILES["myfile"]["name"].$data1);
$target_file = $target_dir . basename($data1);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);


// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target_file)) {
        echo "OK";
    } else {
        echo "ERROR";
    }
}

?>