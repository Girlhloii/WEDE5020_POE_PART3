document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".product img");
    if (galleryImages.length === 0) return;

    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    
    const closeBtn = document.createElement("span");
    closeBtn.className = "lightbox-close";
    closeBtn.innerHTML = "&times;";
    
    const modalImg = document.createElement("img");
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    galleryImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});