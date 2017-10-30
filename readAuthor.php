<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->MergedParticipant;
   
   $collection = $db->participantList;   
   
   $data=$_POST['data'];
   
   
   $query = array('email'=>$data);
   
   $cursor = $collection->find( $query , array("firstName" => 1, "linkProfilePic" => 1));   
   
   echo json_encode(iterator_to_array($cursor));  
   
?>