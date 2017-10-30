<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->Statistics;  
   
   $data=$_POST['data'];
   
   $collection = $db->$data;     
   
   
   $filter = array('campaign_ID'=>$data);
   
   $cursor = $collection->find( array() , array("download" => 1, "submit" => 1));   
   
   echo json_encode(iterator_to_array($cursor));  
   
?>