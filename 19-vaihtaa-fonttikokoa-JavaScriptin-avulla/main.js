const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const allListItems = document.querySelectorAll('li');
    const activeElementIndex = [...allListItems].findIndex(item => item.classList.contains('active'));
    const nextActiveIndex = activeElementIndex === 4 ? 0 : activeElementIndex + 1;
    allListItems[activeElementIndex].className = '';
    allListItems[nextActiveIndex].className = 'active';
    const nextSize = allListItems[nextActiveIndex].dataset.size;
    allListItems.forEach(element => {
        element.style.fontSize = nextSize;
    });
    
    const result = `${"Fonttikoko  on nyt: " + nextSize}`;
    const para = document.createElement("p");
    para.classList.add("fonttikoko");
    const node = document.createTextNode(result);
    para.appendChild(node);

    const divResult = document.getElementById("res");
    const paragrafe = divResult.querySelector(".fonttikoko");
    divResult.replaceChild(para, paragrafe);
});  

// const para = document.createElement("p");

// para.innerText = "result";

// const element = document.getElementsByClassName("fonttikoko");

// element.after(para);

