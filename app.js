
let tasks = localStorage.getItem('tasks') === null ? 0 : parseInt(localStorage.getItem('tasks'));
document.querySelector('button').addEventListener('click',()=>{
    tasks++;
    let message = document.querySelector('input').value;
    if(message.trim()!==''){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        let button = document.createElement('button');
        
        button.innerText = 'delete'
    
        li.innerText = message;
    
        localStorage.setItem(`task${tasks}`,message);
        button.addEventListener('click',()=>{
            localStorage.removeItem(`task${tasks}`);
            ul.removeChild(li);
        })
        
        li.classList.add('my-task-class');
        li.appendChild(button);
        ul.appendChild(li);
    
        localStorage.setItem('tasks',tasks);
    
        document.querySelector('input').value = '';
    }
    else{
        alert('Task is empty');
    }
    

})
function add(){
    const ul = document.querySelector('ul');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key at index `i`
        const value = localStorage.getItem(key); // Get the value for the key  
        if(key!== 'tasks'){
            let li = document.createElement('li');
            let button = document.createElement('button');
        
            button.innerText = 'delete'
        
            button.addEventListener('click',()=>{
            localStorage.removeItem(key);
            ul.removeChild(li);
            tasks--;
            localStorage.setItem('tasks',tasks);
            })
        
            li.innerText = value;
            li.classList.add('my-task-class');
            li.appendChild(button);
            ul.appendChild(li);
        }
    }
}
add();
gsap.from("#myImage", {
    duration: 2,         // Duration of 2 seconds
    opacity: 1,          // Fade-in effect
    scale: 1.5,          // Scale up to 1.5x
    ease: "power2.out",  // Smooth easing
    y: -50,
    x: 60,
    width : 300,
    height : 300               // Move upwards by 50px
  });
