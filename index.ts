const wrapper: HTMLDivElement = document.querySelector(".wrapper");
const wrapperText: HTMLHeadingElement = document.querySelector(".wrapperText");
const chocolate: HTMLDivElement = document.querySelector(".chocolate");
const biteContainer: HTMLDivElement = document.querySelector(".biteContainer");
let chompCount = 0;
let displayWrapper = true;
const jsMediaQuery = () => {
    if (window.innerWidth < 700) {
        wrapper.style.width = `${window.innerWidth * .9}px`;
        wrapper.style.height = `${parseInt(wrapper.style.width) / 3}px`;
        wrapperText.style.fontSize = "50px";
        chocolate.style.width = `${window.innerWidth * .9}px`;
        chocolate.style.height = `${parseInt(chocolate.style.width) / 3 + 25}px`;
        biteContainer.style.width = `${parseInt(chocolate.style.width) + (parseInt(chocolate.style.width) / 12)}px`;
        console.log(parseInt(chocolate.style.width) + (parseInt(chocolate.style.width) / 24));
    } else {
        wrapper.style.width = "600px";
        wrapper.style.height = `${parseInt(wrapper.style.width) / 3}px`;
        wrapperText.style.fontSize = "70px";
        chocolate.style.width = "600px";
        chocolate.style.height = `${parseInt(chocolate.style.width) / 3}px`;
        biteContainer.style.width = "650px";
    }
}
jsMediaQuery();

window.onresize = jsMediaQuery;

const createBite = () => {
    const chomp = document.createElement("div");
    chomp.className = "bite";
    return chomp;
}

const clickHandler = (e: MouseEvent) => {
    if (e.target === wrapper || e.target === wrapperText || e.target === biteContainer) {
        wrapper.style.backgroundColor = "transparent";
        wrapperText.style.display = "none";
        chocolate.style.display = "block";
    } else if (e.target === chocolate || e.target === biteContainer) {
        const chomp = createBite();
        biteContainer.appendChild(chomp);
        let row = 0;
        for (let i = 0; i < biteContainer.children.length; i++) {
            if ((i + 1) % 4 === 1) {
                biteContainer.children[i].setAttribute("style", `width: ${parseInt(chocolate.style.height) / 2}px; height: ${parseInt(chocolate.style.height) / 2}px; top: ${0 * parseInt(chocolate.style.height) / 4}px; left: ${row * parseInt(chocolate.style.width) / 10}px`)
            } else if ((i + 1) % 4 === 2) {
                biteContainer.children[i].setAttribute("style", `width: ${parseInt(chocolate.style.height) / 2}px; height: ${parseInt(chocolate.style.height) / 2}px; top: ${1 * parseInt(chocolate.style.height) / 4}px; left: ${row * parseInt(chocolate.style.width) / 10}px`)
            } else if ((i + 1) % 4 === 3) {
                biteContainer.children[i].setAttribute("style", `width: ${parseInt(chocolate.style.height) / 2}px; height: ${parseInt(chocolate.style.height) / 2}px; top: ${2 * parseInt(chocolate.style.height) / 4}px; left: ${row * parseInt(chocolate.style.width) / 10}px`)
            } else if ((i + 1) % 4 === 0) {
                biteContainer.children[i].setAttribute("style", `width: ${parseInt(chocolate.style.height) / 2}px; height: ${parseInt(chocolate.style.height) / 2}px; top: ${3 * parseInt(chocolate.style.height) / 4}px; left: ${row * parseInt(chocolate.style.width) / 10}px`)
                row++;
            }
        }
        chompCount++;
    }
}

document.addEventListener("click", clickHandler)