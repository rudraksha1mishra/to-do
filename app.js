
let tasks = localStorage.getItem('tasks') === null ? 0 : parseInt(localStorage.getItem('tasks'));
document.querySelector('button').addEventListener('click',()=>{
    tasks++;
    let message = document.querySelector('input').value;
    if(message.trim()!==''){
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add('btndelete');
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
            button.classList.add('btndelete');
            button.innerHTML = '<img src="delete.png" style="width: 20px; height: 20px; border-radius: 100px; border: none;">';
        
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
    height : 300              // Move upwards by 50px
  });
  gsap.fromTo("li", {
    scale: 0,          // Start at scale 0 (invisible)
    opacity: 0         // Fully transparent
  }, {
    scale: 1,          // End at scale 1 (full size)
    opacity: 1,        // Fully visible
    duration: 1,     // Duration of 0.5 seconds per element
    stagger: 0.5,      // 0.2 seconds delay between each <li> popup
    ease: "back.out(1.7)" // Elastic 'pop' effect
  });
