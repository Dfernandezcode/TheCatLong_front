import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form">
          <input className="login__input" type="text" placeholder="Usuario*" required />
          <input className="login__input" type="password" placeholder="Contraseña*" required />
          <input className="login__button" type="submit" value="Login" />
          <a className="login__help-pass" href="/">
            He olvidado mi contraseña
          </a>
          <label className="login__sign-up">
            <p className="login__sign-up__text">
              ¿No tienes cuenta?
              <a className="login__sign-up__link" href="/">
                Regístrate
              </a>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
