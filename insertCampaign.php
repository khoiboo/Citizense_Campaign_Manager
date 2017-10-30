<?php
   // connect to mongodb
   $m = new MongoClient();
   
	
   // select a database
   $db = $m->campaignStorage;
   
   $collection = $db->campaign_List;
   
   
   $data1=$_POST['data1'];
   $data2=$_POST['data2'];
   $data3=$_POST['data3'];
   $data4=$_POST['data4'];
   
   
   $database = $m->Statistics;
   
   $campaign_Statistics = $database->$data3;
   
   $statisticRecord = array( 
      "download" => 0, 
	  "open" => 0,
	  "submit" => 0,
	  "addtoFavorite" => array()
   );
   
   $campaign_Statistics->insert($statisticRecord);
   
   
   
	
   $document = array( 
      "user" 				=> $data1, 
	  "campaign_ID" 		=> $data3,
      "campaign_Config" 	=> $data2,
	  "createDate"			=> $data4,
	  "editDate"			=> ""
   );
	
   $collection->insert($document);
   echo "Campaign inserted successfully";
?>