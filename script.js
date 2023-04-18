let toDoInput = document.querySelector("input");
let add = document.querySelector("span");
let clear = document.querySelector("button");
let list = document.querySelector("ul");
let error = document.querySelector("p");
let deletedItem = undefined;
let count=0;

innerHTML=" ";
list.style.listStyle = "none";
list.style.padding="5px 10px";

list.style.display="flex";
list.style.flexDirection="column";

let deleteBtn = document.createElement("p");
deleteBtn.style.padding="10px";
deleteBtn.style.border="2px solid violet";
deleteBtn.style.width="20%";
// list.appendChild(deleteBtn);

add.addEventListener("click",(e)=>{
  
  
    if(toDoInput.value.trim()==""){
        error.classList.replace("d-none","d-block")
    }
    else{

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent=toDoInput.value;
    count++;
    toDoInput.value="";

    li.appendChild(a);
    
   
    li.classList.add("listItem");
    li.classList.add("bg-light");
    li.classList.add("mt-2");
    li.style.width="100%";
    li.style.display="flex";
    li.style.justifyContent="space-between";
   

    let icon = document.createElement("i");
    // icon.style.padding="9px" ;
    icon.style.backgroundColor="red";
    icon.setAttribute("class","fa-solid fa-trash d-none");
    icon.style.color="white";
    icon.style.cursor="pointer";


    li.addEventListener("mouseover",()=>{
        icon.classList.replace("d-none","d-block");
        icon.style.padding="4px" ;

        icon.addEventListener("click",(e)=>{
        //     if (window.confirm("Are you sure to delete?")){
        //     deletedItem = e.target.list.appendChild(li);
        //     e.target.list.appendChild(li).remove();
        // }
        // else{
        //     window.alert("no")
        // }

        list.appendChild(li).remove();
        })
    })
    li.addEventListener("mouseout",()=>{
        icon.classList.replace("d-block","d-none");
    })


    li.appendChild(icon);
    list.appendChild(li);

    error.classList.replace("d-block","d-none");


    clear.addEventListener("click",(e)=>{
    
        list.appendChild(li).remove();
     })
    }

    
   
    // let result = document.querySelector("p");
    // result.style.color="black";
    // result.innerText=`You have ${count} pending tasks`;
    
    // let card = document.querySelector(".custom-card")
    // card.append(`You have ${count} pending tasks`) ;
    
    // console.log(list.parentElement.append(`You have ${count} pending tasks`));
    
    // li.style.padding="7px 0px";


  

    
  
})





