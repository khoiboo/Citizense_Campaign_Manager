<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->SubmittedResult;  
   
   $data=$_POST['data'];
   
   $collection = $db->$data;     
   
   
   $filter = array('campaign_ID'=>$data);
   
   $cursor = $collection->find( array() , array("submissionContent" => 1));   
   
   echo json_encode(iterator_to_array($cursor));  
   
?>