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
       <div class="h-auto w-70 shadow-sm rounded-2xl">
        <div class="h-50 w-70 bg-gray-200 px-20 py-3 rounded-t-2xl "> 
           <img src=${item.image} class = "h-40" /img>

        </div>
        <div class="flex justify-between p-2">
             <p class="text-[8px] mt-2 bg-sky-100 rounded-2xl text-purple-600 px-1">${item.category}</p>
             <p class="text-[9px] mt-2 text-gray-500 font-medium"><i class="fa-solid fa-star text-amber-400"></i>${item.rating.rate} (${item.rating.count})</p>
             
        </div>
        <h3 class="mt-3 text-lg font-medium">${item.title}</h3>
        <p class="font-bold mt-1">$${item.price}</p>
        <div class="flex justify-between p-2 mt-2">
            <button class="btn py-0 px-9 text-[12px]"><i class="fa-regular fa-eye"></i>Details</button>
            <button class="btn btn-active btn-primary  py-0 px-9 text-[12px]"><i class="fa-solid fa-cart-shopping"></i>Cart</button>
        </div>
    </div>
   `
   if(item.rating.rate >= 4.7){
    itemContainer.append(itemCart);
   }
   })
}


