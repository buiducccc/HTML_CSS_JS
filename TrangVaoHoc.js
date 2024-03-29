function resetInput() {
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
}
// xử lý làm cho form hiển thị nhập câu hỏi
function change(obj) {
    let choose = document.getElementsByClassName('select-option');
    let formTextquestion = document.querySelector('.formTextquestion');
    let formMorequestion = document.querySelector('.formMorequestion');
    let formOnequestion = document.querySelector('.formOnequestion');
    let values = obj.value;
    if (values == ""){
        formMorequestion.style.display = "none"
        formOnequestion.style.display  = "none";
        formTextquestion.style.display  = "none";
    }
    else if (values == "option1") {
        formMorequestion.style.display  = "block";
        formOnequestion.style.display  = "none" ;
        formTextquestion.style.display  = "none";
    } 
    else if (values == "option2") {
        formMorequestion.style.display = "none"
        formOnequestion.style.display  = "block";
        formTextquestion.style.display  = "none";
    }
    else {
        formMorequestion.style.display = "none"
        formOnequestion.style.display  = "none";
        formTextquestion.style.display  = "block";
    }
} 

// xử lí khi điền vào ô input text
function validateFormTextQuestion() {
    let text1 = document.getElementById("text1").value;
    let text2 = document.getElementById("text2").value;
    // listQuestion là mảng lưu trữ các câu hỏi
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    // listQ là 1 đối tượng câu hỏi
    const listQ = {
        typeQuestion : "Điền đáp án",
        question : text1,
        answer : text2
    }
    if (text1 == "" || text2 == "") {
        alert("Hãy điền đầy đủ thông tin");
    }
    else {
        listQuestion.push(listQ);
        alert("Thêm thành công");
    }
    localStorage.setItem("list-Question", JSON.stringify(listQuestion));
    renderQuestion();
}
// xử lý form chọn 1 đáp án
function validateFormOneQuestion() {
    let text4 = document.getElementById("text4"); // lấy ra ô câu hỏi
    let radios = document.getElementsByName('radio'); // lấy ra các nút chọn
    let rA = document.getElementById('rA').value;
    let rB = document.getElementById('rB').value;
    let rC = document.getElementById('rC').value;
    let rD = document.getElementById('rD').value;
    let radioValue = "" ;
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : []; // kiểm tra list-question trên locl có tồn tại ko, nếu ko tồn tại thì tạo mảng rỗng, tồn tại thì lấy ra
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) { // kiểm tra đáp án nào đang được chọn
            radioValue = radios[i].value; // lấy ra đáp án đã chọn 
        }
    }
    
    // xử lý nếu chuỗi rỗng
    if (text4 == "") {
        alert("Bạn chưa điền ô câu hỏi, vui lòng nhập câu hỏi");
    }
    // xử lí nếu chuỗi trong ô nhập đáp rỗng
    else if (rA == "" || rB == "" || rC == "" || rD == "") {
        alert("Bạn chưa điền vào ô đáp án, vui lòng nhập đủ đáp án");
    } 
    else  if (radioValue == "") {
        alert("Bạn chưa chọn đáp án, vui lòng chọn đáp án!");
    }
    else {
        if (radioValue === "A") {
            const listQ = {
                typeQuestion : "Chọn 1 đáp án",
                question : text4.value,
                answer : radioValue + ": " + document.getElementById("rA").value,

            }
            listQuestion.push(listQ);
            alert("Thêm thành công");
            
        }
        else if (radioValue === "B") {
            const listQ = {
                typeQuestion : "Chọn 1 đáp án",
                question : text4.value,
                answer : radioValue + " " + document.getElementById("rB").value,

            }
            listQuestion.push(listQ);
            alert("Thêm thành công");

        }
        else if (radioValue === "C") {
            const listQ = {
                typeQuestion : "Chọn 1 đáp án",
                question : text4.value,
                answer : radioValue + " " + document.getElementById("rC").value,

            }
            listQuestion.push(listQ);
            alert("Thêm thành công");

        }
        else {
            const listQ = {
                typeQuestion : "Chọn 1 đáp án",
                question : text4.value,
                answer : radioValue + " " + document.getElementById("rD").value,

            }
            listQuestion.push(listQ);
            alert("Thêm thành công");

        }
    }
    localStorage.setItem("list-Question", JSON.stringify(listQuestion));
    renderQuestion();
    
}

function validateFormMoreQuestion() {
    let text3 = document.getElementById("text3").value;
    let choose = document.getElementsByName('choose');
    // let qA = document.getElementById('qA').value;
    // let qB = document.getElementById('qB').value;
    // let qC = document.getElementById('qC').value;
    // let qD = document.getElementById('qD').value;
    // console.log(qD);
    let radioValue = [];
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    for (let i = 0; i < choose.length; i++) {
        if (choose[i].checked == true) {
            radioValue.push(choose[i].value);
        }
    }
    console.log(radioValue);
    const listQ = {
        typeQuestion : "Chọn nhiều đáp án",
        question : text3,
        answer : []
    }
    if (text3 == "") {
        alert("Bạn chưa điền ô câu hỏi, vui lòng nhập câu hỏi");
    }
    // xử lí nếu chuỗi trong ô nhập đáp rỗng
    else if (qA == "" || qB == "" || qC == "" || qD == "") {
        alert("Bạn chưa điền vào ô đáp án, vui lòng nhập đủ đáp án");
    }
    else {
        for (let i = 0; i < radioValue.length; i++) {
            if (radioValue[i].value === "A") {  
                listQ.answer.push(document.getElementById("qA").value);
            }
            else if (radioValue[i].value === "B") {
                listQ.answer.push(document.getElementById('qB').value);
            }
            else if (radioValue[i].value === "C") {
                listQ.answer.push(document.getElementById('qC').value);
            }
            else  {
                listQ.answer.push(document.getElementById('qD').value);
            }
        }
    }
    
    listQuestion.push(listQ);
    localStorage.setItem("list-Question", JSON.stringify(listQuestion));
    alert("Thêm thành công")
    renderQuestion();
    
}

function renderQuestion () {
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    let curDate = new Date();
    let hours = curDate.getHours() + ":" + (curDate.getMinutes() ) + ":" + curDate.getSeconds();
    // tạo bảng lưu trữ dữ liệu
    let question = `<tr>
        <th>STT</th>
        <th>Thời gian</th>
        <th>Loại câu</th>
        <th>Câu hỏi</th>
        <th>Đáp án</th>
        <th>Trạng thái</th>
        <th>Chức năng</th>

    </tr>`
    // listQuestion.map((value, indexx) =>
    for(let i = 0 ; i < listQuestion.length ; i++) {
        question += `<tr>
        <td>${i + 1}</td>
        <td>${hours}</td>
        <td>${listQuestion[i].typeQuestion}</td>
        <td>${listQuestion[i].question}</td>
        <td>${listQuestion[i].answer}</td>
        <td>Chờ duyệt</td>
        <td>
            <button id = "delete" class = "btn" onclick = "deleteQuestion(${i})">Xóa</button>
            <button id = "edit" class = "btn" onclick = "editQuestion(${i})">Sửa</button>
        </td>
    </tr>`;
    }

    document.getElementById('tableContent').innerHTML = question;


}
function editQuestion (index) {
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    let choose = document.getElementsByClassName('select-option');
    let formTextquestion = document.querySelector('.formTextquestion');
    let formMorequestion = document.querySelector('.formMorequestion');
    let formOnequestion = document.querySelector('.formOnequestion');
    // let values = obj.value;
    // for (let i=0; i < listQuestion.length; i++) {
        if (listQuestion[index].typeQuestion === "Điền đáp án") {
            if (formMorequestion.style.display === "block" || formOnequestion.style.display === "block") {
                formMorequestion.style.display = "none"
                formOnequestion.style.display  = "none";
                formTextquestion.style.display  = "block";
                document.getElementById("text1").value = listQuestion[index].question;
                document.getElementById("text2").value = listQuestion[index].answer;
               

                document.getElementById("save").style.display = "block";
                document.getElementById("add").style.display = "none";
            }
            else {
                document.getElementById("text1").value = listQuestion[index].question;
                document.getElementById("text2").value = listQuestion[index].answer;
            
                document.getElementById("save").style.display = "block";
                document.getElementById("add").style.display = "none";
            }
            document.getElementById("index").value = index; // lấy ra index khi bấm vào ô dc chọn
        }
    }
// }
function changeQuestion () {
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    let index = document.getElementById("index").value;
    // console.log(index)
    listQuestion[index] = {
        typeQuestion: "Điền đáp án",
        question : document.getElementById('text1').value,
        answer: document.getElementById('text2').value
    }
    // console.log(listQuestion)
    localStorage.setItem("list-Question", JSON.stringify(listQuestion));
    renderQuestion();
    document.getElementById("save").style.display = "none";
    document.getElementById("add").style.display = "block";
    resetInput();
}
function deleteQuestion (index) {
    let listQuestion = localStorage.getItem("list-Question") ? JSON.parse(localStorage.getItem("list-Question")) : [];
    if (confirm("Bạn có muốn xóa ko?")) {
        listQuestion.splice(index, 1); // hàm xóa: index là vị trị bắt đầu, 1 là số lượng xóa
    }
    localStorage.setItem("list-Question", JSON.stringify(listQuestion));
    renderQuestion();

}
