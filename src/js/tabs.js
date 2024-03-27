let div = document.createElement('div');

const cardInfoTopPicksList = [{
    cardTitle: "Беспроводные наушники №1",
    reviews: 100,
    price:32
},{
    cardTitle: "Беспроводные наушники №2",
    reviews: 130,
    price:95
},{
    cardTitle: "Беспроводные наушники №3",
    reviews: 88,
    price:132
}];

const cardInfoWatchesList = [{
    cardTitle: "Беспроводные наушники №478",
    reviews: 100,
    price:32
},{
    cardTitle: "Беспроводные наушники №967",
    reviews: 130,
    price:95
},{
    cardTitle: "Беспроводные наушники №321",
    reviews: 88,
    price:132
}]

const sellersCards = document.querySelector('.sellers__cards');
const trendingCards = document.querySelector('.trending__cards');

const sellersBtnWrapper = document.querySelector('.sellers__btn-wrapper');
const trendingBtnWrapper = document.querySelector('.trending__btn-wrapper');



sellersBtnWrapper.addEventListener("click", (event)=>{
    const target = event.target;
    const emptyWrapper = document.createElement('div');
    emptyWrapper.classList.add('sellers__cards')

    const ovalButtons = sellersBtnWrapper.querySelectorAll('button');
    ovalButtons.forEach(btn =>{
        btn.classList.remove('active');
    })
    target.classList.add('active');
    if(target.innerText == "Top Picks"){
        // sellersCards.replaceWith(emptyWrapper)
            getCards(cardInfoTopPicksList, sellersCards, true);
    }else {
        // sellersCards.replaceWith(emptyWrapper)
        getCards(cardInfoWatchesList, sellersCards, false);
    }
})


getCards(cardInfoTopPicksList, sellersCards);
// getCards(cardInfoList, trendingCards);