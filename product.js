// load categories function
const loadCatagory = () =>{
    const url = "https://fakestoreapi.com/products/categories";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
       
         displayCategory(data);
         
    }
    
        )}
loadCatagory();

// display catagory function
const displayCategory = (catagories) =>{
    // console.log(catagories);
    const catContainer = document.getElementById("cate-container");
    // catContainer.innerHTML = "";

    catagories.forEach(cate =>{
        // console.log(cate);
        const btn = document.createElement("button")
        
        btn.innerHTML= `
            <button id="btn-${cate}" class="btn text-[12px] rounded-4xl text-gray-600 font-medium ml-1.5">${cate}</button>
            `
            const btnId= "load"+cate ;
            // console.log(btnId)
             btn.addEventListener("click",obj[btnId]);
       catContainer.append(btn);
    
      
        })
     
    
}



// load allProduct function
const loadProduct = () =>{
    const url = `https://fakestoreapi.com/products/`;
     fetch(url)
    .then(res => res.json())
    .then(data =>{
         
        // console.log(data);
        
        allProduct(data);
    });
}
loadProduct()

// load modal function
const loadProductDetail = (id) =>{
    const url = `https://fakestoreapi.com/products/${id}`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
         displayProductDetail(data);
    })
}
// display modal function
const displayProductDetail = (product) =>{
    console.log(product);
    const detailsBox = document.getElementById("details-container")
    detailsBox.innerHTML =`
      <div class=" bg-gray-200 px-20 py-3 rounded-t-2xl mx-auto"> 
            <img src=${product.image}  alt="" class="h-40">
        </div>
        <div class="p-2">     
            <p class="text-[12px] mt-2 rounded-2xl text-purple-600">${product.category}</p>
            <p class="text-[8px] mt-2 text-gray-500 font-medium">${product.rating.rate} (${product.rating.count})</p>
                
        </div>
            <h3 class="mt-3 text-lg font-medium">${product.title}</h3>
            <p class="font-bold mt-1">$${product.price}</p>
            <p class="font-semibold mt-1">${product.description}</p>
        <div class="flex justify-between p-2 mt-2">
            <button class="btn py-0 px-9 text-[12px]"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-active btn-primary  py-0 px-9 text-[12px]"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
        </div>
    </div>
    `
    document.getElementById("detail_modal").showModal();
}

// display all product function
const allProduct = (products) =>{
    // console.log(products);
    const proContainer = document.getElementById("product-parent");
    proContainer.innerHTML = "";

    products.forEach(product => {
        // console.log(product);
        const proCart = document.createElement("div");
        proCart.innerHTML = `
             <div class="h-auto w-70 shadow-sm rounded-2xl">
        <div class="h-50 w-70 bg-gray-200 px-20 py-3 rounded-t-2xl "> 
           <img src=${product.image} class = "h-40" /img>

        </div>
        <div class="flex justify-between p-2">
             <p class="text-[8px] mt-2 bg-sky-100 rounded-2xl text-purple-600 px-1">${product.category}</p>
             <p class="text-[9px] mt-2 text-gray-500 font-medium"><i class="fa-solid fa-star text-amber-400"></i>${product.rating.rate} (${product.rating.count})</p>
             
        </div>
        <h3 class="mt-3 text-lg font-medium">${product.title}</h3>
        <p class="font-bold mt-1">$${product.price}</p>
        <div class="flex justify-between p-2 mt-2">
            <button onclick="loadProductDetail(${product.id})" class="btn py-0 px-9 text-[12px]"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-active btn-primary  py-0 px-9 text-[12px]"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
        </div>
    </div>`

    proContainer.append(proCart);
    });
}

// load category product
const obj = {
    "loadelectronics": () =>{
         const url = `https://fakestoreapi.com/products/category/electronics`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        cateProducts(data)
    })
    },

    "loadjewelery": () =>{
     
    const url = `https://fakestoreapi.com/products/category/jewelery`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        cateProducts(data)
    })
    },

     "loadmen's clothing": () =>{
         
    const url = `https://fakestoreapi.com/products/category/men's%20clothing`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        cateProducts(data)
    })
    },

     "loadwomen's clothing": () =>{
         
    const url = `https://fakestoreapi.com/products/category/women's%20clothing`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        cateProducts(data)
    })
    },
}

// obj["loadmen'sclothing"]();



// display category product
const cateProducts = (products) =>{
    // console.log(products);
    const proContainer = document.getElementById("product-parent");
    proContainer.innerHTML = "";

    products.forEach(product => {
        // console.log(product);
        const proCart = document.createElement("div");
        proCart.innerHTML = `
             <div class="h-auto w-70 shadow-sm rounded-2xl">
        <div class="h-50 w-70 bg-gray-200 px-20 py-3 rounded-t-2xl "> 
           <img src=${product.image} class = "h-40" /img>

        </div>
        <div class="flex justify-between p-2">
             <p class="text-[8px] mt-2 bg-sky-100 rounded-2xl text-purple-600 px-1">${product.category}</p>
             <p class="text-[9px] mt-2 text-gray-500 font-medium"><i class="fa-solid fa-star text-amber-400"></i>${product.rating.rate} (${product.rating.count})</p>
             
        </div>
        <h3 class="mt-3 text-lg font-medium">${product.title}</h3>
        <p class="font-bold mt-1">$${product.price}</p>
        <div class="flex justify-between p-2 mt-2">
            <button onclick="my_modal_5.showModal()" class="btn py-0 px-9 text-[12px]"><i class="fa-regular fa-eye"></i>Details</button>
            <button  onclick="loadProductDetail(${product.id})" class="btn btn-active btn-primary  py-0 px-9 text-[12px]"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
        </div>
    </div>`

    proContainer.append(proCart);
    });
}
