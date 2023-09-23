let form=document.getElementById("forms");
let ul=document.getElementById("list");
let count=0;
form.addEventListener("submit",(e)=>{e.preventDefault();
    let li=document.createElement("li");
let input=document.getElementById("number");
let text=document.createTextNode(input.value);
let space=document.createTextNode(" ");
li.appendChild(text);
li.appendChild(space);
let description=document.getElementById("description");
let desText=document.createTextNode(description.value);
let space1=document.createTextNode(" ");
li.appendChild(desText);
li.appendChild(space1);
let catagory=document.getElementById("catagory");
let catText=document.createTextNode(catagory.value);
li.appendChild(catText);
let btn=document.createElement("button");
let btnText=document.createTextNode("Delete");
btn.className="float-right m-2";
btn.appendChild(btnText);
btn.onclick=()=>{
ul.removeChild(li);
localStorage.removeItem(obj.key);
}
li.appendChild(btn);
let btn1=document.createElement("button");
let btn1Text=document.createTextNode("Edit");
btn1.className="float-right m-2";
btn1.appendChild(btn1Text);
btn1.onclick=()=>{
    ul.removeChild(li);
    localStorage.removeItem(obj.key);
    input.value=obj.Expense;
    description.value=obj.Description;
    catagory.value=obj.catagory;
    }
li.appendChild(btn1);
ul.appendChild(li);
count=count+1;
let obj={"Expense":input.value,"Description":description.value,"catagory":catagory.value,"key":count};
localStorage.setItem(obj.key,JSON.stringify(obj));

})