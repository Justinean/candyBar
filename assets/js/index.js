var wrapper = document.querySelector(".wrapper");
var wrapperText = document.querySelector(".wrapperText");
var chocolate = document.querySelector(".chocolate");
var biteContainer = document.querySelector(".biteContainer");
var chocolateText = document.querySelector(".chocolateText");
var openText = document.querySelector(".openText");
var resetButton = document.querySelector(".resetButton");
var chompCount = 0;
var displayWrapper = true;
var jsMediaQuery = function () {
    if (window.innerWidth < 700) {
        wrapper.style.width = "".concat(window.innerWidth * .9, "px");
        wrapper.style.height = "".concat(parseInt(wrapper.style.width) / 3, "px");
        wrapperText.style.fontSize = "50px";
        chocolateText.style.fontSize = "50px";
        chocolate.style.width = "".concat(window.innerWidth * .9, "px");
        chocolate.style.height = "".concat(parseInt(chocolate.style.width) / 3 + 25, "px");
        biteContainer.style.width = "".concat(parseInt(chocolate.style.width) + (parseInt(chocolate.style.width) / 12), "px");
    }
    else {
        wrapper.style.width = "600px";
        wrapper.style.height = "".concat(parseInt(wrapper.style.width) / 3, "px");
        wrapperText.style.fontSize = "80px";
        chocolateText.style.fontSize = "80px";
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
        openText.textContent = "Click to eat";
        wrapper.style.backgroundColor = "transparent";
        wrapperText.style.display = "none";
        chocolate.style.display = "flex";
    }
    else if (e.target === chocolate || e.target === biteContainer || e.target === chocolate.children[0]) {
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
        if (chompCount >= 40) {
            openText.textContent = "Click button to reset chocolate";
            resetButton.style.display = "block";
        }
    }
    else if (e.target === resetButton && chompCount >= 40) {
        openText.textContent = "Click to open";
        wrapper.style.backgroundColor = "black";
        wrapperText.style.display = "block";
        chocolate.style.display = "none";
        resetButton.style.display = "none";
        chompCount = 0;
        var childLength = biteContainer.children.length;
        for (var i = 0; i < childLength; i++) {
            biteContainer.removeChild(biteContainer.children[0]);
        }
    }
};
document.addEventListener("click", clickHandler);
