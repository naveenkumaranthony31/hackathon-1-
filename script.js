
let div=document.createElement("div");
div.innerHTML=`<div class="main"><input type="text" class="txt" id="text" placeholder="Makeup things" label="search">
<button class="btn" onclick="makeup()" type="submit">click</button></div>`
document.body.append(div)
async function makeup() {
    try {
    const cc=document.getElementById("text").value;
        let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${cc}`);
        let res1 = await res.json();
        res1.map( function (material){
            let makeup =document.createElement("div");
            makeup.setAttribute("class","container");
            makeup.innerHTML =`<h2>${material.brand}</h2>
            <img src=${material.image_link} alt="makeup_img" class = "image" />
           
            <div class="info">
           <p><span><mark>Name:</mark></span>${material.name}</p>
            <p><span><mark>Price:</mark></span>${material.price}</p>
         <p><span><mark>Product_link:</mark></span>${material.product_link}</p>
            <p><span><mark>Description:</mark></span>${material.description}</p>
        
            </div>`

            document.body.append(makeup);
            
        });

    } catch (error) {
        
    }
}makeup();


 