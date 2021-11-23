import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Distributer } from "./ContactCards";
import { AddContactPage, AddContacts } from "./AddContacts";

function App() {
  const contactList = [
    {
      name: "Ericka",
      contactNo: "(335) 846-8796",
      street: "Barton Ports",
      city: "North Jaeden",
      country: "Berkshire",
      zip: "67023",
      mail: "Lenny.White88@yahoo.com",
      photo: "http://placeimg.com/640/480/transport",
      id: 0,
    },
    {
      name: "Lewis",
      contactNo: "1-264-371-8422",
      street: "Kuphal Knolls",
      city: "Columbia",
      country: "Avon",
      zip: "97483",
      mail: "Hazle_Runolfsson@hotmail.com",
      photo: "http://placeimg.com/640/480/abstract",
      id: 1,
    },
    {
      name: "Berniece",
      contactNo: "693.604.8772",
      street: "Fannie Point",
      city: "East Hollyside",
      country: "Borders",
      zip: "44695-3587",
      mail: "Johan.Greenfelder68@hotmail.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: 2,
    },
    {
      name: "Rafael",
      contactNo: "(912) 561-5464 x83576",
      street: "Olson Forge",
      city: "Handtown",
      country: "Buckinghamshire",
      zip: "12577-8031",
      mail: "Vada.Gaylord26@yahoo.com",
      photo: "http://placeimg.com/640/480/people",
      id: 3,
    },
    {
      name: "Hudson",
      contactNo: "858.924.7561",
      street: "Brycen Camp",
      city: "North Trinityville",
      country: "Berkshire",
      zip: "66060-0407",
      mail: "Kennith28@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: 4,
    },
    {
      name: "Austyn",
      contactNo: "315.570.7201 x59202",
      street: "Gusikowski Hill",
      city: "Donburgh",
      country: "Avon",
      zip: "35806",
      mail: "Clifford_Grady@gmail.com",
      photo: "http://placeimg.com/640/480/business",
      id: 5,
    },
    {
      name: "Isaias",
      contactNo: "704.441.0352 x6103",
      street: "Daisha Creek",
      city: "Randiville",
      country: "Buckinghamshire",
      zip: "50070-3276",
      mail: "Dee82@yahoo.com",
      photo: "http://placeimg.com/640/480/technics",
      id: 6,
    },
    {
      name: "King",
      contactNo: "795.857.1558 x90869",
      street: "Dickens Roads",
      city: "Wiegandbury",
      country: "Avon",
      zip: "30799-3445",
      mail: "Rita35@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: 7,
    },
    {
      name: "Leo",
      contactNo: "920-280-6571 x477",
      street: "Skiles Fields",
      city: "Port Rosalynberg",
      country: "Borders",
      zip: "20946-1300",
      mail: "Torrey94@gmail.com",
      photo: "http://placeimg.com/640/480/transport",
      id: 8,
    },
    {
      name: "Mackenzie",
      contactNo: "(780) 525-7922 x238",
      street: "VonRueden Forest",
      city: "Kristinatown",
      country: "Berkshire",
      zip: "87116",
      mail: "Susana_Grady@hotmail.com",
      photo: "http://placeimg.com/640/480/people",
      id: 9,
    },
    {
      name: "Pearline",
      contactNo: "1-588-504-3024",
      street: "Rolfson View",
      city: "Wittington",
      country: "Avon",
      zip: "31656-3649",
      mail: "Dennis.Wuckert32@hotmail.com",
      photo: "http://placeimg.com/640/480/cats",
      id: 10,
    },
  ];
  const [contact, setContact] = useState(contactList);

  const setCon = (newContact) => {
    setContact([...contact, newContact]);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home contact={contact} setContact={setContact} />}
        />
        <Route
          path="/add-contact"
          element={<AddContactPage setCon={setCon} />}
        />
      </Routes>
    </div>
  );
}

function Home({ contact, setContact }) {
  return (
    <div>
      <NavBar />
      <AddContacts />
      <Distributer contact={contact} setContact={setContact} />
    </div>
  );
}

export default App;
