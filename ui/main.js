var button = document.getElementById('counter');
  alert('button cliked');
var counter = 0;
button.onclick = function(){
    alert('button cliked');
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
