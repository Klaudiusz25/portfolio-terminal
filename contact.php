<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "twojmail@example.com";
  $subject = "Wiadomość z portfolio";
  $message = "Od: ".$_POST['name']."\nEmail: ".$_POST['email']."\n\n".$_POST['message'];
  $headers = "From: portfolio@example.com";
  mail($to, $subject, $message, $headers);
  echo "Wiadomość wysłana!";
}
?>
