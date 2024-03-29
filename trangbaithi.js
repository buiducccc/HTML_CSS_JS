
function storageQuestion () {
    var listTest = localStorage.getItem("listTest") ? JSON.parse(localStorage.getItem("listTest")) : [];
    var listT = [];
    // var checkTest = true;
    var storeC1 = "";
    var cau1 = document.getElementsByName("cau1");
        for (var i = 0; i < cau1.length; i++) {
            if (cau1[i].checked == true) {
                // storeC1 = cau1[i].value;
                listT.push(cau1[i].value); 
    }
}
    var storeC2 = "";
    var cau2 = document.getElementsByName("cau2");
        for (var i = 0; i < cau2.length; i++) {
            if (cau2[i].checked == true) {
                listT.push(cau2[i].value);
            }
        
    }
    var storeC3 = "";
    var cau3 = document.getElementsByName("cau3");
        for (var i = 0; i < cau3.length; i++) {
            if (cau3[i].checked == true) {
                // storeC3 = cau3[i].value; 
                listT.push(cau3[i].value);
            }
        }
    var storeC4 = "";
    var cau4 = document.getElementsByName("cau4");
        for (var i = 0; i < cau4.length; i++) {
            if (cau4[i].checked == true) {
                // storeC4 = cau4[i].value;        
                listT.push(cau4[i].value);
            } 
    }
    var storeC5 = "";
    var cau5 = document.getElementsByName("cau5");
        for (var i = 0; i < cau5.length; i++) {
            if (cau5[i].checked == true) {
                listT.push(cau5[i].value);       
            } 
    }
    localStorage.setItem("listTest", JSON.stringify(listT));
}