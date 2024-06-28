// var heart = document.getElementsByClassName("heart");
// heart.addEventListener("click", ()=>{
//     alert("Added to Favorites!!!")
// });
function heart(){
    alert("Added to Favorites!!!");
}
const menu = document.querySelector(".hero-menu");
menu.addEventListener("click", ()=>{
    alert("Tera ghar chala jayenga isme Vada pav kha jake!!!!")
})

const icons = document.querySelectorAll(".p4icon");

icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    const inside = icon.querySelector("i");
    inside.style.color = "white";
    icon.style.backgroundColor = "#000";
  });

  icon.addEventListener("mouseleave", () => {
    const inside = icon.querySelector("i");
    inside.style.color = ""; 
    icon.style.backgroundColor = ""; 
  });
});
