// ge the global variable
let searchInput=document.getElementById("searchinput")
let btn=document.querySelector("button")
let searchContainer=document.getElementById("search-container")

//toggle function
btn.addEventListener("click",()=>
{
    searchContainer.classList.toggle("active")
}
)