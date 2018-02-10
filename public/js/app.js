(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports = class Calculator{
    
    constructor(){
        
        this.firstOperator = null;
        this.secondOperator = null;
        this.operation = null;
    }
    
    start(){
        
        this.setControls();
        this.setEventListeners();
    }
    
    setControls(){
        
        this.screen = document.querySelector('#screen');
        
        this.divide = document.querySelector('#divide');
        this.multiply = document.querySelector('#multiply');
        this.substract = document.querySelector('#minus');
        this.add = document.querySelector('#plus');
        
        this.clear = document.querySelector('#clear');
        this.sign = document.querySelector('#sign');
        this.equal = document.querySelector('#equal');
        
        this.form = document.querySelector('#calc-form');
        
        this.digits = document.querySelectorAll('.calculator .buttons .digit');
    }
    
    setEventListeners(){
        
        this.form.addEventListener( 'submit', (e) => { e.preventDefault() } );
        
        [].forEach.call(this.digits, (e) => {
            
            e.addEventListener( 'click',this.onClickDigit.bind(this) );
        });
        
        this.equal.addEventListener( 'click', this.onClickEqual.bind(this) );
        
        this.divide.addEventListener( 'click', this.onClickOperator.bind(this) );
        this.multiply.addEventListener( 'click', this.onClickOperator.bind(this) );
        this.substract.addEventListener( 'click', this.onClickOperator.bind(this) );
        this.add.addEventListener( 'click', this.onClickOperator.bind(this) );
        
        this.clear.addEventListener( 'click', this.onClickClear.bind(this) );
    }
    
    getScreenValue(){
        
        return this.screen.value;
    }
    
    updateScreen(value){
        
        this.screen.value = value;
        return true;
    }
    
    onClickDigit(event){
                
        let currentScreenVal = this.getScreenValue();
        let newScreenValue;
        
        if( currentScreenVal === '0' ){
            
            newScreenValue = event.target.value;
        } else {
            
            newScreenValue = currentScreenVal.concat(event.target.value);
        }
        
        this.updateScreen(newScreenValue);
    }
    
    onClickOperator(event){
        
        this.firstOperator = this.getScreenValue();
        this.operation = event.target.value;
        
        this.updateScreen('0');
    }
    
    onClickEqual(event){
        
        this.secondOperator = this.getScreenValue();
        
        this.buildDataToSubmit();
        this.form.submit();
    }
    
    buildDataToSubmit(){
        
        let node = document.createElement("input");
        
        node.name = 'first';
        node.value = this.firstOperator;
        this.form.appendChild( node.cloneNode() );
        
        node.name = 'second';
        node.value = this.secondOperator;
        this.form.appendChild( node.cloneNode() );
        
        node.name = 'operation';
        node.value = this.operation;
        this.form.appendChild( node.cloneNode() );        
    }
    
    onClickClear(){
        
        this.reset();
        this.updateScreen('0');
    }
    
    reset(){
        
        this.firstOperator = null;
        this.secondOperator = null;
        this.operation = null;
    }
}
},{}],2:[function(require,module,exports){
const Calculator = require('./classes/Calculator');

const app = new Calculator();
app.start();

},{"./classes/Calculator":1}]},{},[2]);
