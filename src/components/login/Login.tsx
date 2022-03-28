import './login.css'
const Login = () => {

    return (
        <div className="login_container">
            <form>
                <div className="form_container">
                    <label className='label'>Email</label>
                    <input type="text" />
                    <label className='label'>Password</label>
                    <input type="password" />
                    <a href="" className='forgot'>He olvidado mi contraseña</a>
                </div>
                <button className='btn-login btn btn-success'> Login </button>
                <a href='register' >Register</a>
            </form>
        </div>
    );
}

export default Login;