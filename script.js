// Create a new list item when clicking on the "Add" button
var count = 0;
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var price = document.getElementById("price").value;
  var space = ', price: ';
  var t = document.createTextNode(inputValue);
  var u = document.createTextNode(price);
  var v = document.createTextNode(space);
  var total = document.getElementById('total');

  li.appendChild(t);
  li.appendChild(v);
  li.appendChild(u);
  if (inputValue === '') {
    alert("You must write something!");
    document.getElementById("myInput").value = "";
    document.getElementById("price").value = "";
  } else if (isNaN(price) == true || price === ''){
    alert("Price must be a number and cannot be empty");
    document.getElementById("myInput").value = "";
    document.getElementById("price").value = "";
  }else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    document.getElementById("price").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
    count += Number(price);
    var str = String(count);
    var temp = '';
    var counter = 0;
    for (var i=str.length-1; i>=0; i--){
        if (counter == 3){
            temp += '.';
            temp += str[i];
            counter =1;
        } else {
            temp += str[i];
            counter++;
        }
    }
    var result = '';
    for (var i=temp.length-1; i>=0; i--){
        result += temp[i];
    }
    
    total.innerHTML = 'Total Amount you need to pay: '+'Rp '+result+',00';
  }
}