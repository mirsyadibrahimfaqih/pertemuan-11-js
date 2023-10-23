document.addEventListener("DOMContentLoaded", function() {
    const klikButton = document.getElementById("klikButton");
    const elemen = document.getElementById("elemen");
    const inputField = document.getElementById("inputField");
    const selectField = document.getElementById("selectField");
    const eventLog = document.getElementById("eventLog");



    // Event Mouseover dan Mouseout
    elemen.addEventListener("mouseover", function() {
        elemen.style.backgroundColor = "lightcoral";
        eventLog.innerHTML = "Event Mouseover: Mouse memasuki elemen.";
    });

    elemen.addEventListener("mouseout", function() {
        elemen.style.backgroundColor = "lightblue";
        eventLog.innerHTML = "Event Mouseout: Mouse meninggalkan elemen.";
    });

    // Event Keyboard Keydown dan Keyup
    inputField.addEventListener("keydown", function(event) {
        const key = event.key;
        eventLog.innerHTML = `Event Keydown: Tombol "${key}" ditekan.`;
    });

    inputField.addEventListener("keyup", function(event) {
        const key = event.key;
        eventLog.innerHTML = `Event Keyup: Tombol "${key}" dilepas.`;
    });

    // Event Change (Input Field)
    inputField.addEventListener("change", function() {
        const value = inputField.value;
        eventLog.innerHTML = `Event Change: Nilai dalam input berubah menjadi "${value}".`;
    });

    // Event Change (Select Field)
    selectField.addEventListener("change", function() {
        const selectedColor = selectField.value;
        elemen.style.backgroundColor = selectedColor;
        eventLog.innerHTML = `Event Change (select): Warna latar belakang diubah menjadi ${selectedColor}.`;
    });
});
