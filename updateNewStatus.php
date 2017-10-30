<?php
   // connect to mongodb
   $m = new MongoClient();
   
	
   // select a database
   $db = $m->Test_SubmittedResult;
   
   $campaignID = $_POST['campaignID'];
   
   $collection = $db->$campaignID;   
   
   $submissionContent = $_POST['submissionContent'];
   $newStatus  = $_POST['newStatus'];
	
   // now update the document
   $collection->update(array("submissionContent"=>$submissionContent), 
      array('$set'=>   array("status"=>$newStatus)));
	
   
   echo "Update new status successfully";
?>