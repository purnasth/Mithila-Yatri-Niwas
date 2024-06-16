<?php
$subpackageTablename = "tbl_package_sub"; // Database table name
$moduleId = 23;                // module id >>>>> tbl_modules
if (isset($_GET['page']) && $_GET['page'] == "package" && isset($_GET['mode']) && $_GET['mode'] == "subpackagelist"):
    $id = intval(addslashes($_GET['id']));
    SerclearImages($subpackageTablename, "subpackage");
    SerclearImages($subpackageTablename, "subpackage/thumbnails");

    clearImages($subpackageTablename, "subpackage/image", "image2");
    clearImages($subpackageTablename, "subpackage/image/thumbnails", "image2");

    clearImages("tbl_subpackage_images", "package/galleryimages");
    clearImages("tbl_subpackage_images", "package/galleryimages/thumbnails");
    ?>
    <h3>
        List Sub Package ["<?php echo Package::getPackageName($id); ?>"]
        <a class="loadingbar-demo btn medium bg-blue-alt float-right" href="javascript:void(0);"
           onClick="AddNewSubpackage(<?php echo $id; ?>);">
    <span class="glyph-icon icon-separator">
    	<i class="glyph-icon icon-plus-square"></i>
    </span>
            <span class="button-content"> Add New </span>
        </a>
        <a class="loadingbar-demo btn medium bg-blue-alt float-right mrg5R" href="javascript:void(0);"
           onClick="viewPackagelist();">
    <span class="glyph-icon icon-separator">
        <i class="glyph-icon icon-arrow-circle-left"></i>
    </span>
            <span class="button-content"> Back </span>
        </a>
    </h3>
    <div class="my-msg"></div>
    <div class="example-box">
        <div class="example-code">
            <table cellpadding="0" cellspacing="0" border="0" class="table" id="subexample">
                <thead>
                <tr>
                    <th style="display:none;"></th>
                    <th class="text-center"><input class="check-all" type="checkbox"/></th>
                    <th>Title</th>
                    <th class="text-center">Images</th>
                    <th class="text-center"><?php echo $GLOBALS['basic']['action']; ?></th>
                </tr>
                </thead>

                <tbody>
                <?php $records = Subpackage::find_by_sql("SELECT * FROM " . $subpackageTablename . " WHERE type=" . $id . " ORDER BY sortorder DESC ");
                foreach ($records as $key => $record): ?>
                    <tr id="<?php echo $record->id; ?>">
                        <td style="display:none;"><?php echo $key + 1; ?></td>
                        <td><input type="checkbox" class="bulkCheckbox" bulkId="<?php echo $record->id; ?>"/></td>
                        <td>
                            <div class="col-md-7">
                                <a href="javascript:void(0);"
                                   onClick="editsubpackage(<?php echo $record->type; ?>,<?php echo $record->id; ?>);"
                                   class="loadingbar-demo"
                                   title="<?php echo $record->title; ?>"><?php echo $record->title; ?></a>
                            </div>
                        </td>
                        <td>
                            <a class="primary-bg medium btn loadingbar-demo" title=""
                               onClick="viewsubimagelist(<?php echo $record->id; ?>);" href="javascript:void(0);">
                        <span class="button-content">
                            <span class="badge bg-orange radius-all-4 mrg5R" title=""
                                  data-original-title="Badge with tooltip"><?php echo $countImages = SubPackageImage::getTotalImages($record->id);
                                //var_dump($countImages);die();?></span>

                            <span class="text-transform-upr font-bold font-size-11">View Lists</span>
                        </span>
                            </a>
                        </td>
                        <td class="text-center">
                            <?php
                            $statusImage = ($record->status == 1) ? "bg-green" : "bg-red";
                            $statusText = ($record->status == 1) ? $GLOBALS['basic']['clickUnpub'] : $GLOBALS['basic']['clickPub'];
                            ?>
                            <a href="javascript:void(0);"
                               class="btn small <?php echo $statusImage; ?> tooltip-button statusSubToggler"
                               data-placement="top" title="<?php echo $statusText; ?>"
                               status="<?php echo $record->status; ?>" id="imgHolder_<?php echo $record->id; ?>"
                               moduleId="<?php echo $record->id; ?>">
                                <i class="glyph-icon icon-flag"></i>
                            </a>
                            <a href="javascript:void(0);" class="loadingbar-demo btn small bg-blue-alt tooltip-button"
                               data-placement="top" title="Edit"
                               onclick="editsubpackage(<?php echo $record->type; ?>,<?php echo $record->id; ?>);">
                                <i class="glyph-icon icon-edit"></i>
                            </a>
                            <a href="javascript:void(0);" class="btn small bg-red tooltip-button" data-placement="top"
                               title="Remove" onclick="subrecordDelete(<?php echo $record->id; ?>);">
                                <i class="glyph-icon icon-remove"></i>
                            </a>
                            <input name="sortId" type="hidden" value="<?php echo $record->id; ?>">
                        </td>
                    </tr>
                <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <div class="pad0L col-md-2">
            <select name="dropdown" id="groupTaskField" class="custom-select">
                <option value="0"><?php echo $GLOBALS['basic']['choseAction']; ?></option>
                <option value="subdelete"><?php echo $GLOBALS['basic']['delete']; ?></option>
                <option value="subtoggleStatus"><?php echo $GLOBALS['basic']['toggleStatus']; ?></option>
            </select>
        </div>
        <a class="btn medium primary-bg" href="javascript:void(0);" id="applySelected_btn">
    <span class="glyph-icon icon-separator float-right">
      <i class="glyph-icon icon-cog"></i>
    </span>
            <span class="button-content"> Submit </span>
        </a>
    </div>

<?php elseif (isset($_GET['mode']) && $_GET['mode'] == "addEditsubpackage"):
    $pid = addslashes($_REQUEST['id']);
    if (isset($_GET['subid']) and !empty($_GET['subid'])):
        $subpackageId = addslashes($_REQUEST['subid']);
        $subpackageInfo = Subpackage::find_by_id($subpackageId);
        $status = ($subpackageInfo->status == 1) ? "checked" : " ";
        $unstatus = ($subpackageInfo->status == 0) ? "checked" : " ";
    endif;
    ?>
    <h3>
        <?php echo (isset($_GET['subid'])) ? 'Edit Sub Package' : 'Add Sub Package'; ?>
        <a class="loadingbar-demo btn medium bg-blue-alt float-right" href="javascript:void(0);"
           onClick="viewSubpackagelist(<?php echo $pid; ?>);">
    <span class="glyph-icon icon-separator">
    	<i class="glyph-icon icon-arrow-circle-left"></i>
    </span>
            <span class="button-content"> Back </span>
        </a>
    </h3>

    <div class="my-msg"></div>
    <div class="example-box">
        <div class="example-code">
            <form action="" class="col-md-12 center-margin" id="subpackage_frm">
                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Title :
                        </label>
                    </div>
                    <div class="form-input col-md-20">
                        <input placeholder="Package Title" class="col-md-6 validate[required,length[0,50]]" type="text"
                               name="title" id="title"
                               value="<?php echo !empty($subpackageInfo->title) ? $subpackageInfo->title : ""; ?>">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">Slug :</label>
                    </div>
                    <div class="form-input col-md-20">
                        <?php echo BASE_URL; ?><input placeholder="Slug"
                                                      class="col-md-3 validate[required,length[0,200]]" type="text"
                                                      name="slug" id="slug"
                                                      value="<?php echo !empty($subpackageInfo->slug) ? $subpackageInfo->slug : ""; ?>">
                        <span id="error"></span>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">Short Title :</label>
                    </div>
                    <div class="form-input col-md-6">
                        <input placeholder="Sub Title" class="col-md-12" type="text" name="short_title" id="short_title"
                               value="<?php echo !empty($subpackageInfo->short_title) ? $subpackageInfo->short_title : ''; ?>">
                    </div>
                </div>

                <!-- <div class="form-row add-image">
                    <div class="form-label col-md-2">
                        <label for="">
                            Banner Image :
                        </label>
                    </div>
                    <div class="form-input col-md-10 uploader">
                        <input type="file" name="image_upload" id="image_upload" class="transparent no-shadow">
                        <label>
                        <small>Image Dimensions (<?php echo Module::get_properties($moduleId, 'subbimgwidth'); ?> px
                            X <?php echo Module::get_properties($moduleId, 'subbimgheight'); ?> px)
                        </small>
                    </label>
                    </div> -->
                    <!-- Upload user image preview -->
                    <!-- <div id="preview_Image2"></div>
                </div>

                <div class="form-row">
                    <?php
                    if (!empty($subpackageInfo->image2)):
                        $imageRow2 = $subpackageInfo->image2; ?>
                        <div class="col-md-3" id="removeSavedimg001">
                            <div class="infobox info-bg">
                                <div class="button-group" data-toggle="buttons">
                                    <span class="float-left">
                                        <?php
                                        if (file_exists(SITE_ROOT . "images/subpackage/image/" . $imageRow2)):
                                            $filesize = filesize(SITE_ROOT . "images/subpackage/image/" . $imageRow2);
                                            echo 'Size : ' . getFileFormattedSize($filesize);
                                        endif;
                                        ?>
                                    </span>
                                    <a class="btn small float-right" href="javascript:void(0);"
                                       onclick="deleteSavedPackageimage('001');">
                                        <i class="glyph-icon icon-trash-o"></i>
                                    </a>
                                </div>
                                <img src="<?php echo IMAGE_PATH . 'subpackage/image/thumbnails/' . $imageRow2; ?>"
                                     style="width:100%"/>
                                <input type="hidden" name="imageArrayname2" value="<?php echo $imageRow2; ?>"/>

                            </div>
                        </div>
                    <?php endif; ?>
                </div> -->

                <?php $pkg = Package::find_by_id($pid); ?>
                <div class="form-row add-image">
                    <div class="form-label col-md-2">
                        <label for="">
                            Image :
                        </label>
                    </div>
                    <div class="form-input col-md-10 uploader">
                        <input type="file" name="subpackage_upload" id="subpackage_upload"
                               class="transparent no-shadow">
                               <label>
                        <small>Image Dimensions (<?php echo Module::get_properties($moduleId, 'subimgwidth'); ?> px
                            X <?php echo Module::get_properties($moduleId, 'subimgheight'); ?> px)
                        </small>
                    </label>
                    </div>
                    <!-- Upload user image preview -->
                    <div id="preview_Image"><input type="hidden" name="imageArrayname[]"/></div>
                </div>

                <div class="form-row">
                    <?php
                    if (!empty($subpackageInfo->image)):
                        $imageRec = unserialize($subpackageInfo->image);
                        if ($imageRec):
                            foreach ($imageRec as $k => $imageRow): ?>
                                <div class="col-md-3" id="removeSavedimg<?php echo $k; ?>">
                                    <div class="infobox info-bg">
                                        <div class="button-group" data-toggle="buttons">
                                    <span class="float-left">
                                        <?php
                                        if (file_exists(SITE_ROOT . "images/subpackage/" . $imageRow)):
                                            $filesize = filesize(SITE_ROOT . "images/subpackage/" . $imageRow);
                                            echo 'Size : ' . getFileFormattedSize($filesize);
                                        endif;
                                        ?>
                                    </span>
                                            <a class="btn small float-right" href="javascript:void(0);"
                                               onclick="deleteSavedPackageimage(<?php echo $k; ?>);">
                                                <i class="glyph-icon icon-trash-o"></i>
                                            </a>
                                        </div>
                                        <img src="<?php echo IMAGE_PATH . 'subpackage/thumbnails/' . $imageRow; ?>"
                                             style="width:100%"/>
                                        <input type="hidden" name="imageArrayname[]" value="<?php echo $imageRow; ?>"/>
                                    </div>
                                </div>
                            <?php endforeach;
                        endif;
                    endif; ?>
                </div>
                <?php if ($pkg->type == 1) { ?>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">
                                Room Id (Rojai) :
                            </label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Rojai Room Id" class="col-md-3 validate[length[0,200]]" type="text"
                                   name="rojai_room_id" id="rojai_room_id"
                                   value="<?php echo !empty($subpackageInfo->rojai_room_id) ? $subpackageInfo->rojai_room_id : ""; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">
                                Currency Type :
                            </label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Currency Type" class="col-md-3 validate[length[0,2]]" type="text"
                                   name="currency" id="currency"
                                   value="<?php echo !empty($subpackageInfo->currency) ? $subpackageInfo->currency : ""; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Price :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Price" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="onep_price" id="room_price1"
                                   value="<?php echo !empty($subpackageInfo->onep_price) ? $subpackageInfo->onep_price : ''; ?>">
                        </div>
                    </div>
                     <!-- <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for=""> Double Occupancy :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Occupancy Price" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="twop_price" id="room_price2"
                                   value="<?php //echo !empty($subpackageInfo->twop_price) ? $subpackageInfo->twop_price : ''; ?>">
                        </div>
                    </div> -->
                    <!-- <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Extra Bed Charge:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Charge" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="threep_price" id="room_price3"
                                   value="<?php //echo !empty($subpackageInfo->threep_price) ? $subpackageInfo->threep_price : ''; ?>">
                        </div>
                    </div> -->
                   
                    <!-- <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">No. of Room :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="No of Room" class="col-md-3" type="text" name="number_room"
                                   id="number_room"
                                   value="<?php //echo !empty($subpackageInfo->number_room) ? $subpackageInfo->number_room : ''; ?>">
                        </div>
                    </div> -->

                    <style type="text/css">
                        .list {
                            background-color: #d9d9d9;
                            text-align: center;
                            cursor: pointer;
                            border: 1px solid gray;
                        }

                        .items {
                            list-style-type: none;
                            width: 60%;
                        }

                        .items li {
                            float: left;
                            margin: 2px;
                            padding: 2px;
                        }
                    </style>

                    <!-- Feature Listing -->
                    <?php $svfr = !empty($subpackageInfo->feature) ? $subpackageInfo->feature : '';
                    $saveRec = unserialize($svfr);
                    $RecFearures = Features::get_all_byparnt(0);
                    $items = 1;
                    if ($RecFearures) {
                        foreach ($RecFearures as $recRow) { ?>
                            <div class="form-row">
                                <div class="form-label col-md-2">
                                    <label for="">
                                        <?php echo $recRow->title; ?> :
                                    </label>
                                </div>
                                <div class="form-checkbox-radio col-md-10 form-input">
                                    <input type="text" placeholder="Title" class="col-md-4 validate[length[0,250]]"
                                           name="fparent[<?php echo $recRow->id; ?>][]"
                                           value="<?php echo !empty($saveRec[$recRow->id][0][0]) ? $saveRec[$recRow->id][0][0] : ''; ?>">
                                    <div class="clear"></div>
                                    <script>
                                        $(document).ready(function () {
                                            $("#items<?php echo $items;?>").sortable();
                                        });
                                    </script>
                                    <ul id="items<?php echo $items; ?>" class="items">
                                        <?php $childRec = Features::get_all_byparnt($recRow->id);
                                        $checked = $unchecked = array();
                                        if (!empty($saveRec)) {
                                            //separating the checked ones in order they are saved in db
                                            if (!empty($saveRec[$recRow->id][1])) {
                                                foreach ($saveRec[$recRow->id][1] as $saved) {
                                                    for ($i = 0; $i < sizeof($childRec); $i++) {
                                                        if ($saved == $childRec[$i]->id) {
                                                            $checked[] = [$childRec[$i]->id, $childRec[$i]->title];
                                                        }
                                                    }
                                                }
                                            }
                                            //separating the unchecked ones
                                            foreach ($childRec as $childRow) {
                                                if (!empty($saveRec[$recRow->id][1])) {
                                                    $unchecked[] = (in_array($childRow->id, $saveRec[$recRow->id][1])) ? '' : [$childRow->id, $childRow->title];
                                                }else{
                                                    $unchecked[] = [$childRow->id, $childRow->title];
                                                }
                                            }
                                        } else {
                                            foreach ($childRec as $childRow) {
                                                $unchecked[] = [$childRow->id, $childRow->title];
                                            }
                                        }
                                        foreach ($checked as $checkd) { ?>
                                            <li class="list">
                                                <input type="checkbox" class="custom-radio"
                                                       name="feature[<?php echo $recRow->id; ?>][]"
                                                       value="<?php echo $checkd[0]; ?>" checked="checked">
                                                <label for=""><?php echo $checkd[1]; ?></label>
                                            </li>
                                        <?php }
                                        foreach ($unchecked as $uncheckd) {
                                            if (!empty($uncheckd)) { ?>
                                                <li class="list">
                                                    <input type="checkbox" class="custom-radio"
                                                           name="feature[<?php echo $recRow->id; ?>][]"
                                                           value="<?php echo $uncheckd[0]; ?>">
                                                    <label for=""><?php echo $uncheckd[1]; ?></label>
                                                </li>
                                            <?php }
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <?php $items++;
                        }

                    } 
                    // $feature_of_room = $subpackageInfo->class_room_style;
                    // $none_selected = ($subpackageInfo->class_room_style == 'best_deal' || $subpackageInfo->class_room_style == 'featured_room')?'selected':'none';
                    ?>

                    <!-- <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">
                                Feature of Rooms :
                            </label>
                        </div>
                        <div class="form-checkbox-radio col-md-9">
                            <input type="radio" class="custom-radio" name="class_room_style" id="check1"
                                value="best_deal" <?php echo ($feature_of_room == 'best_deal') ? 'checked' : ''; ?>>
                            <label for="">Best Deal</label>
                            <input type="radio" class="custom-radio" name="class_room_style" id="check0"
                                value="featured_room" <?php echo ($feature_of_room == 'featured_room') ? 'checked' : ''; ?>>
                            <label for="">Featured Room</label>
                            <input type="radio" class="custom-radio" name="class_room_style" id="check0"
                                value="" <?php echo ($none_selected == 'none') ? 'checked' : ''; ?>>
                            <label for="">None</label>
                        </div>
                    </div> -->

                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Occupancy:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="2 People" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="occupancy" id="occupancy"
                                   value="<?php echo !empty($subpackageInfo->occupancy) ? $subpackageInfo->occupancy : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">View:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="City/Jungle" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="view" id="view"
                                   value="<?php echo !empty($subpackageInfo->view) ? $subpackageInfo->view : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Bed:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="King/Deluxe/Twin" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="bed" id="bed"
                                   value="<?php echo !empty($subpackageInfo->bed) ? $subpackageInfo->bed : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Room Size:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="120sqm" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="room_size" id="room_size"
                                   value="<?php echo !empty($subpackageInfo->room_size) ? $subpackageInfo->room_size : ''; ?>">
                        </div>
                    </div>

                    <!-- <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Room Service:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Yes/No" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="room_service" id="room_service"
                                   value="<?php //echo !empty($subpackageInfo->room_service) ? $subpackageInfo->room_service : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Airport Pickup:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Yes/No" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="airport_pickup" id="airport_pickup"
                                   value="<?php //echo !empty($subpackageInfo->airport_pickup) ? $subpackageInfo->airport_pickup : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Private Balcony:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Yes/No" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="private_balcony" id="private_balcony"
                                   value="<?php //echo !empty($subpackageInfo->private_balcony) ? $subpackageInfo->private_balcony : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Check In/Out:</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="14:00/12:00" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="checkinout" id="checkinout"
                                   value="<?php //echo !empty($subpackageInfo->checkinout) ? $subpackageInfo->checkinout : ''; ?>">
                        </div>
                    </div> -->

                    <div class="form-row">
                        <div class="form-label col-md-6">
                            <label for="">
                                Brief :
                            </label>
                            <div class="form-input">
                                <textarea name="detail" id="detail"
                                          class="medium-textarea"><?php echo !empty($subpackageInfo->detail) ? $subpackageInfo->detail : ""; ?></textarea>
                            </div>
                        </div>
                    </div>

                <?php } ?>
                <?php if ($pkg->id == 12) { ?>
                    <div class="form-row">
                    <div class="col-md-3 mt-3">
                                    <label>Vat/Pan Document</label>
                                    <div class="add-list-media-wrap">
                                           
                                            <input type="file" id="companyDoc" name="companyDoc" accept="image/*">
                                <div id="preview_Company_Doc">
                                          

                                    
                                            <div class="" id="removeSavedCompanyDoc1">
                                                <div class="infobox info-bg">
                                                    <div class="button-group" data-toggle="buttons">
                                                        <a class="btn btn-sm small float-right" href="javascript:void(0);" onclick="deleteSavedCompanyDoc(1);">
                                                            <i class="glyph-icon icon-trash-o"></i>
                                                        </a>
                                                    </div>
                                                    <img src="<?php echo IMAGE_PATH . 'hotelusercompanydoc/' . $subpackageInfo->image4; ?>"
                                     style="width:100%"/>
                                                    <input type="hidden" name="imageArraynameCompanyDoc" value=" <?php echo $subpackageInfo->image4 ?> " class=""/>
                                                </div>
                                            </div>
                                      
                                  
                                </div>
                                    </div>
                                    </div>
                                    </div>
                                    <?php } if ($pkg->id == 16) { ?>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Opening hours :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="theatre_style" id="theatre_style"
                                   value="<?php echo !empty($subpackageInfo->theatre_style) ? $subpackageInfo->theatre_style : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Closing hours :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="class_room_style"
                                   id="class_room_style"
                                   value="<?php echo !empty($subpackageInfo->class_room_style) ? $subpackageInfo->class_room_style : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Cuisine :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="shape" id="shape"
                                   value="<?php echo !empty($subpackageInfo->shape) ? $subpackageInfo->shape : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Dress Code:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="round_table" id="round_table"
                                   value="<?php echo !empty($subpackageInfo->round_table) ? $subpackageInfo->round_table : ''; ?>">
                        </div>
                    </div>
                    
                <?php } ?>
                <?php if ($pkg->id==11) { ?>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Hall Amenities:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="cocktail" id="cocktail"
                                   value="<?php echo !empty($subpackageInfo->cocktail) ? $subpackageInfo->cocktail : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Size :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="seats" id="seats"
                                   value="<?php echo !empty($subpackageInfo->seats) ? $subpackageInfo->seats : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-10">
                            <label for="">
                                More Details :
                            </label>
                            <textarea name="below_content" id="below_content"
                                    class="large-textarea"><?php echo !empty($subpackageInfo->below_content) ? $subpackageInfo->below_content : ""; ?></textarea>
                            <a class="btn medium bg-orange mrg5T" title="Read More" id="readMore"
                            href="javascript:void(0);">
                                <span class="button-content">Read More</span>
                            </a>
                        </div>
                    </div>
                <?php }?>
                


                <?php if ($pkg->id == 17) { ?>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Theatre Style :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="theatre_style" id="theatre_style"
                                   value="<?php echo !empty($subpackageInfo->theatre_style) ? $subpackageInfo->theatre_style : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Class Room Style:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="class_room_style"
                                   id="class_room_style"
                                   value="<?php echo !empty($subpackageInfo->class_room_style) ? $subpackageInfo->class_room_style : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">U Shape :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="shape" id="shape"
                                   value="<?php echo !empty($subpackageInfo->shape) ? $subpackageInfo->shape : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Round Table:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="round_table" id="round_table"
                                   value="<?php echo !empty($subpackageInfo->round_table) ? $subpackageInfo->round_table : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Cluster :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="clusture" id="clusture"
                                   value="<?php echo !empty($subpackageInfo->clusture) ? $subpackageInfo->clusture : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Cocktail:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="cocktail" id="cocktail"
                                   value="<?php echo !empty($subpackageInfo->cocktail) ? $subpackageInfo->cocktail : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Seats :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="" class="col-md-12" type="text" name="seats" id="seats"
                                   value="<?php echo !empty($subpackageInfo->seats) ? $subpackageInfo->seats : ''; ?>">
                        </div>
                    </div>
                <?php } ?>

                <?php if ($pkg->id == 2) { ?>
                    <!-- <div class="form-row">

                        <div class="form-label col-md-2">
                            <label for="">Location:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="09th Floor of Tower B" class="col-md-12" type="text" name="location"
                                   id="location"
                                   value="<?php //echo !empty($subpackageInfo->location) ? $subpackageInfo->location : ''; ?>">
                        </div>
                        <div class="form-label col-md-2">
                            <label for="">Serves:</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="All kinds of Cocktals and Mocktails" class="col-md-12" type="text"
                                   name="serve" id="serve"
                                   value="<?php //echo !empty($subpackageInfo->serve) ? $subpackageInfo->serve : ''; ?>">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Time :</label>
                        </div>
                        <div class="form-input col-md-4">
                            <input placeholder="12:00 hrs Onwards - 22:00 hrs Last Order" class="col-md-12" type="text"
                                   name="time" id="time"
                                   value="<?php //echo !empty($subpackageInfo->time) ? $subpackageInfo->time : ''; ?>">
                        </div>

                    </div> -->


                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Seminar :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Seminar" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="seminar" id="seminar"
                                   value="<?php echo !empty($subpackageInfo->seminar) ? $subpackageInfo->seminar : ''; ?>">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Meeting :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Meeting" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="meeting" id="meeting"
                                   value="<?php echo !empty($subpackageInfo->meeting) ? $subpackageInfo->meeting : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Events :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Events" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="events" id="events"
                                   value="<?php echo !empty($subpackageInfo->events) ? $subpackageInfo->events : ''; ?>">
                        </div>
                    </div>                    
                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Conference :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Conference" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="conference" id="conference"
                                   value="<?php echo !empty($subpackageInfo->conference) ? $subpackageInfo->conference : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Catering :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Catering" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="catering" id="catering"
                                   value="<?php echo !empty($subpackageInfo->catering) ? $subpackageInfo->catering : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Celebration :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Celebration" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="celebration" id="celebration"
                                   value="<?php echo !empty($subpackageInfo->celebration) ? $subpackageInfo->celebration : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Organic Food :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Organic Food" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="organic_food" id="organic_food"
                                   value="<?php echo !empty($subpackageInfo->organic_food) ? $subpackageInfo->organic_food : ''; ?>">
                        </div>
                    </div>                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Occupancy :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Occupancy" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="occupancy" id="occupancy"
                                   value="<?php echo !empty($subpackageInfo->occupancy) ? $subpackageInfo->occupancy : ''; ?>">
                        </div>
                    </div>                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">View :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="City/Village" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="view" id="view"
                                   value="<?php echo !empty($subpackageInfo->view) ? $subpackageInfo->view : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Size :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="120sqm" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="size" id="size"
                                   value="<?php echo !empty($subpackageInfo->size) ? $subpackageInfo->size : ''; ?>">
                        </div>
                    </div>                    
                    
                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Service :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Service" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="service" id="room_price1"
                                   value="<?php echo !empty($subpackageInfo->service) ? $subpackageInfo->service : ''; ?>">
                        </div>
                    </div>                    <div class="form-row">
                        <div class="form-label col-md-2">
                            <label for="">Live Music :</label>
                        </div>
                        <div class="form-input col-md-6">
                            <input placeholder="Live Music" class="col-md-3 validate[length[0,3]]" type="text"
                                   name="live_music" id="live_music"
                                   value="<?php echo !empty($subpackageInfo->live_music) ? $subpackageInfo->live_music : ''; ?>">
                        </div>
                    </div>






                    <!-- Feature Listing -->
                    <?php $svfr = !empty($subpackageInfo->feature) ? $subpackageInfo->feature : '';
                    $saveRec = unserialize($svfr);
                    $RecFearures = Features::get_all_byparnt(0);
                    $items = 1;
                    if ($RecFearures) {
                        foreach ($RecFearures as $recRow) { ?>
                            <div class="form-row">
                                <div class="form-label col-md-2">
                                    <label for="">
                                        <?php echo $recRow->title; ?> :
                                    </label>
                                </div>
                                <div class="form-checkbox-radio col-md-10 form-input">
                                    <input type="text" placeholder="Title" class="col-md-4 validate[length[0,250]]"
                                           name="fparent[<?php echo $recRow->id; ?>][]"
                                           value="<?php echo !empty($saveRec[$recRow->id][0][0]) ? $saveRec[$recRow->id][0][0] : ''; ?>">
                                    <div class="clear"></div>
                                    <script>
                                        $(document).ready(function () {
                                            $("#items<?php echo $items;?>").sortable();
                                        });
                                    </script>
                                    <ul id="items<?php echo $items; ?>" class="items">
                                        <?php $childRec = Features::get_all_byparnt($recRow->id);
                                        $checked = $unchecked = array();
                                        $i = 1;
                                        if (!empty($saveRec)) {
                                            //separating the checked ones in order they are saved in db
                                            if (!empty($saveRec[$recRow->id][1])) {
                                                foreach ($saveRec[$recRow->id][1] as $saved) {
                                                    for ($i = 0; $i < sizeof($childRec); $i++) {
                                                        if ($saved == $childRec[$i]->id) {
                                                            $checked[] = [$childRec[$i]->id, $childRec[$i]->title];
                                                        }
                                                    }
                                                }
                                            }
                                            //separating the unchecked ones
                                            foreach ($childRec as $childRow) {
                                                if (!empty($saveRec[$recRow->id][1])) {
                                                    $unchecked[] = (in_array($childRow->id, $saveRec[$recRow->id][1])) ? '' : [$childRow->id, $childRow->title];
                                                }else{
                                                    $unchecked[] = [$childRow->id, $childRow->title];
                                                }
                                            }
                                        } else {
                                            foreach ($childRec as $childRow) {
                                                $unchecked[] = [$childRow->id, $childRow->title];
                                            }
                                        }
                                        foreach ($checked as $checkd) { ?>
                                            <li class="list">
                                                <input type="checkbox" class="custom-radio"
                                                       name="feature[<?php echo $recRow->id; ?>][]"
                                                       value="<?php echo $checkd[0]; ?>" checked="checked">
                                                <label for=""><?php echo $checkd[1]; ?></label>
                                            </li>
                                        <?php 
                                        echo ($i % 4 == 0) ? '<div class="clear"></div>' : '';
                                        $i++;
                                        }
                                        foreach ($unchecked as $uncheckd) {
                                            if (!empty($uncheckd)) { ?>
                                                <li class="list">
                                                    <input type="checkbox" class="custom-radio"
                                                           name="feature[<?php echo $recRow->id; ?>][]"
                                                           value="<?php echo $uncheckd[0]; ?>">
                                                    <label for=""><?php echo $uncheckd[1]; ?></label>
                                                </li>
                                            <?php }
                                        echo ($i % 4 == 0) ? '<div class="clear"></div>' : '';
                                        $i++;
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <?php $items++;
                        }

                    } ?>
                    

                <?php } ?>

                <div class="form-row">
                    <div class="form-label col-md-10">
                        <label for="">
                            Content :
                        </label>
                        <textarea name="content" id="content"
                                  class="large-textarea"><?php echo !empty($subpackageInfo->content) ? $subpackageInfo->content : ""; ?></textarea>
                        <a class="btn medium bg-orange mrg5T" title="Read More" id="readMore"
                           href="javascript:void(0);">
                            <span class="button-content">Read More</span>
                        </a>
                    </div>
                </div>
                

                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Published :
                        </label>
                    </div>
                    <div class="form-checkbox-radio col-md-9">
                        <input type="radio" class="custom-radio" name="status" id="check1"
                               value="1" <?php echo !empty($status) ? $status : "checked"; ?>>
                        <label for="">Published</label>
                        <input type="radio" class="custom-radio" name="status" id="check0"
                               value="0" <?php echo !empty($unstatus) ? $unstatus : ""; ?>>
                        <label for="">Un-Published</label>
                    </div>
                </div>

                <!-- Meta Tags-->
                <div class="form-row">
                    <div class="form-checkbox-radio col-md-9">
                        <a class="btn medium bg-blue" href="javascript:void(0);" onClick="toggleMetadata();">
                        <span class="glyph-icon icon-separator float-right">
                            <i class="glyph-icon icon-caret-down"></i>
                        </span>
                            <span class="button-content"> Metadata Info </span>
                        </a>
                    </div>
                </div>
                <div class="form-row <?php echo (!empty($subpackageInfo->meta_keywords) || !empty($subpackageInfo->meta_description) || !empty($subpackageInfo->meta_title)) ? '' : 'hide'; ?> metadata">
                    <div class="col-md-12">
                        <div class="form-input col-md-12">
                            <input placeholder="Meta Title" class="col-md-6 validate[required]" type="text"
                                   name="meta_title" id="meta_title"
                                   value="<?php echo !empty($subpackageInfo->meta_title) ? $subpackageInfo->meta_title : ""; ?>">
                        </div>
                        <br/>
                        <div class="form-input col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <textarea placeholder="Meta Keyword" name="meta_keywords" id="meta_keywords"
                                              class="character-keyword validate[required]"><?php echo !empty($subpackageInfo->meta_keywords) ? $subpackageInfo->meta_keywords : ""; ?></textarea>
                                    <div class="keyword-remaining clear input-description">250 characters left</div>
                                </div>
                                <div class="col-md-6">
                                    <textarea placeholder="Meta Description" name="meta_description"
                                              id="meta_description"
                                              class="character-description validate[required]"><?php echo !empty($subpackageInfo->meta_description) ? $subpackageInfo->meta_description : ""; ?></textarea>
                                    <div class="description-remaining clear input-description">160 characters left</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button btn-action='0' type="submit" name="submit"
                        class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4"
                        id="btn-submit" title="Save">
                <span class="button-content">
                    Save
                </span>
                </button>
                <button btn-action='1' type="submit" name="submit"
                        class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4"
                        id="btn-submit" title="Save">
                <span class="button-content">
                    Save & More
                </span>
                </button>
                <button btn-action='2' type="submit" name="submit"
                        class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4"
                        id="btn-submit" title="Save">
                <span class="button-content">
                    Save & quit
                </span>
                </button>
                <input myaction='0' type="hidden" name="idValue" id="idValue"
                       value="<?php echo !empty($subpackageInfo->id) ? $subpackageInfo->id : 0; ?>"/>
                <input type="hidden" name="type" id="type"
                       value="<?php echo !empty($subpackageInfo->type) ? $subpackageInfo->type : $pid; ?>"/>
            </form>
        </div>
    </div>
    <script>
        var base_url = "<?php echo ASSETS_PATH; ?>";
        var editor_arr = ["content","below_content"];
        create_editor(base_url, editor_arr);
    </script>

    <link href="<?php echo ASSETS_PATH; ?>uploadify/uploadify.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="<?php echo ASSETS_PATH; ?>uploadify/jquery.uploadify.min.js"></script>
    <script type="text/javascript">
        // <![CDATA[
        $(document).ready(function () {
            $('#subpackage_upload').uploadify({
                'swf': '<?php echo ASSETS_PATH;?>uploadify/uploadify.swf',
                'uploader': '<?php echo ASSETS_PATH;?>uploadify/uploadify.php',
                'formData': {
                    PROJECT: '<?php echo SITE_FOLDER;?>',
                    targetFolder: 'images/subpackage/',
                    thumb_width: 380,
                    thumb_height: 478
                },
                'method': 'post',
                'cancelImg': '<?php echo BASE_URL;?>uploadify/cancel.png',
                'auto': true,
                'multi': true,
                'hideButton': false,
                'buttonText': 'Upload Image',
                'width': 125,
                'height': 21,
                'removeCompleted': true,
                'progressData': 'speed',
                'uploadLimit': 100,
                'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png; *.GIF; *.JPG; *.JPEG; *.PNG;',
                'buttonClass': 'button formButtons',
                /* 'checkExisting' : '/uploadify/check-exists.php',*/
                'onUploadSuccess': function (file, data, response) {
                    $('#uploadedImageName').val('1');
                    var filename = data;
                    $.post('<?php echo BASE_URL;?>apanel/package/uploaded_image_sub.php', {imagefile: filename}, function (msg) {
                        $('#preview_Image').append(msg).show();
                    });

                },
                'onDialogOpen': function (event, ID, fileObj) {
                },
                'onUploadError': function (file, errorCode, errorMsg, errorString) {
                    alert(errorMsg);
                },
                'onUploadComplete': function (file) {
                    //alert('The file ' + file.name + ' was successfully uploaded');
                }
            });

            $('#image_upload').uploadify({
                'swf': '<?php echo ASSETS_PATH;?>uploadify/uploadify.swf',
                'uploader': '<?php echo ASSETS_PATH;?>uploadify/uploadify.php',
                'formData': {
                    PROJECT: '<?php echo SITE_FOLDER;?>',
                    targetFolder: 'images/subpackage/image/',
                    thumb_width: 380,
                    thumb_height: 478
                },
                'method': 'post',
                'cancelImg': '<?php echo BASE_URL;?>uploadify/cancel.png',
                'auto': true,
                'multi': false,
                'hideButton': false,
                'buttonText': 'Upload Image',
                'width': 125,
                'height': 21,
                'removeCompleted': true,
                'progressData': 'speed',
                'uploadLimit': 100,
                'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png;  *.GIF; *.JPG; *.JPEG; *.PNG;',
                'buttonClass': 'button formButtons',
                /* 'checkExisting' : '/uploadify/check-exists.php',*/
                'onUploadSuccess': function (file, data, response) {
                    $('#uploadedImageName').val('1');
                    var filename = data;
                    $.post('<?php echo BASE_URL;?>apanel/package/uploaded_image_sub2.php', {imagefile: filename}, function (msg) {
                        $('#preview_Image2').html(msg).show();
                    });

                },
                'onDialogOpen': function (event, ID, fileObj) {
                },
                'onUploadError': function (file, errorCode, errorMsg, errorString) {
                    alert(errorMsg);
                },
                'onUploadComplete': function (file) {
                    //alert('The file ' + file.name + ' was successfully uploaded');
                }
            });

            $('#menu_upload').uploadify({
                'swf': '<?php echo ASSETS_PATH;?>uploadify/uploadify.swf',
                'uploader': '<?php echo ASSETS_PATH;?>uploadify/uploadify.php',
                'formData': {
                    PROJECT: '<?php echo SITE_FOLDER;?>',
                    targetFolder: 'images/subpackage/menuimg/',
                    thumb_width: 380,
                    thumb_height: 478
                },
                'method': 'post',
                'cancelImg': '<?php echo BASE_URL;?>uploadify/cancel.png',
                'auto': true,
                'multi': false,
                'hideButton': false,
                'buttonText': 'Upload Image',
                'width': 125,
                'height': 21,
                'removeCompleted': true,
                'progressData': 'speed',
                'uploadLimit': 100,
                'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png; *.GIF; *.JPG; *.JPEG; *.PNG;',
                'buttonClass': 'button formButtons',
                /* 'checkExisting' : '/uploadify/check-exists.php',*/
                'onUploadSuccess': function (file, data, response) {
                    $('#uploadedImageName').val('1');
                    var filename = data;
                    $.post('<?php echo BASE_URL;?>apanel/package/uploaded_image_sub3.php', {imagefile: filename}, function (msg) {
                        $('#preview_Image3').html(msg).show();
                    });

                },
                'onDialogOpen': function (event, ID, fileObj) {
                },
                'onUploadError': function (file, errorCode, errorMsg, errorString) {
                    alert(errorMsg);
                },
                'onUploadComplete': function (file) {
                    //alert('The file ' + file.name + ' was successfully uploaded');
                }
            });

            $('#header_upload').uploadify({
                'swf': '<?php echo ASSETS_PATH;?>uploadify/uploadify.swf',
                'uploader': '<?php echo ASSETS_PATH;?>uploadify/uploadify.php',
                'formData': {
                    PROJECT: '<?php echo SITE_FOLDER;?>',
                    targetFolder: 'images/subpackage/imgheader/',
                    thumb_width: 200,
                    thumb_height: 200
                },
                'method': 'post',
                'cancelImg': '<?php echo BASE_URL;?>uploadify/cancel.png',
                'auto': true,
                'multi': false,
                'hideButton': false,
                'buttonText': 'Upload Image',
                'width': 125,
                'height': 21,
                'removeCompleted': true,
                'progressData': 'speed',
                'uploadLimit': 100,
                'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png; *.GIF; *.JPG; *.JPEG; *.PNG;',
                'buttonClass': 'button formButtons',
                /* 'checkExisting' : '/uploadify/check-exists.php',*/
                'onUploadSuccess': function (file, data, response) {
                    $('#uploadedImageName').val('1');
                    var filename = data;
                    $.post('<?php echo BASE_URL;?>apanel/package/header_image2.php', {imagefile: filename}, function (msg) {
                        $('#preview_himage').html(msg).show();
                    });
                },
                'onDialogOpen': function (event, ID, fileObj) {
                },
                'onUploadError': function (file, errorCode, errorMsg, errorString) {
                    alert(errorMsg);
                },
                'onUploadComplete': function (file) {
                    //alert('The file ' + file.name + ' was successfully uploaded');
                }
            });
            $('#companyDoc').uploadify({
            'swf': '<?php echo ASSETS_PATH;?>uploadify/uploadify.swf',
            'uploader': '<?php echo ASSETS_PATH;?>uploadify/uploadify.php',
            'formData': {
                PROJECT: '<?php echo SITE_FOLDER;?>',
                targetFolder: 'images/hotelusercompanydoc/',
                thumb_width: 200,
                thumb_height: 200
            },
            'method': 'post',
            'cancelImg': '<?php echo BASE_URL;?>assets/uploadify/cancel.png',
            'auto': true,
            'multi': true,
            'hideButton': false,
            'buttonText': 'Upload Document',
            'width': 125,
            'height': 27,
            'removeCompleted': true,
            'progressData': 'speed',
            'uploadLimit': 100,
            'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png; *.pdf; *.GIF; *.JPG; *.JPEG; *.PNG; *.PDF;',
            'buttonClass': 'button formButtons',
            /* 'checkExisting' : '/uploadify/check-exists.php',*/
            'onUploadSuccess': function (file, data, response) {
                var filename = data;
                $.post('<?php echo BASE_URL;?>apanel/package/uploaded_user_company_doc.php', {imagefile: filename}, function (msg) {
                    $('#preview_Company_Doc').html(msg).show();
                });

            },
            'onDialogOpen': function (event, ID, fileObj) {
            },
            'onUploadError': function (file, errorCode, errorMsg, errorString) {
                alert(errorMsg);
            },
            'onUploadComplete': function (file) {
                //alert('The file ' + file.name + ' was successfully uploaded');
            },
        });
        });
        
        // ]]>
    </script>
<?php endif;
include("subpackage_images.php"); ?>