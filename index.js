let buffer='0';
let runningTotal=0;
let previousOperator=null;
const screen= document.querySelector('.screen')

function buttonClicked(value){
 if(isNaN(parseInt(value))){
  handleSymbol(value)
 }else{
  handleNumber(value)
 }
 rerender()
}

 function handleNumber(number){
 if(buffer==='0'){
  buffer=number;
 }else{
  buffer+=number
 }  
 }

function handleMath(value){
if(buffer=='0'){
 return;
}
const intBuffer=parseInt(buffer)
if(runningTotal==0){
 runningTotal=intBuffer
}
previousOperator=value;
buffer='0'
console.log(runningTotal);

}

function flushOperator(intBuffer){
if(previousOperator=='+'){
 runningTotal+=intBuffer
}else if(previousOperator=='-'){
  runningTotal-=intBuffer
}else if(previousOperator=='*'){
 runningTotal*=intBuffer
}else if(previousOperator=='/'){
 runningTotal/=intBuffer
}

}



 function handleSymbol(symbol){
 switch(symbol){
  case 'c':
   buffer='0';
   break;
   case '=':
    if(previousOperator==null){
       return;
    }
     flushOperator(parseInt(buffer));
     previousOperator=null;
     buffer= ""+runningTotal;
     runningTotal=0;
    
    break;
    case 'Del':
     if(buffer.length==1){
      buffer='0';
     }else{
      buffer=buffer.substring(0,buffer.length-1)
     }
     break;
    case '-':
    case '*':
    case '/':
    case '+':
     handleMath(symbol)
     break;
    
 }
  
 }



function init(){
 document.querySelector('.calc-buttons').addEventListener('click',function(event){
buttonClicked(event.target.innerText)
 })
}

function rerender(){
screen.innerText=buffer;
}



  
init()