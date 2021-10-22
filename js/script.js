const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1

const cat = {
    "complain": function() {
        console.log("Meow!");
    }
};

cat.complain();


//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3

heading.style.fontSize = "2em";


//Question 4

heading.classList.add("subheading");


//Question 5

const paragraphs = document.querySelectorAll("p");

for (const p of paragraphs) {
    p.style.color = "red";
}


//Question 6

const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


//Question 7

function printCatNames(list) {
    for (const li of list) {
        console.log(li.name);
    }
}

printCatNames(cats);


//Question 8

function createCats(cats) {
    let html = "";

    for (const cat of cats) {
        html += "<div>";
        html += `<h5>${cat.name}</h5>`;

        if (cat.age === undefined)
            html += "<p>Age unknown</p>";
        else
            html += `<p>${cat.age}</p>`;

        html += "</div>";
    }

    return html;
}

// Expected output:
//
// `<div> <h5>Blob</h5> <p>10</p> </div>
// <div> <h5>Harold</h5> <p>Age unknown</p> </div>
// <div> <h5>Blurt</h5> <p>21</p> </div>`

const catsHTML = createCats(cats)
document.querySelector(".cat-container").innerHTML = catsHTML;
