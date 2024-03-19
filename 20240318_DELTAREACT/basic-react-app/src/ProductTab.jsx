import Product from "./Product";
function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div className="ProductTab" style={styles}>
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple pencil (2nd Gen)" idx={1} />
            <Product title="Zebronics Zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={0} />
        </div>
    );
}

export default ProductTab;
