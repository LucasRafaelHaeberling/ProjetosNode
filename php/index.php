<?php
//Comandos
echo "Hello World!";

//PHP_EOL
echo "<hr>";
echo "<br>";
echo "<p>$nome</p>";


//criar variavel
$nome = "Lucas";
echo $nome;

$numero = 12;
$altura = 1.70;
$verdadeiro = true;
$sobrenome = "Da Silva";
echo "<br>";


var_dump($numero);
var_dump($altura);
var_dump($verdadeiro);
var_dump($sobrenome);

// criaçao do array no PHP
$notas = [6, 7, 9];
var_dump($notas);
echo "<br>";
echo "<pre>";
print_r($notas);

$notasComMateria = array(
    "Matematica" => 6,
    "Historia" => 7,
    "Artes" => 9
);
echo "<pre>";
print_r($notasComMateria);

$objeto = new stdClass();
$objeto->nome = "Nome";

// Funçao
function soma($a, $b){
    return $a+$b;
}
$resultadoDaSoma = soma(4,5);
echo $resultadoDaSoma;
?>