<?php 
namespace App\Classes;

use Symfony\Component\HttpFoundation\Request;
use App\Classes\CalculatorOperations;

class CalculatorRequest{
    
    public function getParameters(Request $request){
            
        $a = $request->query->get('first', 0);    
        $b = $request->query->get('second', 0);
        $op = $request->get('operation', null);
        
        if( !in_array($op, CalculatorOperations::Operations) ){
            
            throw new \Exception('Unsupported calculator operation.');
        }
        
        return ['a' => $a, 'b' => $b, 'op' => $op];
    }
}