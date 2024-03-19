import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for ipad Pro"],
        ["designed for ipad Pro", "intuitive surface"],
        ["wireless", "optical orientation"],
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <h5>{description[idx][0]}</h5>
            <h5>{description[idx][1]}</h5>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
