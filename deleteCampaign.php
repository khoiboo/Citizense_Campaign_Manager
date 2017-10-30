<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->campaignStorage;
   
   $collection = $db->campaign_List;   
   
   $data=$_POST['data'];  
   
   
   $document = array('campaign_ID'=>$data);   
   $delete = $collection->remove($document);
   
   $database = $m->Statistics;
   $collectionDrop = $database->$data;
   $collectionDrop->drop();
   
   echo "Delete successful";
   
?>