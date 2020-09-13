

////////////////////////////PATIENTS MANAGEMENT SYSTEM///////////////////////////////////
///////////////////////////DYNAMICALLY GENERATING TABLE//////////////////////////////////
var tableInfo = document.querySelector(".patients-info > div");
var table= document.createElement("table");
tableInfo.appendChild(table);
tableInfo.setAttribute("id", "table");



// headerName.innerHTML("Name:");
function addCell(tr, value) {
    var td = document.createElement('td');

    td.innerHTML = value;

    tr.appendChild(td)
    
  }

var a = 0;
  function addRow(table, value_1, value_2, value_3) {
    var tr = document.createElement('tr');

    a++;
    addCell(tr, value_1);
    addCell(tr, value_2);
    addCell(tr, value_3);
  
    table.appendChild(tr);

  }
  
    

  function main() {
    

    addRow(table, '№', 'Full Name: ', 'Age:');
    addRow(table, a, 'Nigina Karimova', '15');
    addRow(table, a, 'Islom Malikov', '50');
    addRow(table, a, 'Karina Asrorova', '25');

    var consumers = localStorage.getItem('anArray');
  var consumersJs = JSON.parse(consumers);

  for (item of consumersJs) {
    addRow(table, a, item.name, item.age);
  }
    
  }
$(document).ready(function(){
   $("button").on("click", function(){
      $(this).next(table).slideToggle(200);
  });
})

