
const container = document.getElementById("container")
const card = container.querySelector(".card")

function getCard(imgSrc){
    const clone = card.cloneNode(true) 
    const image  = clone.querySelector(".card-img-top")
    image.src = imgSrc
    container.appendChild(clone)
}


const imageSource = ["https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680740298i/62226126.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651426717l/60784641.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680192054l/62994279._SY475_.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677756582l/60654349._SY475_.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675174045l/61111298._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695742140l/65650229._SY475_.jpg", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677161651i/65215321.jpg"]

for(let i = 0; i < imageSource.length ; i++) {
    getCard(imageSource[i])
}