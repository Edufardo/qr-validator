import { Link, Outlet, useParams } from "react-router-dom";

const Profile = () => {

    const options = ['Profile', 'Andrea', 'Juan', 'Elisa']

    return (
        <div>
            <ul>
                {options.map( option => (
                    <li key={option}><Link to={`${option.toLowerCase()}`}>{option}</Link></li>
                    ))}
                    <Outlet /> 
            </ul>
        </div>
    )

}

export default Profile;