// trim() ignoring white space.
document.addEventListener("DOMContentLoaded" , function(){
    let input = document.querySelector("input");
    let button = document.querySelector("button");
    let list = document.querySelector(".list");

    button.addEventListener("click" , function(){
        if(input.value.trim() !==""){
            let item = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = input.value;
            item.appendChild(span);
            let deleteButton = document.createElement("span");
            deleteButton.innerHTML =`<i class="fa-solid fa-trash"></i>`;
            // in this line we created className of button 
            deleteButton.className = "delete-Btn";
            deleteButton.addEventListener("click" ,function() {
                list.remove(item);
            });
            item.appendChild(deleteButton);
            list.appendChild(item);
            input.value="";
        }
    })
})