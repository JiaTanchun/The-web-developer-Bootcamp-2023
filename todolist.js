let input=prompt("what would you like to do?")
const todos=["Collect Chicken Eggs","Clear little box"]
while (input!=="quit"&& input!=="q"){
    if(input==="list"){
        console.log("*********")
        for (let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`)
        }
        console.log("*********")
    }else if (input==="new"){
        const newTodo=prompt("Ok, what is the new to do?")
        todos.push(newTodo);
        console.log(`${newTodo} add to the list`)
    }else if (input==="delete"){
        const indexStr=parseInt(prompt("ok,enter an index to delete"));
        const index=parseInt(indexStr);
        const deletedd=todos.splice(index,1);
        console.log(`ok, delete ${deletedd[0]}`);
    }
    input=prompt("what would you like to do?")
}
console.log("OK Quit")

const numbers=[1,2,3,4,33,5,8,9,12,4,80]
numbers.forEach(function(n){
    console.log(n)
})
numbers.filter(n=>{
    return n===4
})



const add23=function(x,y){
    return x+y;
}

function add2(x,y){
    return x+y;
}

const add1=(x,y)=>{
    return x+y;
}