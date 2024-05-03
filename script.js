class Book {
    constructor(imgSrc, title, detail, price) {
        this.imgSrc = imgSrc;
        this.title = title;
        this.detail = detail;
        this.price = price;
    }

    createCard(container) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = this.imgSrc;
        card.appendChild(image);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.title;
        cardBody.appendChild(cardTitle);

        const cardDetails = document.createElement("p");
        cardDetails.classList.add("card-link-det");
        cardDetails.textContent = this.detail;
        cardBody.appendChild(cardDetails);

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-link-price");
        cardPrice.textContent = this.price;
        cardBody.appendChild(cardPrice);

        card.appendChild(cardBody);

        container.appendChild(card);
    }
}

const booksData = [
    { imgSrc: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680740298i/62226126.jpg", title: "The Last Devil To Die", detail: "by Richard Osman", price: "21.90$" },
    { imgSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651426717l/60784641.jpg", title: "The Villa", detail: "by Rachel Hawkins", price: "12.55$" },
    { imgSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680192054l/62994279._SY475_.jpg", title: "King Of Pride", detail: "by Ana Huang", price: "14.44$" },
    { imgSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677756582l/60654349._SY475_.jpg", title: "Weyward", detail: "by Emilia Hart", price: "21,60$" },
    { imgSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675174045l/61111298._SY475_.jpg", title: "River Sing Me Home", detail: "by Eleanor Shearer", price: "10.55$" },
    { imgSrc: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695742140l/65650229._SY475_.jpg", title: "Well Ness", detail: "by Nathan Hill", price: "11.11$" },
    { imgSrc: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677161651i/65215321.jpg", title: "Blackouts", detail: "Justin Torres", price: "17.75$" }
];

const container = document.getElementById("container");

const books = booksData.map(bookData => new Book(bookData.imgSrc, bookData.title, bookData.detail, bookData.price));

books.forEach(book => {
    book.createCard(container);
});

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    if (searchTerm.length >= 3 || searchTerm === "") {
        const cards = document.querySelectorAll(".card");
        cards.forEach(function (card) {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            if ((searchTerm === "" || title.includes(searchTerm)) && title.length > 3) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }
});


//const searchForm = document.getElementById("searchForm");
//searchForm.addEventListener("submit", function(event) {
//    event.preventDefault();
//    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
//    const cards = document.querySelectorAll(".card");
//    cards.forEach(function (card) {

//        const title = card.querySelector(".card-title").textContent.toLowerCase();
//            if (title.includes(searchTerm)) {
//                card.style.display = "block";
//            } else {
//                card.style.display = "none";
//            }
        
//    });
//});
