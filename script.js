
const container = document.getElementById("container")
const card = container.querySelector(".card")


function getCard(imgSrc,title, detail,price){
    const clone = card.cloneNode(true) 
    const image  = clone.querySelector(".card-img-top")
    image.src = imgSrc
    const cardTitle = clone.querySelector(".card-title")
    cardTitle.textContent = title
    const cardDetails = clone.querySelector(".card-link-det")
    cardDetails.textContent = detail
    const cardPrice = clone.querySelector(".card-link-price")
    cardPrice.textContent = price
    container.appendChild(clone)
}

const titles = ["The Last Devil To Die", "The Villa", "King Of Pride", "Weyward", "River Sing Me Home", "Well Ness" , "Blackouts"]
const details = ["by Richard Osman", "by Rachel Hawkins" , "by Ana Huang", "by Emilia Hart", "by Eleanor Shearer", "by Nathan Hill", "Justin Torres"]
const prices = ["21.90$", "12.55$", "14.44$", "21,60$","10.55$", "11.11$", "17.75$"]
const imageSource = ["https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680740298i/62226126.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1651426717l/60784641.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1680192054l/62994279._SY475_.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677756582l/60654349._SY475_.jpg", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1675174045l/61111298._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1695742140l/65650229._SY475_.jpg", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677161651i/65215321.jpg"]

for(let i = 0; i < imageSource.length ; i++) {
    getCard(imageSource[i], titles[i], details[i],prices[i])
}
