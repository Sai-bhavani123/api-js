const recipesData=document.getElementById("recipesData");
recipesData.addEventListener("click",() => {
    recipesDataApi();
});

async function recipesDataApi(){
    const result=await fetch("https://dummyjson.com/recipes");
    const data=await result.json();
    const container=document.getElementById("container");
    container.innerHTML="";

    data.recipes.forEach((recipe) => {
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
            <img src="${recipe.image}" width="200px">
            <p> Name: ${recipe.name}</p>
            <p> type of Meal : ${recipe.mealType}</p>
    `;
    container.appendChild(card);
});
}



const DummyData=document.getElementById("DummyData")
DummyData.addEventListener("click",() => {
    DummyDataApi();
});

async function DummyDataApi( ){
    const result=await fetch("https://dummyjson.com/carts");
    const data=await result.json();
    const container=document.getElementById("container");
    container.innerHTML="";

    data.carts.forEach((cart) => {
        cart.products.forEach((product) => {
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
         <img src="${product.thumbnail}" alt="${product.title}" width="200"/>
        <p>Price: $${product.price}</p>
        <p>Title: ${product.title}</p>
    `;
    container.appendChild(card);
});
    });
}

const fakeStore=document.getElementById("fakeStore");
fakeStore.addEventListener("click",() => {
    fakeStoreApi();
});

async function fakeStoreApi( ){
    const result=await fetch("https://fakestoreapi.com/products");
    const data=await result.json();
    const container=document.getElementById("container");
    container.innerHTML="";

    data.forEach((x) => {
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
        <img src="${x.image}" width="200px">
            <p> Price ₹ ${x.price}</p>
            <p> Title : ${x.title}</p>
    `;
    container.appendChild(card);
});
}

const categoryData=document.getElementById("categoryData");
categoryData.addEventListener("click",() => {
    categoryDataApi();
});

async function categoryDataApi(){
    const result=await fetch("https://dummyjson.com/products/category/smartphones");
    const data=await result.json();
    const container=document.getElementById("container");
    container.innerHTML="";

    data.products.forEach((product) => {
        const card=document.createElement("div");
        card.className="card";
        card.innerHTML=`
         <img src="${product.thumbnail}" alt="${product.title}" width="200"/>
        <p>Price: $${product.price}</p>
        <p>Title: ${product.title}</p>
        <p>discountPercentage: ${product.discountPercentage}</p>
    `;
    container.appendChild(card);
});
}



