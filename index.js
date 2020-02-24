const insert_button = document.getElementById("b");
const input = document.getElementById('inp');
const result = document.getElementById('lst');

let todo = [];
insert_button.addEventListener('click',function(){
        todo.push(input.value);
        localStorage.setItem("todos",JSON.stringify(todo));
        var textnode = document.createTextNode(input.value);
        if(textnode.length == 0){
            alert("Enter some text");
        }
        else{
            var node = document.createElement("LI");
            node.appendChild(textnode);    
            result.append(node);
            node.setAttribute("id","btnn"+result.children.length);
            var remove_btn = document.createElement("BUTTON");
            remove_btn.innerText = "REMOVE";
            remove_btn.setAttribute("id","btnn"+result.children.length);
            result.append(remove_btn);
            remove_btn.addEventListener("click",function(){
                document.getElementById(this.id).remove();
                document.getElementById(this.id).remove();
            })
        }

});

