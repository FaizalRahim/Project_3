import { Link } from "react-router-dom";

export default function StockCard () {

    return (
        <Link to={`/stock`} style={{textDecoration: "none"}}>
            <div
                style={{
                    backgroundColor: "#00A0A0",
                    backgroundPosition: "center",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundSize: "cover",
                    height: "30vh",
                    color: "#E5F5F5",
                    fontSize: "40px",
                    fontFamily: 'Montserrat, sans-serif',
                    borderRadius: "15px",
                }}
            >Stock Inventory Management</div>
        </Link>
    )
}