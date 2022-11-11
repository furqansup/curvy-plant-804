let getData = async() => {
    try{
        let data = await fetch("./data.json");
        data = await data.json();
        //console.log(data);
        renderData(data.data);
    }catch(err) {
        console.log(err);
    }
    
}
getData();

//creating products
let product = (el) => {
    let div = document.createElement("div");
    div.className = "prod_div";

    let img = document.createElement("img");
    let name = document.createElement("p");
    let rating = document.createElement("p");
    let rev_count = document.createElement("span");
    let price = document.createElement("p");
    price.className = "priceClass";
    let buy_link = document.createElement("p");
    buy_link.className = "b_link";

    img.src = el.productBlock_image_src;
    name.innerText = el.productBlock_productName;
    rating.innerText = `*****`;
    rev_count.innerText = el.productBlock_reviewCount;
    price.innerText = `$${el.productBlock_priceValue}`;
    buy_link.innerText = "QUICK BUY";

    div.append(img,name,rating,rev_count,price,buy_link);
    return div;
    
}

let renderData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach( (el) => {
        let prod = product(el);
        container.append(prod);
    });
}

//sorting functionality based on price
let sort = async() => {
    let val = document.getElementById("sort").value;
   
    let data = await fetch("./data.json");
    data = await data.json();
    let newData = data.data;

    if (val == "default") { renderData(newData) };

    if (val == "low") {
        newData.sort( (a,b) => a.productBlock_priceValue-b.productBlock_priceValue);
        renderData(newData);
    }
    if (val == "high") {
        newData.sort( (a,b) => b.productBlock_priceValue-a.productBlock_priceValue);
        renderData(newData);
    }
    if (val == "letter") {
        newData.sort( (a,b) =>  {(a.productBlock_productName.toLowerCase() > b.productBlock_productName.toLowerCase())
            return -1;
        });
       
        renderData(newData);
    }
    
    
    
}