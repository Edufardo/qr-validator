import { useState } from "react";
import './home.css'
const Home = () => {

    const url = 'http://localhost:4200/api/card/create'
    let [contact, setContact] = useState({
        name: '',
        lastName: '',
        email: '',
        cellPhone: null
    })
    const handleSubmit = (event: any) => {
        event.preventDefault() 
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                name: "Eduardo"
            })
        }).then(response => response.json).then(data => setContact({
            ...contact
        }))

        console.log(contact)
    }

    const setInfo = (event: any) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="row">
            <form className="col-12" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label>
                        Nombre
                    </label>
                    <input type="text" name="name" onChange={setInfo}/> 
                </div>
                <div className="col-12">
                    <label>
                        Apellido
                    </label>
                    <input type="text" name="lastName" onChange={setInfo}/> 
                </div>
                <div className="col-12">
                    <label>
                        Teléfono
                    </label>
                    <input type="number" name="cellPhone" onChange={setInfo}/> 
                </div>
                <div className="col-12">
                    <label>
                        Correo
                    </label>
                    <input type="email" name="email" onChange={setInfo}/> 
                </div>
                <button type="submit">Generar Qr!</button>
            </form>
        </div>
    )
}

export default Home;
