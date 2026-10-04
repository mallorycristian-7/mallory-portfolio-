document.addEventListener("DOMContentLoaded", function () {

    console.log("Mallory Cristian Portfolio loaded.");

    const images = document.querySelectorAll(".art-card img");

    images.forEach(function (image) {

        image.addEventListener("click", function () {

            const viewer = document.createElement("div");

            viewer.className = "image-viewer";

            viewer.innerHTML = `
                <button class="viewer-close">
                    ×
                </button>

                <img src="${image.src}"
                     alt="${image.alt}">
            `;

            document.body.appendChild(viewer);


            viewer.addEventListener("click", function (event) {

                if (
                    event.target === viewer ||
                    event.target.classList.contains("viewer-close")
                ) {

                    viewer.remove();

                }

            });

        });

    });

});