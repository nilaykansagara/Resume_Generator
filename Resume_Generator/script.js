function addNewWEField(id) {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");

    let lastNode = document.getElementById(id).lastChild;
    lastNode.parentNode.insertBefore(newNode, lastNode.nextSibling)
}

function addNewAQField(id) {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");

    let lastNode = document.getElementById(id).lastChild;
    lastNode.parentNode.insertBefore(newNode, lastNode.nextSibling)
}

function addNewHBField(id) {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hbfield");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder","Enter here");

    let lastNode = document.getElementById(id).lastChild;
    lastNode.parentNode.insertBefore(newNode, lastNode.nextSibling)
}

function generateCV() {
    //alert("generateCV");

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    let nameT2 = document.getElementById("nameT2");

    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML = addressField;

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

    let weField = document.getElementById("weField").value;
    let weT = document.getElementById("weT");
    weT.innerHTML = weField;

    let aqField = document.getElementById("aqField").value;
    let aqT = document.getElementById("aqT");
    aqT.innerHTML = aqField;

    let mailField = document.getElementById("mailField").value;
    let gmailT = document.getElementById("gmailT");
    gmailT.innerHTML = mailField;

    let linkedField = document.getElementById("linkedField").value;
    let linkT = document.getElementById("linkT");
    linkT.innerHTML = linkedField;

    let instaField = document.getElementById("instaField").value;
    let instaT = document.getElementById("instaT");
    instaT.innerHTML = instaField;

    let wes=document.getElementsByClassName("weField");
    
    let str1="";

    for (let e of wes){
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str1;

    let aqs=document.getElementsByClassName("eqfield");
    
    let str2="";

    for (let a of aqs){
        str2 = str2 + `<li> ${a.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str2;

    let hbs=document.getElementsByClassName("hbfield");
    
    let str3="";

    for (let a of hbs){
        str3 = str3 + `<li> ${a.value} </li>`;
    }

    document.getElementById("hbT").innerHTML = str3;


    let file=document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }
    

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

function printCV() {
    window.print();
    saveImageBtn = creteButton("Downlod");
    saveImageBtn.position(150,60);
    saveImageBtn.mousePressed(saveAsCanvas);
}

function saveAsCanvas() {
    saveAsCanvas("output_canvas.png");
}
