import "./App.css";
import profilePic from "./assets/ProfilePictureMain2.png";
import FullName from "./components/FullName";

// Part 2 of Task 17 - Introducing React Elements and Components.

const user = {
  firstName: "Jordan",
  lastName: "Rodger",
  date_of_birth: "30/08/1996",
  address:
    "174 Juniper Avenue, Wheelbarrow Lane, Seaside View, Sussex, SV01 7KN",
  country: "United Kingdom",
  email: "jrodger0001@outlook.com",
  telephone: "07992 226570",
  company: "HyperionDev",
  profile_picture: profilePic, //SHOPPINGLIST to be added
};
// False address, email, and phone number given

let name = <h1 id="welcome">Welcome, {FullName(user)}</h1>;

let dateOfBirth = (
  <p className="items">
    <strong className="title">Date of Birth: </strong>
    {user.date_of_birth}
  </p>
); // Bold title, as with other elements below, content centralised.

let add = (
  <p className="items">
    <strong className="title">Address: </strong>
    {user.address}
  </p>
);

let country = (
  <p className="items">
    <strong className="title">Country: </strong>
    {user.country}
  </p>
);

let email = (
  <p className="items">
    <strong className="title">Email: </strong>
    {user.email}
  </p>
);

let telephone = (
  <p className="items">
    <strong className="title">Telephone: </strong>
    {user.telephone}
  </p>
);

let company = (
  <p className="items">
    <strong className="title">Company: </strong>
    {user.company}
  </p>
);

const shoppingItem = [
  {
    item: "Air Jordans Shoes",
    code: 145656,
    quantity: 1,
    price: 65.99,
  },
  {
    item: "Vegan Cookbook",
    code: 945018,
    quantity: 1,
    price: 19.49,
  },
  {
    item: "Call of Duty 4",
    code: 851292,
    quantity: 1,
    price: 20,
  },
  {
    item: "Black Biro Pens",
    code: 692401,
    quantity: 6,
    price: 0.99,
  },
  {
    item: "Black Cherry Yankee Candle",
    code: 692401,
    quantity: 3,
    price: 15.99,
  },
];

// Accumulator (a), current (c), initial value of 0.
// Takes price and multiplies by quantity of each object in array, and adds all together.
let subTotal = shoppingItem.reduce((a, c) => a + c.price * c.quantity, 0);

// Final sum to 2 D.P.
let roundedTotal = subTotal.toFixed(2);

// let subTotal = shoppingItem.price.reduce((accumulator, currentValue) => {
// return accumulator + currentValue}, 0);

function ShoppingCart() {
  return (
    <div id="shoppingListDiv">
      {shoppingItem.map((shopping) => {
        return (
          <ul id="shoppingUl" key={shopping.item}>
            <p className="items">
              <strong className="title">Product:</strong> {shopping.item}
            </p>
            <p className="items">
              <strong className="title">Code:</strong> {shopping.code}
            </p>
            <p className="items">
              <strong className="title">Quantity:</strong> {shopping.quantity}
            </p>
            <p className="items">
              <strong className="title">Price:</strong> £{shopping.price}
            </p>
            <div className="emptyLine"></div>
          </ul>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="userDivs">
        {name}
        {/* Output- Welcome, Jordan Rodger */}
      </div>
      <p></p> {/* Spacing p */}
      <div id="userDetails">
        <img
          id="pPic"
          src={profilePic}
          height={275}
          width={200}
          style={{ outline: "2px solid black" }}
          alt="Jordan Rodger profile"
        ></img>

        <div
          style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }}
        >
          {" "}
          <h4>User Details</h4>{" "}
        </div>

        <div className="userDivs">
          {dateOfBirth}
          {/* Output- Date of Birth: 30/08/1996 */}
        </div>

        <div className="userDivs">
          {add}
          {/* Output- 174 Juniper Avenue, Wheelbarrow Lane, Seaside View, Sussex, SV01 7KN */}
        </div>

        <div className="userDivs">
          {country}
          {/* Output- Country: United Kingdom */}
        </div>

        <div className="userDivs">
          {email}
          {/* Output- Email: jrodger0001@outlook.com */}
        </div>

        <div className="userDivs">
          {telephone}
          {/* Output- Telephone: 07992 226570 */}
        </div>

        <div className="userDivs">
          {company}
          {/* Output- Company: HyperionDev */}
        </div>
      </div>
      <p></p> {/* Spacing P */}
      <div
        id="shoppingCartTitle"
        style={{ color: "black", fontWeight: "bold", fontStyle: "italic" }}
      >
        {" "}
        <h4>Shopping List</h4>{" "}
      </div>
      {ShoppingCart()}
      {/* Output- Seperate shopping cart items encased in outline box */}
      <div id="subTotDiv">
        <p id="sub-Total">Sub-Total: £{roundedTotal}</p>{" "}
        {/* Output: Sub-Total: £159.39 */}
      </div>
    </div>
  );
}

export default App;
