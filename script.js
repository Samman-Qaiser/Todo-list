
let todo = JSON.parse(localStorage.getItem("todo-list")) || [];
function addtask(){
    var input=document.querySelector("#task-input") 
    todo.push({task:input.value,status:false})
    updateLocalStorage();
    renderlist()
}

function delTask(index) {
    var  check=prompt("are you sure you want to delete  Y or N?")
    var alert=document.querySelector(".alert-error")
    if(check==='Y'||check==='y'||check==='yes'||check==='YES'||check==='Yes'){
        todo.splice(index, 1); 
           alert.textContent="Task deleted...."
    alert.style.color="blue"
    updateLocalStorage();
        renderlist(); 
     }
    console.log(check)

}
function renderlist(){
   
    var ul=document.querySelector(".adding-list")
     ul.innerHTML = "";
         todo.forEach(function(item,index)
        {
            var li=document.createElement("li")
            li.innerHTML=`  <div>
                     <input type="checkbox" name="" id="" onclick="toggleCompleted(${index})" ${item.status ? 'checked' : ''}>
                      <p style="text-decoration: ${item.status ? 'line-through' : 'none'};">${item.task}</p>
                    </div>
                    
                    <div>
                <i class="ri-pencil-fill pen" onclick="editTask(${index})"></i>
                <i class="ri-delete-bin-6-line bin" onclick="delTask(${index})"></i>
                    </div>`
        ul.appendChild(li)
     

        })
         
      
} 

function createlist(){
    var add=document.querySelector(".ri-add-circle-fill")
    var input=document.querySelector("#task-input")
    var alert=document.querySelector(".alert-error")
    var ul=document.querySelector(".adding-list") 
    add.addEventListener("click",function(){
        if(input.value=== ""){
               alert.textContent=""
             alert.style.color=" red"
         alert.innerHTML=`Enter some task .....<lottie-player src="https://lottie.host/87a584f8-5986-4767-8c31-e4ba551270e4/09n7R6CeLF.json" background="##FFFFFF" speed="1" style="width: 30px; height: 30px" loop  autoplay direction="1" mode="normal"></lottie-player>`

          input.focus()
        }
        else{
            addtask();
            alert.textContent = "Task added successfully";
            alert.style.color="rgb(138, 210, 29)"
            input.value = ""; 
        }
    });
    renderlist();
}
function toggleCompleted(index) {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')[index];
    let p = checkbox.nextElementSibling;
    var alert=document.querySelector(".alert-error")

    if (checkbox.checked) {
        p.style.textDecoration = "line-through";
        p.style.color = "rgb(138, 210, 29)";
        todo[index].status = true;
        alert.innerHTML=`Task completed successfully <lottie-player src="https://lottie.host/d3e239ff-b84f-4ceb-9f11-42a9dfec7e08/KEQndA8ovv.json" background="##fff" speed="1" style="width: 50px; height: 50px" loop  autoplay direction="1" mode="normal"></lottie-player>`
       alert.style.color="rgb(138, 210, 29)"

        updateLocalStorage();
        renderlist();
      
        const duration = 5 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 50 * (timeLeft / duration);
  
   
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
    } else {
        p.style.textDecoration = "none";
        p.style.color = "";
        todo[index].status = false;
         alert.textContent=""

    }
}

function editTask(index) {
    var input = document.querySelector("#task-input");
    var alert=document.querySelector(".alert-error")
    input.value=todo[index].task
    todo.splice(index,1)
    updateLocalStorage();
    renderlist()
    alert.innerHTML=`Edit the task....<dotlottie-player src="https://lottie.host/8ac464f7-483f-46d4-8272-d1cb1d82b52c/SSlZRjm6Om.json" background="transparent" speed="1" style="width: 60px; height: 50px;transform: translateX(-5%);z-index: 3;" direction="1" playMode="normal" loop autoplay></dotlottie-player>`
    alert.style.color="blue"

}
function updateLocalStorage() {
    localStorage.setItem("todo-list", JSON.stringify(todo));
}
function loader(){
  var h1=document.querySelector(".loader h1")
  var clutter=""
  var text=h1.textContent.split("")
  text.forEach(function(dets){
    clutter+=`<span>${dets}</span>`
  })
  h1.innerHTML=clutter
var tl=gsap.timeline()
tl.to(".loader",{
  right:0,
  duration:2
})
tl.from(".loader h1 span",{
  x:300,
  opacity:0,
  duration:2,
  stagger:0.1
},"ani")
tl.from(".loader img",{
  opacity:0,
  y:900,
  duration:2
},"ani")
tl.to(".loader h1 span",{
  y:-500,
  duration:2
},"ani2")
tl.to(".loader img",{
  y:-500,duration:2
},"ani2")
tl.to(".loader",{
  top:"-150%",
  duration:3
})
}
loader()

createlist()


