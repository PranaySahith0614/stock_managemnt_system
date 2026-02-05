let products = JSON.parse(localStorage.getItem("products")) || [];


function addProduct(){
let name = pname.value;
let price = pprice.value;


if(name==="" || price===""){
alert("Enter all fields");
return;
}


products.push({name,price});
localStorage.setItem("products",JSON.stringify(products));
displayProducts();
}


function displayProducts(){
list.innerHTML="";
products.forEach((p,i)=>{
let li=document.createElement("li");
li.innerHTML=`${p.name} - ₹${p.price} <button onclick="removeProduct(${i})">Delete</button>`;
list.appendChild(li);
});
}


function removeProduct(i){
products.splice(i,1);
localStorage.setItem("products",JSON.stringify(products));
displayProducts();
}


function clearAll(){
products=[];
localStorage.removeItem("products");
displayProducts();
}


displayProducts();