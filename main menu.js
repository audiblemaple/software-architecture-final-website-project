

function nofunc(){
    alert('פונקציונליות זו אינה נתמכת כרגע.');
}

// Main Menu: //
function WorkerLogin(){
    location.replace('worker login.html');
}

function manageGoods(){
    location.replace('goods.html');
}

function SearchCustomer(){
    var customer = document.getElementById('InputBox').value;
    if ( customer === '0528081434'){
        var customerData = document.getElementById('customerData');
        customerData.style.visibility = 'visible';

        var dat = document.getElementById('dat');
        dat.style.visibility = 'visible';

        var Center = document.getElementById('Center');
        Center.style.visibility = 'visible';

        var categories = document.getElementById('categories');
        categories.style.visibility = 'visible';

        var newcust = document.getElementById('newcust');
        newcust.style.visibility = 'hidden';
    }
}

function hide(){
    var customerData = document.getElementById('customerData');
    customerData.style.visibility = 'hidden';

    var newcust = document.getElementById('newcust');
    newcust.style.visibility = 'hidden';

    var dat = document.getElementById('dat');
    dat.style.visibility = 'hidden';

    var Center = document.getElementById('Center');
    Center.style.visibility = 'hidden';

    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'hidden';

    var categories = document.getElementById('categories');
    categories.style.visibility = 'hidden';

    // hide things that I will add.
}

function newCustomer(){ // add code for new customer
    var dat = document.getElementById('dat');
    dat.style.visibility = 'hidden';

    var categories = document.getElementById('categories');
    categories.style.visibility = 'hidden';

    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'hidden';

    var customerData = document.getElementById('customerData');
    customerData.style.visibility = 'visible';

    var newcust = document.getElementById('newcust');
    newcust.style.visibility = 'visible';

}

function nocustomer(){
    var customerData = document.getElementById('customerData');
    customerData.style.visibility = 'visible';

    var Center = document.getElementById('Center');
    Center.style.visibility = 'visible';

    var categories = document.getElementById('categories');
    categories.style.visibility = 'visible';

    var newcust = document.getElementById('newcust');
    newcust.style.visibility = 'hidden';

}

function checkInput(){
    var msg = '';
    var name = document.getElementById("custname").value;
    var tel = document.getElementById("custtel").value;
    var id = document.getElementById("custid").value;

    var i = 0;
    var ascii;
    var telgood = true;
    var idgood = true;


    if(name == ''){
        msg += "נא הכנס שם לקוח.\n"
    }
    for(i; i < 10; i++){
        ascii = tel.codePointAt(i);
        if(((tel.length != 10) || (ascii > 58) || (ascii < 48)) && telgood){
            msg += "נא הכנס מספר טלפון תקין. \n";
            telgood = false;
        }
        ascii = id.codePointAt(i);
        if(((id.length != 9) || (ascii > 58) || (ascii < 48)) && idgood){
            msg += "נא הכנס מספר תעודת זהות תקין. \n";
            idgood = false;
        }
    }

    if(msg != ""){
        alert(msg);
        return false;
    }
    return true;
}

function addCustomer(){
    if(checkInput()){
        location.reload();
    }
}

function addItem1(){  // fix code for adding items
    var data = document.getElementById('Menu').value;
    document.getElementById('Menu').innerHTML = data + '\n' + 'הוספת מוצר';
}

function showveg(){
    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'visible';

    //////////////// top left
    document.getElementById('centerTopLeft').firstElementChild.src = 'vegetables//cucumber.png';
    document.getElementById('centerTopLeftPrice').innerHTML = '₪מלפפון אורגני, מחיר לקילו 3.90';

    // top middle
    document.getElementById('centerTopMiddle').firstElementChild.src = 'vegetables//onion.png';
    document.getElementById('centerTopMiddlePrice').innerHTML = '₪בצל אורגני, מחיר לקילו 4.90';

    // top right
    document.getElementById('centerTopRight').firstElementChild.src = 'vegetables//orange pepper.png';
    document.getElementById('centerTopRightPrice').innerHTML = '₪פלפל כתום אורגני, מחיר לקילו 6.90';


    //////////// middle left
    document.getElementById('centerMiddleLeft').firstElementChild.src = 'vegetables//pepper.png';
    document.getElementById('centerMiddleLeftPrice').innerHTML = '₪פלפל אדום אורגני, מחיר לקילו 5.50';

    // middle middle
    document.getElementById('centerMiddleMiddle').firstElementChild.src = 'vegetables//potatoes.png';
    document.getElementById('centerMiddleMiddlePrice').innerHTML = '₪תפוח אדמה אורגני, מחיר לקילו 3.60';

    // middle right
    document.getElementById('centerMiddleRight').firstElementChild.src = 'vegetables//red cabbage.png';
    document.getElementById('centerMiddleRightPrice').innerHTML = '₪כרוב אדום אורגני, מחיר לקילו 8.20';


    //////////// Lower left
    document.getElementById('centerLowerLeft').firstElementChild.src = 'vegetables//red onion.png';
    document.getElementById('centerLowerLeftPrice').innerHTML = '₪בצל אדום אורגני, מחיר לקילו 1.50';

    // Lower middle
    document.getElementById('centerLowerMiddle').firstElementChild.src = 'vegetables//red potatopng.png';
    document.getElementById('centerLowerMiddlePrice').innerHTML = '₪תפוח אדמה אדום אורגני, מחיר לקילו 7.60';

    // Lower right
    document.getElementById('centerLowerRight').firstElementChild.src = 'vegetables//sherry tomatoes.png';
    document.getElementById('centerLowerRightPrice').innerHTML = '₪עגבניות שרי אורגני, מחיר לקילו 12.50';
}

function showswee(){

    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'visible';
    //////////////// top left
    document.getElementById('centerTopLeft').firstElementChild.src = 'sweets//klik green.png';
    document.getElementById('centerTopLeftPrice').innerHTML = '₪קליק ירוק, מחיר: 7.90';

    // top middle
    document.getElementById('centerTopMiddle').firstElementChild.src = 'sweets//klik red.png';
    document.getElementById('centerTopMiddlePrice').innerHTML = '₪קליק אדום, מחיר: לקילו 7.90';

    // top right
    document.getElementById('centerTopRight').firstElementChild.src = 'sweets//klik yellow.png';
    document.getElementById('centerTopRightPrice').innerHTML = '₪קליק צהוב, מחיר: 7.90';


    //////////// middle left
    document.getElementById('centerMiddleLeft').firstElementChild.src = 'sweets//pzman.png';
    document.getElementById('centerMiddleLeftPrice').innerHTML = '₪פסק זמן קרמל, מחיר: 4.90';

    // middle middle
    document.getElementById('centerMiddleMiddle').firstElementChild.src = 'sweets//pzman cofee.png';
    document.getElementById('centerMiddleMiddlePrice').innerHTML = '₪פסק זמן קפה, מחיר: 5.90';

    // middle right
    document.getElementById('centerMiddleRight').firstElementChild.src = 'sweets//pzman hazel.png';
    document.getElementById('centerMiddleRightPrice').innerHTML = '₪פסק זמן אגוזים, מחיר: 4.00';


    //////////// Lower left
    document.getElementById('centerLowerLeft').firstElementChild.src = 'sweets//pzman ord.png';
    document.getElementById('centerLowerLeftPrice').innerHTML = '₪פסק זמן, מחיר: 4.90';

    // Lower middle
    document.getElementById('centerLowerMiddle').firstElementChild.src = 'sweets//snick cream.png';
    document.getElementById('centerLowerMiddlePrice').innerHTML = '₪סניקרס קרם, מחיר: 6.90';

    // Lower right
    document.getElementById('centerLowerRight').firstElementChild.src = 'sweets//twix.png';
    document.getElementById('centerLowerRightPrice').innerHTML = '₪טוויקס, מחיר: 12.50';
}


function showdair(){

    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'visible';
    //////////////// top left
    document.getElementById('centerTopLeft').firstElementChild.src = 'dairy//eggs  18 M.png';
    document.getElementById('centerTopLeftPrice').innerHTML = '₪ 18 ביצים M, מחיר: 25.00';  // change quantity

    // top middle
    document.getElementById('centerTopMiddle').firstElementChild.src = 'dairy//eggs L.png'; // change quantity
    document.getElementById('centerTopMiddlePrice').innerHTML = '₪ 12 ביצים, מחיר: לקילו 15.00';

    // top right
    document.getElementById('centerTopRight').firstElementChild.src = 'dairy//eggs M.png';  // change quantity
    document.getElementById('centerTopRightPrice').innerHTML = '₪ 12 ביצים, מחיר: 17.00';


    //////////// middle left
    document.getElementById('centerMiddleLeft').firstElementChild.src = 'dairy//chocolate milk.png';
    document.getElementById('centerMiddleLeftPrice').innerHTML = '₪שוקו יטבטה, מחיר: 4.90';

    // middle middle
    document.getElementById('centerMiddleMiddle').firstElementChild.src = 'dairy//milk post.png';
    document.getElementById('centerMiddleMiddlePrice').innerHTML = '₪חלב מפוסטר תנובה, מחיר: 5.90';

    // middle right
    document.getElementById('centerMiddleRight').firstElementChild.src = 'dairy//milk reg.png';
    document.getElementById('centerMiddleRightPrice').innerHTML = '₪חלב תנובה, מחיר: 4.00';


    //////////// Lower left
    document.getElementById('centerLowerLeft').firstElementChild.src = 'dairy//milky.png';
    document.getElementById('centerLowerLeftPrice').innerHTML = '₪מילקי, מחיר: 4.90';

    // Lower middle
    document.getElementById('centerLowerMiddle').firstElementChild.src = 'dairy//milky pzman.png';
    document.getElementById('centerLowerMiddlePrice').innerHTML = '₪מילקי פסק זמן, מחיר: 6.90';

    // Lower right
    document.getElementById('centerLowerRight').firstElementChild.src = 'dairy//milky 8.png';
    document.getElementById('centerLowerRightPrice').innerHTML = '₪מילקי אריזה 8, מחיר: 12.50';
}



function showfru(){

    var CenterTable = document.getElementById('centerTable');
    CenterTable.style.visibility = 'visible';
    //////////////// top left
    document.getElementById('centerTopLeft').firstElementChild.src = 'fruits//green apple.png';
    document.getElementById('centerTopLeftPrice').innerHTML = '₪ תפוח ירוק, מחיר לקילו: 4.00';  // change quantity

    // top middle
    document.getElementById('centerTopMiddle').firstElementChild.src = 'fruits//red apple.png'; // change quantity
    document.getElementById('centerTopMiddlePrice').innerHTML = '₪ תפוח אדום, מחיר לקילו: 5.00';

    // top right
    document.getElementById('centerTopRight').firstElementChild.src = 'fruits//orange.png';  // change quantity
    document.getElementById('centerTopRightPrice').innerHTML = '₪ תפוז, מחיר לקילו: 17.00';


    //////////// middle left
    document.getElementById('centerMiddleLeft').firstElementChild.src = 'fruits//banana.png';
    document.getElementById('centerMiddleLeftPrice').innerHTML = '₪בננה, מחיר לקילו: 4.90';

    // middle middle
    document.getElementById('centerMiddleMiddle').firstElementChild.src = 'fruits//kiwi.png';
    document.getElementById('centerMiddleMiddlePrice').innerHTML = '₪קיווי, מחיר לקילו: 5.90';

    // middle right
    document.getElementById('centerMiddleRight').firstElementChild.src = 'fruits//strawberry.png';
    document.getElementById('centerMiddleRightPrice').innerHTML = '₪תותים, מחיר לקילו: 1000';


    //////////// Lower left
    document.getElementById('centerLowerLeft').firstElementChild.src = 'fruits//grapes.png';
    document.getElementById('centerLowerLeftPrice').innerHTML = '₪ענבים, מחיר: 12.90';

    // Lower middle
    document.getElementById('centerLowerMiddle').firstElementChild.src = 'fruits//avocado.png';
    document.getElementById('centerLowerMiddlePrice').innerHTML = '₪אבוקדו, מחיר: 8.90';

    // Lower right
    document.getElementById('centerLowerRight').firstElementChild.src = 'fruits//ananas.png';
    document.getElementById('centerLowerRightPrice').innerHTML = '₪אננס, מחיר: 16.50';
}