/**Navbar button leading to categories should only be displayed 
 * when separate category buttons are hidden
 */
const catBut = document.querySelector("#categoriesBtn"); 
//navbar buttons for specific categories
const cat = document.querySelectorAll(".cat");

catBut.addEventListener("click", function (e) {
    for (option of cat) {
        if (option.style.display !== "none") {
            option.style.display = "none";
        }
        else {
            option.style.display = "flex";
        }
    }
})

/* Displaying  a modal image when a photo is clicked
*/
const imgs = document.querySelectorAll(".imageContent");
let imgSrc;
for (let img of imgs) {
    img.addEventListener("click", function (e) {
        imgSrc = this.src;
        makeModalImg(imgSrc);
    })
}
/** Function creating the image modal
 * 
 * @param {*} src - source of the clicked image
 */
const makeModalImg = (src) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.querySelector("main").append(modal);
    const modalImg = document.createElement("img");
    modalImg.src = src; 
    //source of the displayed image is the source of the clicked one
    modalImg.classList.add("imgContent")
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("closeBtn");
    //remove the modal when the close button is clicked
    closeBtn.addEventListener("click", function(e) {
        modal.remove();
    });

    modal.append(modalImg, closeBtn);
    //remove the modal when Escape key is pressed
    document.addEventListener("keydown", function(e) {
        const key = e.key;
        if (key === "Escape"){
            modal.remove();
        }
    })
}



