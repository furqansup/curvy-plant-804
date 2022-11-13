const server_url = "http://localhost:8040/api/data";
let page = 1;
let t_data;

let getData = async() => {
    try{
        t_data = await fetch(server_url);
        t_data = await t_data.json();
        let data = await fetch(`${server_url}?_page=${page}&_limit=10`);
        data = await data.json();
        //console.log(data);
        renderData(data);
    }catch(err) {
        console.log(err);
    }
    
}
getData(page);

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
    rating.innerText = `Rating: ${+el.productBlock_ratingValue} out of 5`;
    rev_count.innerText = `Reviews: ${+el.productBlock_reviewCount}`;
    price.innerText = `$${Number(el.productBlock_priceValue)}`;
    buy_link.innerText = "QUICK BUY";

    div.append(img,name,rating,rev_count,price,buy_link);
    return div;
    
}

let renderData = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = null;

    //display total no of products
    let tot_box = document.getElementById("tot_prod");
    tot_box.innerText = `${data.length} results out of ${t_data.length}`

    data.forEach( (el) => {
        let prod = product(el);
        container.append(prod);
    });
}

//sorting functionality based on price
let sort = async() => {
    let val = document.getElementById("sort").value;
   
    let data = await fetch(server_url);
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


//filtering products based on multiple review ranges

let priceFilter = async() => {

    let data = await fetch(server_url);
    data = await data.json();
    
    
    let pRange1 = document.getElementById("pRange1");
    let pRange2 = document.getElementById("pRange2");
    let pRange3 = document.getElementById("pRange3");
    let pRange4 = document.getElementById("pRange4");
    let pRange5 = document.getElementById("pRange5");

    let fdata = [];

    if (pRange1.checked == true) {
        let fdata1 = data.filter( (ele) => {
            return ele.productBlock_priceValue < 10;
        });
       
       fdata = [...fdata1];
    }  

    if (pRange2.checked == true) {
        let fdata2 = data.filter( (ele) => {
            return ele.productBlock_priceValue > 10 && ele.productBlock_priceValue < 25; 
       });
       
       fdata = [...fdata2];
    } 

    if (pRange3.checked == true) {
        let fdata3 = data.filter( (ele) => {
            return ele.productBlock_priceValue > 25 && ele.productBlock_priceValue < 50;
        });
       
       fdata = [...fdata3];
    } 

    if (pRange4.checked == true) {
        let fdata4 = data.filter( (ele) => {
            return ele.productBlock_priceValue > 50 && ele.productBlock_priceValue < 100;
        });
        
        fdata = [...fdata4];
    } 

    if (pRange5.checked == true) {
        let fdata5 = data.filter( (ele) => {
            return ele.productBlock_priceValue >  100;
       });
       
       fdata = [...fdata5];
    } 
    
    if(fdata.length > 0) {
        renderData(fdata);
    } else {
        renderData(data);
    }
        
} 
    
//filter products bases on reviews functionality
let reviewFilter = async() => {
    let data = await fetch(server_url);
    data = await data.json();
    
    
    let revu1 = document.getElementById("revu1");
    let revu2 = document.getElementById("revu2");
    let revu3 = document.getElementById("revu3");

    let fdata = [];

    if (revu1.checked == true) {
        let fdata1 = data.filter( (ele) => {
            return ele.productBlock_ratingValue >= 1 && ele.productBlock_ratingValue <= 3;
        });
       
       fdata = [...fdata1];
    }  

    if (revu2.checked == true) {
        let fdata2 = data.filter( (ele) => {
            return ele.productBlock_ratingValue > 3 && ele.productBlock_ratingValue < 5;
        });
       
       fdata = [...fdata2];
    }  

    if (revu3.checked == true) {
        let fdata3 = data.filter( (ele) => {
            return ele.productBlock_ratingValue == 5;
        });
       
       fdata = [...fdata3];
    } 

    if(fdata.length > 0) {
        renderData(fdata);
    } else {
        renderData(data);
    }
}

//pagination functionality
let prev = () => {
    page--;
    getData();
}

let next = () => {
    page++;
    getData();
}