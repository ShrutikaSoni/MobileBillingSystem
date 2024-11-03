import './AdminDashboard.css';
import 'boxicons/css/boxicons.min.css';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';


const AdminDashboard = () => {
    const ordersData = [
        { topic: "Total Order", number: "40,876", status: "Up from yesterday", icon: "bx bx-mobile cart" },
        { topic: "Total Sales", number: "10,500", status: "Up from yesterday", icon: "bx bxs-cart-add cart two" },
        { topic: "Total Invoices", number: "1000", status: "Up from yesterday", icon: "bx bx-detail cart three" },
        { topic: "Total Reports", number: "785", status: "Down from yesterday", icon: "bx bxs-report cart four" }
    ];

    const recentSales = [
        { date: "02 Jan 2021", customer: "Alex Doe", sales: "Delivered", payment: "$204.98" },
        { date: "02 Jan 2021", customer: "Roe Parter", sales: "Pending", payment: "$24.55" },
        { date: "02 Jan 2021", customer: "Diana Penty", sales: "Delivered", payment: "$25.88" },
        { date: "02 Jan 2021", customer: "Martin Paw", sales: "Delivered", payment: "$170.66" },
        { date: "02 Jan 2021", customer: "Doe Alex", sales: "Pending", payment: "$56.56" },
        { date: "02 Jan 2021", customer: "Aiana Lexa", sales: "Delivered", payment: "$44.95" },
        { date: "02 Jan 2021", customer: "Rexel Mags", sales: "Delivered", payment: "$67.33" }
    ];

    const topSellingProducts = [
        { name: "Apple", price: "$500", img: "apple.png" },
        { name: "Samsung", price: "$350", img: "samsung.png" },
        { name: "Xiaomi", price: "$300", img: "redmi.png" },
        { name: "Oppo", price: "$200", img: "oppo.png" },
        { name: "OnePlus", price: "$400", img: "oneplus.png" },
        { name: "Realme", price: "$150", img: "realme.png" }
    ];

    return (
        <>
        <Navbar/>
        <Sidebar/>

        <div className="dashboard-container">
        <div className="scrollable-container">
            <div className="home-content">
                <div className="overview-boxes">
                    {ordersData.map((order, index) => (
                        <div className="box" key={index}>
                            <div className="right-side">
                                <div className="box-topic">{order.topic}</div>
                                <div className="number">{order.number}</div>
                                <div className="indicator">
                                    <i className={`bx ${order.status.includes('Up') ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'}`}></i>
                                    <span className="text">{order.status}</span>
                                </div>
                            </div>
                            <i className={order.icon}></i>
                        </div>
                    ))}
                </div>
               
                <div className="sales-boxes">
                    <div className="recent-sales box">
                        
                        <div className="title">Recent Sales</div>
                        <div className="sales-details">
                            <ul className="details">
                                <li className="topic">Date</li>
                                {recentSales.map((sale, index) => (
                                    <li key={index}><a href="#">{sale.date}</a></li>
                                ))}
                            </ul>
                            <ul className="details">
                                <li className="topic">Customer</li>
                                {recentSales.map((sale, index) => (
                                    <li key={index}><a href="#">{sale.customer}</a></li>
                                ))}
                            </ul>
                            <ul className="details">
                                <li className="topic">Sales</li>
                                {recentSales.map((sale, index) => (
                                    <li key={index}><a href="#">{sale.sales}</a></li>
                                ))}
                            </ul>
                            <ul className="details">
                                <li className="topic">Payment</li>
                                {recentSales.map((sale, index) => (
                                    <li key={index}><a href="#">{sale.payment}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="button">
                            <a href="#">See All</a>
                        </div>
                    </div>

                    <div className="top-sales box">
                        <div className="title">Top Selling Products</div>
                        <ul className="top-sales-details">
                            {topSellingProducts.map((product, index) => (
                                <li key={index}>
                                    <a href="#">
                                        <img src={product.img} alt={product.name} />
                                        <span className="product">{product.name}</span>
                                    </a>
                                    <span className="price">{product.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default AdminDashboard;
