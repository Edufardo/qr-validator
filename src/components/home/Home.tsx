import { useState } from "react";
import axios from "axios";
import "./home.css";
var QRCode = require('qrcode')


const Home = () => {
  const url = "http://localhost:4200/api/card/create";

  let [ qr, setQr] = useState('')
  let [ qrBool, setQrBool] = useState(false)
  let [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    cellPhone: null,
  });

  let qrCode = null

  const handleSubmit = (event: any) => {
    console.log(qrBool)
    event.preventDefault();
    // fetch(url, {
    //     method: 'post',
    //     mode: 'no-cors',
    //     body: JSON.stringify({
    //         name: "Eduardo"
    //     })
    // }).then(res => res.json()).then(data => console.log(data))
    axios
      .post(url, contact)
      .then((res) => {
        if(res){
          qrCode = QRCode.toDataURL(res.data).then(setQr)
          setQrBool(true)
          console.log(JSON.stringify(qr))
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
    <div className="row">
      <form className="col-12" onSubmit={handleSubmit}>
        <div className="col-12">
          <label>Nombre</label>
          <input type="text" name="name" onChange={setInfo} />
        </div>
        <div className="col-12">
          <label>Apellido</label>
          <input type="text" name="lastName" onChange={setInfo} />
        </div>
        <div className="col-12">
          <label>Teléfono</label>
          <input type="number" name="cellPhone" onChange={setInfo} />
        </div>
        <div className="col-12">
          <label>Correo</label>
          <input type="email" name="email" onChange={setInfo} />
        </div>
        <button type="submit">Generar Qr!</button>
      </form>
      { qrBool ?
       <div>
        <img src={qr}/>
       </div>  : null}
    </div>
  );
};

export default Home;
