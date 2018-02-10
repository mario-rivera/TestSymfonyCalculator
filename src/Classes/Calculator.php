<?php 
namespace App\Classes;

use App\Classes\CalculatorOperations;

class Calculator{
    
    public function do($a, $b, $op){
        
        switch($op){
            
            case CalculatorOperations::Add:
                return $this->add($a,$b);
            
            case CalculatorOperations::Substract:
                return $this->substract($a,$b);
            
            case CalculatorOperations::Divide:
                return $this->divide($a,$b);
            
            case CalculatorOperations::Multiply:
                return $this->multiply($a,$b);
            
            default:
                return 0;
        }
    }
    
    public function add($a,$b){
        
        return $a+$b;
    }
    
    public function substract($a,$b){
        
        return $a-$b;
    }
    
    public function divide($a,$b){
        
        return $a/$b;
    }
    
    public function multiply($a,$b){
        
        return $a*$b;
    }
}