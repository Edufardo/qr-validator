import { useParams } from "react-router-dom";

const ProfileOption = () => {

    const { profileOption } = useParams()
    return (
        <h1> Has elegido { profileOption } </h1>
    )
}
export default ProfileOption;