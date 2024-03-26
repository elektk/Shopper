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

function getCards (cardInfoList, elem, remove = false) {
    const arr = cardInfoList.map(cardInfo => {
        const tab = `<div class="tab__card card">
              <div class="card__product">
                  <img class="card__img" src="./images/headphone1.png" alt="card__headphons">
                  <div class="card__descr">
                      <h4 class="card__text">${cardInfo.cardTitle}</h4>
                      <div class="card__rating">
                          <img src="./svg/star_red.svg" alt="rating">
                          <img src="./svg/star_red.svg" alt="rating">
                          <img src="./svg/star_red.svg" alt="rating">
                          <img src="./svg/star_red.svg" alt="rating">
                          <img src="./svg/star_red.svg" alt="rating">
                          <p class="card__rating-count">${cardInfo.reviews} Reviews</p>
                      </div>
                      <p class="card__price">${cardInfo.price}</p>
                  </div>
              </div>
              <button class="card__btn">Add to cart</button>
              <div class="card__discount">
                  <p>Save 60%</p>
              </div>
            </div>`
            return tab;
            // elem.insertAdjacentHTML("beforeend",tab);
    })
    if(remove){
        elem.remove("beforeend",arr.join());
        return
    }
    elem.insertAdjacentHTML("beforeend",arr.join());
}

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