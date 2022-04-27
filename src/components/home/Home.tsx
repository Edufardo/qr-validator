import { useState } from "react";
import axios from "axios";
import "./home.css";
var QRCode = require("qrcode");

const Home = () => {
  const url = "http://localhost:4200/api/card/create";

  let [qr, setQr] = useState("");
  let [qrBool, setQrBool] = useState(null);
  let [submit, setSubmit] = useState(null);
  let [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    cellPhone: null,
    company: "",
    address: "",
  });

  let qrCode = null;

  const handleSubmit = (event: any) => {
    console.log(qrBool);
    event.preventDefault();
    axios
      .post(url, contact)
      .then((res) => {
        if (res) {
          qrCode = QRCode.toDataURL(res.data).then(setQr);
          // TODO: Improve verification
          if (
            contact.name !== "" &&
            contact.cellPhone !== null &&
            contact.email !== ""
          ) {
            setQrBool(true);
            setSubmit(true);
          }
          setSubmit(true);
          console.log(JSON.stringify(qr));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(contact);
  };

  const setInfo = (event: any) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="content">
      <div className="cardForm">
        <form className="formInfo" onSubmit={handleSubmit}>
          <div className="formElement col-12">
            <label>Name</label>
            <input type="text" name="name" autoComplete="name" onChange={setInfo} />
          </div>
          <div className="formElement col-12">
            <label>Last Name</label>
            <input type="text" name="lastName" autoComplete="family-name" onChange={setInfo} />
          </div>
          <div className="formElement col-12">
            <label>Phone</label>
            <input type="number" name="cellPhone" onChange={setInfo} />
          </div>
          <div className="formElement col-12">
            <label>Email</label>
            <input type="email" name="email" onChange={setInfo} />
          </div>
          {/* <div className="formElement col-12">
            <label>Company</label>
            <input type="text" name="company" onChange={setInfo} />
          </div>
          <div className="formElement col-12">
            <label>Address</label>
            <input type="text" name="address" onChange={setInfo} />
          </div> */}
          <button className="btn btn-primary" type="submit">
            Generate Qr!
          </button>
        </form>
        {qrBool ? (
          <div className="qr">
            <img src={qr} />
          </div>
        ) : null}
      </div>
      {submit && !qrBool && (
        <div className="alert alert-danger">All fields are required</div>
      )}
    </div>
  );
};

export default Home;
