let tasks = [];

function rendertask() {
    let tskcontainer = document.getElementById("tasklist");
    tskcontainer.innerHTML = "";
    tasks.map((task) => {
        let div = document.createElement('div');
        let div1=document.createElement('div');
        div1.setAttribute("id","tsk");
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", 'checkbox');
        checkbox.setAttribute("onclick","red()");
        checkbox.setAttribute("id","task");
        let name = document.createElement('label');
        let desc = document.createElement('label');
        let date = document.createElement('p');
        name.innerText = task.name;
        desc.innerText = task.description;
        date.innerText = task.date;
        div.classList.add('tasklist')
        div1.classList.add('task');
        name.classList.add('taskname');
        desc.classList.add('taskdesc');
        date.classList.add('red')
        tskcontainer.appendChild(div)
        div.appendChild(div1)
        div1.appendChild(checkbox)
        div1.appendChild(name)
        div1.appendChild(desc)
        div1.appendChild(date)
        console.log(div)
    })
}
function addtask(){
    let tskcontainer = document.getElementById("tasklist");
let tname = document.getElementById('tname');
let tdesc = document.getElementById('tdesc');
let date = document.getElementById('date');
let content= document.getElementById('content');
content.classList.add('hidden');
tskcontainer.classList.remove('hidden');
let registartask = {
    name:tname.value,
    description: tdesc.value,
    date: date.value
    
 }
 tasks.push(registartask);
//  console.log(tasks)
 rendertask();

}
function red(){
    let checkbox=document.getElementById('task');
    let task1=document.getElementById('tsk')
    console.log(task1)
    if(checkbox.checked==true){
        task1.classList.add('bg');
    }
    if(checkbox.checked==false){
        task1.classList.remove('bg');
    }
}
