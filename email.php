
<?php


if(isset($_POST["email"])) && !empty(($_POST["email"])) {

$id = addslashes($_POST["id"]))
$nome = addslashes($_POST["name"]))
$msg = addslashes($_POST["message"]))

$to = "techlink.contato@gmail.com";
$subject = "Contato - Aplicante: ID = $id";
$body = "Nome: ".$nome. "\r\n"
        "ID: ".$id
        "Menssagem: ".$msg;


mail("your@email.address", "Here is the subject line",


$_POST["insert your message here"]. "From: an@email.address");


}


?>