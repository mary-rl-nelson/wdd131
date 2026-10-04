const ponderSelect = document.querySelector("#ponder-select");

ponderSelect.addEventListener("change", function () {
    if (ponderSelect.value !== "") {
        window.location.href = ponderSelect.value;
    }
});

const proveSelect = document.querySelector("#prove-select");

proveSelect.addEventListener("change", function () {
    if (proveSelect.value !== "") {
        window.location.href = proveSelect.value;
    }
});