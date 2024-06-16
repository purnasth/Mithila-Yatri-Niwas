<?php
require_once("includes/initialize.php");
$usermail = User::get_UseremailAddress_byId(1);
$ccusermail = User::field_by_id(1, 'optional_email');
$sitename = Config::getField('sitename', true);

foreach ($_POST as $key => $val) {
  $$key = $val;
}
if ($_POST['action'] == "forContact"):
    $body = '
        <table width="100%" border="0" cellpadding="0" style="font:12px Arial, serif;color:#222;">
            <tr>
                <td><p>Dear Sir,</p></td>
            </tr>
            <tr>
                <td>
                    <p>
                        <span style="color:#0065B3; font-size:14px; font-weight:bold">Comment message</span><br />
                        The details provided are:
                    </p>
                    <p>
                        <strong>Name</strong> : ' . $cf_name.$cf_lname . '<br />		
                        <strong>E-mail Address</strong>: ' . $cf_email . '<br />
                        <strong>Phone</strong>: ' . $cf_phone . '<br />
                        <strong>Message</strong>: ' . $message . '<br />
                    </p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>Thank you,<br />
                    ' . $cf_name.$cf_lname . '
                    </p>
                </td>
            </tr>
        </table>
  ';
  
    $mail = new PHPMailer();
    $mail->SetFrom($cf_email, $cf_name);
    $mail->AddReplyTo($cf_email, $cf_name);
    $mail->AddAddress($usermail, $sitename);
    if (!empty($ccusermail)) {
        $rec = explode(';', $ccusermail);
        if ($rec) {
            foreach ($rec as $row) {
                $mail->AddCC($row, $sitename);
            }
        }
    }
  
    $mail->Subject = 'Enquiry Contact mail from ' . $cf_name;
    $mail->MsgHTML($body);
  
    if (!$mail->Send()) {
        echo json_encode(array("action" => "unsuccess", "message" => "We could not sent your message at the time. Please try again later."));
    } else {
        echo json_encode(array("action" => "success", "message" => "Your message has been successfully sent."));
    }
  endif;


if ($_POST['action'] == "forHall"):
  $body = '
      <table width="100%" border="0" cellpadding="0" style="font:12px Arial, serif;color:#222;">
          <tr>
              <td><p>Dear Sir,</p></td>
          </tr>
          <tr>
              <td>
                  <p>
                      <span style="color:#0065B3; font-size:14px; font-weight:bold">Online Reservation Inquiry message</span><br />
                      The details provided are:
                  </p>
                  <p>
                      <strong>Event Date</strong> : ' . $event_date . '<br />		
                      <strong>Pax</strong> : ' . $pax . '<br />		
                      <strong>Event Time</strong> : ' . $event_time . '<br />		
  ';
  if (!empty($rooms)) {
      $body .= '<strong>Rooms for the Event?</strong> : ' . $rooms . ' <br />';
  }
  $body .= '
                      <strong>Name</strong> : ' . $name . '<br />		
                      <strong>E-mail Address</strong>: ' . $email . '<br />
                      <strong>Phone</strong>: ' . $phone . '<br />
                  </p>
              </td>
          </tr>
          <tr>
              <td>
                  <p>Thank you,<br />
                  ' . $name . '
                  </p>
              </td>
          </tr>
      </table>
';

  $mail = new PHPMailer();
  $mail->SetFrom($email, $name);
  $mail->AddReplyTo($email, $name);
  $mail->AddAddress($usermail, $sitename);
  if (!empty($ccusermail)) {
      $rec = explode(';', $ccusermail);
      if ($rec) {
          foreach ($rec as $row) {
              $mail->AddCC($row, $sitename);
          }
      }
  }

  $mail->Subject = 'Online Reservation Inquiry mail from ' . $name;
  $mail->MsgHTML($body);

  if (!$mail->Send()) {
      echo json_encode(array("action" => "unsuccess", "message" => "We could not sent your Inquiry at the time. Please try again later."));
  } else {
      echo json_encode(array("action" => "success", "message" => "Your Inquiry has been successfully sent."));
  }
endif;


?>