let days = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday'];

refresh();


function refresh() {
    document.getElementById('week').innerHTML = ' ';
    days.forEach(function(day) {
        let line =  day + '<br>';
        document.getElementById('week').innerHTML += line;
    });
}

function addItem() {
    let input = document.getElementById('input');
    let item = input.value;
    days.push(item);
    input.value = " ";
    refresh();

 
}

