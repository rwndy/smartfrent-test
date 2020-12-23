import './Cards.css'
const CardsSelector = () => {
  return(
    <div className="cards-wrapper">
      <div className="cards-list-products">
        <span className="cards-list-products--items">
          <a href="/list-product">List Product</a>
        </span>
      </div>
      <div className="cards-add-products">
        <span className="cards-add-products--items">
          <a href="/add-product">Add Product</a>
        </span>
      </div>
    </div>
  )
}

export default CardsSelector