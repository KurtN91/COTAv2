
if (isset ($_POST['name']) && isset ($_POST['email']) && isset ($_POST['phone']) && isset ($_POST['message'])){
    $to = "green71957@aol.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $street_address = $_POST['street-address'] ?: "Not given";
    $street_address_2 = $_POST['street-address2'] ?: "Not given";
    $city = $_POST['city'] ?: "Not given";
    $state = $_POST['state'] ?: "Not given";
    $zip = $_POST['zip'] ?: "Not given";

    $subject = "New email from visitor!";
    
    $send_message = "Hello, you have a message from " . $name . ". Their email address is " . $email . " and their phone number is " . $phone . ". This was the message they wanted you to see: <br><br>" . $message . "<br><br>Street Address: " . $street_address . "<br>Street Address 2: " . $street_address_2 . "<br>City: " . $city . "<br>State: " . $state . "<br>Zip or Postal: " . $zip . "<br><br>Have a good day!";
    
    mail($to, $subject, $send_message);

}
