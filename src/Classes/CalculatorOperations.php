<?php 
namespace App\Classes;

abstract class CalculatorOperations{
    
    const Add = '+';
    const Substract = '-';
    const Divide = '/';
    const Multiply = '*';
    
    const Operations = [
        self::Add, 
        self::Substract,
        self::Divide, 
        self::Multiply
    ];
}