/* jshint browser: true */

var addSector = function () {
    var addSectorDiv = document.createElement("div");
    addSectorDiv.className = "conversionPress";
    addSectorDiv.textContent = "41";
    document.body.appendChild("div");
};


var btnAddSector = document.getElementsByClassName("btnAddSector");
btnAddSector.addEventListener("click", addSector);
