import { Link } from "react-router-dom";
import { Product } from "../../types";
//<span>{rating}</span>
const ProductItem  = ({
    id,
    category,
    image,
    price,
    rating,
    title
} : Product) => (
    <li className="products-item">
        <Link to={`/products/${id}`}>
            <p className="products-item_category">{category}</p>
            <p className="products-item_title">{title}</p>
            <img className="products-item_image" src={image} />
            <span className="products-item_price">${price}</span>
            <span className="products-item_rating">{rating.rate}</span>
        </Link>
    </li>
)

export default ProductItem