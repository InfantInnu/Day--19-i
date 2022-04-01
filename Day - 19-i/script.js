let div = document.createElement("div");
div.innerHTML =
 ` <div class="container">
 <div class="calculator">
     <input type="text" placeholder="0" id="output">
     <button onclick="Clear()">AC</button>
     <button onclick="del()">DEL</button>
     <button onclick="display('%')">%</button>
     <button onclick="display('/')">/</button>
     <button onclick="display('7')">7</button>
     <button onclick="display('8')">8</button>
     <button onclick="display('9')">9</button>
     <button onclick="display('*')">*</button>
     <button onclick="display('4')">4</button>
     <button onclick="display('5')">5</button>
     <button onclick="display('6')">6</button>
     <button onclick="display('-')">-</button>
     <button onclick="display('1')">1</button>
     <button onclick="display('2')">2</button>
     <button onclick="display('3')">3</button>
     <button onclick="display('+')">+</button>
     <button onclick="display('.')">.</button>
     <button onclick="display('0')">0</button>
     <button onclick="Calculate()"  class="equal">=</button>
 </div>
</div>`
document.body.append(div);
let outputScreen = document.getElementById("output");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);

    }
    catch(err){
        alert("Invalid");

    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}