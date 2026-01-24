let miconElement=document.querySelector("#micon");

let navElement=document.querySelector("nav");
miconElement.addEventListener("click", () => {
    navElement.classList.toggle("left-[0px]");
});