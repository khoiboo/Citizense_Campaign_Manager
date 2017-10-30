<?php
   // connect to mongodb
   $m = new MongoClient();
   echo "Connection to database successfully";
	
   // select a database
   $db = $m->campaignStorage;
   
   $collection = $db->campaign_List;   
   
   $data = $_POST['data'];
   $old  = $_POST['old_value'];
	
   // now update the document
   $collection->update(array("campaign_Config"=>$old), 
      array('$set'=>   array("campaign_Config"=>$data)));
	
   
   echo "Campaign updated successfully";
?>