import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
      id: "9",
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
      id: "10",
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
      id: "11",
    },
    {
      name: "Margarett",
      contactNo: "(358) 432-8844",
      street: "Rhianna Meadow",
      city: "Kingshire",
      country: "Avon",
      zip: "72220-8680",
      mail: "Gregoria.Pacocha63@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: "12",
    },
    {
      name: "Candice",
      contactNo: "411-976-0550",
      street: "Zane Drive",
      city: "Corkeryfurt",
      country: "Cambridgeshire",
      zip: "67169",
      mail: "Kraig.Schultz87@hotmail.com",
      photo: "http://placeimg.com/640/480/cats",
      id: "13",
    },
    {
      name: "Abbey",
      contactNo: "(390) 676-9789 x34532",
      street: "Satterfield Causeway",
      city: "Lake Cortney",
      country: "Buckinghamshire",
      zip: "51459",
      mail: "Ike_Gerhold65@yahoo.com",
      photo: "http://placeimg.com/640/480/nature",
      id: "14",
    },
    {
      name: "Gia",
      contactNo: "1-600-439-9697",
      street: "Jonathon Brook",
      city: "North Bertchester",
      country: "Berkshire",
      zip: "66126",
      mail: "Amara30@gmail.com",
      photo: "http://placeimg.com/640/480/business",
      id: "15",
    },
    {
      name: "Wilber",
      contactNo: "905-763-9660 x45942",
      street: "Jeffry Alley",
      city: "East Bennyfurt",
      country: "Cambridgeshire",
      zip: "75149-9661",
      mail: "Maria_Grimes@yahoo.com",
      photo: "http://placeimg.com/640/480/animals",
      id: "16",
    },
    {
      name: "Merl",
      contactNo: "627-369-1611",
      street: "German Trail",
      city: "Cerritos",
      country: "Cambridgeshire",
      zip: "64722",
      mail: "Lavada.Will@gmail.com",
      photo: "http://placeimg.com/640/480/people",
      id: "17",
    },
    {
      name: "Lilly",
      contactNo: "1-818-301-0326 x9305",
      street: "Albert Ranch",
      city: "Lake Forest",
      country: "Borders",
      zip: "72349-3432",
      mail: "Fidel.Breitenberg87@gmail.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "18",
    },
    {
      name: "Camryn",
      contactNo: "1-202-619-1703",
      street: "Hilma Meadow",
      city: "New Zacharybury",
      country: "Buckinghamshire",
      zip: "77032",
      mail: "Kasey_Bashirian98@hotmail.com",
      photo: "http://placeimg.com/640/480/business",
      id: "19",
    },
    {
      name: "Mark",
      contactNo: "770-721-8151",
      street: "Juston Motorway",
      city: "Lake Rosemarie",
      country: "Cambridgeshire",
      zip: "43652-8515",
      mail: "Kenyatta.Mann16@gmail.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: "20",
    },
    {
      name: "Kristy",
      contactNo: "556-480-1076",
      street: "Madie Parks",
      city: "Godfreystad",
      country: "Avon",
      zip: "50723",
      mail: "Deondre.Glover@hotmail.com",
      photo: "http://placeimg.com/640/480/transport",
      id: "21",
    },
    {
      name: "Genevieve",
      contactNo: "1-253-204-7240 x0205",
      street: "Alda Falls",
      city: "Lake Lou",
      country: "Avon",
      zip: "47988-8326",
      mail: "Dewitt.Cormier@gmail.com",
      photo: "http://placeimg.com/640/480/nature",
      id: "22",
    },
    {
      name: "Dalton",
      contactNo: "(355) 226-6771",
      street: "Nia Wall",
      city: "Lake Brandimouth",
      country: "Buckinghamshire",
      zip: "22032",
      mail: "Darian_Kertzmann31@gmail.com",
      photo: "http://placeimg.com/640/480/people",
      id: "23",
    },
    {
      name: "Gene",
      contactNo: "815-703-7829 x9929",
      street: "Tatum Creek",
      city: "Briellehaven",
      country: "Bedfordshire",
      zip: "53028-2964",
      mail: "Leslie.Blick51@yahoo.com",
      photo: "http://placeimg.com/640/480/abstract",
      id: "24",
    },
    {
      name: "Benton",
      contactNo: "499.838.4399 x95111",
      street: "Nash Station",
      city: "North Lessiefurt",
      country: "Avon",
      zip: "76278",
      mail: "Margie.Swaniawski@gmail.com",
      photo: "http://placeimg.com/640/480/nightlife",
      id: "25",
    },
    {
      name: "Nicolette",
      contactNo: "(847) 880-1696 x86659",
      street: "Dallin Greens",
      city: "Apopka",
      country: "Bedfordshire",
      zip: "67101-5081",
      mail: "Mattie_Larkin@hotmail.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "26",
    },
    {
      name: "Allison",
      contactNo: "424-927-1900",
      street: "Jodie Loaf",
      city: "Port Rosalinda",
      country: "Avon",
      zip: "05556",
      mail: "Kennith15@yahoo.com",
      photo: "http://placeimg.com/640/480/food",
      id: "27",
    },
    {
      name: "Ignatius",
      contactNo: "(886) 444-9427 x238",
      street: "Bosco Club",
      city: "Cleveland",
      country: "Cambridgeshire",
      zip: "56097",
      mail: "Wyatt76@gmail.com",
      photo: "http://placeimg.com/640/480/nightlife",
      id: "28",
    },
    {
      name: "Libby",
      contactNo: "(954) 298-2525 x4335",
      street: "Lang Square",
      city: "South Sidney",
      country: "Avon",
      zip: "86460",
      mail: "Sharon99@gmail.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: "29",
    },
    {
      name: "Minerva",
      contactNo: "1-464-427-5293",
      street: "Madilyn Circle",
      city: "Erynmouth",
      country: "Bedfordshire",
      zip: "18292-8670",
      mail: "Mittie_Friesen18@gmail.com",
      photo: "http://placeimg.com/640/480/nightlife",
      id: "30",
    },
    {
      name: "Simeon",
      contactNo: "1-549-887-9028 x527",
      street: "Vernie River",
      city: "Sandy Springs",
      country: "Avon",
      zip: "47658",
      mail: "Destiney_Anderson87@yahoo.com",
      photo: "http://placeimg.com/640/480/people",
      id: "31",
    },
    {
      name: "Jacinthe",
      contactNo: "1-745-659-9098 x438",
      street: "Dach Drive",
      city: "Mohamedton",
      country: "Bedfordshire",
      zip: "62103-6182",
      mail: "Fermin84@hotmail.com",
      photo: "http://placeimg.com/640/480/city",
      id: "32",
    },
    {
      name: "Lily",
      contactNo: "225-361-6565 x86803",
      street: "Jaycee Island",
      city: "South Virgilland",
      country: "Berkshire",
      zip: "00678",
      mail: "Mertie.Emard@hotmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: "33",
    },
    {
      name: "Brain",
      contactNo: "(464) 420-9951 x9952",
      street: "Casper Bypass",
      city: "Shanahanhaven",
      country: "Bedfordshire",
      zip: "80268-9697",
      mail: "Leslie99@yahoo.com",
      photo: "http://placeimg.com/640/480/abstract",
      id: "34",
    },
    {
      name: "Elaina",
      contactNo: "(279) 963-8598 x629",
      street: "Aufderhar Forge",
      city: "Doyleville",
      country: "Avon",
      zip: "24642",
      mail: "Curt.Johnston@hotmail.com",
      photo: "http://placeimg.com/640/480/people",
      id: "35",
    },
    {
      name: "Troy",
      contactNo: "(958) 861-3876 x5746",
      street: "Russ Causeway",
      city: "Peoria",
      country: "Borders",
      zip: "91934-9161",
      mail: "Pascale45@gmail.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "36",
    },
    {
      name: "Meghan",
      contactNo: "762.644.7013",
      street: "Abshire Motorway",
      city: "Eastonport",
      country: "Bedfordshire",
      zip: "31613",
      mail: "Jermaine.Rempel95@yahoo.com",
      photo: "http://placeimg.com/640/480/animals",
      id: "37",
    },
    {
      name: "Destiney",
      contactNo: "287.302.3789 x43911",
      street: "Marks Overpass",
      city: "Lake Katarina",
      country: "Bedfordshire",
      zip: "30527",
      mail: "Anya7@yahoo.com",
      photo: "http://placeimg.com/640/480/food",
      id: "38",
    },
    {
      name: "Lennie",
      contactNo: "827-864-0746",
      street: "Kathleen Park",
      city: "Lemkestad",
      country: "Berkshire",
      zip: "45350",
      mail: "Frances_Veum@gmail.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "39",
    },
    {
      name: "Kira",
      contactNo: "995-869-2131 x57862",
      street: "Jared Avenue",
      city: "New Jerelstad",
      country: "Borders",
      zip: "07497",
      mail: "Jana_Pacocha62@gmail.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "40",
    },
    {
      name: "Sterling",
      contactNo: "(295) 680-9043 x18130",
      street: "Raynor Vista",
      city: "Peoria",
      country: "Buckinghamshire",
      zip: "79808",
      mail: "Vella65@yahoo.com",
      photo: "http://placeimg.com/640/480/business",
      id: "41",
    },
    {
      name: "Mauricio",
      contactNo: "318-359-1015 x955",
      street: "Prohaska Key",
      city: "West Joana",
      country: "Borders",
      zip: "98499",
      mail: "Romaine10@yahoo.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: "42",
    },
    {
      name: "Erik",
      contactNo: "1-948-558-2739 x025",
      street: "Oberbrunner Village",
      city: "East Geovanyport",
      country: "Avon",
      zip: "02261-0789",
      mail: "Brendon10@gmail.com",
      photo: "http://placeimg.com/640/480/cats",
      id: "43",
    },
    {
      name: "Brooke",
      contactNo: "402.662.6486 x148",
      street: "Kayla Lights",
      city: "South Leonoraland",
      country: "Buckinghamshire",
      zip: "87925-8619",
      mail: "Reed_Powlowski54@hotmail.com",
      photo: "http://placeimg.com/640/480/cats",
      id: "44",
    },
    {
      name: "Gabriella",
      contactNo: "1-816-546-9908 x67173",
      street: "Melvin Square",
      city: "Lourdesport",
      country: "Avon",
      zip: "75406-6367",
      mail: "Cydney.Smitham81@hotmail.com",
      photo: "http://placeimg.com/640/480/nightlife",
      id: "45",
    },
    {
      name: "Marquis",
      contactNo: "707-459-7373",
      street: "Welch Light",
      city: "Hahnside",
      country: "Buckinghamshire",
      zip: "27014-8160",
      mail: "Coy.Douglas@yahoo.com",
      photo: "http://placeimg.com/640/480/technics",
      id: "46",
    },
    {
      name: "Darrion",
      contactNo: "883-516-7109 x011",
      street: "Adriel Dale",
      city: "Bowie",
      country: "Avon",
      zip: "02594-8155",
      mail: "Maurine.Wolf86@yahoo.com",
      photo: "http://placeimg.com/640/480/cats",
      id: "47",
    },
    {
      name: "Eudora",
      contactNo: "(275) 568-4066 x62025",
      street: "Dedric Meadows",
      city: "Victoria",
      country: "Borders",
      zip: "18482",
      mail: "Phyllis.Nikolaus81@gmail.com",
      photo: "http://placeimg.com/640/480/food",
      id: "48",
    },
    {
      name: "Maida",
      contactNo: "(822) 355-1847 x46504",
      street: "Noah Land",
      city: "Lulaview",
      country: "Bedfordshire",
      zip: "21286",
      mail: "Johann.Pfannerstill@hotmail.com",
      photo: "http://placeimg.com/640/480/nature",
      id: "49",
    },
    {
      name: "Sandrine",
      contactNo: "759.720.4715 x71595",
      street: "Crooks Roads",
      city: "New Roberta",
      country: "Cambridgeshire",
      zip: "36677-9082",
      mail: "Roma.Olson84@gmail.com",
      photo: "http://placeimg.com/640/480/fashion",
      id: "50",
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home cls={contactList} />} />
      </Routes>
    </div>
  );
}

function Home({ cls }) {
  return (
    <div>
      <NavBar />
      <Distributer cls={cls} />
    </div>
  );
}

function Distributer({ cls }) {
  return (
    <div className="carddisp">
      {cls.map((cl) => {
        return (
          <ContactCard
            name={cl.name}
            num={cl.contactNo}
            street={cl.street}
            city={cl.city}
            country={cl.country}
            zip={cl.zip}
            mail={cl.mail}
            photo={cl.photo}
            id={cl.id}
          />
        );
      })}
    </div>
  );
}

function ContactCard({
  name,
  num,
  street,
  city,
  country,
  zip,
  mail,
  photo,
  id,
}) {
  const address = `${street}, ${city}, ${country}`;
  return (
    <div>
      <div class="card mb-3" style={{ "max-width": "27rem" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img className="img" src={photo} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Ph.no: {num}</p>
              <p class="card-text">Mail Id: {mail}</p>
              <p class="card-text">
                <small class="text-muted">
                  Address: {address} - {zip}
                </small>
              </p>
            </div>
            <div className="card-action">
              <IconButton aria-label="delete" color="primary">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
