<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->campaignStorage;
   
   $collection = $db->campaign_List;   
   
   $data=$_POST['data'];
   
   
   $filter = array('user'=>$data);
   
   $cursor = $collection->find( $filter , array("user" => 1, "campaign_ID" => 1));   
   
   echo json_encode(iterator_to_array($cursor));  
   
?>