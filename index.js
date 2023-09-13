let scr=document.getElementById('outputscreen');
let clicked=[];

function clearOperator(){
     if(clicked){
          clicked.forEach(ele => {
                 ele.classList.remove('operators-on');
                 ele.classList.add('operators');     
          });
       }
       clicked=[];
}

function display(num){
     clearOperator();    
     scr.value+=num;
     scr.scrollLeft = scr.scrollWidth;     
}

function calculate(){

     try{
          scr.value=eval(scr.value);
          scr.scrollLeft = scr.scrollWidth;
     }
     catch(err)
     {  
          scr.value="Invalid......."     
     }
}

function Clear(){
     scr.value=0;
}

function del(){
     scr.value=scr.value.slice(0,-1);
}

const operators = document.getElementsByClassName('operators');
for (const operator of operators) {
     operator.addEventListener('click',(e)=>{
          clicked.push(operator);
          operator.classList.remove('operators');
          operator.classList.add('operators-on');          
     })
}



function simulateButtonClick(key) {
     let button = document.querySelector(`[data-key="${key}"]`);
     if (button) {
         button.click(); // Trigger a click event on the corresponding button
     }
 }
 
 
 document.addEventListener('keydown', (event) => {
     const key = event.key;
     simulateButtonClick(key);
 });
 