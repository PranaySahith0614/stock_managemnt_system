function show(){
let products=JSON.parse(localStorage.getItem("products"))||[];
let inventory=JSON.parse(localStorage.getItem("inventory"))||[];


let totalProducts=products.length;
let totalStock=0;


inventory.forEach(x=>{totalStock+=parseInt(x.qty);});


let sales=totalStock*100;


out.innerHTML=`
<h3>System Report</h3>
Total Products: ${totalProducts}<br>
Total Stock Units: ${totalStock}<br>
Estimated Sales: ₹${sales}<br>
Date: ${new Date().toLocaleString()}
`;
}