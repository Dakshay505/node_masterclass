import "./card.css"

type Props ={
    title: string
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    thumbnail: string,
}

const Card = ({discountPercentage,thumbnail,title,price,rating,stock}: Props) => {
  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col-md-3">
      <div className="card">
        <div className="image-container">
          <div className="first">
            <div className="d-flex justify-content-between align-items-center">
              <span className="discount">{discountPercentage}</span>
              <span className="wishlist"><i className="fa fa-heart-o"></i></span>
            </div>
          </div>

          <img
            src={thumbnail}
            className="img-fluid rounded thumbnail-image"
          />
        </div>

        <div className="product-detail-container p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="dress-name">{title}</h5>

            <div className="d-flex flex-column mb-2">
              <span className="new-price">{price}</span>
              <small className="old-price text-right">{stock}</small>
            </div>
          </div>

          

          <div className="d-flex justify-content-between align-items-center pt-1">
            <div>
              <i className="fa fa-star-o rating-star"></i>
              <span className="rating-number">{rating}</span>
            </div>

            <span className="buy">BUY +</span>
          </div>
        </div>
      </div>

     
    </div>

  </div>
</div>
  )
}

export default Card
