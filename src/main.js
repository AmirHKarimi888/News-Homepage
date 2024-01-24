//To change Web3 poster src when the width of screen changes
if(window.innerWidth > 374) {
    document.querySelector("#contentPoster").src = "./src/assets/images/image-web-3-desktop.jpg";
} else {
    document.querySelector("#contentPoster").src = "./src/assets/images/image-web-3-mobile.jpg";
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 374) {
        document.querySelector("#contentPoster").src = "./src/assets/images/image-web-3-desktop.jpg";
        document.querySelector(".sidebar-backdrop").style.display = "none";
    } else {
        document.querySelector("#contentPoster").src = "./src/assets/images/image-web-3-mobile.jpg";
    }
})


//To open and close links sidebar
const openLinks = () => {
    document.querySelector(".sidebar-backdrop").style.display = "block";
    document.querySelector(".sidebar").style.animation = "openToLeft 2s ease 0s 1 normal forwards";
}
document.querySelector("#linksOpener").addEventListener("click", openLinks);


const closeLinks = () => {
    setTimeout(() => {
        document.querySelector(".sidebar-backdrop").style.display = "none";
    }, 1000);
    document.querySelector(".sidebar").style.animation = "closeToRight 2s ease 0s 1 normal forwards";
}
document.querySelector("#linksCloser").addEventListener("click", closeLinks);
document.querySelector(".sidebar-backdrop").addEventListener("click", closeLinks);
document.querySelector(".sidebar").addEventListener("click", e => e.stopPropagation());