let inventory = JSON.parse(localStorage.getItem("inventory")) || [];


function addStock(){
let item=document.getElementById("item").value;
let qty=document.getElementById("qty").value;


if(item===""||qty===""){
alert("Enter details");
return;
}


inventory.push({item,qty});
localStorage.setItem("inventory",JSON.stringify(inventory));
displayInventory();
}


function displayInventory(){
inv.innerHTML="";
inventory.forEach((x,i)=>{
let li=document.createElement("li");
li.innerHTML=`${x.item} : ${x.qty} <button onclick="removeStock(${i})">Delete</button>`;
inv.appendChild(li);
});
}


function removeStock(i){
inventory.splice(i,1);
localStorage.setItem("inventory",JSON.stringify(inventory));
displayInventory();
}


function clearInventory(){
inventory=[];
localStorage.removeItem("inventory");
displayInventory();
}


displayInventory();