const server_url = "http://localhost:8040/api/data";
let prod_container = document.getElementById("product_display");
let page = 1;

/*
 https://i.pinimg.com/474x/7c/a8/b7/7ca8b7f553a7213bf47a80f687ddf652.jpg
*/

//getData from the local server
let getData = async() => {
    try{
        let data = await fetch(`${server_url}?_page=${page}&_limit=10`);
        data = await data.json();
        console.log(data);
        renderProd(data);
    }catch(err) { 
        console.log(err) 
    }
}
getData();

//creating products
let eachProd = (el,id) => {
    let prodDiv = document.createElement("div");
    prodDiv.className = "product";
    
    let pid = document.createElement("p");
    let img = document.createElement("img");
    let name = document.createElement("h6");
    
    let price = document.createElement("p");
    let updBtn = document.createElement("button");
    let delBtn = document.createElement("button");
    delBtn.className = "delButtons";
    

    pid.innerText = el.id;
    img.src = el.productBlock_image_src;
    name.innerText = el.productBlock_productName;
    price.innerText = el.productBlock_priceValue;
    
    updBtn.innerText = "Update";
    delBtn.innerText = "Delete";
    
    delBtn.onclick = () => {
        deleteProd(el.id);
    }

    updBtn.onclick = () => {
        updatePrice(el.id);
    }

    prodDiv.append(img,pid,name,price,updBtn,delBtn);
    
    return prodDiv;
}


//render products to the dom
let renderProd = (data) => {
   prod_container.innerHTML = null;

    data.forEach( (el,id) => {
        
        let prod = eachProd(el,id);
        
        prod_container.append(prod);

    });
}

//adding a new product
let addProduct = async() => {
    let prodName = document.getElementById("p_name").value;
    let prodPrice = document.getElementById("p_price").value;
    let prodImg = document.getElementById("p_img").value;

    let prod = {
        "id" : Date.now()+prodName,
        "productBlock_productName" : prodName,
        "productBlock_priceValue" : prodPrice,
        "productBlock_image_src" :  prodImg,
        "productBlock_ratingValue" : 0,
        "productBlock_reviewCount" : 0

    }
    console.log(prod);
    await fetch(server_url, {
        method:"POST",
        body : JSON.stringify(prod),
        headers : {
            "Content-Type" : "application/json"
        }
    });

    getData();
}

// functionality to delete a product from database as well as dom
let deleteProd = async(i) => {
    await fetch(`${server_url}/${i}`,{
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json"
        }
    });
    getData();
}



//updating product price
let updatePrice = async(id) => {

    let prod = await fetch(`${server_url}/${id}`);
    prod = await prod.json();

    let oldPrice = prod.productBlock_priceValue;
    let newPrice = Number(window.prompt("Enter new price: "));
    let price = (newPrice) ? newPrice : oldPrice;

    let data = {"productBlock_priceValue": price };

    await fetch(`${server_url}/${id}`, {
        method : "PATCH",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    getData();
};

//pagination functionality
let prev = () => {
    page--;
    getData();
}

let next = () => {
    page++;
    getData();
}