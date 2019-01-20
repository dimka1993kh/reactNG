'use strict';

let items;
fetch('https://neto-api.herokuapp.com/etsy')
.then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (info) {
    items = info;
    createHtml()
  })
 
function createHtml() {
    const Listing = ({items}) => {
        let item = items.map((elem) => {
            if (elem.title.lenght > 49) {
                elem.title = elem.title.substring(0,49) + '...';
            }
            function quantity() {
                if (elem.quantity <= 10) {
                    return 'level-low'
                } else if (elem.quantity > 10 && elem.quantity <= 20) {
                    return 'level-medium'
                } else {
                    return 'level-high'
                }
            }
            function prcie() {
                if (elem.currency_code !== "GBP" ) {
                    return `${elem.currency_code} ${elem.price}` 
                } else {
                    return `${elem.price} ${elem.currency_code}` 
                }
            }
            return (
                <div className="item">
                    <div className="item-image">
                        <a href={elem.url}>
                            <img src={elem.MainImage.url_570xN} />
                        </a>
                        </div>
                        <div className="item-details">
                        <p className="item-title">{elem.title}</p>
                        <p className="item-price">{prcie()}</p>
                        <p className={`item-quantity ${quantity()}`}>{`Осталось ${elem.quantity} шт.`}</p>
                    </div>
                </div>
                )
            
        })
        return (
            <div className="item-list">
                {item}
            </div>
        )
    }
    
    ReactDOM.render(<Listing items={items}/>,
        document.getElementById('root'));
    }




