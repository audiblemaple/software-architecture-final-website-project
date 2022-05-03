
function nofunc(){
    alert('פונקציונליות זו אינה נתמכת כרגע.');
}

function addGoods(){
    location.replace('goods.html');
}

function statistics(){
    location.replace('statistics.html');
}

function back(){
    location.replace('main menu.html');
}

function addRow() {
    var errorMsg = "";

    var productName = document.getElementById("productName");
    var productCatNum = document.getElementById("productCatNum");
    var pricePerUnit = document.getElementById("pricePerUnit");
    var amount = document.getElementById("amount");

    if (productName.value == '')
        errorMsg += "נא הכנס שם מוצר.\n";
    if (productCatNum.value == '')
        errorMsg += "נא הכנס מק\"ט למוצר\n";
    if (amount.value == 0)
        errorMsg += "נא הכנס כמות למוצר.\n";
    if (pricePerUnit.value == 0)
        errorMsg += "נא הכנס מחיר ליחידה.\n";

    if (errorMsg != "") {
        alert(errorMsg);
        return;
    }

    var table = document.getElementById("productsTbl");
    var rowCount = table.rows.length;
    var isEditing = false;
    //if there are any rows besides title row and it's not disabled, we are editing.
    if (rowCount > 1) {
        isEditing = !table.rows[1].cells[0].firstChild.disabled;
    }
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var productNameElement = document.createElement("input");

    productNameElement.disabled = true;
    productNameElement.type = "text";
    productNameElement.name = "productName[]";
    productNameElement.value = productName.value;
    cell1.appendChild(productNameElement);

    var cell2 = row.insertCell(1);
    var productCatNumElement = document.createElement("input");
    productCatNumElement.disabled = true;
    productCatNumElement.type = "text";
    productCatNumElement.name = "productCatNum[]";
    productCatNumElement.value = productCatNum.value;
    cell2.appendChild(productCatNumElement);

    var cell3 = row.insertCell(2);
    var amountElement = document.createElement("input");
    amountElement.disabled = true;
    amountElement.type = "text";
    amountElement.name = "amount[]";
    amountElement.value = amount.value;
    cell3.appendChild(amountElement);

    var cell4 = row.insertCell(3);
    var pricePerUnitElement = document.createElement("input");
    pricePerUnitElement.disabled = true;
    pricePerUnitElement.type = "text";
    pricePerUnitElement.name = "pricePerUnit[]";
    pricePerUnitElement.value = pricePerUnit.value;
    cell4.appendChild(pricePerUnitElement);

    clearInputRow();
}


function clearInputRow() {
    var inputField = document.getElementById("productName");
    inputField.value = '';
    var inputField = document.getElementById("productCatNum");
    inputField.value = '';
    inputField = document.getElementById("amount");
    inputField.value = '';
    inputField = document.getElementById("pricePerUnit");
    inputField.value = '';
}


function deleteRow() {
    var table = document.getElementById("productsTbl");
    var rowCount = table.rows.length;
    if (rowCount > 1)
        table.deleteRow(rowCount - 1);
}


function capValues() {
    var pricePerUnit = document.getElementById("pricePerUnit");
    var amount = document.getElementById("amount");


    pricePerUnit.value = pricePerUnit.value == '' || pricePerUnit.value < 0 ? '' : pricePerUnit.value;
}


function editRows() {
    var table = document.getElementById("productsTbl");
    var rows = table.rows;
    if (rows.length == 1)
        return;

    //toggle row disabled, start at 1 because 0 is headers.
    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            rows[i].cells[j].firstChild.disabled = !rows[i].cells[j].firstChild.disabled;
        }
    }
    var editButton = document.getElementById("editBtn");
    let editText = "עריכה";
    let stopEditText = "הפסק עריכה";
    editButton.innerHTML = editButton.innerHTML == editText ? stopEditText : editText;
}

