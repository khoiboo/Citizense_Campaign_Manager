<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->SubmittedResult;  
   
   $data=$_POST['campaignID'];
   
   $collection = $db->$data;     
   
   
   $filter = array('campaign_ID'=>$data);
   
   $cursor = $collection->find( array() , array("submissionLat" => 1, "submissionLon" => 1, "submissionTime" => 1, "userID" => 1, "status" => 1) );   
   
   echo json_encode(iterator_to_array($cursor));  
   
?>