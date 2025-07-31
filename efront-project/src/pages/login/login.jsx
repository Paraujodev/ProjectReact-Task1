import { useState } from "react";
import "./style.scss"
import Logo from "../../assets/Logotipo.svg"

function Register() {
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();


        setPasswordError("");

        // Limpa todos os campos
        setEmail("");
        setConfirmPassword("");

        console.log("Formulário enviado!");
    };

    return (
        <div className="image-background">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <header>
                            <img src={Logo} alt="" />
                        </header>

                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>E-mail *</span>
                                <div className="password-wrapper">
                                    <i className="fa-solid fa-envelope icon"></i>
                                    <input className="password-wrapper-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </label>

                            <label>
                                <span>Senha *</span>
                                <div className="password-wrapper">
                                    <i className="fa-solid fa-lock icon"></i>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <i
                                        className={`fa-solid ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} toggle-password-icon`}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    ></i>
                                </div>
                                <p className="forget-password">Esqueci a senha</p>
                            </label>
                            {passwordError && (
                                <p className="error-message">{passwordError}</p>
                            )}

                            <button className="button-cadastro" type="submit">Entrar</button>
                        </form>
                        <button className="button-login" type="submit">Ainda não tem conta? <b>Cadastre-se.</b>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
