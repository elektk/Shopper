function getCards (cardInfoList, elem, remove = false) {
    elem.innerHtml=''
    const arr = cardInfoList.map(cardInfo => {
        console.log(getCards);
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