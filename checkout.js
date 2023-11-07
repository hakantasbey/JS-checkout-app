//! variables

const SHIPPING_PRICE = 25.99
const FREE_SHIPPING_LIMIT = 3000
const TAX_RATE = 0.18

const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")


//! events
deleteProducts.addEventListener("click",()=>{
    if(confirm("emin misiniz?")){
        noProductPrint()
    }
})


products.addEventListener("click",(e)=>{
    
})






//! functions 

const noProductPrint = ()=>{
    products.textContent = "No Products!"
    products.classList.add("no-product")
    document.querySelector(".delete-div").style.display = "none"
}


