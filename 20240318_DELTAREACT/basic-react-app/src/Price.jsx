export default function Price({ oldPrice, newPrice }) {
    let styles = {
        backgroundColor: "#e0c367",
        color: "Black",
        height: "40px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div style={styles}>
            <span style={{ textDecorationLine: "line-through" }}>
                {oldPrice}
            </span>
            &nbsp; &nbsp;
            <span style={{ fontWeight: "bold" }}>{newPrice}</span>
        </div>
    );
}
