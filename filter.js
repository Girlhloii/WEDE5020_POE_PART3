document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("productSearch");
    const products = document.querySelectorAll(".product");

    if (!searchInput) return;

    searchInput.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();

        products.forEach(product => {
            const text = product.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});