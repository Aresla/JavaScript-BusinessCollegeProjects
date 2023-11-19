const toStyle = () => {
    const selectedPlays = document.querySelector('#eka > ul');
    selectedPlays.style.display = "flex";
    const listOfPlays = document.querySelectorAll('#eka > ul > li > ul');
    [...listOfPlays].forEach(ul => {
        ul.setAttribute("style", "margin-top: 0.5rem");
    });
    selectedPlays.style.gap = "1rem";

    var anchors = document.getElementsByTagName("a");
    var thirdLastAnchor = anchors[(anchors.length - 3)];
    var lastAnchor = anchors[(anchors.length - 1)];
    var secondLastAnchor = anchors[(anchors.length - 2)];

    const pdfIcon = document.createElement("i");
    pdfIcon.classList.add("fa-solid");
    pdfIcon.classList.add("fa-file-pdf");
    pdfIcon.classList.add("spacing");
    pdfIcon.setAttribute("style", "color:#f10909");
    thirdLastAnchor.appendChild(pdfIcon);

    const externalIcon = document.createElement("i");
    externalIcon.classList.add("fa-solid");
    externalIcon.classList.add("fa-arrow-up-right-from-square");
    externalIcon.setAttribute("style", "color:#76d65c");

    const externalIcon2 = document.createElement("i");
    externalIcon2.classList.add("fa-solid");
    externalIcon2.classList.add("fa-arrow-up-right-from-square");
    externalIcon2.setAttribute("style", "color:#76d65c");

    const envelopeIcon = document.createElement("i");
    envelopeIcon.classList.add("fa-solid");
    envelopeIcon.classList.add("fa-envelope");
    envelopeIcon.setAttribute("style", "color:#f5ab0a");

    const parentOfSecondLastAnchor = secondLastAnchor.parentNode;
    parentOfSecondLastAnchor.insertBefore(externalIcon2, secondLastAnchor);
    parentOfSecondLastAnchor.insertBefore(envelopeIcon, externalIcon2);

    const parentOfLastAnchor = lastAnchor.parentNode;
    parentOfLastAnchor.insertBefore(externalIcon, lastAnchor);

    const links = document.links;
    [...links].forEach(link => {
        link.classList.add("dotted");
    });

    const genres = document.querySelectorAll('#eka > ul > li');
    const listOfGenres = [...genres];
    listOfGenres.forEach(li => {
        li.setAttribute("style", "list-style-type: none");
    });

    [...listOfPlays].forEach(ul => {
        ul.classList.add("rivit-vierekkain");
    });

    const tableRows = document.getElementsByTagName("tr");
    [...tableRows].forEach(tr => {
        tr.classList.add("joka-toinen-rivi");
    });

    const btn = document.getElementById("btn");
    btn.disabled = true;

    document.body.style.fontSize = "1rem";
}
