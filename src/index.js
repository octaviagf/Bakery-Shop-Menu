import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const menu = [
  {
    name: "Sandwich de jamón y queso",
    price: "$5",
    photoName: "img/sandwich.jpg",
  },
  { name: "Pancakes", price: "$7", photoName: "img/pancakes.jpg" },
  { name: "Huevos y bacon", price: "$10", photoName: "img/baconeggs.jpg" },
  { name: "Americano", price: "$5", photoName: "img/americano.jpg" },
  { name: "Espresso", price: "$7", photoName: "img/espresso.jpg" },
  { name: "Latte", price: "$10", photoName: "img/latte.jpg" },
  {
    name: "Galletas de chispas de chocolate",
    price: "$5",
    photoName: "img/cookies.jpg",
  },
  { name: "Brownies", price: "$7", photoName: "img/brownies.jpg" },
  { name: "Carlota de limón", price: "$10", photoName: "img/carlota.jpg" },
];

function App() {
  return (
    <div>
      <Header />
      <HeaderImg />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>La repostería de Dane</h1>
    </header>
  );
}

function HeaderImg() {
  return (
    <div className="headerimg">
      <img src="img/brownies.jpg" alt="La repostería de Dane" className="img" />
    </div>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2 className="text">Our menu</h2>
      <ul>
        {menu.map((item) => (
          <Items menuObj={item} key={item.name} />
        ))}
      </ul>
    </main>
  );
}

function Items(props) {
  return (
    <li className="item">
      <div>
        <img src={props.menuObj.photoName} alt={props.menuObj.name} />

        <h2>{props.menuObj.name}</h2>
        <p>{props.menuObj.price}</p>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
