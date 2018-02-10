<?php 
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use App\Classes\CalculatorRequest;
use App\Classes\Calculator;

class CalculatorController extends Controller{
    
    public function index(Request $request, CalculatorRequest $calcrequest, Calculator $calc){
        
        $result = 0;
        if( $request->query->has('operation') ){
            
            try{
                
                $params = $calcrequest->getParameters($request);
                $result = $calc->do( $params['a'], $params['b'], $params['op']);
                
            }catch(\Exception $e){
                
                $this->addFlash( 'error', $e->getMessage() );
            }
        }
        
        return $this->render('calculator/calculator.html.twig', ['result' => $result]);
    }
}