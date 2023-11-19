const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const allListItems = document.querySelectorAll('li');
    const activeElementIndex = [...allListItems].findIndex(item => item.classList.contains('active'));
    const nextActiveIndex = activeElementIndex === 4 ? 0 : activeElementIndex + 1;
    allListItems[activeElementIndex].className = '';
    allListItems[nextActiveIndex].className = 'active';
    const nextFont = allListItems[nextActiveIndex].dataset.font;
    allListItems.forEach(element => {
        element.style.fontFamily = nextFont;
    });

    const result = `${"Fontti  on nyt: " + nextFont}`;
    const para = document.createElement("p");
    para.classList.add("fontti");
    const node = document.createTextNode(result);
    para.appendChild(node);

    const divResult = document.getElementById("res");
    const paragrafe = divResult.querySelector(".fontti");
    divResult.replaceChild(para, paragrafe);
});  