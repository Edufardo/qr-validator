import { useState } from "react";
import './home.css'
const Home = () => {

    const [contact, setContact] = useState({
        name: '',
        lastName: '',
        email: '',
        cellPhone: null
    })
    const sendContact = () => {
        // e.preventDefault() 
        console.log('Hello!')
    }

    return (
        <div className="row">
            <form className="col-12" onSubmit={() => sendContact()}>
                <div className="col-12">
                    <label>
                        Nombre
                    </label>
                    <input type="text" value={contact.name}/> 
                </div>
                <div className="col-12">
                    <label>
                        Apellido
                    </label>
                    <input type="text" /> 
                </div>
                <div className="col-12">
                    <label>
                        Teléfono
                    </label>
                    <input type="number" /> 
                </div>
                <div className="col-12">
                    <label>
                        Correo
                    </label>
                    <input type="email" /> 
                </div>
                <button type="submit">Generar Qr!</button>
            </form>
        </div>
    )
}

export default Home;
