<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$id = $_POST['id']; 

$token = "6554726862:AAGdry1bJC3J8iAriEeZXLARIAW_TA01Wak";
$chat_id = "-1002022529007";
$arr = array(
  'Имя пользователя: ' => $name,
  'Товар: ' => $phone,
  'Номер телефона: ' => $id 

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
