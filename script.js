// console.log("hi");
// load trend item function
const loadItem = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        displayItem(data);
    });
}
loadItem();

// display item function
const displayItem = (items) =>{
    // console.log(items[0].category);
    const itemContainer = document.getElementById("trend-parent");
    itemContainer.innerHTML = "";
    
   items.forEach(item =>{
//    console.log(item.rating.rate);
   const itemCart = document.createElement("div");
   itemCart.innerHTML = `
       <div class="h-auto w-auto shadow-sm rounded-2xl flex flex-col justify-between">
        <div class="h-auto w-auto bg-gray-200 px-5 py-3 rounded-t-2xl "> 
           <img src=${item.image} class = "h-40" /img>

        </div>
        <div class="flex justify-between p-2">
             <p class="text-[8px] mt-2 bg-sky-100 rounded-2xl text-purple-600 px-1">${item.category}</p>
             <p class="text-[9px] mt-2 text-gray-500 font-medium"><i class="fa-solid fa-star text-amber-400"></i>${item.rating.rate} (${item.rating.count})</p>
             
        </div>
        <h3 class="mt-3 text-lg font-semibold">${item.title}</h3>
        <p class="font-bold mt-1">$${item.price}</p>
        <div class="flex justify-between gap-5 p-2 mt-2">
            <button class="btn px-3 text-[12px]"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-active btn-primary px-3 text-[12px]"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
        </div>
    </div>
   `
   if(item.rating.rate >= 4.7){
    itemContainer.append(itemCart);
   }
   })
}

// search item function

document.getElementById("btn-search").addEventListener("click", ()=>{
    const input = document.getElementById("input-search");
    const inputValue = input.value.trim().toLowerCase();
    console.log(inputValue);

    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        const allProducts = data;
        console.log(allProducts);
        const searchResult = allProducts.filter(product => product.title.toLowerCase().includes(inputValue));
        console.log(searchResult);
        displayItem(searchResult);
    })

})


