let namasteBtn= document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

/*function showMsg(){
    alert("Namaste World!");
}"this displays namaste world"*/

function inputMsg(){
    let name=prompt('Enter name of Student');
    namasteBtn.textContent='Roll no 1:' + name;
}
