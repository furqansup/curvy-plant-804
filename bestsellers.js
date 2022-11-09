let getData = async() => {
    try{
        let data = await fetch("./data.json");
        data = await data.json();
        console.log(data);
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
    let buy_link = document.createElement("p");

    img.src = el.productBlock_image_src;
    name.innerText = el.productBlock_productName;
    rating.innerText = `*****`;
    rev_count.innerText = el.productBlock_reviewCount;
    price.innerText = `${el.productBlock_priceValue}`;
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