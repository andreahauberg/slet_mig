document.querySelector("h1").innerHTML= "<b>Den Første & Den Anden</b>";
console.log("footer");

const article1H2 = document.querySelector("article:first-child h2").innerHTML = "<em>Den Første</em>";
console.log("Article 1 H2:", article1H2);

const article1fig = document.querySelector("article:first-child figcaption").textContent = "Den FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen FørsteDen Første";
console.log("Article 1 Figcaption:", article1fig);

const article2H2 = document.querySelector("article:nth-child(2) h2").innerHTML = "<em>Den Anden</em>";
console.log("Article 2 H2:", article2H2);

const article2fig = document.querySelector("article:nth-child(2) figcaption").textContent = "Den AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen AndenDen Anden";
console.log("Article 2 Figcaption:", article2fig);

document.querySelector("footer").innerHTML= "<em>Den Første & Den Anden</em>";
console.log("footer");

document.querySelector(
    "article:first-child img"
).src = "img/pose.png";

document.querySelector("img:first-child").setAttribute("alt", "my new alt")
console.log("My new alt");

document.querySelector(
    "article:nth-child(2) img"
).src = "img/pose2.png";

document.querySelector("article:nth-child(2) img").setAttribute("alt", "my new alt2")
console.log("My new alt2");

// Opret et nyt article-element
const newArticle = document.createElement("article");

// Opret et img-element til at tilføje et billede
const imgElement = document.createElement("img");
imgElement.src = "img/pose3.png "; // Erstat med den rigtige sti til dit billede
imgElement.alt = "new alt 3";    // Erstat med en passende beskrivelse

// Opret en h2-element til overskriften
const h2Element = document.createElement("h2");
h2Element.textContent = "Den Tredje";

// Opret et p-element til teksten
const pElement = document.createElement("p");
pElement.textContent = "Den TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen TredjeDen Tredje.";

// Tilføj billedet, overskriften og teksten til det nye article
newArticle.appendChild(imgElement);
newArticle.appendChild(h2Element);
newArticle.appendChild(pElement);

// Tilføj det nye article til main-sektionen (eller en anden passende forælder)
const mainSection = document.querySelector("section ");
mainSection.appendChild(newArticle);
