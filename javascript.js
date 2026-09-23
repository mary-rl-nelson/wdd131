const ponderSelect = document.querySelector("#ponder-select");

ponderSelect.addEventListener("change", function () {
    if (ponderSelect.value !== "") {
        window.location.href = ponderSelect.value;
    }
});