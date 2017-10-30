<?php
   // connect to mongodb
   $m = new MongoClient();   
	
   // select a database
   $db = $m->SubmittedResult;  
   
   $data=$_POST['taskID'];
   $campaignID = $_POST['campaignID'];
   
   $collection = $db->$campaignID;     
   
   
   $filter = array('campaign_ID'=>$data);
   
   $cursor = $collection->find( array() , array("submissionContent" => 1));  

   $cursor_array = iterator_to_array($cursor);
   
   $reply = array();
   
   $list = 'list';
   
     
	   foreach ( $cursor_array as $key => $val )
	   {
			$object = $val;
			
			foreach ($object as $key => $val)
			{
				if ( strpos($key, 'submissionContent')!== false )
				{
					$answer = json_decode($val);
					foreach ($answer as $field => $value)
					{
						if( strpos($value -> questionID, $data) !== false )
						array_push($reply, $value->$list);
					}
					//array_push($reply, $val);
					//array_push($reply, sizeOf($answer));
				}
				
			}
			
			//array_push($reply, $object);
			
			
	   }
  
   
   
   
   //echo json_encode( $cursor_array );  
   echo json_encode( $reply );  
   
?>