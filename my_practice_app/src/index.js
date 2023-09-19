import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

const hours = new Date().getHours();
const openHours = 2;
const closeHours = 22;
const isOpen = hours >= openHours && hours <= closeHours;


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}
function Header() {
    return <header className="header">
        <h1>Fast React Pizza Co.</h1>
    </header>
}
function Menu() {
    return <main className="menu">
        <h2>The Menu</h2>
        {pizzaData.length > 0 &&
            <>
                <p>
                    Autheintic Italian cuisine. 6 creative dishes
                    to choose from. All from our stone even, all
                    organic, all deleicious.
                </p>
                <Pizza pizzaData={pizzaData} />
            </>
        }
    </main>

}
function Footer() {
    return <footer className="footer">
        {isOpen && <div className="order">
            <p>{new Date().toLocaleTimeString()} . We 're Open Currentlly!!</p>
            <button className="btn">Order</button>
        </div>}
    </footer>

}

function Pizza(props) {

    return <div className={`pizzas`} >
        {
            pizzaData.length > 0 ? props.pizzaData.map((data, index) => {
                return (
                    <div className={`pizza  ${data.soldOut && "sold-out"}`} key={index}>
                        <img src={data.photoName} alt={data.name} />
                        <h3>{data.name}</h3>
                        <p>{data.ingredients}</p>
                        <span>{data.soldOut ? 'SOLD OUT' : data.price}</span>

                    </div>
                )
            }) : <p>we're working on menu Please come back later:)</p>
        }

    </div >
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode> <App /> </React.StrictMode >);