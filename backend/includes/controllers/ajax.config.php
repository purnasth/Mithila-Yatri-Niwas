<?php 
	// Load the header files first
	header("Expires: 0"); 
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
	header("cache-control: no-store, no-cache, must-revalidate"); 
	header("Pragma: no-cache");

	// Load necessary files then...
	require_once('../initialize.php');
	
	$action = $_REQUEST['action'];
	
	switch($action) 
	{		
		case "add":	
			$record = new Config();
			
			$record->sitetitle 			= $_REQUEST['sitetitle'];
			$record->icon_upload 		= $_REQUEST['imageArrayname'];
			$record->logo_upload		= $_REQUEST['imageArrayname2'];
			$record->fb_upload		    = $_REQUEST['imageArrayname3'];
			$record->twitter_upload		= $_REQUEST['imageArrayname4'];
			$record->gallery_upload		= $_REQUEST['imageArrayname5'];
			$record->contact_upload		= $_REQUEST['imageArrayname6'];
			$record->other_upload		= $_REQUEST['imageArrayname7'];
			$record->facility_upload		= $_REQUEST['imageArrayname8'];
			$record->sitename			= $_REQUEST['sitename'];
			$record->copyright 			= $_REQUEST['copyright'];
			$record->meta_title 		= $_REQUEST['meta_title'];
			$record->site_keywords		= $_REQUEST['site_keywords'];
			$record->site_description	= $_REQUEST['site_description'];
			$record->google_anlytics	= $_REQUEST['google_anlytics'];			
			$record->schema_code	    = $_REQUEST['schema_code'];
			$record->book_type		    = $_REQUEST['book_type'];
			$record->hotel_page		    = $_REQUEST['hotel_page'];
			$record->hotel_code		    = $_REQUEST['hotel_code'];
			$record->booking_code		    = $_REQUEST['booking_code'];

			$record->whatsapp		= $_REQUEST['whatsapp'];	
			$record->whatsapp_a		= $_REQUEST['whatsapp_a'];	

			!(empty($_REQUEST['pixel_code'])) ? ($record->pixel_code	= $_REQUEST['pixel_code']): ($record->pixel_code	= '');


			$db->begin();
			if($record->save()): $db->commit();
			$message  = sprintf($GLOBALS['basic']['addedSuccess_'], "Config '".$record->sitetitle."'");
			echo json_encode(array("action"=>"success","message"=>$message));
			log_action($message,1,3);
			else: $db->rollback(); echo json_encode(array("action"=>"error","message"=>$GLOBALS['basic']['unableToSave']));
			endif;
		break;
			
		case "edit":
			$record = Config::find_by_id($_REQUEST['idValue']);
			
			$record->sitetitle 			= $_REQUEST['sitetitle'];					
			$record->sitename			= $_REQUEST['sitename'];
			$record->logo 			= $_REQUEST['sitetitle'];	
			$record->copyright 			= $_REQUEST['copyright'];
			$record->meta_title 		= $_REQUEST['meta_title'];
			$record->site_keywords		= $_REQUEST['site_keywords'];
			$record->site_description	= $_REQUEST['site_description'];
			$record->fb_messenger	    = $_REQUEST['fb_messenger'];
			$record->google_anlytics	= $_REQUEST['google_anlytics'];
			$record->schema_code	= $_REQUEST['schema_code'];
			$record->robot_txt	    = $_REQUEST['robot_txt'];
			$record->book_type		= $_REQUEST['book_type'];
			$record->hotel_page		= $_REQUEST['hotel_page'];		
			$record->hotel_code		= $_REQUEST['hotel_code'];
			$record->booking_code	= $_REQUEST['booking_code'];
			$record->action 		= '0';
			$record->linksrc 		= $_REQUEST['linksrc'];

			!(empty($_REQUEST['pixel_code'])) ? ($record->pixel_code	= $_REQUEST['pixel_code']): ($record->pixel_code	= '');


			if(!empty($_REQUEST['imageArrayname'])):
				$record->icon_upload 		= $_REQUEST['imageArrayname'];
			endif;

			if(!empty($_REQUEST['imageArrayname2'])):
				$record->logo_upload		= $_REQUEST['imageArrayname2'];
			endif;

            $record->fb_upload          = (!empty($_REQUEST['imageArrayname3'])) ? $_REQUEST['imageArrayname3'] : '';
            $record->twitter_upload     = (!empty($_REQUEST['imageArrayname4'])) ? $_REQUEST['imageArrayname4'] : '';
            $record->gallery_upload     = (!empty($_REQUEST['imageArrayname5'])) ? $_REQUEST['imageArrayname5'] : '';
            $record->contact_upload     = (!empty($_REQUEST['imageArrayname6'])) ? $_REQUEST['imageArrayname6'] : '';
            $record->other_upload       = (!empty($_REQUEST['imageArrayname7'])) ? $_REQUEST['imageArrayname7'] : '';
            $record->facility_upload    = (!empty($_REQUEST['imageArrayname8'])) ? $_REQUEST['imageArrayname8'] : '';
            $record->offer_upload       = (!empty($_REQUEST['imageArrayname9'])) ? $_REQUEST['imageArrayname9'] : '';

			$db->begin();
			if($record->save()):$db->commit();
			$siteRegulars 	= Config::find_by_id(1);
			$content = $siteRegulars->robot_txt;
			$fp = fopen($_SERVER['DOCUMENT_ROOT']."/".SITE_FOLDER. "/robots.txt","wb");
			fwrite($fp,$content);
			fclose($fp);
			   $message  = sprintf($GLOBALS['basic']['changesSaved_'], "Config '".$record->sitetitle."'");
			   echo json_encode(array("action"=>"success","message"=>$message));
			   log_action($message,1,4);
			else: $db->rollback();echo json_encode(array("action"=>"notice","message"=>$GLOBALS['basic']['noChanges']));
			endif;
		break;	

		case "locationedit":
			$record = Config::find_by_id($_REQUEST['idValue']);
			
			$record->fiscal_address = $_REQUEST['fiscal_address'];
			$record->address = $_REQUEST['address'];
			// $record->mail_address 	= $_REQUEST['mail_address'];
			$record->contact_info 	= $_REQUEST['contact_info'];
			// $record->contact_info2 			= $_REQUEST['contact_info2'];
			// $record->pobox 			= $_REQUEST['pobox'];
			$record->email_address 	= $_REQUEST['email_address'];
			$record->breif 			= $_REQUEST['breif'];
			$record->location_type 	= $_REQUEST['location_type'];					
			$record->location_map 	= $_REQUEST['location_map'];

			// $record->whatsapp		= $_REQUEST['whatsapp'];	
			$record->whatsapp_a		= $_REQUEST['whatsapp_a'];	


			if(!empty($_REQUEST['imageArrayname'])):
				$record->location_image = $_REQUEST['imageArrayname'];
			endif;

			if(empty($_REQUEST['imageArrayname']) and $_REQUEST['location_type']!=1):				
				echo json_encode(array("action"=>"warning","message"=>"Required Upload Image !"));
				exit;					
			endif;
			
			$db->begin();
			if($record->save()):$db->commit();
			   $message  = sprintf($GLOBALS['basic']['changesSaved_'], "Config '".$record->sitetitle."'");
			   echo json_encode(array("action"=>"success","message"=>$message));
			   log_action($message,1,4);
			else: $db->rollback();echo json_encode(array("action"=>"notice","message"=>$GLOBALS['basic']['noChanges']));
			endif;
		break;
		
	}
?>