let students = ["An", "Duong", "Linh", "Diep"];
function showListStudent() {
    let html = '';
    for (let i = 0; i < students.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += students[i];
        html += "</td>";
        html += "<td>";
        html += '<button onclick="deleteStudent('+i+')">Delete</button>';
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById('student-list').innerHTML = html;
}

showListStudent();

function deleteStudent(i) {
    if (confirm('are you sure?')){
        students.splice(i, 1);
        showListStudent();
    }
}

function addStudent(){
    let inputvalue= document.getElementById('inputvalue').value;
    students.push(inputvalue);
    showListStudent();
}
let number=[4,-2,5,4,0,20,10];
function searchMax(){
    let max=number[0];
    for(let i=0;i<number.length;i++){
            if(max<number[i]){
                max=number[i];
        }
    }
    document.getElementById('result').innerHTML=max;
}
function count(){
    let countvalue= prompt("Nhập giá trị cần đếm: ");
    let count=0;

    for(let i=0;i<number.length;i++){
        if(number[i]==countvalue){
            count++;
        }
    }
    if(count>0){
        document.getElementById('result2').innerHTML="Số lần lặp lại là "+ count;
    }
    else
        alert("Không có giá trị trong mảng");
}
function deleteany(){
    let deletevalue=prompt("Nhập giá trị muốn xóa trong mảng: ");
    for(let i=0;i<number.length;i++){
        if(deletevalue==number[i]){
        number.splice(i, 1);}
    }
    for(let i=0;i<number.length;i++){
        document.write(number[i])
    }
}
