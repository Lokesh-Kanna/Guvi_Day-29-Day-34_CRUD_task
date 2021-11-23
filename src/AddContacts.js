import { NavBar } from "./NavBar";
import Button from "@mui/material/Button";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

export function AddContacts() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="butn"
        variant="contained"
        onClick={() => navigate("/add-contact")}
      >
        <div className="addbtn">
          <ControlPointIcon />
          Add contact
        </div>
      </Button>
    </div>
  );
}
export function AddContactPage({ setCon }) {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [contactNo, setContactNo] = useState();
  const [mail, setMail] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();
  const [photo, setPhoto] = useState();
  return (
    <div>
      <NavBar />
      <div className="form-div">
        <TextField
          className="standard-basic"
          label="Full Name"
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Phone No."
          variant="filled"
          onChange={(event) => setContactNo(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Mail ID"
          variant="filled"
          onChange={(event) => setMail(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Street"
          variant="filled"
          onChange={(event) => setStreet(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="City"
          variant="filled"
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Country"
          variant="filled"
          onChange={(event) => setCountry(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Zip Code"
          variant="filled"
          onChange={(event) => setZip(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Photo URL"
          variant="filled"
          onChange={(event) => setPhoto(event.target.value)}
        />
        <Button
          className="buttn"
          variant="contained"
          onClick={() => {
            const newCont = {
              name,
              contactNo,
              mail,
              street,
              city,
              country,
              zip,
              photo,
            };
            setCon(newCont);
            navigate("/");
          }}
        >
          <div className="addbtn">Save Contact</div>
        </Button>
      </div>
    </div>
  );
}
