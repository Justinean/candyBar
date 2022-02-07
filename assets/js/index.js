var wrapper = document.querySelector(".wrapper");
var wrapperText = document.querySelector(".wrapperText");
var chocolate = document.querySelector(".chocolate");
var biteContainer = document.querySelector(".biteContainer");
var chompCount = 0;
var displayWrapper = true;
var jsMediaQuery = function () {
    if (window.innerWidth < 700) {
        wrapper.style.width = "".concat(window.innerWidth * .9, "px");
        wrapper.style.height = "".concat(parseInt(wrapper.style.width) / 3, "px");
        wrapperText.style.fontSize = "50px";
        chocolate.style.width = "".concat(window.innerWidth * .9, "px");
        chocolate.style.height = "".concat(parseInt(chocolate.style.width) / 3 + 25, "px");
        biteContainer.style.width = "".concat(parseInt(chocolate.style.width) + (parseInt(chocolate.style.width) / 12), "px");
        console.log(parseInt(chocolate.style.width) + (parseInt(chocolate.style.width) / 24));
    }
    else {
        wrapper.style.width = "600px";
        wrapper.style.height = "".concat(parseInt(wrapper.style.width) / 3, "px");
        wrapperText.style.fontSize = "70px";
        chocolate.style.width = "600px";
        chocolate.style.height = "".concat(parseInt(chocolate.style.width) / 3, "px");
        biteContainer.style.width = "650px";
    }
};
jsMediaQuery();
window.onresize = jsMediaQuery;
var createBite = function () {
    var chomp = document.createElement("div");
    chomp.className = "bite";
    return chomp;
};
var clickHandler = function (e) {
    if (e.target === wrapper || e.target === wrapperText || e.target === biteContainer) {
        wrapper.style.backgroundColor = "transparent";
        wrapperText.style.display = "none";
        chocolate.style.display = "block";
    }
    else if (e.target === chocolate || e.target === biteContainer) {
        var chomp = createBite();
        biteContainer.appendChild(chomp);
        var row = 0;
        for (var i = 0; i < biteContainer.children.length; i++) {
            if ((i + 1) % 4 === 1) {
                biteContainer.children[i].setAttribute("style", "width: ".concat(parseInt(chocolate.style.height) / 2, "px; height: ").concat(parseInt(chocolate.style.height) / 2, "px; top: ").concat(0 * parseInt(chocolate.style.height) / 4, "px; left: ").concat(row * parseInt(chocolate.style.width) / 10, "px"));
            }
            else if ((i + 1) % 4 === 2) {
                biteContainer.children[i].setAttribute("style", "width: ".concat(parseInt(chocolate.style.height) / 2, "px; height: ").concat(parseInt(chocolate.style.height) / 2, "px; top: ").concat(1 * parseInt(chocolate.style.height) / 4, "px; left: ").concat(row * parseInt(chocolate.style.width) / 10, "px"));
            }
            else if ((i + 1) % 4 === 3) {
                biteContainer.children[i].setAttribute("style", "width: ".concat(parseInt(chocolate.style.height) / 2, "px; height: ").concat(parseInt(chocolate.style.height) / 2, "px; top: ").concat(2 * parseInt(chocolate.style.height) / 4, "px; left: ").concat(row * parseInt(chocolate.style.width) / 10, "px"));
            }
            else if ((i + 1) % 4 === 0) {
                biteContainer.children[i].setAttribute("style", "width: ".concat(parseInt(chocolate.style.height) / 2, "px; height: ").concat(parseInt(chocolate.style.height) / 2, "px; top: ").concat(3 * parseInt(chocolate.style.height) / 4, "px; left: ").concat(row * parseInt(chocolate.style.width) / 10, "px"));
                row++;
            }
        }
        chompCount++;
    }
};
document.addEventListener("click", clickHandler);
