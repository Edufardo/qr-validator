import { useState } from "react";
import axios from "axios";
import "./home.css";
const Home = () => {
  const url = "http://localhost:4200/api/card/create";
  let [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    cellPhone: null,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    generateQr();
    // fetch(url, {
    //     method: 'post',
    //     mode: 'no-cors',
    //     body: JSON.stringify({
    //         name: "Eduardo"
    //     })
    // }).then(res => res.json()).then(data => console.log(data))
    // axios
    //   .post(url, contact)
    //   .then((res) => console.log(res.data))
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(contact);
  };

  const generateQr = () => {
    let vCard: String =
      "BEGIN:VCARD" +
        "\r\nN:" +
        contact.lastName +
        ";" +
        contact.name +
        ";;;" +
        "\r\nFN: " +
        contact.name +
        "  " +
        contact.lastName +
        contact.cellPhone &&
      +"a" + "\r\nTEL;CELL,VOICE:" + contact.cellPhone + contact.email &&
      +"a" + "\r\nEMAIL;INTERNET,HOME:" + contact.email;
    
    console.log(vCard)
    let a,
      b = contact.lastName,
      c = contact.name,
      g = contact.cellPhone,
      j = contact.email;
    (a = "BEGIN:VCARD"),
      (a += "\r\nN:" + b + ";" + c + ";;;"),
      (a += "\r\nFN: " + c + "  " + b),
      g && (a += "\r\nTEL;CELL,VOICE:" + g),
      j && (a += "\r\nEMAIL;INTERNET,HOME:" + j),
      (a += "\r\nEND:VCARD");
    console.log(
      (a = "BEGIN:VCARD"),
      (a += "\r\nN:" + b + ";" + c + ";;;"),
      (a += "\r\nFN: " + c + "  " + b),
      g && (a += "\r\nTEL;CELL,VOICE:" + g),
      j && (a += "\r\nEMAIL;INTERNET,HOME:" + j),
      (a += "\r\nEND:VCARD")
    );
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
    </div>
  );
};

export default Home;
